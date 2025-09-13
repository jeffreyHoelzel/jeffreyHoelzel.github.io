import { type ProjectMetadata, type HomeMetadata } from "./types";
const API_BASE = "http://127.0.0.1:8080";

export const fetchHomepage = (): Promise<HomeMetadata> => 
  fetch(`${API_BASE}/api/home`).then((res) => {
    if (!res.ok) throw new Error(`Request for homepage failed with ${res.status}`);
    return res.json();
  })

export const fetchProjects = (): Promise<ProjectMetadata[]> => 
  fetch(`${API_BASE}/api/projects`).then((res) => {
    if (!res.ok) throw new Error(`Request for list of projects failed with ${res.status}`);
    return res.json();
  });

export const fetchProject = (slug: string): Promise<ProjectMetadata> => 
  fetch(`${API_BASE}/api/projects/${slug}`).then((res) => {
    if (!res.ok) throw new Error(`Request for project '${slug}' failed with ${res.status}`);
    return res.json();
  });
