# MechAtlas — Abdalla Abbas

A static mechanical engineering portfolio. HTML, CSS, vanilla JavaScript modules. No build, backend, paid service, or runtime dependency.

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000. Serve over HTTP: JavaScript modules do not work reliably from `file://`.

## GitHub Pages

The intended repository is `eng-abdalla-abbas/MechAtlas`. It was empty when this V1 was prepared. With explicit approval, a minimal README was committed to `main`; the complete implementation is proposed on `astra/portfolio-v1` for review.

After review and merge, choose **Settings → Pages → Deploy from a branch → main → / (root)**. Relative URLs support the repository URL `https://eng-abdalla-abbas.github.io/MechAtlas/`. `.nojekyll` bypasses Jekyll. No custom domain is required. Pages has not been enabled or published by this delivery.

## Add a project (about 5 minutes)

1. Add a real screenshot or visual to `assets/`.
2. Copy an object in `data/projects.js`. Give it a unique `id`, title, category, status, summary, and tags.
3. Choose `size`: `featured`, `medium`, or `small`. Add `image` and descriptive `imageAlt`; planned items can use decorative `visual: 'flow'` or `'grid'`.
4. Add supported content to `sections` as `{title, text}` or `{title, items: [...]}`. Optional `image` and `imageAlt` show evidence below a section. Section titles can include Overview, Problem, What I Built, Approach, Challenges, Results, What I Learned, and Technical Details. Omit anything you cannot substantiate.
5. Add `links: [{label, url}]` if available. Add its id to relevant skills' `projects` arrays. Refresh the preview.

The homepage and `project.html?id=your-id` render from the same object; no HTML edits. The initial three bubbles use curated percentage positions and responsive CSS; adding a fourth automatically switches to a wrapping bubble layout so new entries do not overlap.

## Update a skill (about 2 minutes)

Edit `data/skills.js`: name, role, status, description, focus, related project ids. Add new nodes with unique ids and x/y percentage positions. Add pairs of ids to `connections` to draw lines. Skill nodes are native keyboard-operable buttons. Select a node to highlight related projects; all links stay available. Reset restores the overview.

## Content and evidence

MeshStudy facts and screenshots come from its public README:
https://github.com/eng-abdalla-abbas/MeshStudy/blob/main/README.md

- `assets/meshstudy-setup.png`: `Resources/Media/fem_setup.png`
- `assets/meshstudy-chart.png`: `Resources/Media/results_chart.png`

Read on 2026-09-29. MeshStudy is an early FreeCAD workbench using Python, static structural analysis, Gmsh meshing, uniform h refinement, and stress/displacement quantities of interest. No numerical accuracy, speedup, or validation claims have been added. Screenshot charts are documentation examples. CFD Study and Engineering Tool are explicitly planned placeholders. Hero mesh and planned bubble motifs are decorative, not simulation outputs. The student stage and learning direction follow the supplied brief; learning labels are editorial descriptions, not certifications.

## Accessibility and maintenance

Semantic links and buttons, visible focus, skip links, live selection descriptions, informative image alt text, reduced-motion rules, no hover-only content, no autoplay, and responsive layouts. Cross-document view transitions are progressive enhancement; unsupported browsers use normal navigation. No third-party fonts, analytics, trackers, or network dependencies are required to render the site. The only external URLs are deliberate project/contact links.

## Files

- `index.html`: homepage shell
- `project.html`: reusable detail shell
- `app.js`, `project.js`: rendering and interactions
- `data/skills.js`, `data/projects.js`: editable content
- `styles.css`: visual system and responsive layouts
- `assets/`: local visuals

See `VERIFICATION.md` for the local checks and deployment limitations.
