// Positions are percentages within the map. Status is a learning stage, never a rating.
export const skills = [
  {
    id: "cfd",
    name: "CFD",
    role: "Direction",
    status: "Learning",
    x: 50,
    y: 50,
    description:
      "The direction I’m building toward: using computational models to understand fluid flow.",
    focus:
      "Connecting fluid mechanics, numerical methods, and careful interpretation of simulation results.",
    projects: ["cfd-study"],
  },
  {
    id: "fluids",
    name: "Fluid Mechanics",
    role: "Foundation",
    status: "Developing",
    x: 17,
    y: 18,
    description:
      "The physical foundation behind the simulations I want to understand.",
    focus:
      "Strengthening the link between governing equations, assumptions, and flow behaviour.",
    projects: ["cfd-study"],
  },
  {
    id: "openfoam",
    name: "OpenFOAM",
    role: "Simulation tool",
    status: "Exploring",
    x: 83,
    y: 18,
    description:
      "An open-source CFD tool I’m exploring as part of my simulation direction.",
    focus:
      "Learning how a simulation case is organised before documenting a complete study.",
    projects: ["cfd-study"],
  },
  {
    id: "python",
    name: "Python",
    role: "Strongest working tool",
    status: "Current",
    x: 83,
    y: 50,
    description:
      "A practical way to automate engineering workflows. MeshStudy is implemented as a modular Python package.",
    focus:
      "Developing maintainable tools that connect configuration, execution, and useful results.",
    projects: ["meshstudy", "python-tool"],
  },
  {
    id: "numerical",
    name: "Numerical Methods",
    role: "Foundation",
    status: "Developing",
    x: 17,
    y: 50,
    description:
      "The connection between a continuous engineering problem and a discrete computation.",
    focus:
      "Building intuition for discretisation, convergence, and the limitations of a numerical answer.",
    projects: ["meshstudy", "cfd-study"],
  },
  {
    id: "validation",
    name: "Verification & Validation",
    role: "Engineering judgement",
    status: "Learning",
    x: 17,
    y: 82,
    description:
      "Learning to ask whether a numerical result is sufficiently resolved, and whether the model represents the intended problem.",
    focus:
      "Mesh refinement through MeshStudy; broader validation remains a learning direction.",
    projects: ["meshstudy", "cfd-study"],
  },
  {
    id: "fea",
    name: "FEA",
    role: "Current applied method",
    status: "Current",
    x: 50,
    y: 82,
    description:
      "The current application area for MeshStudy: mesh refinement in FreeCAD FEM static structural analysis.",
    focus:
      "Comparing quantities of interest across mesh sizes and inspecting convergence.",
    projects: ["meshstudy"],
  },
  {
    id: "heat",
    name: "Heat Transfer",
    role: "Secondary direction",
    status: "Interest",
    x: 50,
    y: 18,
    description:
      "A growing interest alongside CFD: how thermal behaviour connects to fluid flow and engineering systems.",
    focus:
      "Building a foundation before defining a thermal study. No completed heat-transfer project or results are claimed.",
    projects: [],
  },
  {
    id: "freecad",
    name: "FreeCAD",
    role: "Engineering tool",
    status: "Current",
    x: 83,
    y: 82,
    description:
      "The platform for MeshStudy, with study and result objects integrated into the document tree.",
    focus:
      "Making a repeated FEM workflow easier to configure, run, and inspect.",
    projects: ["meshstudy"],
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
