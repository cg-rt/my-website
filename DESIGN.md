---
name: Cosmin Ghinoiu — Practical
description: A calm white, content-first system with one neutral indigo and a neutral scale derived from the same hue (230), set in Inter.
colors:
  background: "#ffffff"
  fill: "#f3f4f9"
  text-strong: "#161c3a"
  text-weak: "#5b6278"
  stroke-strong: "#858ca3"
  stroke-weak: "#e4e6ef"
  stroke-fill: "#d9dce8"
  indigo-100: "#e0e3fb"
  indigo-500: "#5b6aea"
  indigo-600: "#4250d8"
  indigo-700: "#3b48c9"
  error: "#b42318"
  grid-line: "rgb(91 106 234 / .07)"
typography:
  display:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-.03em"
  headline:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 3vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-.025em"
  title:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.018em"
  body:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.6
  figure:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.35
    fontVariantNumeric: "tabular-nums"
  label:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: ".93rem"
    fontWeight: 500
    lineHeight: 1.6
  action:
    fontFamily: "Inter Variable, Inter, system-ui, sans-serif"
    fontSize: ".97rem"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  control: "8px"
  form-card: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "clamp(64px, 7.8vw, 112px)"
motion:
  duration: "150ms"
  easing: "cubic-bezier(.16, 1, .3, 1)"
  press-scale: ".97"
components:
  button-primary:
    backgroundColor: "{colors.indigo-600}"
    textColor: "{colors.background}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "14px 20px 14px 22px"
    minHeight: "52px"
  button-primary-hover:
    backgroundColor: "{colors.indigo-700}"
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-strong}"
    borderColor: "{colors.stroke-strong}"
    rounded: "{rounded.control}"
  button-secondary-hover:
    borderColor: "{colors.text-strong}"
  button-disabled:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.text-weak}"
    borderColor: "{colors.stroke-weak}"
  text-link:
    textColor: "{colors.indigo-700}"
    decoration: "1px underline at 35% opacity, .3em offset; full opacity on hover"
    minHeight: "44px"
  field:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-strong}"
    borderColor: "{colors.stroke-strong}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    fontSize: "16px"
  navigation:
    textColor: "{colors.text-weak}"
    currentColor: "{colors.text-strong}"
    currentUnderline: "2px {colors.indigo-600}"
  nav-contact:
    borderColor: "{colors.stroke-strong}"
    rounded: "{rounded.control}"
  selection-box:
    stroke: "1.5px {colors.indigo-500}"
    handles: "8px, white fill, 1.5px indigo-500 border"
  key-figures:
    divider: "1px {colors.stroke-weak} vertical rule"
    typography: "{typography.figure}"
  project-row:
    rule: "{colors.stroke-fill}"
    padding: "32px 0"
  situation-evidence:
    rule: "{colors.stroke-weak}"
    padding: "0 0 0 24px"
  service-proof:
    backgroundColor: "{colors.fill}"
    borderColor: "{colors.stroke-weak}"
    rounded: "{rounded.control}"
    padding: "24px"
  result-panel:
    backgroundColor: "{colors.indigo-600}"
    textColor: "{colors.background}"
    labelColor: "{colors.indigo-100}"
    rounded: "{rounded.control}"
    padding: "28px"
---

# Design System: Cosmin Ghinoiu

## Overview

**Creative North Star: "Practical"**

A calm white page where the words do the work. One neutral indigo carries every action and every point of emphasis; everything else is a neutral scale derived from the same hue. The layout of the previous system is kept almost one to one: broad statements, open ruled rows, responsibility beside evidence, prose capped at 70ch. What changed is the voice of the surface: Inter instead of Commissioner, white instead of pale green paper, indigo instead of deep green, and a single drafting-table detail (the selection box) on the home headline.

**Key Characteristics:**

- White ground, one grouped fill band, thin rules. No shadows, no gradients behind content.
- One indigo, used in three steps with fixed roles (display accent, surface, text).
- Inter Variable with optical sizing; hierarchy from size and 400/500/600 weights.
- Evidence readable without hover, disclosure or animation.
- Open desktop columns become one reading sequence on mobile.

This record describes the implementation in `src/styles/global.css`, `src/layouts/Layout.astro`, the page templates, `Arrow.astro` and `ContactClose.astro`. Source CSS is the token authority; this file mirrors it.

## Colors

All colours share hue ~230. Contrast ratios below are measured, not estimated.

### Indigo

- **Indigo 500** (`#5b6aea`) is the brand colour as seen on the book cover. It is used only where large size makes it legible: the second line of the home headline (4.47:1 on white, display size) and the selection-box stroke. Never for body-size text or under white text (white on it is 4.47:1, below AA).
- **Indigo 600** (`#4250d8`) is the surface step: primary buttons, the case-result panel, the skip link, the current-page underline. White text on it is 6.23:1.
- **Indigo 700** (`#3b48c9`) is the text step: links, evidence actions, the index lists, hover colour for row titles, the focus ring and button hover. 7.10:1 on white, 6.47:1 on fill.
- **Indigo 100** (`#e0e3fb`) is the tint: `::selection`, secondary text inside the result panel (4.91:1 on indigo 600), the field focus halo.

### Neutral

- **Text strong** (`#161c3a`, 16.65:1) for headings and primary reading text.
- **Text weak** (`#5b6278`, 6.06:1 on white, 5.52:1 on fill) for descriptions, metadata, leads on inner pages and hints.
- **Stroke strong** (`#858ca3`, 3.35:1) for field borders, the secondary button and the header Contact control: anything editable or pressable needs a 3:1 boundary. (The palette's suggested `#9da3b8` measures 2.51:1 and was darkened for this reason.)
- **Stroke weak** (`#e4e6ef`) for rules on white. **Stroke on fill** (`#d9dce8`) for rules inside the fill band, where stroke weak disappears.
- **Fill** (`#f3f4f9`) groups: the Selected delivery experience band, service proof panels, certifications, form notice and status, mobile evidence blocks.
- **Error** (`#b42318`, 6.57:1) is functional only.

**The One Indigo Rule.** Indigo means "this is an action or the one thing to notice". It never decorates a rule, a background band or an icon that is not interactive.

## Typography

**Family:** Inter Variable (`@fontsource-variable/inter/opsz.css`), self-hosted, weight and optical-size axes. `font-optical-sizing: auto` gives the display cut at heading sizes and the text cut at body size from one file per subset.

### Hierarchy

- **Display** `clamp(2.4rem, 5vw, 4.5rem)`, 600, -0.03em, 1.06. Home on mobile: `clamp(2.05rem, 9.4vw, 3.8rem)`. About and Contact cap at 4.1rem.
- **Headline** `clamp(1.95rem, 3vw, 2.6rem)`, 600, -0.025em. Service and case headings use slightly smaller fluid limits.
- **Title** 1.4rem, 600 (row titles fluid `clamp(1.3rem, 1.9vw, 1.65rem)` in situations, 1.45rem in project rows).
- **Body** 17px / 1.6 (16px under 760px). **Lead** 1.2rem / 1.6 in text weak on inner pages; the home intro paragraph stays in text strong because it is the main statement.
- **Figure** 1.15rem / 600 with `tabular-nums`, for the three home key figures and project-row titles only. Inter's tabular feature also widens hyphens ("12 - month"), so it is not applied to prose, scope lines or footers.
- **Label / action** 500. No weight below 400; weights never change on hover or selection.

Global text settings: `-webkit-font-smoothing: antialiased`, `text-rendering: optimizeLegibility`, `-webkit-text-size-adjust: 100%`, `text-wrap: balance` on headings, `pretty` on paragraphs.

## Layout

Container: `min(100% - 112px, 1280px)`; `100% - 72px` up to 1050px; `100% - 40px` up to 760px. Section rhythm `clamp(64px, 7.8vw, 112px)`, 64px on mobile. Prose 70ch.

Home order is fixed: header, intro (headline, intro copy, engagement line, two actions, domain aside, three key figures), Selected delivery experience on the fill band (four rows and source note), engagement, Where I can help (seven rows), contact close, footer.

Paired columns carry the content: 1.7:1 in the intro, 1.5:1 in situations, 1:1.27 in case studies, 1:1.08 in service details. Case headers become sticky from 1100px. At 1050px the project category column is dropped and form pairs stack. At 760px everything becomes one reading sequence; evidence follows its situation as a filled block; key figures stack with horizontal rules.

**The Adjacent Evidence Rule.** Evidence sits beside its responsibility on wide screens and directly after it on narrow screens.

## Elevation & Depth

Flat. Hierarchy comes from the white/fill contrast, 1px rules and type. The only background pattern is the intro grid (24px, 1px lines at 7% indigo 500), masked to fade in below the header and out before the key figures, and only on the home intro. It never sits behind reading text elsewhere.

## Shapes

8px radius on every control and evidence surface (buttons, fields, header Contact, proof panels, result panels, certification block). 12px on the contact form card, which wraps the 8px fields. Sections and rows stay rectangular and open. The arrow is the shared code-authored SVG; the favicon is an indigo rounded square that switches to indigo-300 with a navy mark under `prefers-color-scheme: dark`.

### Signature: the selection box

On the home headline only, the word "implementation" is framed like a selected layer in a design tool: a 1.5px indigo 500 outline with four 8px square handles (white fill, indigo border) at the corners. Drawn with two pseudo-elements and background layers, `pointer-events: none`, no animation. The wrapper is `inline-block`, so the word never splits; under 760px the handles shrink to 7px and the box still fits a 390px viewport. Do not reuse it elsewhere.

## Components

### Buttons

Primary: indigo 600, white label, 8px radius, 52px minimum height, arrow at right. Secondary: white with a stroke-strong border and a text-strong label. Hover (pointer devices only) darkens primary to indigo 700 and sharpens the secondary border; the arrow moves 2px. Press scales to .97 over 150ms. Disabled: fill, text weak, stroke weak. `user-select: none` on labels.

### Text links

Indigo 700, weight 500, 1px underline at 35% opacity with .3em offset; underline goes to full colour on hover. Arrows translate 2px (diagonal arrows move up-right). Minimum target 44px.

### Navigation

Wordmark in text strong with a text-weak second line. Nav links in text weak, text strong on hover; the current page is text strong with a 2px indigo 600 underline. Contact is an outlined 8px control with a diagonal arrow; when current, its border becomes indigo. On mobile the Menu button is an outlined control that tints when expanded and reveals a ruled vertical list; the script behaviour is unchanged.

### Key figures

Three cells in a 3-column grid separated by 1px vertical rules in stroke weak, under a horizontal rule. Figure in text strong 1.15rem/600 tabular; description in text weak. Mobile: stacked, separated by horizontal rules.

### Rows

Project rows, situation rows and working rows are open and ruled. Hover changes only two things: the title turns indigo 700 and the arrow moves 2px. Situation evidence keeps its left rule on desktop and becomes a filled block on mobile; "Read the example" is indigo 700.

### Evidence panels

Service proof: fill, 1px stroke weak, 8px radius, title in text strong, description in text weak, indigo link. Case result: indigo 600 surface, white statement at 1.3rem/500, "Result" label and the note in indigo 100.

### Fields and form

Labels above fields at 500. Fields: white, stroke strong border, 8px radius, 16px text (no iOS zoom), 50px minimum height, textarea 180px. Hover border text weak; focus is an indigo 600 border plus a 4px indigo 100 halo. Invalid fields use the error border plus written feedback. The form sits in a white card with a 1px stroke weak border and 12px radius. Status and notice messages use the fill surface.

### Focus and states

Focus: `box-shadow: 0 0 0 2px #fff, 0 0 0 4px indigo-700` (follows border radius), with a transparent outline kept for forced-colours mode. All hover styles are inside `@media (hover: hover)`; touch devices get `:active` colour or scale feedback instead of the tap highlight. Reduced motion removes transitions and smooth scrolling.

## Do's and Don'ts

### Do:

- **Do** keep indigo for actions and the single emphasis on each screen.
- **Do** use text weak for supporting copy and keep reading text at 4.5:1 or better on its actual surface.
- **Do** keep open rows, thin rules, flat inserts and comfortable prose widths.
- **Do** keep evidence beside (or directly after) the responsibility it supports.
- **Do** keep every interactive target at 44px or more.

### Don't:

- **Don't** put white text on indigo 500, or indigo 500 text below display size.
- **Don't** use the grid pattern or the selection box anywhere other than the home intro.
- **Don't** add shadows, gradients, icon packs, client logos, testimonials, decorative numbers or a second typeface.
- **Don't** animate colour changes on trivial hovers, or exceed 200ms on any interaction.
- **Don't** apply `tabular-nums` to running text.
- **Don't** change copy; text is frozen.
