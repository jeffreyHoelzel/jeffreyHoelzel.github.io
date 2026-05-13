import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { getProjectBySlug, projectRecords } from "$lib/projects";

export const prerender = true;

export function entries() {
  return projectRecords.map((project) => ({ slug: project.slug }));
}

export const load: PageLoad = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    throw error(404, "Project not found");
  }

  return {
    project,
  };
};
