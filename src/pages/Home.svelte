<script lang="ts">
  import { base } from "$app/paths";
  import "../styles/Home.css";
  import { onMount } from "svelte";
  import {
    FaChevronDown,
    FaGraduationCap,
    FaCode,
    FaBullseye,
    FaFileDownload,
    FaArrowRight,
    FaGithub,
  } from "svelte-icons/fa";

  const BASE_URL = `${base}/`;

  // manually change if necessary
  const intro = "Hello, I'm";
  const name = "Jeffrey Hoelzel Jr.";
  const roleTitles = ["Full-Stack Engineer", "AI/ML Engineer", "Data Engineer"];
  let activeRoleIndex = 0;
  let typedRole = roleTitles[0];

  const summary = `
    I am a Software Engineer with experience across machine learning, data
    systems, and full-stack development. I focus on building practical AI
    products that combine strong engineering fundamentals with measurable
    real-world impact.
  `.trim();
  const education =
    "Recently earned a B.S. in Software Engineering from Northern Arizona University.";
  const techExpertise =
    "Experience with full-stack development, applied AI/ML, APIs, and data pipeline engineering.";
  const resumeHref = `${base}/resume/`;
  const aboutPhoto = `${base}/headshot_2025_Jeffrey-Hoelzel_3.jpg`;
  const aboutTags = ["Full-Stack", "AI/ML", "Data Systems"];
  const projectsHref = `${base}/projects/`;

  type FeaturedProject = {
    name: string;
    categories: string;
    subtitle: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    imageAlt: string;
    detailsUrl: string;
    sourceUrl?: string;
    accent: "blue" | "violet" | "teal";
  };

  const featuredProjects: FeaturedProject[] = [
    {
      name: "PepSeqPred",
      categories: "AI, MACHINE LEARNING, BIOINFORMATICS",
      subtitle: "Epitope Prediction Pipeline",
      description:
        "A deep-learning workflow that predicts likely antibody-reactive peptide regions and...",
      technologies: [
        "PyTorch",
        "Deep Learning",
        "Sequence Models",
        "Data Pipelines",
      ],
      imageUrl: `${BASE_URL}PepSeqPred/arch_concept_A.png`,
      imageAlt:
        "PepSeqPred architecture concept for peptide serology model training",
      detailsUrl: projectsHref,
      sourceUrl: "https://github.com/LadnerLab/PepSeqPred",
      accent: "blue",
    },
    {
      name: "ArtemiS3",
      categories: "FULL-STACK, CLOUD, SEARCH SYSTEMS",
      subtitle: "NASA and USGS S3 Search Platform",
      description:
        "An intelligent retrieval interface for exploring large geospatial datasets in...",
      technologies: ["Svelte", "FastAPI", "AWS S3", "Meilisearch"],
      imageUrl: `${BASE_URL}ArtemiS3/ArtemiS3_architecture_SWD.drawio.png`,
      imageAlt: "ArtemiS3 capstone project poster",
      detailsUrl: projectsHref,
      sourceUrl: "https://github.com/Artemi-S3/ArtemiS3",
      accent: "violet",
    },
    {
      name: "LesionShiftAI",
      categories: "CV, DEEP LEARNING, DATA VISUALIZATION",
      subtitle: "Skin lesion classification",
      description:
        "A research benchmark and framework for cross-dataset skin lesion classification under...",
      technologies: ["PyTorch", "SLURM", "timm", "Next.js"],
      imageUrl: `${BASE_URL}LesionShiftAI/val_final_pr.png`,
      imageAlt: "ViT B16 PR AUC validation plot",
      detailsUrl: projectsHref,
      sourceUrl: "https://github.com/jeffreyHoelzel/LesionShiftAI",
      accent: "teal",
    },
  ];

  const sleep = (ms: number) =>
    new Promise<void>((resolve) => {
      setTimeout(resolve, ms);
    });

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  onMount(() => {
    let roleAnimationCancelled = false;

    const runRoleAnimation = async () => {
      while (!roleAnimationCancelled) {
        const currentRole = roleTitles[activeRoleIndex];

        for (let i = 1; i <= currentRole.length; i += 1) {
          if (roleAnimationCancelled) return;
          typedRole = currentRole.slice(0, i);
          await sleep(55);
        }

        if (roleAnimationCancelled) return;
        await sleep(900);

        for (let i = currentRole.length - 1; i >= 0; i -= 1) {
          if (roleAnimationCancelled) return;
          typedRole = currentRole.slice(0, i);
          await sleep(35);
        }

        activeRoleIndex = (activeRoleIndex + 1) % roleTitles.length;
        await sleep(150);
      }
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      typedRole = roleTitles[0];
    } else {
      typedRole = "";
      void runRoleAnimation();
    }

    return () => {
      roleAnimationCancelled = true;
    };
  });
</script>

<main>
  <!-- Hero  -->
  <section class="hero">
    <div class="wrap heroStack">
      <div class="heroHeader">
        <h1 class="heroName">
          <span class="heroLead">{intro}</span>
          <span class="heroGradientName">{name}</span>
        </h1>

        <div class="heroCodeFrame" role="status" aria-live="polite">
          <div class="heroCodeTop">
            <span class="codeDot codeDotRed"></span>
            <span class="codeDot codeDotYellow"></span>
            <span class="codeDot codeDotGreen"></span>
            <span class="heroCodePath">home.js</span>
          </div>

          <p class="heroCodeTitle">
            <span class="codeToken keyword">const </span><span
              class="codeToken variable">role</span
            ><span class="codeToken plain">=</span><span
              class="codeToken string">"{typedRole}"</span
            ><span class="typingCaret" aria-hidden="true"></span><span
              class="codeToken semi">;</span
            >
          </p>
        </div>

        <div class="roleList" aria-hidden="true">
          {#each roleTitles as role, index}
            <span
              class="rolePill"
              class:rolePillActive={index === activeRoleIndex}>{role}</span
            >
          {/each}
        </div>

        <button
          class="scrollCue"
          type="button"
          aria-label="Scroll to About me section"
          on:click={scrollToAbout}
        >
          <span class="scrollCueIcon" aria-hidden="true">
            <FaChevronDown />
          </span>
        </button>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="about sectionPad" id="about" aria-label="About">
    <div class="wrap">
      <div class="aboutIntro">
        <span class="aboutEyebrow">Learn more</span>
        <h2 class="aboutTitle">About Me</h2>
        <p class="aboutSubtitle">
          Currently building reliable, high-impact software
        </p>
      </div>

      <div class="aboutGrid">
        <article class="aboutProfileCard">
          <div class="aboutProfileMedia">
            <img
              src={aboutPhoto}
              alt="Portrait of Jeffrey Hoelzel Jr."
              class="aboutProfileImage"
            />
          </div>
          <div class="aboutProfileContent">
            <h3 class="aboutProfileName">{name}</h3>
            <p class="aboutProfileRole">Software, AI/ML, and Data Engineer</p>
            <div class="aboutTagList" aria-label="Core focus areas">
              {#each aboutTags as tag}
                <span class="aboutTag">{tag}</span>
              {/each}
            </div>
          </div>
        </article>

        <div class="aboutCards">
          <article class="aboutInfoCard aboutInfoCardEducation">
            <div class="aboutInfoIconWrap">
              <span
                class="aboutInfoIcon aboutInfoIconEducation"
                aria-hidden="true"
              >
                <FaGraduationCap />
              </span>
            </div>
            <div>
              <h3 class="aboutInfoTitle">Education</h3>
              <p class="aboutInfoText">
                {education}
              </p>
            </div>
          </article>

          <article class="aboutInfoCard aboutInfoCardTech">
            <div class="aboutInfoIconWrap">
              <span class="aboutInfoIcon aboutInfoIconTech" aria-hidden="true">
                <FaCode />
              </span>
            </div>
            <div>
              <h3 class="aboutInfoTitle">Technical Expertise</h3>
              <p class="aboutInfoText">
                {techExpertise}
              </p>
            </div>
          </article>

          <article class="aboutInfoCard aboutInfoCardMission">
            <div class="aboutInfoIconWrap">
              <span
                class="aboutInfoIcon aboutInfoIconMission"
                aria-hidden="true"
              >
                <FaBullseye />
              </span>
            </div>
            <div class="aboutMissionContent">
              <h3 class="aboutInfoTitle">Mission</h3>
              <p class="aboutInfoText">
                {summary}
              </p>
              <a class="aboutResumeButton" href={resumeHref}>
                <span class="aboutResumeIcon" aria-hidden="true">
                  <FaFileDownload />
                </span>
                <span>View Resume</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="featuredProjects sectionPad" aria-label="Featured projects">
    <div class="wrap">
      <div class="featuredProjectsHeader">
        <h2 class="featuredProjectsTitle">Featured Projects</h2>
        <a class="featuredProjectsViewAll" href={projectsHref}>
          <span>View All</span>
          <span class="featuredInlineIcon" aria-hidden="true">
            <FaArrowRight />
          </span>
        </a>
      </div>

      <div class="featuredProjectsGrid">
        {#each featuredProjects as project}
          <article
            class="featuredProjectCard"
            class:featuredProjectCardBlue={project.accent === "blue"}
            class:featuredProjectCardViolet={project.accent === "violet"}
            class:featuredProjectCardTeal={project.accent === "teal"}
          >
            <div class="featuredProjectMedia">
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                class="featuredProjectImage"
                loading="lazy"
              />
            </div>

            <div class="featuredProjectBody">
              <p class="featuredProjectCategories">{project.categories}</p>
              <h3 class="featuredProjectTitle">{project.name}</h3>
              <p class="featuredProjectSubtitle">{project.subtitle}</p>
              <p class="featuredProjectDescription">{project.description}</p>

              <div class="featuredProjectTags">
                {#each project.technologies as tech}
                  <span class="featuredProjectTag">{tech}</span>
                {/each}
              </div>

              <div class="featuredProjectActions">
                <a class="featuredProjectPrimaryBtn" href={project.detailsUrl}>
                  <span>View Details</span>
                  <span class="featuredInlineIcon" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </a>

                {#if project.sourceUrl}
                  <a
                    class="featuredProjectSourceBtn"
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source code for ${project.name}`}
                  >
                    <span class="featuredIconOnly" aria-hidden="true">
                      <FaGithub />
                    </span>
                  </a>
                {/if}
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>
</main>
