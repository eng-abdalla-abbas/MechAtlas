# MechAtlas — Abdalla Abbas

A static mechanical engineering portfolio. HTML, CSS, vanilla JavaScript modules. No build, backend, paid service, or runtime dependency.
The [website link](https://eng-abdalla-abbas.github.io/MechAtlas/)

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. Serve over HTTP: JavaScript modules do not work reliably from `file://`.

## GitHub Pages

The repository is `eng-abdalla-abbas/MechAtlas`. GitHub Pages serves the site from `main` at the website link above. This redesign is submitted through a feature branch and PR; merging and deployment are separate review steps.

Relative URLs support the repository subpath. The site needs no build system. For a fresh setup, choose **Settings → Pages → Deploy from a branch → main → / (root)**. `.nojekyll` bypasses Jekyll.

## Edit content in two files

The full configuration reference, valid values, defaults, and copyable examples are in the **opening JavaScript block comment** of each file:

- `data/skills.js`: skills and undirected skill-to-skill connections.
- `data/projects.js`: projects, sections, media, resource links, and the sole project-to-skill membership list (`skills`).

### Add a project (about 5 minutes)

Copy the documented example into `projects`. Set its id/title, honest status, size, summary, sections, and optional links. List its related skill ids in that project's `skills` array. The homepage, detail URL, and skill highlighting update together. Never add project ids to skill objects.

Use an existing image, an external image URL, or a decorative fallback through the data file. A new local screenshot additionally requires adding that actual image to `assets/`. No HTML, CSS, rendering code, manual coordinates, or route edits are needed.

### Add a skill or connection (about 2 minutes)

Copy the documented skill example into `skills`. Set its id, name, optional short `label`, role, honest `status`, description, and focus. Optional `order` controls sequence; circles and SVG lines automatically arrange themselves and the map grows vertically with the number of nodes. Mobile retains the staggered circular map. New status labels automatically appear in the legend.

Add a pair such as `["new-method", "python"]` to `connections` for a skill-to-skill line. Add the new skill id to a project's `skills` array to associate that project. Unknown ids and duplicate pairs/memberships are ignored.

### Customize a skill or project

Every item accepts the same independent appearance object:

```js
appearance: {
  theme: "thermal",     // green | blue | thermal | white; default blue
  intensity: 5,         // number 0–10; default 5
  contrast: "high",     // standard | high; default standard
}
```

Intensity changes border strength and surface tint, never text opacity. Both contrast presets retain readable light text on dark surfaces; high uses white text and a darker surface. White is an accent theme, not a white page. Appearance is independent of the status label and does not imply proficiency. Skill `rank` (0–10) controls circle size/weight and descending order; optional `order` overrides ordering. Project `size` (0–10) controls bubble size and priority: 0 hides it from the homepage, highest values appear first on mobile and the leading project is centered on desktop. Ties keep array order. Project appearance also carries into its detail page.

Missing optional values use defaults; invalid appearance enums fall back safely. Keep valid JavaScript syntax and concise node/bubble labels. Full text remains available in the detail panel/page. Unsafe URL protocols are ignored. Complete field-by-field behavior is documented at the head of both data files.

## Content and evidence

MeshStudy facts and screenshots come from its public README:
https://github.com/eng-abdalla-abbas/MeshStudy/blob/main/README.md

- `assets/MeshStudy/meshstudy-setup.png`: `Resources/Media/fem_setup.png`
- `assets/MeshStudy/meshstudy-chart.png`: `Resources/Media/results_chart.png`

Read on 2026-09-29. MeshStudy is an early FreeCAD workbench using Python, static structural analysis, Gmsh meshing, uniform h refinement, and stress/displacement quantities of interest. No numerical accuracy, speedup, or validation claims have been added. Screenshot charts are documentation examples. CFD Study and Engineering Tool are explicitly planned placeholders. Hero streamlines, warm contours, and planned bubble motifs are decorative, not simulation outputs. CFD is the primary direction; heat transfer is a secondary interest with no claimed completed study. Python has the strongest visual emphasis as a current tool, followed by applied FEA; these are not expert ratings. OpenFOAM remains Exploring. The student stage and learning direction follow the supplied brief; learning labels are editorial descriptions, not certifications.

## Accessibility and maintenance

Semantic links and buttons, visible focus, skip links, live selection descriptions, informative image alt text, reduced-motion rules, no hover-only content, no autoplay, and responsive layouts. Cross-document view transitions are progressive enhancement; unsupported browsers use normal navigation. The font stack uses readable local system sans-serif fonts (Inter when locally installed, system UI, Segoe UI, then sans-serif). No fonts are downloaded. Body text is 16–18px and skill names/status labels are at least 12px. Project image captions use opaque backdrops. No third-party fonts, analytics, trackers, or network dependencies are required to render the site. The supplied content only uses deliberate project/contact links; adding an external image URL will also request that image.

## Files

- `index.html`: homepage shell
- `project.html`: reusable detail shell
- `app.js`, `project.js`: rendering and interactions
- `config.js`: shared normalization, appearance presets, and derived relationships
- `data/skills.js`, `data/projects.js`: editable content
- `styles.css`: visual system and responsive layouts
- `assets/`: local visuals

See `VERIFICATION.md` for the local checks and deployment limitations.

### Perfume wooden box

The reverse-engineering project uses nine user-supplied photographs, CAD views and drawings in `assets/PerfumeWoodenBox/`. Each project keeps its assets in a separate folder. Content and visual controls remain in `data/projects.js` and `data/skills.js`, with configuration instructions at the top.
