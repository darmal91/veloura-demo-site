# Repository Map

## Overview
This project is a simple static demo website for the Veloura brand.

Stack:
- HTML
- CSS
- JavaScript

Primary goal:
Create a polished, visually appealing brand demo site with clean layout, strong aesthetics, and good responsiveness.

---

## Root Files

### index.html
Main page structure.

Responsibilities:
- overall page layout
- header / navigation
- hero section
- core content sections
- footer structure

Use this file when:
- changing layout structure
- adding or removing sections
- fixing markup problems

---

### styles.css
Main stylesheet.

Responsibilities:
- typography
- spacing
- colors
- layout
- responsive behavior
- visual styling

Use this file when:
- fixing layout issues
- changing spacing
- adjusting responsiveness
- refining visual presentation

Caution:
Small CSS changes can affect multiple sections. Prefer minimal edits.

---

### script.js
Main behavior file.

Responsibilities:
- interactions
- toggles
- simple dynamic UI behavior

Use this file when:
- fixing interactive behavior
- adding simple front-end logic
- debugging user-triggered actions

---

## Folder Structure

### assets/
Contains project images and visual assets.

Examples:
- brand images
- decorative visuals
- supporting graphics

Use this folder when:
- swapping or updating image assets
- checking asset paths referenced by HTML or CSS

---

## Project Context Files

### README.md
Quick summary of the project, stack, and main purpose.

### project-spec.md
Defines brand direction, project goals, constraints, and intended feel.

### AGENTS.md
Defines AI editing rules and behavioral guardrails.

### safe-edit-prompt.md
Reusable prompt template for safer AI edits.

### repo-map.md
This file. High-level guide to where responsibilities live in the repo.

---

## Editing Guidance

### For layout issues
Check in this order:
1. `index.html`
2. `styles.css`

### For styling or spacing issues
Check:
1. `styles.css`
2. related HTML structure in `index.html`

### For interaction bugs
Check:
1. `script.js`
2. related elements in `index.html`

### For asset issues
Check:
1. `assets/`
2. file paths in `index.html` or `styles.css`

---

## Safe Editing Rules
- Prefer minimal, targeted edits.
- Do not rewrite large sections unless explicitly requested.
- Do not introduce frameworks or major tooling changes.
- Preserve the current aesthetic and structure unless asked to redesign.
- Avoid editing unrelated files.

---

## Notes for Future Growth
If the project grows, consider separating:
- CSS by section
- JavaScript by feature
- reusable page sections into clearer structure

But for now, keep the project simple.