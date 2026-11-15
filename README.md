# looks

A gallery of 35 themes for the Claude desktop and mobile apps, made as Claude Code **mods**. Install them all and switch with one command, or install just the one you like.

Each look recolors the whole interface and puts a soft gradient behind the conversation. The app's panels, including the prompt box, are frosted glass over it, so there is no solid strip at the bottom.

## Install

### Just one look

Every look is its own small mod, named `look-` plus its name from the tables below. At the prompt of a terminal session:

```
/plugin install look-nord --marketplace briannaworkman/looks
```

Answer `y` to add the marketplace, then choose a scope. The user scope keeps it for every session.

Or from a shell:

```bash
claude plugin install look-nord --marketplace briannaworkman/looks
```

In the desktop app, where `/plugin` does not run: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `briannaworkman/looks`, then **Add plugin** and pick the look.

A session shows one theme at a time. If you install two single looks, whichever loads last wins, so install one, or use the bundle below.

### All of them, with a switcher

```
/plugin install looks --marketplace briannaworkman/looks
```

```
/look             list every look, with the current one marked
/look nord        switch to Nord
/look next        step to the next look
```

The bundle starts on `mocha` and remembers the last look you chose across sessions. Don't install it together with single looks: they would set their themes against each other.

> Themes draw in the desktop and mobile apps. The terminal and editors draw no theme, so a look has no effect there.

## The looks

<!-- looks:start -->
### Dark (25)

| `/look` name | Theme | Install just this one |
| --- | --- | --- |
| `mocha` | Catppuccin Mocha | `look-mocha` |
| `nord` | Nord | `look-nord` |
| `dracula` | Dracula | `look-dracula` |
| `tokyo-night` | Tokyo Night | `look-tokyo-night` |
| `gruvbox` | Gruvbox Dark | `look-gruvbox` |
| `rose-pine` | Rosé Pine | `look-rose-pine` |
| `everforest` | Everforest | `look-everforest` |
| `solarized-dark` | Solarized Dark | `look-solarized-dark` |
| `frappe` | Catppuccin Frappé | `look-frappe` |
| `macchiato` | Catppuccin Macchiato | `look-macchiato` |
| `one-dark` | One Dark | `look-one-dark` |
| `kanagawa` | Kanagawa | `look-kanagawa` |
| `ayu-mirage` | Ayu Mirage | `look-ayu-mirage` |
| `github-dark` | GitHub Dark | `look-github-dark` |
| `night-owl` | Night Owl | `look-night-owl` |
| `synthwave` | Synthwave '84 | `look-synthwave` |
| `monokai` | Monokai | `look-monokai` |
| `amber-crt` | Amber CRT (original) | `look-amber-crt` |
| `tokyo-night-storm` | Tokyo Night Storm | `look-tokyo-night-storm` |
| `nightfox` | Nightfox | `look-nightfox` |
| `oxocarbon` | Oxocarbon | `look-oxocarbon` |
| `material-ocean` | Material Ocean | `look-material-ocean` |
| `zenburn` | Zenburn | `look-zenburn` |
| `deep-sea` | Deep Sea (original) | `look-deep-sea` |
| `mint-chocolate` | Mint Chocolate (original) | `look-mint-chocolate` |

### Light (10)

| `/look` name | Theme | Install just this one |
| --- | --- | --- |
| `latte` | Catppuccin Latte | `look-latte` |
| `solarized-light` | Solarized Light | `look-solarized-light` |
| `github-light` | GitHub Light | `look-github-light` |
| `gruvbox-light` | Gruvbox Light | `look-gruvbox-light` |
| `rose-pine-dawn` | Rosé Pine Dawn | `look-rose-pine-dawn` |
| `ayu-light` | Ayu Light | `look-ayu-light` |
| `everforest-light` | Everforest Light | `look-everforest-light` |
| `nord-snow` | Nord Snow | `look-nord-snow` |
| `paper` | Paper Notebook (original) | `look-paper` |
| `sakura` | Sakura (original) | `look-sakura` |
<!-- looks:end -->

Every look keeps main text at 7:1 contrast or better against its surfaces, and none trips the check that makes the desktop app refuse a theme.

## Add your own

Every look is one entry in [`src/themes.js`](src/themes.js): an id, a name, a mode, three gradient colors (`sky`, top to bottom) and the colors `makeColors` turns into a full theme. Copy an entry, change the colors, then build:

```bash
node scripts/build.mjs
```

The build checks each look, writes its mod and the bundle into `plugins/`, and rewrites the marketplace file and the tables above. It refuses to build a look the desktop app would not paint. Everything in `plugins/` is generated, so commit it but edit `src/` instead.

Two things keep a look readable:

- Keep each mode's surfaces close together, a few percent of lightness apart. The darker the page, the less room there is between it and the menus.
- Keep the gradient dark (or light) and low in contrast, since text sits on top of it under frosted panels.

## Credits

Most palettes are adapted from the published color schemes of the same names, and the credit for their colors belongs to their authors. This repository is not affiliated with any of those projects. The five marked "original" are new.

`src/make-colors.js` is the color helper from Claude Code's mod authoring kit, included unchanged.

## License

MIT, see [LICENSE](LICENSE). The color helper keeps its own origin as noted above.
