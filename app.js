import { skills, connections } from "./data/skills.js";
import { projects } from "./data/projects.js";
const NS = "http://www.w3.org/2000/svg";
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text) n.textContent = text;
  return n;
};
const flow = document.querySelector("#flow-field");
// Schematic streamlines and warm contours communicate direction, not computed data.
for (let i = 0; i < 22; i++) {
  const path = document.createElementNS(NS, "path");
  const y = 58 + i * 18;
  const bend = Math.exp(-Math.pow((i - 10.5) / 5.8, 2)) * (i < 11 ? -85 : 85);
  path.setAttribute(
    "d",
    `M 5 ${y} C 145 ${y}, 175 ${y + bend}, 300 ${y + bend} S 445 ${y}, 595 ${y}`,
  );
  path.setAttribute("class", i % 4 === 0 ? "streamline major" : "streamline");
  flow.append(path);
}
for (let i = 0; i < 5; i++) {
  const contour = document.createElementNS(NS, "ellipse");
  contour.setAttribute("cx", "320");
  contour.setAttribute("cy", "252");
  contour.setAttribute("rx", String(33 + i * 15));
  contour.setAttribute("ry", String(21 + i * 12));
  contour.setAttribute("class", "thermal-contour");
  contour.setAttribute("opacity", String(0.55 - i * 0.075));
  flow.append(contour);
}
const field = document.querySelector("#project-field");
projects.forEach((p) => {
  const a = el(
    "a",
    `project-bubble ${p.size} ${p.status === "Planned" ? "planned" : ""}`,
  );
  a.href = `project.html?id=${encodeURIComponent(p.id)}`;
  a.dataset.project = p.id;
  a.setAttribute("aria-label", `${p.title} — ${p.status}. View project`);
  if (p.image) {
    const img = el("img");
    img.src = p.image;
    img.alt = "";
    img.loading = "lazy";
    a.append(img);
  } else {
    const visual = el("div", `bubble-visual ${p.visual || "grid"}`);
    visual.setAttribute("aria-hidden", "true");
    a.append(visual);
  }
  const copy = el("div", "bubble-copy");
  copy.append(
    el("span", p.status === "Planned" ? "planned-label" : "badge", p.status),
    el("h3", "", p.title),
    el("span", "category", p.category),
    el("p", "summary", p.summary),
    el("span", "bubble-arrow", "↗"),
  );
  a.append(copy);
  field.append(a);
});
const nodes = document.querySelector("#skill-nodes"),
  lines = document.querySelector("#skill-lines"),
  detail = document.querySelector("#skill-detail");
connections.forEach(([a, b]) => {
  const start = skills.find((s) => s.id === a),
    end = skills.find((s) => s.id === b);
  if (!start || !end) return;
  const line = document.createElementNS(NS, "line");
  line.setAttribute("x1", `${start.x}%`);
  line.setAttribute("y1", `${start.y}%`);
  line.setAttribute("x2", `${end.x}%`);
  line.setAttribute("y2", `${end.y}%`);
  line.dataset.nodes = `${a} ${b}`;
  lines.append(line);
});
skills.forEach((s) => {
  const b = el("button", "skill-node", s.name);
  b.type = "button";
  b.dataset.id = s.id;
  b.dataset.stage = s.status.toLowerCase();
  b.style.left = `${s.x}%`;
  b.style.top = `${s.y}%`;
  b.setAttribute("aria-pressed", "false");
  b.setAttribute("aria-controls", "skill-detail");
  b.append(el("small", "", s.status));
  b.addEventListener("click", () => select(s));
  nodes.append(b);
});
// The mobile map keeps its circles and connections in a tall staggered layout.
const mobileMap = window.matchMedia("(max-width: 760px)");
function positionMap() {
  const positions = new Map(
    skills.map((skill, index) => [
      skill.id,
      mobileMap.matches
        ? { x: index % 2 ? 75 : 25, y: 7 + index * 10.5 }
        : skill,
    ]),
  );
  nodes.querySelectorAll("button").forEach((button) => {
    const position = positions.get(button.dataset.id);
    button.style.left = `${position.x}%`;
    button.style.top = `${position.y}%`;
  });
  lines.querySelectorAll("line").forEach((line) => {
    const [startId, endId] = line.dataset.nodes.split(" ");
    const start = positions.get(startId),
      end = positions.get(endId);
    line.setAttribute("x1", `${start.x}%`);
    line.setAttribute("y1", `${start.y}%`);
    line.setAttribute("x2", `${end.x}%`);
    line.setAttribute("y2", `${end.y}%`);
  });
}
mobileMap.addEventListener("change", positionMap);
positionMap();
function select(s) {
  nodes
    .querySelectorAll("button")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.id === s.id)),
    );
  lines
    .querySelectorAll("line")
    .forEach((l) =>
      l.classList.toggle("active", l.dataset.nodes.split(" ").includes(s.id)),
    );
  detail.replaceChildren(
    el("span", "badge", `${s.role} / ${s.status}`),
    el("h3", "", s.name),
    el("p", "", s.description),
    el("h4", "", "Current focus"),
    el("p", "", s.focus),
  );
  field.querySelectorAll("a").forEach((a) => {
    const related = s.projects.includes(a.dataset.project);
    a.classList.toggle("is-related", related);
  });
  const names = projects
    .filter((p) => s.projects.includes(p.id))
    .map((p) => `${p.title}${p.status === "Planned" ? " (planned)" : ""}`)
    .join(", ");
  document.querySelector("#project-filter-status").textContent =
    `Connected to ${s.name}: ${names || "No documented project yet"}. All projects remain available.`;
}
function reset() {
  nodes
    .querySelectorAll("button")
    .forEach((b) => b.setAttribute("aria-pressed", "false"));
  lines.querySelectorAll("line").forEach((l) => l.classList.remove("active"));
  field
    .querySelectorAll("a")
    .forEach((a) => a.classList.remove("is-muted", "is-related"));
  detail.replaceChildren(
    el("span", "badge", "An evolving skill map"),
    el("h3", "", "Follow a connection."),
    el(
      "p",
      "",
      "Select a node to see how it fits into my work and what I’m focusing on next.",
    ),
    el("h4", "", "A note on progress"),
    el(
      "p",
      "",
      "Python powers MeshStudy. FEA is its current application area; CFD is the direction I’m developing. These labels describe practice and learning stages, not proficiency scores.",
    ),
  );
  document.querySelector("#project-filter-status").textContent =
    "Explore a project to see the thinking behind it.";
}
document.querySelector("#reset-skills").addEventListener("click", reset);
reset();
document.querySelector("#year").textContent = new Date().getFullYear();
