# looks

A gallery of 35 themes for the Claude desktop and mobile apps, made as a Claude Code **mod**. Switch between them with one command, `/look`, and the app remembers your pick.

Each look recolors the whole interface and puts a soft gradient behind the conversation. The app's panels, including the prompt box, are frosted glass over it, so there is no solid strip at the bottom.

## Install

At the prompt of a terminal session:

```
/plugin install looks --marketplace briannaworkman/looks
```

Answer `y` to add the marketplace, then choose a scope. The user scope keeps it for every session.

Or from a shell:

```bash
claude plugin install looks --marketplace briannaworkman/looks
```

In the desktop app, where `/plugin` does not run: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `briannaworkman/looks`, then **Add plugin**.

> Themes draw in the desktop and mobile apps. The terminal and editors draw no theme, so a look has no effect there.

## Use it

```
/look             list every look, with the current one marked
/look nord        switch to Nord
/look next        step to the next look
```

The mod starts on `mocha` and remembers the last look you chose across sessions.

## The looks

### Dark (25)

| Name to type | Theme |
| --- | --- |
| `mocha` | Catppuccin Mocha |
| `nord` | Nord |
| `dracula` | Dracula |
| `tokyo-night` | Tokyo Night |
| `gruvbox` | Gruvbox Dark |
| `rose-pine` | Rosé Pine |
| `everforest` | Everforest |
| `solarized-dark` | Solarized Dark |
| `frappe` | Catppuccin Frappé |
| `macchiato` | Catppuccin Macchiato |
| `one-dark` | One Dark |
| `kanagawa` | Kanagawa |
| `ayu-mirage` | Ayu Mirage |
| `github-dark` | GitHub Dark |
| `night-owl` | Night Owl |
| `synthwave` | Synthwave '84 |
| `monokai` | Monokai |
| `amber-crt` | Amber CRT (original) |
| `tokyo-night-storm` | Tokyo Night Storm |
| `nightfox` | Nightfox |
| `oxocarbon` | Oxocarbon |
| `material-ocean` | Material Ocean |
| `zenburn` | Zenburn |
| `deep-sea` | Deep Sea (original) |
| `mint-chocolate` | Mint Chocolate (original) |

### Light (10)

| Name to type | Theme |
| --- | --- |
| `latte` | Catppuccin Latte |
| `solarized-light` | Solarized Light |
| `github-light` | GitHub Light |
| `gruvbox-light` | Gruvbox Light |
| `rose-pine-dawn` | Rosé Pine Dawn |
| `ayu-light` | Ayu Light |
| `everforest-light` | Everforest Light |
| `nord-snow` | Nord Snow |
| `paper` | Paper Notebook (original) |
| `sakura` | Sakura (original) |

Every look keeps main text at 7:1 contrast or better against its surfaces, and none trips the check that makes the desktop app refuse a theme.

## Add your own

Every look is one entry in [`hooks/themes.js`](hooks/themes.js): an id, a name, a mode, three gradient colors (`sky`, top to bottom) and the colors `makeColors` turns into a full theme. Copy an entry, change the colors, and it shows up in `/look`.

Two things keep a look readable:

- Keep each mode's surfaces close together, a few percent of lightness apart. The darker the page, the less room there is between it and the menus.
- Keep the gradient dark (or light) and low in contrast, since text sits on top of it under frosted panels.

## Credits

Most palettes are adapted from the published color schemes of the same names, and the credit for their colors belongs to their authors. This repository is not affiliated with any of those projects. The five marked "original" are new.

`hooks/make-colors.js` is the color helper from Claude Code's mod authoring kit, included unchanged.

## License

MIT, see [LICENSE](LICENSE). The color helper keeps its own origin as noted above.
