// Draws the README's banner and the featured previews as high-resolution PNGs,
// by opening docs/index.html in headless Chrome and screenshotting its export
// mode at 2x. Run it after `node scripts/build.mjs`.
//
//   node scripts/export-png.mjs
//
// Needs Google Chrome (or set CHROME to a Chromium-based browser's executable).
// A PNG looks the same in every browser, which an SVG with filters and rotated
// groups does not, and the page's own CSS gives real frosted-glass blur.

import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { FEATURED, HERO } from '../src/featured.js'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PAGE = pathToFileURL(join(ROOT, 'docs', 'index.html')).href
const CANDIDATES = [
  process.env.CHROME,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)
const chrome = CANDIDATES.find(path => existsSync(path))

if (!chrome) {
  console.error('No Chrome found. Install Google Chrome, or set CHROME to a Chromium-based browser.')
  process.exit(1)
}

if (!existsSync(join(ROOT, 'docs', 'index.html'))) {
  console.error('docs/index.html is missing. Run `node scripts/build.mjs` first.')
  process.exit(1)
}
mkdirSync(join(ROOT, 'gallery', 'featured'), { recursive: true })

const shoot = (hash, width, height, out) => {
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=2',
      `--window-size=${width},${height}`,
      '--default-background-color=00000000',
      '--virtual-time-budget=8000',
      `--screenshot=${out}`,
      `${PAGE}#${hash}`,
    ],
    { stdio: 'ignore' },
  )
  console.log(`${out.replace(`${ROOT}/`, '')}  ${Math.round(statSync(out).size / 1024)} KB`)
}

shoot(`hero=${HERO.join(',')}`, 1280, 440, join(ROOT, 'docs', 'hero.png'))

for (const id of FEATURED) {
  shoot(`render=${id}`, 640, 400, join(ROOT, 'gallery', 'featured', `${id}.png`))
}
