/**
 * Edit skills and connections here; projects live in data/projects.js.
 * rank: number 0–10 controls bubble size and automatic order (highest first).
 * Optional order: number overrides sort position; omit for rank-based ordering.
 * appearance: { theme: "green"|"blue"|"thermal"|"white", intensity: 0–10,
 *   contrast: "standard"|"high" }. Intensity never fades text; 0 remains visible.
 * rank is visual priority, independent of the freely editable status label.
 * id must be a unique lowercase slug. name, label (short name), role, status,
 * description and focus are plain text. Missing rank/intensity default to 5;
 * finite numbers are clamped to 0–10. Equal ranks keep their array order.
 * connections: ["skill-id", "other-id"]; invalid/duplicate edges are ignored.
 * To connect projects, edit their skills array in projects.js.
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
    rank: 5,
    appearance: {
      theme: "blue",
      intensity: 2,
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
    rank: 5,
    appearance: {
      theme: "blue",
      intensity: 2,
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
    rank: 2,
    appearance: {
      theme: "blue",
      intensity: 2,
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
    rank: 10,
    appearance: {
      theme: "green",
      intensity: 8,
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
    rank: 5,
    appearance: {
      theme: "blue",
      intensity: 2,
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
    rank: 5,
    appearance: {
      theme: "blue",
      intensity: 4,
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
    rank: 8,
    appearance: {
      theme: "green",
      intensity: 6,
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
    rank: 5,
    appearance: {
      theme: "thermal",
      intensity: 2,
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
    rank: 5,
    appearance: {
      theme: "green",
      intensity: 7,
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
