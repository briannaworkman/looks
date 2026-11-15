// Draws a look as a standalone SVG: a mock Claude desktop window in the look's
// own colors, with the gradient backdrop and frosted panels. These are renderings
// built from the look's colors, not captures from the app.
//
// Text is given an explicit width (`textLength`) so the layout holds on any
// system's fonts: a viewer that falls back to a wider face squeezes the glyphs
// instead of spilling out of the bubbles.

const SANS = "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
const MONO = "ui-monospace, 'SF Mono', SFMono-Regular, Menlo, Consolas, 'DejaVu Sans Mono', monospace"

const W = 640
const H = 400
const COL_X = 115 // the conversation column, 64% of the window
const COL_W = 410
const COL_R = COL_X + COL_W

const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch])
const nbsp = s => s.replace(/ /g, ' ')
const width = (text, size, factor = 0.53) => Math.round(text.length * size * factor * 10) / 10

const text = (x, y, content, { size = 12.5, fill, weight = 400, anchor, mono = false, fit = true } = {}) => {
  const len = mono ? '' : fit ? ` textLength="${width(content.replace(/<[^>]+>/g, ''), size, weight >= 600 ? 0.56 : 0.53)}" lengthAdjust="spacingAndGlyphs"` : ''
  const a = anchor ? ` text-anchor="${anchor}"` : ''

  return `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" font-family="${mono ? MONO : SANS}"${a}${len}>${content}</text>`
}

/** The window's shapes, with every id prefixed by `p` so several can share one file. */
export function previewInner(look, c, p) {
  const [top, middle, bottom] = look.sky
  const glow = look.def.roles.accent
  const line = (op = 0.2) => `stroke="${c.tm}" stroke-opacity="${op}" stroke-width="0.8"`

  const code = (y, parts) =>
    `<text x="${COL_X + 14}" y="${y}" font-size="12" font-family="${MONO}" fill="${c.tp}">${parts
      .map(([s, fill]) => (fill ? `<tspan fill="${fill}">${esc(nbsp(s))}</tspan>` : esc(nbsp(s))))
      .join('')}</text>`

  const bubble = 'add a cook time badge to each recipe card'
  const bubbleW = width(bubble, 12.5) + 28
  const tool = [['Read and edited', c.tm, 400], ['app.js', c.ts, 500], ['+12', c.gitAdd, 400], ['−3', c.gitDel, 400]]
  let toolX = COL_X

  const toolRow = tool
    .map(([s, fill, weight]) => {
      const at = toolX

      toolX += width(s, 12, weight >= 500 ? 0.56 : 0.53) + 8

      return text(at, 136, esc(s), { size: 12, fill, weight })
    })
    .join('')

  return `<defs>
  <linearGradient id="${p}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="0.5" stop-color="${middle}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
  <radialGradient id="${p}glow" cx="0.85" cy="0.15" r="0.6"><stop offset="0" stop-color="${glow}" stop-opacity="0.16"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient>
  <clipPath id="${p}clip"><rect width="${W}" height="${H}" rx="14"/></clipPath>
</defs>
<g clip-path="url(#${p}clip)">
  <rect width="${W}" height="${H}" fill="url(#${p}sky)"/>
  <rect width="${W}" height="${H}" fill="url(#${p}glow)"/>
  <rect width="${W}" height="36" fill="${c.s0}" fill-opacity="0.45"/>
  <path d="M0 36.4H${W}" ${line(0.18)}/>
  <circle cx="18" cy="18" r="4" fill="${c.tm}" fill-opacity="0.45"/><circle cx="32" cy="18" r="4" fill="${c.tm}" fill-opacity="0.45"/><circle cx="46" cy="18" r="4" fill="${c.tm}" fill-opacity="0.45"/>
  ${text(66, 22, 'Cook time badges', { size: 11.5, fill: c.ts })}
  <rect x="570" y="12.5" width="10" height="10" rx="2.5" fill="none" ${line(0.55)}/><rect x="588" y="12.5" width="10" height="10" rx="2.5" fill="none" ${line(0.55)}/><rect x="606" y="12.5" width="10" height="10" rx="2.5" fill="none" ${line(0.55)}/>
  <rect x="${COL_R - bubbleW}" y="56" width="${bubbleW}" height="31" rx="14" fill="${c.s2}" fill-opacity="0.72" ${line()}/>
  ${text(COL_R - bubbleW + 14, 76, esc(bubble), { fill: c.tp })}
  ${text(COL_X, 112, 'Nice idea. Let me look at the recipe card.', { fill: c.tp })}
  ${toolRow}
  <rect x="${COL_X}" y="150" width="${COL_W}" height="90" rx="11" fill="${c.s1}" fill-opacity="0.74" ${line()}/>
  ${code(175, [['function', c.accent], [' '], ['badge', c.danger], ['('], ['recipe', c.warning], [') {']])}
  ${code(193, [['  '], ['const', c.accent], [' '], ['mins', c.warning], [' = '], ['20', c.pro], [';']])}
  ${code(211, [['  '], ['return', c.accent], [' '], ['`${mins} min`', c.success], [';']])}
  ${code(229, [['}']])}
  ${text(COL_X, 264, `Done! Every recipe card now shows a <tspan font-weight="600">cook time badge</tspan>.`, { fill: c.tp })}
  <rect x="${COL_X}" y="300" width="${COL_W}" height="42" rx="21" fill="${c.s1}" fill-opacity="0.66" ${line(0.26)}/>
  ${text(COL_X + 18, 327, '+', { size: 19, fill: c.tm, fit: false })}
  ${text(COL_X + 44, 326, 'Type / for commands', { fill: c.tm })}
  <circle cx="${COL_R - 22}" cy="321" r="12" fill="${c.fill}"/>
  <path d="M${COL_R - 22} 327V315M${COL_R - 27} 320l5 -5 5 5" fill="none" stroke="${c.on}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
  ${text(COL_R, 373, nbsp('Sonnet 5.5   High   Auto'), { size: 10.5, fill: c.tm, anchor: 'end' })}
</g>`
}

/** One look as a standalone SVG file. */
export function previewSvg(look, c) {
  const label = `${look.name}: a ${look.mode} look, shown as a mock conversation in its colors`

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="${esc(label)}">
<title>${esc(look.name)}</title>
${previewInner(look, c, 'p')}
</svg>
`
}

/** A wide banner: three looks at slight angles over a soft dark ground. */
export function heroSvg(trio) {
  const [left, center, right] = trio
  const place = ({ look, c }, i, x, y, w, rotate) =>
    `<g transform="rotate(${rotate} ${x + w / 2} ${y + (w * H) / W / 2})" filter="url(#shadow)"><svg x="${x}" y="${y}" width="${w}" height="${(w * H) / W}" viewBox="0 0 ${W} ${H}">${previewInner(look, c, `h${i}`)}</svg></g>`

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 440" width="1280" height="440" role="img" aria-label="Three looks from the gallery: ${esc(left.look.name)}, ${esc(center.look.name)} and ${esc(right.look.name)}">
<defs>
  <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14161d"/><stop offset="1" stop-color="#0c0d12"/></linearGradient>
  <radialGradient id="heroGlow" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#8b7cff" stop-opacity="0.22"/><stop offset="1" stop-color="#8b7cff" stop-opacity="0"/></radialGradient>
  <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#000" flood-opacity="0.45"/></filter>
</defs>
<rect width="1280" height="440" rx="20" fill="url(#heroBg)"/>
<rect width="1280" height="440" rx="20" fill="url(#heroGlow)"/>
${place(left, 0, 70, 96, 440, -5)}
${place(right, 2, 770, 96, 440, 5)}
${place(center, 1, 386, 52, 508, 0)}
</svg>
`
}
