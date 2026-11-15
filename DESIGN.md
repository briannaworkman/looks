---
name: Looks
description: A proof sheet of 95 Claude app themes, shown as black film strips on a light table, each frame drawn in its own colors.
colors:
  table: "#d7d8d3"
  table-lit: "#e6e7e2"
  paper: "#eeede8"
  ink: "#141414"
  ink-secondary: "#50535a"
  rule: "#b9bab4"
  film: "#0f0f10"
  film-raised: "#1b1b1d"
  on-film: "#e9e8e3"
  on-film-dim: "#a9a9a6"
  amber-edge-print: "#eaa94a"
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
  frame-label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.07em"
    fontVariation: "font-stretch 78%"
  edge-print:
    fontFamily: "Overpass Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
    fontFeature: "tnum"
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
  lg: "28px"
  xl: "40px"
components:
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "34px 40px 36px"
  film-strip-frame:
    backgroundColor: "{colors.film}"
    textColor: "{colors.on-film-dim}"
    padding: "15px 6px 0"
  frame-number:
    textColor: "{colors.amber-edge-print}"
    typography: "{typography.edge-print}"
  print-band:
    backgroundColor: "{colors.film-raised}"
    textColor: "{colors.on-film}"
    padding: "26px 32px"
  print-mat:
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
    size: "24px"
---

# Design System: Looks

## Overview

**Creative North Star: "The Proof Sheet"**

The page is a contact sheet laid on a light table. A pale paper sheet sits on a slightly darker, softly lit grey table; on the sheet, ninety-five frames run in black film strips with sprocket holes, numbered in amber edge print like a lab marking negatives. Open a frame and a print tips in under its strip: a black band holding a paper-matted preview, a step-wedge of color chips, the credit line, and two install commands. A round loupe follows the pointer to magnify any frame. Everything is physical, photographic, and a little clinical.

The chrome is achromatic on purpose. Paper, ink, film, and a single amber are neutrals and instrument marks; every hue that is not the one grease-pencil red comes from the looks themselves, which are data. The wordmark and print titles use Archivo pulled to a narrow width, set tight and heavy like a stamped film-stock label. Mono is reserved for edge print, frame numbers, hex values, and commands. Controls are underlines, not boxes, so the only filled shapes on the sheet are the frames.

The system rejects decorative color, card chrome, and rounded friendly UI. Depth is the sheet floating above the table and the print mat floating above the film, nothing more.

**Key Characteristics:**
- Light paper sheet on a light table; black film strips with sprocket-hole edges.
- Achromatic chrome; amber for edge print, one red for pencil marks, focus, and active state.
- Condensed, heavy Archivo for names; Overpass Mono for numbers, hex, and commands.
- Underline controls, square corners on everything except the circle toggle and the loupe.
- Mock Claude window as a component whose colors are all inputs.

## Colors

A restrained neutral set with two instrument accents. No color in the chrome comes from a look.

### Primary
- **Grease-Pencil Red** (#d6362b): the only saturated color in the chrome. Used for the hand-drawn circle around a kept frame, the active-filter underline (3px), link underlines, text selection, caret, the filled circle toggle, the pressed state of the Circle button border, and the 4px focus ring.

### Secondary
- **Edge-Print Amber** (#eaa94a): frame numbers, hex captions under the step-wedge chips, and the credit-link underline on the print band. Appears only on film, never on paper.

### Neutral
- **Light Table** (#d7d8d3): page background, with a soft radial lift to **Lit Table** (#e6e7e2) at the top center; also the scrollbar track and theme color.
- **Proof Paper** (#eeede8): the sheet, the print mat, and the sprocket-hole fill.
- **Grease-Pencil Ink** (#141414): body text, wordmark, field underlines, the footer rule.
- **Graphite** (#50535a): secondary text, placeholders, inactive filter tabs.
- **Pencil Rule** (#b9bab4): a quiet divider grey. Defined but barely used in the build.
- **Black Film** (#0f0f10): strips, command wells, loupe rim.
- **Raised Film** (#1b1b1d): the print band and the tab that points up at the open frame.
- **Light-On-Film** (#e9e8e3) and **Dim-On-Film** (#a9a9a6): text on film; dim for labels and captions, full for names on hover or open, titles, and commands.

### Named Rules
**The Achromatic Chrome Rule.** The interface owns neutrals, amber, and one red. Any other hue on screen is a look's own color and must come from the data, never from the interface.

**The One Red Rule.** Grease-pencil red marks human attention: circles, selection, focus, the active filter. It is never a button fill or a decoration.

**The Amber Stays On Film Rule.** Amber is edge print. It appears only on black film surfaces, and only for numbers and hex captions.

## Typography

**Display Font:** Archivo (variable, with its width axis; falls back to Helvetica Neue, Arial)
**Body Font:** Archivo at normal width
**Label/Mono Font:** Overpass Mono (falls back to ui-monospace, SF Mono, Menlo, Consolas)

**Character:** A stamped, narrow, heavy grotesque for names, against a typewriter-clear mono for anything counted or copyable. The width axis does the work a second display face would do.

### Hierarchy
- **Wordmark** (800, clamp(64px, 9vw, 96px), 0.86, width 66%, -0.02em): the single word LOOKS. 58px on narrow phones.
- **Headline** (800, clamp(34px, 4vw, 48px), 0.95, width 70%, -0.01em): the look's name on its print.
- **Body** (400, 15px, 1.5): page base. Lede runs 16px, capped at 56ch, with balanced wrapping; credit runs 14.5px at 52ch.
- **Control** (600, 15px): filter tabs, circled toggle; select text 500.
- **Frame label** (600, 11px, 1.2, width 78%, 0.07em, uppercase): look name beside the frame number, two-line clamp.
- **Edge print** (Overpass Mono 600, 11px, tabular figures): frame numbers; the roll line is 12px regular mono in graphite; hex chip captions are 11px weight 500 uppercase.
- **Code** (Overpass Mono 400, 12.5px, 1.4): install commands, wrapped, select-all on click.

### Named Rules
**The Width Axis Rule.** Hierarchy comes from Archivo's width and weight: narrow and 800 for names, normal for reading, mid-narrow (78%) for tiny uppercase labels. Do not add another display family.

**The Counted Things Are Mono Rule.** Anything numbered, hexed, or copyable is Overpass Mono with tabular figures.

## Layout

A single centered sheet (max 1480px, side padding clamp(16px, 3vw, 40px)) on the table, with 26px of table above and 14px minimum at the sides. The header is a two-column grid (wordmark, roll line and lede on the left; controls on the right, bottom-aligned) collapsing to one column at 1040px. Search takes a full row, then tabs, selects, and the circled toggle wrap in a flex row (12px by 26px gap).

Frames flow in a CSS grid whose column count is a variable: 6 columns, then 5 at 1260px, 4 at 1040px, 3 at 780px, 2 at 540px. Row gap is 16px; each frame is its own strip of film, not a shared tape. Opening a frame injects the print as a full-width grid row directly after the last frame of that row, so it re-seats itself on resize and filtering. The print is two columns (1.5fr preview, 1fr details, 28px by 40px gap), stacking to one at 1100px; the preview caps at 700px when stacked.

Spacing rhythm is small and practical (6, 8, 12, 16, 18, 26, 28, 40px) with no strict base. Arrow keys move a roving focus across the grid by column count.

## Elevation & Depth

Depth is physical and sparse. The sheet lifts off the table with a white top inner hairline, a 2px/4px tight shadow, and a broad 26px/60px ambient shadow. The paper print mat lifts off the black band with a single heavy shadow (0 10px 28px at 45% black). The loupe carries a film-black rim, a 1px translucent white outer ring, and a drop shadow. Film strips, controls, and chips are flat. A small downward notch (22 by 16px triangle in raised film) hangs under the open frame to tie it to its print.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 0 #fff inset, 0 2px 4px rgba(20,20,20,.10), 0 26px 60px rgba(20,20,20,.14)`): the paper on the table.
- **Print mat** (`box-shadow: 0 10px 28px rgba(0,0,0,.45)`): the matted preview on the film band.
- **Loupe** (`box-shadow: 0 0 0 5px film, 0 0 0 6px rgba(255,255,255,.5), 0 14px 34px rgba(0,0,0,.4)`): the magnifier's rim and lift.

### Named Rules
**The Paper On Table Rule.** Only two things float: the sheet over the table, the mat over the film. Everything else is flat. Shadows are soft and offset-down, never hard-edged.

## Shapes

Square and printed. Film frames, the print band, command wells, buttons, field underlines, and the sheet have zero corner radius. The sprocket holes are rounded rectangles (8 by 6px, 1.6px radius) repeating every 20px along the top and bottom of every frame. The circle toggle is an 11px-radius pill and the loupe is a true circle. The grease-pencil circle is a hand-drawn closed ellipse path, 114% by 118% of the frame, rotated by a deterministic small angle (about -3.6 to +3.6 degrees) per frame, stroked 1.5 with round caps. Focus is a 2px white outline plus a 4px red halo with 2px rounding. Fields are bottom-border only (2px ink); select arrows are an inline chevron.

## Components

### Film Strip Frame
A black strip with sprocket holes top and bottom, 6px side margin, holding the preview and a caption row. The caption is the amber mono frame number on the left and the uppercase narrow look name, right aligned and clamped to two lines, on the right. Name goes from dim to full on hover or when open. The frame is a button (zoom-in cursor on fine pointers); its circle toggle sits bottom-left (30px from the edge) with an enlarged hit area. Open state hangs the notch below.

### Circle Toggle and Circled Filter
An outlined grease-pencil ring icon on each frame. On: red filled 11px pill with white ring, and the hand-drawn scribble circle draws itself in 0.55s (stroke-dashoffset, ease-out-expo) unless reduced motion is set. The header's Circled tab counts them in mono and shows the red underline when active. Circles persist in the viewer's browser only.

### Filter Tabs and Selects
Text-only controls, 15px 600. Inactive in graphite; hover or active in ink. Active is a 3px red underline offset 6px, not a fill. Selects are borderless with a 2px ink underline and chevron. Search is a full-width underline field with a leading magnifier and a 40px height (36px on phones).

### Print
A raised-film band spanning the grid. Left: the paper-matted large preview. Right: the look name as headline, a mono "Frame NN, mode, source" line in dim, the credit sentence (amber link underline), the step-wedge, two command rows, then actions.
- **Step-wedge:** three labeled groups (Surfaces 4, Text 3, Roles 5) of 54px-wide, 38px-tall chips with an inset white hairline, amber uppercase hex caption beneath, click to copy.
- **Command row:** a film-black well in mono, select-all on click, with a copy button. The primary copy is a light-on-film fill with film text and goes pure white on hover; secondary buttons are 1px outlines (#5a5a5f), border lightening on hover. Pressed state borders red.
- **Actions:** Circle it, Previous, Next, Close, 40px tall, margin-top auto.

### Loupe
A 208px circle that follows a fine pointer over a frame and shows the same preview at 2.7x. Hidden on touch, on scroll, and when the pointer leaves the strips.

### Mock Claude Window (content component, colors are inputs)
A 3:2 container-query box drawn entirely in cqw units so it scales from a frame to a print. Its colors are not part of this system: each look supplies a three-stop sky gradient and a glow, four surfaces, three text steps, five role colors, an accent fill and on-color, and git add/remove colors as CSS custom properties on the element. Structure: title bar with three dots and a title, a user bubble, assistant lines, a tool line with +/- counts, a code block, a composer with a send button, and a footer of model text. Panels are frosted (color-mix translucency with a blur) and carry an inset hairline. In the frame size the window uses a flat variant: larger type, a simplified bar, no frosting, and a five-chip role strip along the bottom edge. The window is decorative and hidden from assistive tech.

### Footer
A 2px ink rule, then a graphite disclosure that previews are renderings rather than app captures, and a nav of two bold links.

## Do's and Don'ts

### Do:
- **Do** keep the chrome to paper (#eeede8), ink (#141414), film (#0f0f10 / #1b1b1d), amber (#eaa94a) and one red (#d6362b).
- **Do** let every other color come from a look's own data via custom properties on the mock window.
- **Do** mark selection, focus, and the active filter in grease-pencil red; keep the 2px white outline plus 4px red halo for focus on both paper and film.
- **Do** use Overpass Mono with tabular figures for frame numbers, hex, and commands, and amber for these only on film.
- **Do** keep controls as underlines and text, with square corners on structural elements.
- **Do** honor reduced motion: the circle draw animation and all transitions switch off.
- **Do** say in the footer that previews are renderings, not screenshots.

### Don't:
- **Don't** introduce a hue in the chrome that is not amber or grease-pencil red.
- **Don't** fill buttons or tabs with the red; it marks, it does not decorate.
- **Don't** use hard offset shadows or card borders; depth is only the sheet and the print mat.
- **Don't** round the film frames, print band, command wells, or buttons.
- **Don't** add a second display family; use Archivo's width axis.
- **Don't** rely on hover for anything: tabs, copy, and circle all work by tap and keyboard, and the loupe is an enhancement for fine pointers only.
