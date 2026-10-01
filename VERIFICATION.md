# Verification — 2026-10-01 redesign

## Source and scope

- Started from remote `main` commit `8d396da6e6bdd608144da0985b92f8f7c0a4d402`.
- Verified all baseline local Git blob hashes against the current remote tree. Preserved the owner's added live website link in README.
- No `AGENTS.md` exists in the repository tree.
- MeshStudy facts and evidence images are unchanged. Planned projects remain planned. Heat transfer is described only as a secondary interest, with no completed project or results claimed.

## Real browser checks

Chromium was run locally through Playwright using the packaged `@sparticuz/chromium` executable. QA dependencies live outside the site; no browser or npm dependency is shipped.

Passed:

- Homepage at 320, 390, 760, 1024, and 1440px viewport widths: no horizontal document overflow, overlapping skill buttons, or overlapping project bubble boxes.
- Body text measured at 16–17px and every skill status label at 12px or larger.
- Mobile retains circular skill buttons and SVG connections in a staggered map. Desktop retains the connected diagram and Python/FEA emphasis.
- Keyboard Enter selects Python, updates `aria-pressed`, and highlights its two related projects. Reset clears selection.
- Heat Transfer selection reports no documented project, while all project links remain available.
- MeshStudy link opens the shared detail route; both evidence images load and seven documented sections render.
- Unknown project id displays the recovery route.
- Reduced-motion emulation disables project transitions.
- No JavaScript runtime errors during the completed test sequence.
- axe-core WCAG 2 A/AA and 2.1 AA automated audits at 390 and 1440px: zero detected violations, including tested text contrast.
- Full-page desktop, mobile, and detail screenshots inspected. Mobile layout independently reviewed.
- Node syntax checks and Prettier formatting checks pass.

## Limits

Automated accessibility checks are not a complete accessibility certification. Tests used Chromium; Safari, Firefox, screen-reader reading order, and touch-device hardware were not independently exercised. Cross-document view transitions are progressive enhancement and unsupported browsers navigate normally.

This redesign is submitted as a feature-branch pull request. It has not been merged or deployed by this delivery.
