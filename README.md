# MechAtlas — Abdalla Abbas

A static mechanical engineering portfolio. HTML, CSS, vanilla JavaScript modules. No build, backend, paid service, or runtime dependency.
The [website link](https://eng-abdalla-abbas.github.io/MechAtlas/)

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. Serve over HTTP: JavaScript modules do not work reliably from `file://`.

## GitHub Pages

The repository is `eng-abdalla-abbas/MechAtlas`. GitHub Pages serves the site from `main` at the website link above. This redesign is submitted through a feature branch and PR; merging and deployment are separate review steps.

Relative URLs support the repository subpath. The site needs no build system. For a fresh setup, choose **Settings → Pages → Deploy from a branch → main → / (root)**. `.nojekyll` bypasses Jekyll.

## Add a project (about 5 minutes)

1. Add a real screenshot or visual to `assets/`.
2. Copy an object in `data/projects.js`. Give it a unique `id`, title, category, status, summary, and tags.
3. Choose `size`: `featured`, `medium`, or `small`. Add `image` and descriptive `imageAlt`; planned items can use decorative `visual: 'flow'` or `'grid'`.
4. Add supported content to `sections` as `{title, text}` or `{title, items: [...]}`. Optional `image` and `imageAlt` show evidence below a section. Section titles can include Overview, Problem, What I Built, Approach, Challenges, Results, What I Learned, and Technical Details. Omit anything you cannot substantiate.
5. Add `links: [{label, url}]` if available. Add its id to relevant skills' `projects` arrays. Refresh the preview.

The homepage and `project.html?id=your-id` render from the same object; no HTML edits. The bubbles use CSS Grid flow with different size limits. New entries automatically occupy the next available grid position; mobile uses a single column. The legacy `position` values in existing project data are no longer used.

## Update a skill (about 2 minutes)

Edit `data/skills.js`: name, role, status, description, focus, related project ids. Add new nodes with unique ids and x/y percentage positions for the desktop diagram. Mobile preserves circular nodes and their SVG connections in a tall, staggered map to keep labels readable. The `status` value also selects the stage color; keep the visible legend in `index.html` in sync if adding a new stage. Add pairs of ids to `connections` to draw lines. Skill nodes are native keyboard-operable buttons. Select a node to highlight related projects; all links stay available. Reset restores the overview.

## Content and evidence

MeshStudy facts and screenshots come from its public README:
https://github.com/eng-abdalla-abbas/MeshStudy/blob/main/README.md

- `assets/meshstudy-setup.png`: `Resources/Media/fem_setup.png`
- `assets/meshstudy-chart.png`: `Resources/Media/results_chart.png`

Read on 2026-09-29. MeshStudy is an early FreeCAD workbench using Python, static structural analysis, Gmsh meshing, uniform h refinement, and stress/displacement quantities of interest. No numerical accuracy, speedup, or validation claims have been added. Screenshot charts are documentation examples. CFD Study and Engineering Tool are explicitly planned placeholders. Hero streamlines, warm contours, and planned bubble motifs are decorative, not simulation outputs. CFD is the primary direction; heat transfer is a secondary interest with no claimed completed study. Python has the strongest visual emphasis as a current tool, followed by applied FEA; these are not expert ratings. OpenFOAM remains Exploring. The student stage and learning direction follow the supplied brief; learning labels are editorial descriptions, not certifications.

## Accessibility and maintenance

Semantic links and buttons, visible focus, skip links, live selection descriptions, informative image alt text, reduced-motion rules, no hover-only content, no autoplay, and responsive layouts. Cross-document view transitions are progressive enhancement; unsupported browsers use normal navigation. The font stack uses readable local system sans-serif fonts (Inter when locally installed, system UI, Segoe UI, then sans-serif). No fonts are downloaded. Body text is 16–18px and skill names/status labels are at least 12px. Project image captions use opaque backdrops. No third-party fonts, analytics, trackers, or network dependencies are required to render the site. The only external URLs are deliberate project/contact links.

## Files

- `index.html`: homepage shell
- `project.html`: reusable detail shell
- `app.js`, `project.js`: rendering and interactions
- `data/skills.js`, `data/projects.js`: editable content
- `styles.css`: visual system and responsive layouts
- `assets/`: local visuals

See `VERIFICATION.md` for the local checks and deployment limitations.
