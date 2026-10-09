// Runtime normalization: author content only in data/skills.js and data/projects.js.
import {
  skills as rawSkills,
  connections as rawConnections,
} from "./data/skills.js";
import { projects as rawProjects } from "./data/projects.js";
const list = (value) => (Array.isArray(value) ? value : []);
const text = (value, fallback = "") =>
  typeof value === "string" ? value.trim() || fallback : fallback;
const choice = (value, values, fallback) =>
  values.includes(value) ? value : fallback;
const object = (value) => (value && typeof value === "object" ? value : {});
const unique = (values) => [...new Set(values)];
export function safeUrl(value) {
  const url = text(value);
  if (!url) return "";
  try {
    const parsed = new URL(url, location.href);
    return ["http:", "https:", "mailto:"].includes(parsed.protocol) ? url : "";
  } catch {
    return "";
  }
}
function safeImage(value) {
  const url = safeUrl(value);
  return url && !url.toLowerCase().startsWith("mailto:") ? url : "";
}
export const scale = (value, fallback = 5) => Number.isFinite(value) ? Math.max(0, Math.min(10, value)) : fallback;
export function appearance(value) {
  const data = object(value);
  return {
    theme: choice(data.theme, ["green", "blue", "thermal", "white"], "blue"),
    intensity: scale(data.intensity),
    contrast: choice(data.contrast, ["standard", "high"], "standard"),
  };
}
const palettes = {
  green: [181, 229, 210],
  blue: [172, 209, 243],
  thermal: [237, 193, 155],
  white: [233, 239, 245],
};
export function applyAppearance(node, value) {
  const visual = appearance(value),
    rgb = palettes[visual.theme];
  const level = 0.025 + visual.intensity * 0.0225;
  const mix = (ratio) =>
    `rgb(${rgb.map((v, i) => Math.round([16, 25, 29][i] * (1 - ratio) + v * ratio)).join(" ")})`;
  node.dataset.theme = visual.theme;
  node.dataset.intensity = visual.intensity;
  node.dataset.contrast = visual.contrast;
  node.style.setProperty("--item-accent", `rgb(${rgb.join(" ")})`);
  node.style.setProperty(
    "--item-border",
    mix(0.3 + visual.intensity * 0.065),
  );
  node.style.setProperty(
    "--item-surface",
    mix(visual.contrast === "high" ? Math.min(level, 0.06) : level),
  );
  node.style.setProperty(
    "--item-text",
    visual.contrast === "high" ? "#ffffff" : "#f0f4f5",
  );
  node.style.setProperty(
    "--item-muted",
    visual.contrast === "high" ? "#e1e9ed" : "#c7d4dc",
  );
}
function validItems(source) {
  const ids = new Set();
  return list(source).filter((value) => {
    const id = text(object(value).id);
    if (!/^[a-z0-9][a-z0-9-]*$/.test(id) || ids.has(id)) return false;
    ids.add(id);
    return true;
  });
}
export const skills = validItems(rawSkills)
  .map((value, index) => ({
    id: text(value.id),
    name: text(value.name, value.id),
    label: text(value.label, text(value.name, value.id)),
    role: text(value.role, "Area of interest"),
    status: text(value.status, "Exploring"),
    description: text(value.description),
    focus: text(value.focus),
    rank: scale(value.rank),
    order: Number.isFinite(value.order) ? value.order : null,
    appearance: appearance(value.appearance),
  }))
  .sort((a, b) => (a.order ?? 10 - a.rank) - (b.order ?? 10 - b.rank));
const skillIds = new Set(skills.map((s) => s.id));
const edgeIds = new Set();
export const connections = list(rawConnections).filter((pair) => {
  if (
    !Array.isArray(pair) ||
    pair.length !== 2 ||
    pair[0] === pair[1] ||
    !pair.every((id) => skillIds.has(id))
  )
    return false;
  const key = [...pair].sort().join(":");
  if (edgeIds.has(key)) return false;
  edgeIds.add(key);
  return true;
});
function media(value) {
  const data = object(value),
    src = safeImage(data.src);
  return src ? { src, alt: text(data.alt), caption: text(data.caption) } : null;
}
export const projects = validItems(rawProjects).map((value) => ({
  id: text(value.id),
  title: text(value.title, value.id),
  category: text(value.category),
  status: text(value.status, "Planned"),
  size: scale(value.size),
  summary: text(value.summary),
  appearance: appearance(value.appearance),
  skills: unique(list(value.skills).filter((id) => skillIds.has(id))),
  tags: list(value.tags).filter((v) => typeof v === "string"),
  image: safeImage(value.image),
  imageAlt: text(value.imageAlt),
  visual: choice(value.visual, ["flow", "grid", "none"], "grid"),
  sections: list(value.sections)
    .filter((s) => s && typeof s === "object")
    .map((s) => ({
      title: text(s.title, "Notes"),
      text: text(s.text),
      items: list(s.items).filter((v) => typeof v === "string"),
      image: safeImage(s.image),
      imageAlt: text(s.imageAlt),
      media: list(s.media).map(media).filter(Boolean),
    }))
    .filter((s) => s.text || s.items.length || s.image || s.media.length),
  links: list(value.links)
    .map((v) => object(v))
    .map((v) => ({
      label: text(v.label, "View resource"),
      url: safeUrl(v.url),
    }))
    .filter((v) => v.url),
}));
export const projectsForSkill = (id) =>
  projects.filter((project) => project.skills.includes(id));

// A new navigation or motion preference can cancel a native view transition.
// Treat those expected promise rejections as a normal navigation fallback.
for (const eventName of ["pagereveal", "pageswap"]) {
  window.addEventListener(eventName, (event) => {
    event.viewTransition?.ready.catch(() => {});
    event.viewTransition?.finished.catch(() => {});
  });
}
