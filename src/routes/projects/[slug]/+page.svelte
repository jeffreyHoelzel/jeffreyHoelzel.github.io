<script lang="ts">
  import { base } from "$app/paths";
  import "../../../styles/ProjectDetail.css";
  import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "svelte-icons/fa";
  import type { PageData } from "./$types";

  export let data: PageData;

  const projectsHref = `${base}/projects/`;

  function withBase(path: string): string {
    return `${base}${path}`;
  }

  function formatCategoryLabel(categories: string[]): string {
    return categories.map((category) => category.toUpperCase()).join(", ");
  }

  $: liveActionUrl = data.project.links.demoUrl ?? data.project.links.liveUrl;
</script>

<main class="projectDetailPage">
  <section class="projectDetailHero sectionPad">
    <div class="wrap projectDetailHeroWrap">
      <a class="projectDetailBackLink" href={projectsHref}>
        <span class="projectDetailBackIcon" aria-hidden="true"
          ><FaArrowLeft /></span
        >
        <span>Back to Projects</span>
      </a>

      <p class="projectDetailCategories">
        {formatCategoryLabel(data.project.categories)}
      </p>
      <h1 class="projectDetailTitle">{data.project.name}</h1>
      <p class="projectDetailSubtitle">{data.project.subtitle}</p>
      <p class="projectDetailSummary">{data.project.description}</p>
    </div>
  </section>

  <section class="projectDetailGallerySection">
    <div class="wrap">
      <div class="projectDetailGalleryGrid">
        {#each data.project.galleryImages as image}
          <figure class="projectDetailImageCard">
            <img
              class="projectDetailImage"
              src={withBase(image.src)}
              alt={image.alt}
              loading="lazy"
            />
          </figure>
        {/each}
      </div>
    </div>
  </section>

  <section class="projectDetailAbout sectionPad">
    <div class="wrap projectDetailBodyWrap">
      <article class="projectDetailPanel">
        <h2 class="projectDetailHeading">About This Project</h2>
        <div class="projectDetailAboutText">
          {#each data.project.aboutSections as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </article>

      <article class="projectDetailPanel">
        <h2 class="projectDetailHeading">Technologies Used</h2>
        <div class="projectDetailTags">
          {#each data.project.technologies as tech}
            <span class="projectDetailTag">{tech}</span>
          {/each}
        </div>

        {#if liveActionUrl || data.project.links.repoUrl}
          <div class="projectDetailActions">
            {#if liveActionUrl}
              <a
                class="projectDetailPrimaryBtn"
                href={liveActionUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span class="projectDetailActionIcon" aria-hidden="true">
                  <FaExternalLinkAlt />
                </span>
                <span>Visit Website</span>
              </a>
            {/if}

            {#if data.project.links.repoUrl}
              <a
                class="projectDetailSecondaryBtn"
                href={data.project.links.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span class="projectDetailActionIcon" aria-hidden="true">
                  <FaGithub />
                </span>
                <span>Visit GitHub</span>
              </a>
            {/if}
          </div>
        {/if}
      </article>
    </div>
  </section>
</main>
