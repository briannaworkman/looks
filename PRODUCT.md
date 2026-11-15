# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML, CSS and JavaScript, with no framework (the user's choice). Deployed to GitHub Pages, served from the repository's `docs/` folder (the user's choice). The page is generated: `scripts/build.mjs` fills `src/gallery-template.html` with data from `scripts/resolve.mjs` (`galleryEntry()`) and writes `docs/index.html`. GitHub Pages is on and the site is live at https://briannaworkman.github.io/looks/.

## Users

People who use the Claude desktop and mobile apps and want to change how they look. They arrive to choose one look: they browse, compare a few, then copy the install command and go back to their terminal or the app's plugin screen. Confirmed as the primary visitor. Theme makers looking for exact colors are a possible secondary audience that was not confirmed.

## Product Purpose

The `looks` project is a collection of 95 themes for the Claude desktop and mobile apps, installed as Claude Code mods. The interactive gallery lets someone see every look before installing it and get the install command for the one they pick. Success is a visitor who finds a look they like and installs it without leaving the page confused about how.

## Positioning

Each preview is drawn from the look's real computed colors, with the gradient backdrop and frosted panels the app draws, as a mock Claude conversation. Neighboring theme galleries (such as vscodethemes.com) show code editors; this shows the thing the visitor will actually be looking at.

## Operating Context

Installing happens in two places: at a terminal prompt (`/plugin install look-<id> --marketplace briannaworkman/looks`, or `claude plugin install ...` from a shell) and in the desktop app (+ next to the prompt box, then Plugins, Add marketplace `briannaworkman/looks`, Add plugin). A session shows one theme at a time. The bundle (`looks`) holds every look with a `/look <id>` switcher; each look is also its own plugin, `look-<id>`.

## Capabilities and Constraints

- 95 looks: 69 dark and 26 light. Sources: 30 use published palettes, 60 are adapted from open-source VS Code themes (each with author, source repository and license), 5 are original.
- Each look has an id, a name, a mode, a source, a backdrop gradient (three colors) and resolved colors: four surfaces, three text steps, five role colors, an accent fill and git colors.
- The gallery needs search, dark and light filtering, source filtering, sorting, and a detail view with the exact colors, the credit, and both install commands.
- Previews are mock-ups built from color data, not screenshots of the app, and must say so. The app picks some colors itself, so a look can differ slightly on screen.
- Themes draw in the desktop and mobile apps only; the terminal and editors draw none.
- Static output, no server. The data is generated from the repository's own `src/` at build time.
- Undecided: whether to keep loading fonts from Google Fonts or to self-host them.

## Brand Commitments

The project and repository are named `looks`, by briannaworkman (`github.com/briannaworkman/looks`), MIT licensed. Credit for palettes and adapted themes is owed to their authors and lives in `CREDITS.md`; the site must not imply affiliation with any palette or theme project. "Claude" refers to the apps the looks theme; the site makes no claim to be an Anthropic product.

## Evidence on Hand

- Look data: `src/themes.js` and `src/imported.js`; resolved colors via `scripts/resolve.mjs`.
- Credits: `CREDITS.md`, generated from `src/credits.js` and each adapted look's `credit`.
- Images: a preview SVG per look in `gallery/previews/`, six featured PNGs in `gallery/featured/`, and a banner at `docs/hero.png`.
- Not available and not to be invented: real screenshots of the app for each look, install counts or usage numbers, ratings, testimonials.

## Product Principles

1. The look comes first: the visitor judges by seeing the look in use, so every preview shows the real colors and backdrop.
2. Choosing should be quick: from landing on a look to copying its install line takes few steps.
3. Be honest about what is shown: previews are renderings, credits are visible, and nothing implies endorsement.
4. Credit is part of the product: where a look comes from is always reachable from that look.
5. Keep it small and self-contained: a static page that regenerates with the looks and needs no upkeep.
