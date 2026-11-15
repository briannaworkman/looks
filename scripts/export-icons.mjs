// Draws a 512 x 512 icon for every plugin (each look, and the bundle) into
// src/icons/, by screenshotting the export page's icon modes in headless Chrome.
// scripts/build.mjs copies each into its plugin as .claude-plugin/icon.png.
//
//   node scripts/export-icons.mjs
//
// Needs Google Chrome (or set CHROME). Several Chrome processes run at once.

import { execFile } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { promisify } from 'node:util'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { HERO } from '../src/featured.js'
import { LOOKS } from '../src/themes.js'
import { galleryEntry } from './resolve.mjs'

const run = promisify(execFile)
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CANDIDATES = [
  process.env.CHROME,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)
const chrome = CANDIDATES.find(path => existsSync(path))
const PARALLEL = 6

if (!chrome) {
  console.error('No Chrome found. Install Google Chrome, or set CHROME to a Chromium-based browser.')
  process.exit(1)
}
const out = join(ROOT, 'src', 'icons')

mkdirSync(out, { recursive: true })
const scratch = mkdtempSync(join(tmpdir(), 'looks-icons-'))
const pagePath = join(scratch, 'index.html')

writeFileSync(pagePath, readFileSync(join(ROOT, 'src', 'export-template.html'), 'utf8').replace('__DATA__', () => JSON.stringify(LOOKS.map(galleryEntry))))
const PAGE = pathToFileURL(pagePath).href

const jobs = [...LOOKS.map(look => ({ id: look.id, hash: `icon=${look.id}` })), { id: 'wardrobe', hash: `iconb=${HERO.join(',')}` }]
let next = 0
let done = 0

const worker = async n => {
  while (next < jobs.length) {
    const job = jobs[next++]
    const file = join(out, `${job.id}.png`)

    await run(chrome, [
      '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2',
      `--user-data-dir=${join(scratch, `profile-${n}`)}`,
      '--window-size=256,256', '--virtual-time-budget=6000', `--screenshot=${file}`, `${PAGE}#${job.hash}`,
    ])
    done++

    if (done % 10 === 0 || done === jobs.length) {
      console.log(`${done} / ${jobs.length} icons`)
    }
  }
}

await Promise.all(Array.from({ length: PARALLEL }, (_, n) => worker(n)))
rmSync(scratch, { recursive: true, force: true })
const sizes = jobs.map(job => statSync(join(out, `${job.id}.png`)).size)

console.log(`Done: ${jobs.length} icons in src/icons/, ${Math.round(sizes.reduce((a, b) => a + b, 0) / 1024)} KB in all (largest ${Math.round(Math.max(...sizes) / 1024)} KB).`)
