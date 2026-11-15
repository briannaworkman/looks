// Turns a look into the colors the app actually draws, for the previews and the
// gallery page. A look's `def` holds seed colors; the app's design system then
// sets each role's lightness, so what is drawn differs a little from the seeds.

import { makeColors } from '../src/make-colors.js'
import { ORIGINALS, PALETTE_CREDITS } from '../src/credits.js'

// design token -> [light stop, dark stop], from the color helper's own table
const STOPS = {
  s0: ['gray-20', 'gray-900'],
  s1: ['gray-10', 'gray-850'],
  s2: ['gray-0', 'gray-830'],
  s3: ['gray-0', 'gray-800'],
  tp: ['gray-900', 'gray-50'],
  ts: ['gray-600', 'gray-200'],
  tm: ['gray-400', 'gray-400'],
  accent: ['role-accent-600', 'role-accent-300'],
  danger: ['role-danger-600', 'role-danger-300'],
  success: ['role-success-600', 'role-success-400'],
  warning: ['role-warning-600', 'role-warning-300'],
  pro: ['role-pro-600', 'role-pro-300'],
  fill: ['role-accent-fill', 'role-accent-fill'],
  on: ['role-accent-on', 'role-accent-on'],
  gitAdd: ['text-git-added', 'text-git-added'],
  gitDel: ['text-git-removed', 'text-git-removed'],
}

/** The drawn colors of one look: surfaces, text steps, roles, the accent button and git colors. */
export function resolveColors(look) {
  const { theme } = makeColors(look.def)
  const tokens = theme.inputs[look.mode]
  const i = look.mode === 'light' ? 0 : 1
  const colors = {}

  for (const [key, pair] of Object.entries(STOPS)) {
    colors[key] = tokens[pair[i]]

    if (!/^#[0-9a-f]{6}$/i.test(colors[key] ?? '')) {
      throw new Error(`${look.id}: could not resolve ${key} (${pair[i]})`)
    }
  }

  return colors
}

/** Everything the gallery page needs to draw one look. */
export function galleryEntry(look) {
  let origin = 'palette'
  let by = PALETTE_CREDITS[look.id]?.[1] ?? ''

  if (look.credit) {
    origin = 'vscode'
    by = look.credit.author
  } else if (ORIGINALS.includes(look.id)) {
    origin = 'original'
    by = 'This gallery'
  }

  return {
    id: look.id,
    name: look.name,
    mode: look.mode,
    origin,
    by,
    palette: look.credit ? null : (PALETTE_CREDITS[look.id]?.[0] ?? null),
    license: look.credit?.license ?? null,
    repo: look.credit?.repo ?? null,
    ext: look.credit?.extension ?? null,
    sky: look.sky,
    glow: look.def.roles.accent,
    c: resolveColors(look),
  }
}
