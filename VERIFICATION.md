# Verification — 2026-10-02 data configuration

## Source and implementation

- Started from current remote main `2d58fb0c2c5d8c1b6d9bcb7c22e26c32dd040814` (merged PR #2); reconfirmed unchanged main and no open PR before completing this work.
- Preserved existing project facts, local evidence images, live website link, and approved circular visual structure.
- Both data modules begin with complete configuration comments: fields, allowed enums, defaults, validation behavior, relationships, and copyable examples.
- `projects[].skills` is the sole project-membership source. `connections` in skills.js defines undirected skill graph edges.
- Shared normalization skips invalid ids/edges, deduplicates associations, defaults invalid optional settings, and rejects unsafe URL protocols.
- Node layout and SVG geometry respond to width and item count. No per-id CSS or manual coordinates are required for additions.

## Real Chromium checks

Playwright ran the packaged Chromium executable. QA dependencies remain outside the site; no build or runtime dependency is shipped.

Seeded content passed at 320, 390, 760, 1024, and 1440px:

- No document overflow, overlapping skill buttons, or overlapping project bubble boxes.
- Body text 16–17px; skill status labels at least 12px.
- Keyboard selection, related-project highlighting, reset, Heat Transfer's empty-project state, detail navigation, image loading, unknown-id recovery, and reduced motion.
- No JavaScript runtime errors in the completed sequence. Canceled native view-transition promises are handled as normal navigation fallback.
- axe-core WCAG 2 A/AA and 2.1 AA audit at 390 and 1440px: zero detected violations.

## Data-only extension test

Only `data/skills.js` and `data/projects.js` were temporarily changed to add:

- A tenth skill with a new status and white/low/high appearance.
- An undirected connection to Python, plus duplicate/unknown/malformed edges.
- A fourth project with thermal/high/high appearance, skill memberships, a section, captioned evidence image, and resource link.
- Invalid optional entries, duplicate project id, duplicate membership, unknown skill id, and unsafe link.

At all five viewport widths, all ten nodes and four circles rendered without collisions or overflow. Bubble width/height remained equal. Exactly one new graph edge appeared; keyboard selection highlighted the new project. New status appeared in the legend. Detail content, media caption, safe link, and theme rendered. Invalid entries were ignored. The original seeded data was restored in a finally block before commit.

## Appearance checks

All 24 combinations of four themes, three intensity levels, and two contrast levels were evaluated using computed color values. Primary, secondary, and accent text against their configured surfaces had a minimum measured contrast of **5.97:1**, above 4.5:1. White theme and low intensity retained readable text. Appearance settings do not change text opacity or status labels. Invalid enum tests returned documented defaults.

Node syntax and Prettier checks passed. Mobile and desktop screenshots were inspected.

## Limits

Automated checks are not a complete accessibility certification. Safari, Firefox, screen readers, and touch hardware were not independently tested. JavaScript syntax errors in hand-edited data files cannot be recovered by field normalization. Keep bubble copy concise; full project text is available in details.

This change is proposed in a feature-branch PR. Nothing has been merged or deployed by this delivery.
