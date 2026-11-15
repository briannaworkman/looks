# wardrobe

All 95 looks for the Claude desktop and mobile apps in one plugin, switched with `/look`. From [briannaworkman/looks](https://github.com/briannaworkman/looks); the [gallery](https://briannaworkman.github.io/looks/) shows every look. Credit for every palette and theme is in [CREDITS.md](https://github.com/briannaworkman/looks/blob/main/CREDITS.md).

## What it does

When a session starts it adds a `/look` command and applies the look you chose last (Catppuccin Mocha the first time). `/look` lists the looks, `/look <name>` switches to one, and `/look next` steps to the next. When the app asks for the backdrop, it draws the current look's gradient as a small SVG. Themes only draw in the desktop and mobile apps; in a terminal the command still works but nothing is drawn.

## What it reads and sends

It reads one saved value: the id of the look you chose last, from this plugin's own store on your machine. It reads no files, environment variables or credentials, and nothing from your conversation.

It sends nothing. It makes no network requests and runs no programs. The only thing it writes is that one saved value, in its own store, when you switch looks.

## The calls and hooks it uses

- `$.command.register` adds the `/look` command, and a `command.run` hook answers it with text. It answers only `/look`.
- `$.store.get` and `$.store.set` read and write the one saved value above.
- `$.theme.set` hands the chosen look's colors to the app on your machine.
- A `ui.render` hook on `Backdrop` draws the look's gradient through `$.ui.resolve`. It answers only for this plugin's own scenes and passes every other plugin's scene through untouched.

## Install

In a terminal session:

```
/plugin install wardrobe --marketplace briannaworkman/looks
```

In the Claude desktop app, add the marketplace `briannaworkman/looks` from the Plugins list first. The steps are in the [repository's README](https://github.com/briannaworkman/looks#install).

Don't install it together with a single look (`look-<name>`): a session shows one theme, so they would set it against each other.

## License

MIT, see the [repository](https://github.com/briannaworkman/looks).
