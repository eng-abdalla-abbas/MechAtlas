/**
 * SKILLS + SKILL CONNECTIONS — edit this file; no HTML/CSS edits are needed.
 * Projects and their skill memberships live ONLY in data/projects.js.
 * Export `skills` (array of objects) and `connections` (array of [id, id] pairs).
 * Keep valid JavaScript syntax; comments are allowed. All content is plain text.
 *
 * Every skill field (only id is required):
 * - id: unique lowercase slug, /^[a-z0-9][a-z0-9-]*$/; no default. Missing,
 *   invalid, or duplicate ids are skipped (the first valid duplicate wins).
 * - name: full name string; default id. Shown in details and accessible name.
 * - label: optional short node label string; default name. Use a concise label
 *   for long names (node shows up to three lines); full name remains in the
 *   accessible name and detail panel.
 * - role: string, default "Area of interest". Describes the skill's role.
 * - status: string, default "Exploring". Honest stage, NOT a numeric rating.
 *   Seeded values: Current, Developing, Learning, Exploring, Interest. Any new
 *   nonempty label is supported; the visible legend updates automatically.
 * - description: string, default ""; omitted when empty.
 * - focus: string, default ""; the Current focus subsection is omitted if empty.
 * - order: finite number, default array index; sorted ascending with stable ties.
 *   Controls node order only. Layout and SVG geometry adapt to item count/width.
 *   There are no manual x/y coordinates: nodes cannot accidentally overlap.
 * - emphasis: "quiet" | "normal" | "strong"; default "normal". Cosmetic size
 *   and border weight only; unrelated to status or proficiency. Python is strong.
 * - appearance: optional object; defaults below. The three independent fields:
 *     theme: "green" | "blue" | "thermal" | "white"; default "blue".
 *       thermal is the warm heat-transfer accent used in the hero.
 *     intensity: "low" | "medium" | "high"; default "medium".
 *       Changes accent border strength and subtle surface tint, never text opacity.
 *     contrast: "standard" | "high"; default "standard".
 *       Both use readable light text on dark surfaces; high uses white text and
 *       a darker surface. White theme is a white accent, NOT white-on-white text.
 *   Unknown enums, nulls, and wrong types use their defaults. Theme/intensity/
 *   contrast are visual choices, independent of status. Labels never disappear.
 * - No other fields are consumed; old x/y/projects fields are no longer used.
 *
 * CONNECTIONS: Each ["skill-id", "other-id"] adds an undirected SVG edge.
 * Both ids must exist. Unknown ids, self-links, malformed pairs, and duplicates
 * (including reversed pairs) are ignored. No other properties are supported.
 * To link a skill to a PROJECT, add this skill id to that project's `skills`
 * array in projects.js. Do not duplicate that association here.
 *
 * COPYABLE ADDITION (append object INSIDE skills, pair INSIDE connections):
 * { id: "new-method", name: "New Engineering Method", label: "New Method",
 *   role: "Learning direction", status: "Learning", order: 20,
 *   description: "Describe only work or interest you can substantiate.",
 *   focus: "The next specific topic to explore.", emphasis: "normal",
 *   appearance: { theme: "white", intensity: "low", contrast: "high" } },
 * ["new-method", "python"],
 *
 * Add as many items as needed: circles and connections remain a map on mobile,
 * and the map grows vertically. Native buttons support Tab, Enter, and Space.
 */
export const skills = [
  {
    id: "cfd",
    name: "CFD",
    role: "Direction",
    status: "Learning",
    description:
      "The direction I’m building toward: using computational models to understand fluid flow.",
    focus:
      "Connecting fluid mechanics, numerical methods, and careful interpretation of simulation results.",
    order: 4,
    emphasis: "normal",
    appearance: {
      theme: "blue",
      intensity: "low",
      contrast: "standard",
    },
  },
  {
    id: "fluids",
    name: "Fluid Mechanics",
    role: "Foundation",
    status: "Developing",
    description:
      "The physical foundation behind the simulations I want to understand.",
    focus:
      "Strengthening the link between governing equations, assumptions, and flow behaviour.",
    order: 0,
    emphasis: "normal",
    appearance: {
      theme: "blue",
      intensity: "low",
      contrast: "standard",
    },
  },
  {
    id: "openfoam",
    name: "OpenFOAM",
    role: "Simulation tool",
    status: "Exploring",
    description:
      "An open-source CFD tool I’m exploring as part of my simulation direction.",
    focus:
      "Learning how a simulation case is organised before documenting a complete study.",
    order: 2,
    emphasis: "quiet",
    appearance: {
      theme: "blue",
      intensity: "low",
      contrast: "standard",
    },
  },
  {
    id: "python",
    name: "Python",
    role: "Strongest working tool",
    status: "Current",
    description:
      "A practical way to automate engineering workflows. MeshStudy is implemented as a modular Python package.",
    focus:
      "Developing maintainable tools that connect configuration, execution, and useful results.",
    order: 5,
    emphasis: "strong",
    appearance: {
      theme: "green",
      intensity: "high",
      contrast: "standard",
    },
  },
  {
    id: "numerical",
    name: "Numerical Methods",
    role: "Foundation",
    status: "Developing",
    description:
      "The connection between a continuous engineering problem and a discrete computation.",
    focus:
      "Building intuition for discretisation, convergence, and the limitations of a numerical answer.",
    order: 3,
    emphasis: "normal",
    appearance: {
      theme: "blue",
      intensity: "low",
      contrast: "standard",
    },
  },
  {
    id: "validation",
    name: "Verification & Validation",
    role: "Engineering judgement",
    status: "Learning",
    description:
      "Learning to ask whether a numerical result is sufficiently resolved, and whether the model represents the intended problem.",
    focus:
      "Mesh refinement through MeshStudy; broader validation remains a learning direction.",
    order: 6,
    emphasis: "normal",
    appearance: {
      theme: "blue",
      intensity: "low",
      contrast: "standard",
    },
  },
  {
    id: "fea",
    name: "FEA",
    role: "Current applied method",
    status: "Current",
    description:
      "The current application area for MeshStudy: mesh refinement in FreeCAD FEM static structural analysis.",
    focus:
      "Comparing quantities of interest across mesh sizes and inspecting convergence.",
    order: 7,
    emphasis: "normal",
    appearance: {
      theme: "green",
      intensity: "medium",
      contrast: "standard",
    },
  },
  {
    id: "heat",
    name: "Heat Transfer",
    role: "Secondary direction",
    status: "Interest",
    description:
      "A growing interest alongside CFD: how thermal behaviour connects to fluid flow and engineering systems.",
    focus:
      "Building a foundation before defining a thermal study. No completed heat-transfer project or results are claimed.",
    order: 1,
    emphasis: "normal",
    appearance: {
      theme: "thermal",
      intensity: "low",
      contrast: "standard",
    },
  },
  {
    id: "freecad",
    name: "FreeCAD",
    role: "Engineering tool",
    status: "Current",
    description:
      "The platform for MeshStudy, with study and result objects integrated into the document tree.",
    focus:
      "Making a repeated FEM workflow easier to configure, run, and inspect.",
    order: 8,
    emphasis: "normal",
    appearance: {
      theme: "green",
      intensity: "low",
      contrast: "standard",
    },
  },
];
export const connections = [
  ["cfd", "heat"],
  ["cfd", "fluids"],
  ["cfd", "openfoam"],
  ["cfd", "numerical"],
  ["cfd", "python"],
  ["cfd", "validation"],
  ["numerical", "validation"],
  ["validation", "fea"],
  ["fea", "freecad"],
  ["python", "freecad"],
  ["python", "fea"],
];
