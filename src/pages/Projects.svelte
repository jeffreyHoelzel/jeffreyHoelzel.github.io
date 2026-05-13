<script lang="ts">
  import { base } from "$app/paths";
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import "../styles/Projects.css";
  import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "svelte-icons/fa";
  import {
    projectRecords,
    type ProjectCategory,
    type ProjectRecord,
  } from "$lib/projects";

  type ProjectFilter = "All" | ProjectCategory;

  type IconAction = {
    url: string;
    kind: "github" | "external";
  };

  const filterOptions: ProjectFilter[] = [
    "All",
    "AI",
    "ML",
    "Full-Stack",
    "Data",
    "Automation",
    "Computer Vision",
  ];

  const INITIAL_PROJECTS_VISIBLE = 3;
  const PROJECTS_BATCH_SIZE = 3;
  const MAX_TECHNOLOGY_TAGS = 5;

  let activeFilter: ProjectFilter = "All";
  let lastFilter: ProjectFilter = activeFilter;
  let visibleCount = INITIAL_PROJECTS_VISIBLE;
  let isLoadingMore = false;
  let loadMoreTimeout: ReturnType<typeof setTimeout> | null = null;

  $: visibleProjects = projectRecords.filter((project) =>
    activeFilter === "All" ? true : project.categories.includes(activeFilter),
  );

  $: if (activeFilter !== lastFilter) {
    if (loadMoreTimeout !== null) {
      clearTimeout(loadMoreTimeout);
      loadMoreTimeout = null;
    }
    isLoadingMore = false;
    visibleCount = INITIAL_PROJECTS_VISIBLE;
    lastFilter = activeFilter;
  }

  $: visibleCount = Math.min(visibleCount, visibleProjects.length);
  $: displayedProjects = visibleProjects.slice(0, visibleCount);

  function toAssetUrl(path: string): string {
    return `${base}${path}`;
  }

  function formatCategoryLabel(categories: ProjectCategory[]): string {
    return categories.map((category) => category.toUpperCase()).join(", ");
  }

  function getDetailUrl(project: ProjectRecord): string {
    return `${base}/projects/${project.slug}/`;
  }

  function getIconAction(project: ProjectRecord): IconAction | null {
    if (project.links.repoUrl) {
      return {
        url: project.links.repoUrl,
        kind: "github",
      };
    }

    const external = project.links.liveUrl ?? project.links.demoUrl;

    if (external) {
      return {
        url: external,
        kind: "external",
      };
    }

    return null;
  }

  function loadMoreProjects() {
    if (isLoadingMore || visibleCount >= visibleProjects.length) return;

    isLoadingMore = true;
    loadMoreTimeout = setTimeout(() => {
      visibleCount = Math.min(
        visibleCount + PROJECTS_BATCH_SIZE,
        visibleProjects.length,
      );
      isLoadingMore = false;
      loadMoreTimeout = null;
    }, 180);
  }

  function observeLoadMore(node: HTMLDivElement) {
    if (typeof IntersectionObserver === "undefined") return;
    let hasTriggeredSinceLastExit = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry) return;

        if (!entry.isIntersecting) {
          hasTriggeredSinceLastExit = false;
          return;
        }

        if (!hasTriggeredSinceLastExit) {
          hasTriggeredSinceLastExit = true;
          loadMoreProjects();
        }
      },
      {
        rootMargin: "160px 0px",
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
      },
    };
  }

  onDestroy(() => {
    if (loadMoreTimeout !== null) {
      clearTimeout(loadMoreTimeout);
      loadMoreTimeout = null;
    }
  });
</script>

<main class="projectsPage">
  <section class="projectsSection sectionPad">
    <div class="wrap">
      <header class="projectsIntro">
        <h1 class="projectsTitle">My Projects</h1>
        <p class="projectsSubtitle">
          A collection of my projects spanning AI/ML, full-stack development,
          data engineering, and automation across research, industry, and
          personal work.
        </p>

        <div class="projectsFilters" aria-label="Project category filters">
          {#each filterOptions as filter}
            <button
              class="filterPill"
              class:filterPillActive={filter === activeFilter}
              type="button"
              aria-pressed={filter === activeFilter}
              on:click={() => (activeFilter = filter)}
            >
              {filter}
            </button>
          {/each}
        </div>
      </header>

      <div class="projectsGrid">
        {#each displayedProjects as project, index (project.slug)}
          {@const detailUrl = getDetailUrl(project)}
          {@const iconAction = getIconAction(project)}
          {@const visibleTechnologies = project.technologies.slice(0, MAX_TECHNOLOGY_TAGS)}
          {@const hiddenTechnologyCount =
            project.technologies.length - visibleTechnologies.length}
          <article
            class="projectCard"
            class:projectCardBlue={project.accent === "blue"}
            class:projectCardViolet={project.accent === "violet"}
            class:projectCardTeal={project.accent === "teal"}
            in:fly={{
              y: 18,
              duration: 300,
              opacity: 0.1,
              delay: (index % PROJECTS_BATCH_SIZE) * 55,
            }}
          >
            <div class="projectMedia" aria-label={project.name}>
              <img
                class="projectImage"
                src={toAssetUrl(project.coverImage.src)}
                alt={project.coverImage.alt}
                loading="lazy"
              />
            </div>

            <div class="projectBody">
              <p class="projectCategories">
                {formatCategoryLabel(project.categories)}
              </p>
              <h2 class="projectName">{project.name}</h2>
              <p class="projectSubtitleText">{project.subtitle}</p>
              <p class="projectDescription">{project.description}</p>

              <div class="projectTags">
                {#each visibleTechnologies as tech}
                  <span class="projectTag">{tech}</span>
                {/each}
                {#if hiddenTechnologyCount > 0}
                  <span class="projectTag">+{hiddenTechnologyCount}</span>
                {/if}
              </div>

              <div class="projectActions">
                <a class="projectPrimaryBtn" href={detailUrl}>
                  <span>View Details</span>
                  <span class="inlineIcon" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </a>

                {#if iconAction}
                  <a
                    class="projectIconBtn"
                    href={iconAction.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open additional project link for ${project.name}`}
                  >
                    <span class="iconOnly" aria-hidden="true">
                      {#if iconAction.kind === "github"}
                        <FaGithub />
                      {:else}
                        <FaExternalLinkAlt />
                      {/if}
                    </span>
                  </a>
                {/if}
              </div>
            </div>
          </article>
        {/each}
      </div>

      {#if displayedProjects.length < visibleProjects.length}
        <div class="projectsLoadState" aria-live="polite" role="status">
          <span
            class="projectsLoadDot"
            class:projectsLoadDotActive={isLoadingMore}
            aria-hidden="true"
          ></span>
          <span class="projectsLoadText">
            {isLoadingMore
              ? "Loading more projects..."
              : "Scroll to load more projects"}
          </span>
        </div>
        <div
          class="projectsLoadTrigger"
          use:observeLoadMore
          aria-hidden="true"
        ></div>
      {/if}
    </div>
  </section>
</main>
