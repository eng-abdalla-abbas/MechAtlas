/**
 * Edit all project content here; skills/connections live in data/skills.js.
 * size: number 0–10. 0 hides the homepage bubble but keeps its detail URL.
 * Larger numbers make larger bubbles and sort first on mobile. The highest
 * visible project is centered on desktop; ties preserve array order.
 * appearance: { theme: "green"|"blue"|"thermal"|"white", intensity: 0–10,
 *   contrast: "standard"|"high" }. Intensity affects tint/border, never text.
 * Missing size/intensity default to 5; finite values are clamped to 0–10.
 * Assets: put each project's files in assets/ProjectName/ and reference paths
 * here (forward slashes). Adding a project needs only this entry + its files.
 * id: unique lowercase slug; route is project.html?id=your-id.
 * title/category/status/summary/imageAlt: plain text. image: cover path.
 * skills: skill ids; tags: text labels; visual: "flow"|"grid"|"none" fallback.
 * sections: [{title, text, items: [text], image, imageAlt,
 *   media: [{src, alt, caption}]}]. All section fields are optional.
 * links: [{label, url}]. URLs accept relative paths or HTTP(S); links also mailto.
 * Only id is required; invalid ids/duplicates are skipped. Status defaults to
 * "Planned"; optional text/arrays default empty. Unknown themes use blue.
 */
export const projects = [
{
  "id": "perfume-wooden-box",
  "title": "Perfume Wooden Box",
  "category": "Reverse engineering \u00b7 CAD",
  "status": "Documented project",
  "size": 8,
  "appearance": {
    "theme": "thermal",
    "intensity": 7,
    "contrast": "standard"
  },
  "image": "assets/PerfumeWoodenBox/reference-closed.jpg",
  "imageAlt": "Original wooden perfume box with interlocking panels and closed lid",
  "summary": "From a physical perfume box to a CAD assembly and dimensioned parts.",
  "skills": [
    "freecad"
  ],
  "tags": [
    "Reverse engineering",
    "CAD assembly",
    "Technical drawings"
  ],
  "sections": [
    {
      "title": "Overview",
      "text": "Reverse engineering a wooden perfume box: reconstructing its panels, lid and internal bottle holder as a CAD assembly, with drawings documenting the parts and assembly."
    },
    {
      "title": "Physical reference",
      "text": "The original box provides the reference for the enclosure, panel joints and lid arrangement.",
      "media": [
        {
          "src": "assets/PerfumeWoodenBox/reference-open.jpg",
          "alt": "Physical perfume box with lid open"
        }
      ]
    },
    {
      "title": "Assembly reconstruction",
      "text": "The CAD views document the closed and open configurations, with separate panels and internal inserts.",
      "media": [
        {
          "src": "assets/PerfumeWoodenBox/cad-closed.png",
          "alt": "Closed CAD assembly"
        },
        {
          "src": "assets/PerfumeWoodenBox/cad-open.png",
          "alt": "Open CAD assembly with bottle-shaped insert"
        },
        {
          "src": "assets/PerfumeWoodenBox/assembly-drawing.jpg",
          "alt": "Closed, exploded and open assembly drawing"
        }
      ]
    },
    {
      "title": "Part geometry",
      "text": "The dimensioned drawing records panel profiles, slots, thicknesses and bottle-holder cutouts.",
      "media": [
        {
          "src": "assets/PerfumeWoodenBox/dimensions.jpg",
          "alt": "Dimensioned panel and insert drawings"
        }
      ]
    },
    {
      "title": "Model views",
      "media": [
        {
          "src": "assets/PerfumeWoodenBox/cad-detail-1.png",
          "alt": "Additional CAD model view 1"
        },
        {
          "src": "assets/PerfumeWoodenBox/cad-detail-2.png",
          "alt": "Additional CAD model view 2"
        },
        {
          "src": "assets/PerfumeWoodenBox/cad-detail-3.png",
          "alt": "Additional CAD model view 3"
        }
      ]
    }
  ]
},
  {
    id: "meshstudy",
    title: "MeshStudy",
    category: "FreeCAD workbench · Python",
    status: "Working project",
    size: 10,
    image: "assets/MeshStudy/meshstudy-setup.png",
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
        image: "assets/MeshStudy/meshstudy-chart.png",
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
      intensity: 5,
      contrast: "standard",
    },
  },
  {
    id: "cfd-study",
    title: "CFD Study",
    category: "Future direction",
    status: "Planned",
    size: 5,
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
      intensity: 2,
      contrast: "standard",
    },
  },
  {
    id: "python-tool",
    title: "Engineering Tool",
    category: "Python · Future direction",
    status: "Planned",
    size: 3,
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
      intensity: 2,
      contrast: "standard",
    },
  },
];
