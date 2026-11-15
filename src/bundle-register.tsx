import type { EngineInterface, Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { LOOKS } from './themes.js'
import type { Look } from './themes.js'

// A gallery of looks for the desktop and mobile apps, switched with /look.
// One mod holds them all because a session has one theme at a time: separate
// mods would each set theirs at start-up and the last would win.

type Api = Pick<EngineInterface, 'theme' | 'ui' | 'store'>

const DEFAULT_LOOK = 'mocha'
const STORE_KEY = 'look'
const SCENE_PREFIX = 'looks-'

const find = (id: string): Look | undefined => LOOKS.find(look => look.id === id)

// The backdrop is a scene, not a still gradient, on purpose. A still ground
// can't take `glass`, so the app paints its prompt area as a solid strip over
// it and the gradient stops at a visible edge. A scene's `glass` has the app
// frost its panels instead, so the gradient shows through them.
const sceneFor = (look: Look): string => {
  const [top, middle, bottom] = look.sky
  const glow = look.def.roles?.accent
  const glowColor = typeof glow === 'string' ? glow : '#ffffff'

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${top}"/>
      <stop offset="0.5" stop-color="${middle}"/>
      <stop offset="1" stop-color="${bottom}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.6">
      <stop offset="0" stop-color="${glowColor}" stop-opacity="0.14"/>
      <stop offset="1" stop-color="${glowColor}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100" height="100" fill="url(#fade)"/>
  <rect width="100" height="100" fill="url(#glow)"/>
</svg>`
}

async function apply($: Api, look: Look, isRemembered: boolean): Promise<string> {
  const { theme, problems } = makeColors(look.def)

  // The one line that would stop Desktop painting this look.
  const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

  if (unpainted !== undefined) {
    $.ui.toast(unpainted)
  }
  const args: ThemeSetArgs = {
    colors: theme,
    backdrop: { scene: SCENE_PREFIX + look.id, glass: { blur: 18, opacity: 0.5 } },
  }
  const set = await $.theme.set(args)

  if (isRemembered) {
    await $.store.set(STORE_KEY, look.id)
  }

  if (!set.isDrawn) {
    $.ui.status(set.reason)

    return `Picked ${look.name}, but nothing draws it here: ${set.reason}`
  }

  return `Switched to ${look.name}.`
}

const listing = (currentId: string): string => {
  const section = (mode: Look['mode'], title: string): string[] => [
    title,
    ...LOOKS.filter(look => look.mode === mode).map(
      look => `  ${look.id.padEnd(16)} ${look.name}${look.id === currentId ? '  <- now' : ''}`,
    ),
  ]

  return [
    'Looks (use /look <name>, or /look next):',
    ...section('dark', 'Dark'),
    ...section('light', 'Light'),
  ].join('\n')
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'look',
      description: 'Switch the app theme: /look <name>, /look next, or /look to list them',
      argumentHint: '[name | next]',
    })
    const saved = await $.store.get(STORE_KEY)
    const look = (typeof saved === 'string' ? find(saved) : undefined) ?? find(DEFAULT_LOOK)

    if (look !== undefined) {
      await apply($, look, false)
    }

    return next(e)
  })

  on('command.run', { command: 'look' }, async ($, e) => {
    const saved = await $.store.get(STORE_KEY)
    const currentId = typeof saved === 'string' && find(saved) !== undefined ? saved : DEFAULT_LOOK
    const wanted = e.args.trim().toLowerCase()

    if (wanted === '' || wanted === 'list') {
      return { text: listing(currentId) }
    }

    if (wanted === 'next') {
      const at = LOOKS.findIndex(look => look.id === currentId)
      const following = LOOKS[(at + 1) % LOOKS.length]

      return { text: await apply($, following, true) }
    }
    const look = find(wanted)

    if (look === undefined) {
      return { text: `No look called "${wanted}".\n${listing(currentId)}` }
    }

    return { text: await apply($, look, true) }
  })

  // Every plugin's hook hears the backdrop, so leave another's scene alone.
  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (!e.props.scene.startsWith(SCENE_PREFIX)) {
      return next(e)
    }
    const look = find(e.props.scene.slice(SCENE_PREFIX.length))

    if (look === undefined || (e.surface !== 'desktop' && e.surface !== 'mobile')) {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)

    return <Svg source={sceneFor(look)} alt={`${look.name}: a soft gradient backdrop`} isInteractive />
  })
}
