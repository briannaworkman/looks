# look-nightfox

Nightfox: a dark theme for the Claude desktop and mobile apps. It is one look from [briannaworkman/looks](https://github.com/briannaworkman/looks); the [gallery](https://briannaworkman.github.io/looks/) shows all 95.

Uses the Nightfox palette, made by EdenEast.

## What it does

When a session starts it asks the app to apply this look: a set of colors and a soft gradient backdrop. When the app asks for the backdrop, it draws that gradient as a small SVG. Themes only draw in the desktop and mobile apps; in a terminal it does nothing.

## What it reads and sends

It reads nothing. Its colors are part of its code, and it reads no files, environment variables or credentials, and nothing from your conversation.

It sends nothing. It makes no network requests, runs no programs and writes no files.

## The calls and hooks it uses

- `$.theme.set`, once at `session.start`, hands this look's colors to the app on your machine.
- A `ui.render` hook on `Backdrop` draws this look's gradient through `$.ui.resolve`. It answers only for this look's own scene and passes every other plugin's scene through untouched.

## Install

In a terminal session:

```
/plugin install look-nightfox --marketplace briannaworkman/looks
```

In the Claude desktop app, add the marketplace `briannaworkman/looks` from the Plugins list first. The steps are in the [repository's README](https://github.com/briannaworkman/looks#install).

## License

MIT, see the [repository](https://github.com/briannaworkman/looks). Credit for the colors is in [CREDITS.md](https://github.com/briannaworkman/looks/blob/main/CREDITS.md).
