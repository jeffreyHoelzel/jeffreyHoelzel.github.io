<script lang="ts">
  import { base } from "$app/paths";
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import "../styles/Projects.css";
  import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "svelte-icons/fa";

  type ProjectImage = {
    url: string;
    alt?: string;
  };

  type ProjectCategory = "AI" | "ML" | "Full-Stack" | "Data" | "Automation";

  type ProjectAccent = "blue" | "violet" | "teal";

  type Project = {
    name: string;
    subtitle: string;
    description: string;
    categories: ProjectCategory[];
    technologies: string[];
    images: ProjectImage[];
    sourceUrl?: string;
    siteUrl?: string;
    accent: ProjectAccent;
  };

  const BASE_URL = `${base}/`;
  const PROJECTS_PAGE_URL = `${base}/projects/`;
  const filterOptions = [
    "All",
    "AI",
    "ML",
    "Full-Stack",
    "Data",
    "Automation",
  ] as const;

  type ProjectFilter = (typeof filterOptions)[number];
  const INITIAL_PROJECTS_VISIBLE = 3;
  const PROJECTS_BATCH_SIZE = 3;

  let activeFilter: ProjectFilter = "All";
  let lastFilter: ProjectFilter = activeFilter;
  let visibleCount = INITIAL_PROJECTS_VISIBLE;
  let isLoadingMore = false;
  let loadMoreTimeout: ReturnType<typeof setTimeout> | null = null;

  const pepSeqPredImgs: ProjectImage[] = [
    {
      url: `${BASE_URL}PepSeqPred/pepseqpred_apis.png`,
      alt: "Sample PepSeqPred APIs for research usage",
    },
  ];

  const artemis3Imgs: ProjectImage[] = [
    {
      url: `${BASE_URL}ArtemiS3/artemis3_landing.png`,
      alt: "ArtemiS3 landing page",
    },
  ];

  const lesionShiftAiImgs: ProjectImage[] = [
    {
      url: `${BASE_URL}LesionShiftAI_port/lesionshiftai_webpage.png`,
      alt: "Screenshot of LesionShiftAI project webpage",
    },
  ];

  const ultraSignUpImgs: ProjectImage[] = [
    {
      url: `${BASE_URL}UltraSignUp/male_velocity_vs_distance.png`,
      alt: "Plot of male veclocity (km/h) vs distance (km)",
    },
  ];

  const machIvClusteringImgs: ProjectImage[] = [
    {
      url: `${BASE_URL}MACH-IV_Clustering/dendrograms.png`,
      alt: "Dendrogram plots from four different hierarchical clustering methods",
    },
  ];

  const itHelpdeskChatbotImgs: ProjectImage[] = [
    {
      url: `${BASE_URL}ITHelpdeskChatbot/hiring_image.jpg`,
      alt: "Jeffrey Hoelzel Jr. welcome banner at Cavco",
    },
  ];

  const campusHealthChatbotImgs: ProjectImage[] = [
    {
      url: `${BASE_URL}CampusHealthChatbot/chat_room_chatbot.png`,
      alt: "Sample multi-user chat room interaction with chatbot",
    },
  ];

  const louiesRatingsImgs: ProjectImage[] = [
    {
      url: `${BASE_URL}LouiesRatings/cover.png`,
      alt: "Louie's Ratings cover slide",
    },
  ];

  let projects: Project[] = [
    {
      name: "PepSeqPred",
      subtitle: "Epitope Prediction Pipeline",
      description:
        "A deep-learning workflow that predicts antibody-reactive peptide regions from sequence data for rapid serology research.",
      categories: ["AI", "ML", "Automation"],
      technologies: [
        "PyTorch",
        "Sequence Models",
        "Bioinformatics",
        "Pipelines",
        "ESM-2",
        "HPC",
        "SLURM",
      ],
      images: pepSeqPredImgs,
      sourceUrl: "https://github.com/LadnerLab/PepSeqPred",
      accent: "blue",
    },
    {
      name: "ArtemiS3",
      subtitle: "NASA and USGS S3 Search Platform",
      description:
        "An intelligent search platform for NASA and USGS AWS S3 datasets that improves discovery and retrieval speed.",
      categories: ["AI", "Full-Stack", "Data"],
      technologies: ["Svelte", "FastAPI", "AWS S3", "Meilisearch", "Docker"],
      images: artemis3Imgs,
      sourceUrl: "https://github.com/Artemi-S3/ArtemiS3",
      siteUrl:
        "https://www.sce.nau.edu/capstone/projects/CS/2026/ArtemiS3_F25/",
      accent: "violet",
    },
    {
      name: "LesionShiftAI",
      subtitle: "Skin lesion classification",
      description:
        "A research benchmark and framework for cross-dataset skin lesion classification under extreme dataset shift.",
      categories: ["ML", "Data"],
      technologies: [
        "PyTorch",
        "timm",
        "CNN",
        "ViT",
        "HPC",
        "Matplotlib",
        "Next.js",
      ],
      images: lesionShiftAiImgs,
      sourceUrl: "https://jeffreyhoelzel.com/LesionShiftAI/",
      siteUrl: "https://github.com/jeffreyHoelzel/LesionShiftAI",
      accent: "teal",
    },
    {
      name: "UltraSignUp Data Mining",
      subtitle: "Trail Race Analytics Pipeline",
      description:
        "A data mining toolchain that extracts and processes UltraSignUp race data for clean downstream analysis and reporting.",
      categories: ["Automation", "Data"],
      technologies: [
        "Python",
        "Web Scraping",
        "Selenium",
        "BeautifulSoup4",
        "Data Analysis",
      ],
      images: ultraSignUpImgs,
      accent: "blue",
    },
    {
      name: "MACH-IV Clustering",
      subtitle: "Personality Segmentation Study",
      description:
        "A clustering study over MACH-IV assessment data to identify interpretable personality groupings for psychology research.",
      categories: ["AI", "ML"],
      technologies: [
        "Clustering",
        "PCA",
        "Scikit-learn",
        "Visualization",
        "HPC",
      ],
      images: machIvClusteringImgs,
      sourceUrl: "https://github.com/jeffreyHoelzel/mach-iv-clustering",
      siteUrl: "https://jeffreyhoelzel.github.io/mach-iv-clustering/",
      accent: "violet",
    },
    {
      name: "Cavco IT Helpdesk Chatbot",
      subtitle: "Internal Automation Assistant",
      description:
        "An AI-driven IT helpdesk assistant built to help employees resolve routine technical issues more quickly.",
      categories: ["AI", "ML", "Automation"],
      technologies: [
        "LLMs",
        "Agentic AI",
        "Prompting",
        "Internal Tools",
        "Support Ops",
      ],
      images: itHelpdeskChatbotImgs,
      accent: "teal",
    },
    {
      name: "Campus Health Chatbot",
      subtitle: "Student Information Assistant",
      description:
        "A chatbot evaluation platform designed to support campus health questions and assess interaction quality in focus groups.",
      categories: ["AI", "Full-Stack"],
      technologies: [
        "Conversational AI",
        "UX Research",
        "React",
        "GCP",
        "HuggingFace",
        "PyTorch",
        "Docker",
      ],
      images: campusHealthChatbotImgs,
      accent: "blue",
    },
    {
      name: "Louie's Ratings",
      subtitle: "Professor and Course Insights",
      description:
        "A student-focused web app for reviewing instructors and exploring historic course outcome and grade distribution data.",
      categories: ["Full-Stack"],
      technologies: [
        "React",
        "Flask",
        "PostgreSQL",
        "Data UI",
        "DigitalOcean",
        "Docker",
      ],
      images: louiesRatingsImgs,
      sourceUrl: "https://github.com/jeffreyHoelzel/LouiesRatings",
      accent: "violet",
    },
  ];

  $: visibleProjects = projects.filter((project) =>
    activeFilter === "All"
      ? true
      : project.categories.includes(activeFilter as ProjectCategory),
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

  function formatCategoryLabel(categories: ProjectCategory[]): string {
    return categories.map((category) => category.toUpperCase()).join(", ");
  }

  function getDetailUrl(project: Project): string {
    return project.siteUrl ?? project.sourceUrl ?? PROJECTS_PAGE_URL;
  }

  function getIconActionUrl(project: Project): string | undefined {
    if (project.sourceUrl) return project.sourceUrl;
    if (project.siteUrl) return project.siteUrl;
    return undefined;
  }

  function isExternalUrl(url: string): boolean {
    return url.startsWith("http://") || url.startsWith("https://");
  }

  function coverImage(project: Project): ProjectImage | null {
    if (!project.images || project.images.length === 0) return null;
    return project.images[0];
  }

  function isPdf(url: string): boolean {
    return url.toLowerCase().endsWith(".pdf");
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
          A collection of my projects spanning AI/ML, Full-Stacklopment, data
          engineering, and automation projects across research, industry, and
          personal hobbies.
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
        {#each displayedProjects as project, index (project.name)}
          {@const detailUrl = getDetailUrl(project)}
          {@const iconUrl = getIconActionUrl(project)}
          {@const image = coverImage(project)}
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
              {#if image}
                {#if isPdf(image.url)}
                  <object
                    class="projectImage"
                    data={image.url}
                    type="application/pdf"
                    aria-label={image.alt ?? `${project.name} thumbnail`}
                  >
                    <a href={image.url} target="_blank" rel="noreferrer">
                      Open {project.name} PDF
                    </a>
                  </object>
                {:else}
                  <img
                    class="projectImage"
                    src={image.url}
                    alt={image.alt ?? `${project.name} thumbnail`}
                    loading="lazy"
                  />
                {/if}
              {:else}
                <div
                  class="projectImage projectImagePlaceholder"
                  aria-hidden="true"
                >
                  No images available yet
                </div>
              {/if}
            </div>

            <div class="projectBody">
              <p class="projectCategories">
                {formatCategoryLabel(project.categories)}
              </p>
              <h2 class="projectName">{project.name}</h2>
              <p class="projectSubtitleText">{project.subtitle}</p>
              <p class="projectDescription">{project.description}</p>

              <div class="projectTags">
                {#each project.technologies as tech}
                  <span class="projectTag">{tech}</span>
                {/each}
              </div>

              <div class="projectActions">
                <a
                  class="projectPrimaryBtn"
                  href={detailUrl}
                  target={isExternalUrl(detailUrl) ? "_blank" : undefined}
                  rel={isExternalUrl(detailUrl) ? "noreferrer" : undefined}
                >
                  <span>View Details</span>
                  <span class="inlineIcon" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </a>

                {#if iconUrl}
                  <a
                    class="projectIconBtn"
                    href={iconUrl}
                    target={isExternalUrl(iconUrl) ? "_blank" : undefined}
                    rel={isExternalUrl(iconUrl) ? "noreferrer" : undefined}
                    aria-label={`Open additional project link for ${project.name}`}
                  >
                    <span class="iconOnly" aria-hidden="true">
                      {#if project.sourceUrl}
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
