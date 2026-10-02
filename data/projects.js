/**
 * PROJECTS + PROJECT→SKILL MEMBERSHIPS — the only project content source.
 * Add/edit objects inside exported `projects`; homepage and detail pages update.
 * No HTML/CSS edits or routes are needed: project.html?id=your-id is automatic.
 * Skills and skill→skill graph edges are configured in data/skills.js.
 * All strings are plain text, never injected HTML. Keep valid JavaScript syntax.
 *
 * Every project field (only id is required):
 * - id: unique lowercase slug, /^[a-z0-9][a-z0-9-]*$/; no default. Missing,
 *   invalid, or duplicate ids are skipped (first valid duplicate wins).
 * - title: string; default id. Use a concise title for the bubble.
 * - category: string; default "" (omitted).
 * - status: string; default "Planned". Exact "Planned" gets dashed styling;
 *   other honest labels (e.g. "Working project") are displayed unchanged.
 * - summary: string; default "". Brief bubble/detail introduction.
 * - size: "featured" | "medium" | "small"; default "medium". Controls the
 *   maximum bubble diameter, not a fixed position. New bubbles flow into the
 *   next available space at every viewport. Keep copy concise; the bubble shows
 *   at most two title lines and three summary lines. Full text is in details.
 * - appearance: optional object with independent, bounded visual settings:
 *     theme: "green" | "blue" | "thermal" | "white"; default "blue".
 *     intensity: "low" | "medium" | "high"; default "medium".
 *     contrast: "standard" | "high"; default "standard".
 *   Thermal is the warm hero accent. Intensity adjusts borders and surface tint;
 *   text is never faded. Both contrast presets use readable light-on-dark text;
 *   high makes text white and darkens the surface. White means a white accent.
 *   These settings apply to the bubble AND detail page; they imply no expertise.
 * - skills: array of skill ids; default []. THE authoritative project/skill
 *   relationship: skill selection highlights every project listing its id here.
 *   Unknown ids/non-string values are ignored; duplicates are removed.
 * - tags: string array; default []. Free-form technology/topic labels in details.
 * - image: URL string; default "". Optional cover shown in bubble and detail.
 * - imageAlt: string; default ""; always write useful alt text for a real image.
 *   Bubble image is decorative because the enclosing link has a complete name.
 * - visual: "flow" | "grid" | "none"; default "grid". Decorative fallback
 *   when image is empty, not simulated results. Ignored if image is supplied.
 * - sections: array of flexible content objects in display order; default [].
 *   Each section accepts ALL of these fields:
 *     title: string; default "Notes". Any heading is supported (Overview,
 *       Problem, Approach, Results, What I Learned, Technical Details, etc.).
 *     text: string; default "". Optional paragraph.
 *     items: string array; default []. Optional bullet list.
 *     image: optional image URL; default "". Single image shortcut.
 *     imageAlt: string; default "". Alt text for that single image.
 *     media: array; default []. Each media object has:
 *       src: image URL (required; invalid/missing src skips that media object),
 *       alt: string (default ""), caption: string (default "", omitted).
 *       Only images are supported; no video/embed/type fields are consumed.
 *   Empty sections are omitted. Do not add unsupported claims to fill headings.
 * - links: array; default []. Each {label, url} becomes a detail link.
 *   label defaults to "View resource"; missing/invalid url skips the link.
 * - No other fields are consumed. Old `position` values are no longer used.
 *
 * URL rules for image/src/url: relative paths (e.g. assets/example.png), absolute
 * HTTPS/HTTP, or mailto links (links only). Invalid/unsafe protocols (javascript:, data:, etc.)
 * are omitted. Images accept relative paths or HTTP(S); mailto images are omitted. You can
 * reuse existing assets or external image URLs through these two data files;
 * a brand-new local image also needs its actual file added under assets/.
 * Optional fields with wrong types use their defaults; malformed array entries
 * are ignored. Appearance values outside the listed enums use their defaults.
 *
 * COPYABLE PROJECT (append INSIDE projects; use real facts when available):
 * { id: "new-study", title: "New Study", category: "Future direction",
 *   status: "Planned", size: "medium", summary: "A planned investigation.",
 *   appearance: { theme: "thermal", intensity: "low", contrast: "high" },
 *   skills: ["python", "new-method"], tags: ["Python"], visual: "flow",
 *   sections: [{ title: "Overview", text: "Scope is still being defined." }],
 *   links: [] },
 *
 * OPTIONAL MEDIA/LINK EXAMPLES (use real accessible URLs):
 * sections: [{ title: "Evidence", items: ["One supported observation."],
 *   media: [{ src: "assets/meshstudy-chart.png", alt: "Describe the chart",
 *     caption: "Explain the source and limits of this image." }] }],
 * links: [{ label: "Source", url: "https://github.com/owner/repository" }]
 */
export const projects = [
  {
    id: "meshstudy",
    title: "MeshStudy",
    category: "FreeCAD workbench · Python",
    status: "Working project",
    size: "featured",
    image: "assets/meshstudy-setup.png",
    imageAlt:
      "MeshStudy repository screenshot showing a configured FEM model in FreeCAD",
    summary: "A clearer path through mesh refinement.",
    tags: ["FreeCAD", "Python", "FEA"],
    sections: [
      {
        title: "Overview",
        text: "MeshStudy is a modular FreeCAD workbench that automates mesh refinement studies for finite element analysis. It runs simulations at different mesh sizes and organises the resulting data for comparison.",
      },
      {
        title: "Problem",
        text: "A mesh refinement study means repeating an analysis across mesh sizes. Doing those steps manually in FreeCAD is repetitive, and keeping the results organised adds another layer of work.",
      },
      {
        title: "What I Built",
        text: "A workbench to configure and execute a refinement study, display tables and convergence charts, and save individual simulation results beneath a MeshStudy container in the document tree.",
      },
      {
        title: "Approach",
        text: "The Python package separates core convergence logic, FreeCAD FEM adapters, interface components, document objects, execution services, and extensible analysis, refinement, and quantity-of-interest strategies.",
      },
      {
        title: "Results",
        text: "The repository demonstrates study configuration, automatic execution, tabulated output, convergence charts, and result objects. The screenshot below is an example from the project documentation; it is not a general accuracy or performance benchmark.",
        image: "assets/meshstudy-chart.png",
        imageAlt:
          "Example MeshStudy convergence chart from the project documentation",
      },
      {
        title: "Technical Details",
        items: [
          "Platform: FreeCAD FEM; modular Python package.",
          "Supported meshing: Gmsh. Netgen is not currently supported.",
          "Current scope: static structural analysis and uniform h refinement.",
          "Quantities of interest: stress or displacement.",
          "Early release: the documentation notes possible execution errors and a recovery system.",
          "Modal, thermal, and adaptive strategies are future scope, not implemented claims.",
        ],
      },
    ],
    links: [
      {
        label: "Explore the source",
        url: "https://github.com/eng-abdalla-abbas/MeshStudy",
      },
      {
        label: "Read the documentation",
        url: "https://github.com/eng-abdalla-abbas/MeshStudy/blob/main/README.md",
      },
    ],
    skills: ["python", "numerical", "validation", "fea", "freecad"],
    appearance: {
      theme: "green",
      intensity: "medium",
      contrast: "standard",
    },
  },
  {
    id: "cfd-study",
    title: "CFD Study",
    category: "Future direction",
    status: "Planned",
    size: "medium",
    visual: "flow",
    summary: "From governing equations to a documented flow study.",
    tags: ["CFD", "Fluid Mechanics", "OpenFOAM"],
    sections: [
      {
        title: "Overview",
        text: "A planned direction for a future CFD study. The problem, setup, and validation approach have not yet been documented. No simulation results are presented here.",
      },
    ],
    skills: ["cfd", "fluids", "openfoam", "numerical", "validation"],
    appearance: {
      theme: "blue",
      intensity: "low",
      contrast: "standard",
    },
  },
  {
    id: "python-tool",
    title: "Engineering Tool",
    category: "Python · Future direction",
    status: "Planned",
    size: "small",
    visual: "grid",
    summary: "A future space for a focused engineering utility.",
    tags: ["Python"],
    sections: [
      {
        title: "Overview",
        text: "A placeholder for a future Python engineering tool. The use case and implementation are still to be defined; this is not a completed project.",
      },
    ],
    skills: ["python"],
    appearance: {
      theme: "thermal",
      intensity: "low",
      contrast: "standard",
    },
  },
];
