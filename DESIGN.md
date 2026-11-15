---
name: Looks
description: A table of 95 Claude app themes, each a white instant-film print with a marker-hand name, drawn in its own colors and opened onto a black film mat.
colors:
  table: "#d7d8d3"
  table-lit: "#e6e7e2"
  paper: "#eeede8"
  polaroid: "#fcfbf7"
  marker: "#1d2030"
  ink: "#141414"
  ink-secondary: "#50535a"
  rule: "#b9bab4"
  film: "#0f0f10"
  film-raised: "#1b1b1d"
  on-film: "#e9e8e3"
  on-film-dim: "#a9a9a6"
  amber-hex-print: "#eaa94a"
  grease-pencil: "#d6362b"
typography:
  wordmark:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(64px, 9vw, 96px)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch 66%"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 4vw, 48px)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.01em"
    fontVariation: "font-stretch 70%"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  control:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
  print-name:
    fontFamily: "Covered By Your Grace, Bradley Hand, Segoe Print, Comic Sans MS, cursive"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.05
  print-number:
    fontFamily: "Overpass Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    fontFeature: "tnum"
  hex-caption:
    fontFamily: "Overpass Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.2
  code:
    fontFamily: "Overpass Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: "0px"
  hairline: "2px"
  pill: "11px"
  round: "50%"
spacing:
  xs: "6px"
  sm: "12px"
  md: "18px"
  lg: "26px"
  xl: "40px"
components:
  polaroid-print:
    backgroundColor: "{colors.polaroid}"
    textColor: "{colors.marker}"
    rounded: "{rounded.none}"
    padding: "10px 10px 11px"
  print-name-line:
    textColor: "{colors.marker}"
    typography: "{typography.print-name}"
  print-number:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.print-number}"
  print-mat:
    backgroundColor: "{colors.film-raised}"
    textColor: "{colors.on-film}"
    padding: "26px 32px"
  preview-border:
    backgroundColor: "{colors.paper}"
    padding: "10px"
  filter-tab:
    textColor: "{colors.ink-secondary}"
    typography: "{typography.control}"
    padding: "6px 0"
  filter-tab-active:
    textColor: "{colors.ink}"
  field-underline:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "40px"
  button-copy-primary:
    backgroundColor: "{colors.on-film}"
    textColor: "{colors.film}"
    rounded: "{rounded.none}"
    height: "40px"
    padding: "0 14px"
  button-copy-primary-hover:
    backgroundColor: "#ffffff"
  button-ghost-on-film:
    textColor: "{colors.on-film}"
    rounded: "{rounded.none}"
    height: "40px"
    padding: "0 14px"
  command-line:
    backgroundColor: "{colors.film}"
    textColor: "{colors.on-film}"
    typography: "{typography.code}"
    padding: "10px 11px"
  circle-toggle:
    backgroundColor: "{colors.grease-pencil}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    width: "24px"
    height: "22px"
---

# Design System: Looks

## Overview

**Creative North Star: "The Print Table"**

The page is a light table covered in instant-film prints. There is no panel: the header and ninety-five white polaroids sit directly on a softly lit grey surface. Each print is a thick-bottomed card with a thin-bordered picture of a look drawn in its own colors, a name written by hand in marker, a small mono print number, a circle toggle, and five dots in that look's own role colors. Prints are tilted a degree or so, each by a fixed amount, and straighten and lift when you reach for one. Open one and a black film mat tips in beneath its row, hanging from a small notch under the print: a paper-bordered large preview, a step-wedge of color chips, the credit line, and two install commands. A round loupe follows the pointer to magnify any print.

The chrome is achromatic on purpose. Table grey, polaroid white, ink, film black and one grease-pencil red are neutrals and a single marking tool; every other hue on screen comes from the looks, which are data. Archivo pulled to a narrow width, heavy and tight, carries the wordmark and the opened print's title. The marker hand is the voice of the prints themselves and appears only as a print's name. Overpass Mono is for anything counted, hexed or copyable. Controls are underlines, not boxes, so the only filled shapes on the table are the prints.

The system rejects decorative color, panel and card chrome around the grid, and friendly rounding. Depth is the print lifting off the table and the preview border lifting off the black mat, nothing more.

**Key Characteristics:**
- White polaroids straight on a light table; a black film mat for the opened print, tied to its print by a notch.
- Achromatic chrome; one red for circles, focus and the active filter.
- Narrow heavy Archivo for the wordmark and print title, marker hand for print names, Overpass Mono for numbers, hex and commands.
- Underline controls; square corners everywhere except the circle toggle, the role dots and the loupe.
- Mock Claude window as a component whose colors are all inputs.

## Colors

A restrained neutral set with one marking red and one small film-only amber. No color in the chrome comes from a look.

### Primary
- **Grease-Pencil Red** (#d6362b): the only saturated color in the chrome. Used for the hand-drawn circle around a kept print, the active-filter underline (3px), link underlines, text selection, caret, the filled circle toggle, the pressed border of the Circle it button, and the 4px focus ring.

### Secondary
- **Hex-Print Amber** (#eaa94a): on the black mat only, for the hex captions under the step-wedge chips and the underline of the credit link. It no longer appears on the grid.

### Neutral
- **Light Table** (#d7d8d3): page background, lifted to **Lit Table** (#e6e7e2) by a radial gradient at the top center; also the scrollbar track and theme color.
- **Polaroid White** (#fcfbf7): the print card.
- **Proof Paper** (#eeede8): the border around the large preview on the mat.
- **Marker Ink** (#1d2030): the handwritten print names; a blue-black, never pure black.
- **Grease-Pencil Ink** (#141414): body text, wordmark, field underlines, the footer rule.
- **Graphite** (#50535a): secondary text, placeholders, inactive filter tabs, print numbers.
- **Pencil Rule** (#b9bab4): defined as a token but not used in the build.
- **Black Film** (#0f0f10): command wells and loupe rim.
- **Raised Film** (#1b1b1d): the mat and the notch beneath the open print.
- **Light-On-Film** (#e9e8e3) and **Dim-On-Film** (#a9a9a6): text on the mat; dim for labels and captions, full for the title, credit and commands.

### Named Rules
**The Achromatic Chrome Rule.** The interface owns neutrals and one red. Any other hue on screen is a look's own color and must come from the data, never from the interface. The five dots on a print and every chip are data.

**The One Red Rule.** Grease-pencil red marks human attention: circles, selection, focus, the active filter. It is never a button fill or a decoration.

**The Amber Stays On The Mat Rule.** Amber is reserved for hex captions and the credit underline on the black mat. It does not appear on the table or on a print.

## Typography

**Display Font:** Archivo (variable, with its width axis; falls back to Helvetica Neue, Arial)
**Body Font:** Archivo at normal width
**Hand Font:** Covered By Your Grace (falls back to Bradley Hand, Segoe Print, Comic Sans MS, cursive)
**Label/Mono Font:** Overpass Mono (falls back to ui-monospace, SF Mono, Menlo, Consolas)

**Character:** A stamped, narrow, heavy grotesque for the title of the page and of an opened print, against a ballpoint-and-marker hand for the names scribbled on each polaroid, and a typewriter-clear mono for anything counted or copyable.

### Hierarchy
- **Wordmark** (800, clamp(64px, 9vw, 96px), 0.86, width 66%, -0.02em): the single word LOOKS. 58px on phones.
- **Headline** (800, clamp(34px, 4vw, 48px), 0.95, width 70%, -0.01em): the look's name on the open print.
- **Body** (400, 15px, 1.5): page base. Lede runs 16px, capped at 56ch with pretty wrapping; credit runs 14.5px at 52ch.
- **Control** (600, 15px): filter tabs and the Circled toggle; selects at 500.
- **Print name** (hand, 400, 21px, 1.05, marker ink): the look's name on its polaroid, clamped to two lines with a 2.1em minimum height so footers align. 17px on phones.
- **Print number** (Overpass Mono 600, 12px, tabular figures, graphite): two-digit number in the print footer. The roll line is 12px regular mono in graphite; the open print's "Print NN, mode, source" line is 13px mono, dim.
- **Hex caption** (Overpass Mono 500, 11px, uppercase, amber): under each chip.
- **Code** (Overpass Mono 400, 12.5px, 1.4): install commands, wrapped, select-all on click.

### Named Rules
**The Width Axis Rule.** Heavy titles take their hierarchy from Archivo's width and weight: narrow and 800. Do not add another display family.

**The Hand Is For Names Rule.** The marker hand writes a print's name and nothing else. Controls, headings, labels and body text never use it.

**The Counted Things Are Mono Rule.** Anything numbered, hexed or copyable is Overpass Mono with tabular figures.

## Layout

A single centered column (max 1480px, inner padding clamp(2px, 2vw, 24px)) directly on the table, with 26px of table above and 14px minimum at the sides. The header is a two-column grid (wordmark, roll line and lede on the left; controls on the right, bottom-aligned) collapsing to one column at 1040px. Search takes a full row, then tabs, selects and the circled toggle wrap in a flex row (12px by 26px gap).

Prints flow in a CSS grid whose column count is a variable: 5 columns, 4 at 1180px, 3 at 860px, 2 at 540px. Gaps are 34px between rows and 26px between columns (26px and 16px on phones), loose enough for tilt and lift. Opening a print injects the mat as a full-width grid row directly after the last print of that row, pulled up 18px so it meets the notch, so it re-seats on resize and filtering. The mat is two columns (1.5fr preview, 1fr details, 28px by 40px gap), stacking to one at 1100px with the preview capped at 700px. Print padding is 10px (8px on phones); the caption block sits 10px under the picture and the footer 7px under the name.

Spacing rhythm is small and practical (4, 6, 8, 12, 18, 26, 34, 40px) with no strict base. Arrow keys move a roving focus across the grid by column count.

## Elevation & Depth

Depth is physical and sparse. Each print rests on the table with a two-layer contact shadow: a 1px tight edge and a soft 9px/20px spread, both in warm brown-black. On hover, focus within, or open it straightens to zero tilt, rises 4px and the spread deepens to 16px/30px. The preview inside the open mat lifts off the black with one heavy shadow. The loupe carries a film-black rim, a translucent white outer ring and a drop shadow. Tabs, fields, chips, buttons and the mat itself are flat. The notch (24 by 21px triangle in raised film) hangs under the open print to connect it to the mat.

### Shadow Vocabulary
- **Print at rest** (`box-shadow: 0 1px 1px rgba(30,28,22,.18), 0 9px 20px rgba(30,28,22,.16)`): the polaroid on the table.
- **Print lifted** (`box-shadow: 0 1px 1px rgba(30,28,22,.18), 0 16px 30px rgba(30,28,22,.2)`): hover, focus within, open.
- **Preview on mat** (`box-shadow: 0 10px 28px rgba(0,0,0,.45)`): the bordered large preview.
- **Loupe** (`box-shadow: 0 0 0 5px film, 0 0 0 6px rgba(255,255,255,.5), 0 14px 34px rgba(0,0,0,.4)`): the magnifier's rim and lift.

### Named Rules
**The Print On Table Rule.** Only prints, the preview on the mat, and the loupe float. Everything else is flat. Shadows are soft and offset-down, never hard-edged; a print's tilt always resolves to flat when it is touched, focused or open.

## Shapes

Square and printed. Prints, the mat, command wells, buttons and field underlines have zero corner radius. Each print is tilted by a deterministic angle derived from its number, in steps of 0.35 degrees up to 1.4 degrees either way. The picture carries a 1px inset border at 12% black. The role dots are 16px circles (13px on phones) with a 1px inset 20% black ring. The circle toggle is an 11px-radius pill and the loupe is a true circle. The grease-pencil circle is a hand-drawn closed ellipse path, 114% by 118% of the print, stroked 1.5 with round caps. Focus is a 2px white outline plus a 4px red halo with 2px rounding. Fields are bottom-border only (2px ink); select arrows are an inline chevron.

## Components

### Polaroid Print
A white card (#fcfbf7) in a flex column: 10px padding, a button that holds the picture with its inset hairline border, the handwritten name beneath it, then a footer row pinned to the bottom. Footer, left to right: the mono print number, the circle toggle, and, right aligned, five dots in the look's own accent, danger, success, warning and pro colors. The picture is zoom-in on fine pointers and the print is tilted by its own small deterministic angle. It straightens, lifts 4px and rises above its neighbors on hover, focus within and when open; open also hangs the notch under it.

### Circle Toggle and Circled Filter
An outlined ring icon in graphite in each print footer, with an enlarged hit area. On: red filled 11px pill with a white ring, and the hand-drawn circle around the print draws itself in 0.55s (stroke-dashoffset, ease-out-expo) unless reduced motion is set. The header's Circled tab counts them in mono and shows the red underline when active. Circles persist in the viewer's browser only.

### Filter Tabs and Selects
Text-only controls, 15px 600. Inactive in graphite; hover or active in ink. Active is a 3px red underline offset 6px, not a fill. Selects are borderless with a 2px ink underline and chevron. Search is a full-width underline field with a leading magnifier and a 40px height (36px on phones).

### Open Print (the mat)
A raised-film band spanning the grid. Left: the large preview in a 10px paper border. Right: the look name as headline, a mono "Print NN, mode, source" line in dim, the credit sentence (amber link underline), the step-wedge, two command rows, then actions.
- **Step-wedge:** three labeled groups (Surfaces 4, Text 3, Roles 5) of 54px-wide, 38px-tall chips with an inset white hairline, amber uppercase hex caption beneath (white on hover), click to copy.
- **Command row:** a film-black well in mono, select-all on click, with a copy button. The primary copy is a light-on-film fill with film text and goes pure white on hover; secondary buttons are 1px outlines (#5a5a5f), border lightening on hover. Pressed state borders red.
- **Actions:** Circle it, Previous, Next, Close, 40px tall, margin-top auto.

### Loupe
A 208px circle that follows a fine pointer over a print and shows the same preview at 2.7x. Hidden on touch, on scroll, and when the pointer leaves the prints.

### Mock Claude Window (content component, colors are inputs)
A 3:2 container-query box drawn entirely in cqw units so it scales from a print to the mat. Its colors are not part of this system: each look supplies a three-stop sky gradient and a glow, four surfaces, three text steps, five role colors, an accent fill and on-color, and git add/remove colors as CSS custom properties on the element. Structure: title bar with three dots and a title, a user bubble, assistant lines, a tool line with +/- counts, a code block, a composer with a send button, and a footer of model text. Panels are frosted (color-mix translucency with a blur) and carry an inset hairline. In the print size the window uses a flat variant: larger type, a simplified bar, no frosting. It is decorative and hidden from assistive tech.

### Footer
A 2px ink rule, then a graphite disclosure that previews are renderings rather than app captures, and a nav of two bold links.

## Do's and Don'ts

### Do:
- **Do** keep the chrome to table greys (#d7d8d3 / #e6e7e2), polaroid white (#fcfbf7), ink (#141414), marker ink (#1d2030), film (#0f0f10 / #1b1b1d) and one red (#d6362b).
- **Do** let every other color come from a look's own data: the picture, the five role dots and the chips.
- **Do** mark selection, focus and the active filter in grease-pencil red; keep the 2px white outline plus 4px red halo for focus on both table and mat.
- **Do** write print names in the marker hand and set numbers, hex and commands in Overpass Mono with tabular figures; keep amber for hex captions and the credit underline on the mat.
- **Do** give every print a fixed tilt of at most 1.4 degrees and straighten it on hover, focus and open.
- **Do** keep controls as underlines and text, with square corners on structural elements.
- **Do** honor reduced motion: the circle draw animation and all transitions switch off.
- **Do** say in the footer that previews are renderings, not screenshots.

### Don't:
- **Don't** introduce a hue in the chrome that is not grease-pencil red; amber stays on the mat.
- **Don't** fill buttons or tabs with the red; it marks, it does not decorate.
- **Don't** put a panel, card or paper sheet behind the grid; prints sit directly on the table.
- **Don't** use hard offset shadows or card borders; depth is the print's soft contact shadow and the preview on the mat.
- **Don't** round prints, the mat, command wells or buttons.
- **Don't** use the marker hand for anything but a print's name, and don't add another display family.
- **Don't** rely on hover for anything: tabs, copy and circle all work by tap and keyboard, and the loupe is an enhancement for fine pointers only.
