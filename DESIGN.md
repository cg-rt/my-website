---
name: Cosmin Ghinoiu — The implementation brief
description: A clear, restrained visual system connecting implementation responsibilities to attributable evidence.
colors:
  green: "#164d43"
  green-deep: "#103a32"
  ink: "#172b26"
  muted: "#4e655d"
  paper: "#f8faf8"
  tint: "#eaf0ed"
  white: "#ffffff"
  on-green: "#eaf0ed"
  green-soft: "#c7dbd3"
  rule: "#c5d2cb"
  field-border: "#91a69b"
  error: "#963524"
typography:
  display:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: "clamp(2.8rem, 6.1vw, 5.25rem)"
    fontWeight: 520
    lineHeight: 1.08
    letterSpacing: "-.035em"
  display-opening:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: "clamp(2.8rem, 6.1vw, 5.25rem)"
    fontWeight: 470
    lineHeight: 1.08
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: "clamp(2rem, 3.15vw, 2.8rem)"
    fontWeight: 520
    lineHeight: 1.15
    letterSpacing: "-.026em"
  title:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 520
    lineHeight: 1.3
    letterSpacing: "-.02em"
  body:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: ".9rem"
    fontWeight: 520
    lineHeight: 1.65
  action:
    fontFamily: "Commissioner Variable, Commissioner, sans-serif"
    fontSize: ".95rem"
    fontWeight: 520
    lineHeight: 1.3
rounded:
  control: "4px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "clamp(64px, 7.8vw, 112px)"
components:
  button-dark:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "16px 21px"
  button-dark-hover:
    backgroundColor: "{colors.green-deep}"
  button-light:
    backgroundColor: "{colors.on-green}"
    textColor: "{colors.green-deep}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "16px 21px"
  button-light-hover:
    backgroundColor: "{colors.white}"
  button-disabled:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.muted}"
  text-link:
    textColor: "{colors.ink}"
    padding: "7px 0"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    width: "100%"
  navigation:
    textColor: "{colors.ink}"
    padding: "9px 0"
  situation-evidence:
    textColor: "{colors.ink}"
    padding: "0 0 0 24px"
  service-proof:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    padding: "24px"
  project-row:
    textColor: "{colors.ink}"
    padding: "32px 0"
  result-panel:
    backgroundColor: "{colors.green}"
    textColor: "{colors.on-green}"
    padding: "28px"
---

# Design System: Cosmin Ghinoiu

## Overview

**Creative North Star: "The implementation brief"**

A concise executive brief makes responsibilities and supporting evidence easy to read. Large, direct statements establish the offer; open rows and unequal columns connect a visitor's situation to relevant work. The personality is precise, human and restrained, expressed through proportion, useful detail and a single sans-serif family.

Deep green creates emphasis while cool pale grounds support sustained reading. Flat sections, thin rules and modestly softened controls keep the interface practical. Copy stays first person, natural and specific. Anonymous employment examples retain their attribution; evidence is part of the reading layout, never decorative proof.

**Key Characteristics:**

- Broad statements followed by concrete responsibilities and evidence.
- One self-hosted type family with restrained weight changes.
- Flat green, pale and white fields connected by thin rules.
- Evidence remains readable without hover, disclosure or animation.
- Open desktop columns become a direct reading sequence on mobile.

This record describes the implemented five-page frontend in `src/styles/global.css`, `src/layouts/Layout.astro`, the page templates, `Arrow.astro` and `ContactClose.astro`. The approved direction is code-first; there is no approved image comp. The finish review's viewport excerpts are not full-page or exact-color evidence. Source CSS is the token authority. Documentation does not certify deployment, domain configuration or external-profile verification.

## Colors

The palette is a cool, muted green family with dark readable ink and pale reading surfaces.

### Primary

- **Deep green** (`green`) owns the home introduction, case-result panels, dark buttons and keyboard focus.
- **Deeper green** (`green-deep`) strengthens dark-button hover and the text on light buttons and form feedback.
- **Pale text on green** (`on-green`) serves high-emphasis content on dark fields; **soft green** (`green-soft`) separates supporting copy without changing hue.

### Neutral

- **Dark green ink** (`ink`) is the default text color. **Muted green ink** (`muted`) supports descriptions, metadata and field hints.
- **Cool paper** (`paper`) is the main page ground. **Pale green tint** (`tint`) groups selected work, service proof and form feedback. **White** (`white`) gives fields and dark-button labels their clarity.
- **Soft rule** (`rule`) divides open rows. **Field border** (`field-border`) gives editable controls a stronger boundary.
- **Brick error** (`error`) identifies invalid fields and failed-submission feedback; it is functional, not a second brand accent.

**The Role Before Decoration Rule.** Use green fields for introductions, supported results and actions; keep the long reading passages on pale ground with dark ink.

The separate `tint` and `on-green` names intentionally share one source value but preserve different roles. The sidecar's synthesized tonal strips are palette previews, not additional production colors.

## Typography

**Display Font:** Commissioner Variable, Commissioner, sans-serif.
**Body Font:** Commissioner Variable, Commissioner, sans-serif.

Commissioner is self-hosted through the project's font package. Its open forms and intermediate weights provide a precise but approachable voice without a second display or monospace family.

### Hierarchy

- **Display** uses the fluid display token for primary page statements. The home introduction uses the lighter opening variant; About and Contact use their existing, slightly smaller fluid limits.
- **Headline** introduces major sections with balanced wrapping and tight leading.
- **Title** carries row and subsection headings. Situation titles scale fluidly on desktop; project titles stay compact.
- **Body** carries the reading surface, with long prose capped at 70ch and shorter explanatory passages around 55–65ch.
- **Lead** gives page introductions a modest size increase, without competing with the heading.
- **Label** identifies fields in sentence case. Case metadata and attribution use smaller supporting text, not heading eyebrows.
- **Action** uses medium weight and a compact line-height in buttons. Text links use a similar weight with a persistent bottom rule.

**The One Family Rule.** Build hierarchy with Commissioner, size, spacing and the implemented weight differences; do not introduce a competing display face.

Small metadata is ancillary. Keep essential responsibilities and evidence descriptions at body or near-body scale rather than promoting attribution sizes into general prose.

## Layout

The shared container is centered with a maximum width of 1280px and a width of `100% - 112px`. At widths up to 1050px, it uses `100% - 72px`; up to 760px, it uses `100% - 40px`. The header stays in normal document flow. The section spacing token establishes the broad rhythm; internal spacing uses the recorded small scale plus component-specific measurements.

The primary spatial pattern is open paired columns: responsibility beside evidence, a heading beside explanation, or case context beside narrative. Home situations use a 1.5:1 proportion, while case studies use 1:1.27. Thin rules separate entries; content does not rely on boxed cards. Case headings become sticky only from 1100px upward, with 36px top clearance.

At 1050px, gaps tighten, the project category column is omitted, and paired form fields stack. At 760px, substantive columns become one reading sequence; each evidence block follows its situation. The home secondary aside is omitted while offer, contact action and proof remain. Body text becomes 16px and section rhythm becomes 64px. Display headings use the existing page-specific mobile sizes rather than forcing one size onto every composition.

**The Adjacent Evidence Rule.** Keep the supporting example next to its responsibility on wide screens and immediately after it on narrow screens. Focus and hover may reinforce the connection but never reveal required content.

## Elevation & Depth

The implemented system has no shadows, gradients or blur. Solid color fields, whitespace, typography and one-pixel rules create hierarchy. A service proof panel is a flat tinted insert; a case result is a flat green insert. Neither floats above the document.

**The Flat Surface Rule.** Preserve the contrast between open ruled rows and solid tonal inserts; do not add floating-card depth to these patterns.

## Shapes

Sections and evidence panels are rectangular. Only editable controls and filled buttons use the small control radius. Borders are thin and quiet; fields have a stronger boundary than reading dividers. There are no pills or ornamental clipped shapes.

The shared arrow is a code-authored, current-color SVG with a round stroke, normally 20px square. The upward-right variant rotates the same path; smaller evidence and contents links use 16–17px instances. The menu icon and favicon are also code-authored SVG. There are no shipping raster assets, portraits, client logos or decorative project mockups.

## Components

### Buttons

Filled buttons are direct and calm, with a small radius, text and a right arrow. Dark buttons sit on pale ground; light buttons sit in the green opening. They have a minimum height of 54px, with horizontal content spacing of 30px. On mobile, padding becomes `15px 18px`, the gap becomes 20px and text becomes `.88rem`.

Hover changes the fill using the corresponding recorded variant. Active press applies a slight brightness reduction. Disabled buttons use tint, muted text and a rule border. The submitting state changes the label to “Sending…” and disables repeated submission. State transitions use 220ms and `cubic-bezier(.16, 1, .3, 1)`; reduced-motion preferences remove transitions.

### Text links

Standalone actions pair medium-weight text with the same SVG arrow and a thin bottom rule. Regular prose links stay underlined; hover increases underline thickness. Link text names the destination or the relevant example rather than relying on an icon.

### Inputs / Fields

Labels sit above white fields, with optional status embedded in the label. Input height is at least 50px; the textarea starts at 180px and resizes vertically. Hover turns the border green. Keyboard focus uses a two-pixel green outline with a two-pixel offset for controls; other focusable elements use a five-pixel offset. Focus in the green opening switches to pale text color.

Invalid fields combine the error border with associated written feedback. Hints and errors sit directly below the control. Submission feedback uses a flat tinted block, a live status region and focus after a result. Do not expose the recipient email or add direct-email options. Keep the LinkedIn links. Failure preserves the message for retry. Accepted submission resets the form; the success text claims submission, not independently confirmed inbox delivery.

### Navigation

The text wordmark has a smaller descriptive second line. Five plain text destinations run across the desktop header; the current page is underlined and Contact has a bottom rule and diagonal arrow. Hover adds green and underline. The header uses a 112px minimum height, reducing to 90px on mobile.

On mobile, the script-enhanced Menu button reveals an in-flow vertical list with a top rule. It reports expanded state, closes on Escape, navigation or outside click, and returns focus to its toggle on Escape. Without enhancement, navigation remains visible. A keyboard-visible skip link reaches the main content.

### Situation and evidence rows

The signature row pairs a linked situation heading and explanation with an evidence title, short description and explicit evidence link. A left rule and inset distinguish the evidence on desktop; mobile removes that rule and inset. Hover or focus anywhere in the row turns the evidence boundary and title green. The evidence link lands on a named case or working-practice anchor. Four situations represent alternative reasons to engage, not numbered methodology stages.

### Proof and result inserts

Service evidence uses a flat tinted panel with a title, description and arrow link. Its padding reduces from the recorded desktop value to 20px on mobile. Case results use green with pale text, a quiet “Result” field label and a larger statement; their padding reduces to 24px on mobile. These labels describe real content fields and do not establish a heading-eyebrow style.

### Project rows and contact close

Project links form open ruled rows with category, title, description and diagonal arrow. On hover the title underlines. The category is removed at the middle breakpoint and the text stacks at the narrow breakpoint. The repeated contact close remains a two-column heading and invitation separated from prior content by a top rule, becoming one column on mobile.

## Do's and Don'ts

### Do:

- **Do** connect specific responsibilities to nearby, named evidence.
- **Do** use the self-hosted Commissioner family and the recorded green, ink and pale-ground roles.
- **Do** preserve open rows, thin rules, flat inserts and comfortable prose widths.
- **Do** keep evidence and actions available without hover, with visible keyboard focus and reduced-motion support.
- **Do** use restrained first-person copy and keep anonymous employment attribution visible beside project evidence.
- **Do** keep the 20,000-user figure attached to launch scope wherever that example appears.

### Don't:

- **Don't** replace the responsibility-to-evidence rows with a generic icon-card grid or a numbered process.
- **Don't** add heading eyebrows, decorative metrics, floating shadows or gradients to this world.
- **Don't** introduce glyph icons, a second display face, fabricated client logos, testimonials or project imagery.
- **Don't** turn launch scope into active usage, adoption or ROI, or present employment work as independent consulting engagements.
- **Don't** hide essential content behind animation, hover or disclosure, or imply inbox delivery from service acceptance alone.
