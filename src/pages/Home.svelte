<script lang="ts">
  import { base } from "$app/paths";
  import "../styles/Home.css";
  import { onMount } from "svelte";
  import { FaGithub, FaLinkedin, FaEnvelope } from "svelte-icons/fa";

  const BASE_URL = `${base}/`;

  // manually change if necessary
  const name = "Jeffrey Hoelzel Jr.";
  const headline = "Software Engineering Student";
  const summary = `
    I am a Software Engineering student at Northern Arizona University graduating in May 2026, with experience spanning machine learning, data systems, and full-stack development. I currently work as a Software Engineering Intern at Altored Health, building LLM-assisted healthcare search systems that combine conversational interfaces, semantic retrieval, and backend APIs. Alongside this role, I serve as a Machine Learning Engineer at the Pathogen and Microbiome Institute under a HURA research grant, where I developed PepSeqPred, a PyTorch-based pipeline that predicts antibody epitope locations across diverse pathogens. I also work on data systems engineering at NAU SICCS, designing high throughput data pipelines and scraping infrastructure for large-scale datasets used in statistical analysis.
  `.trim();

  const socials = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/jeffreyHoelzel",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/jeffrey-hoelzel-jr/",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      url: "mailto:jeffreyhoelzeljr@gmail.com",
    },
  ];

  const carouselRow1 = [
    {
      src: BASE_URL + "ArtemiS3/ArtemiS3_logo.png",
      alt: "ArtemiS3 logo",
    },
    {
      src: BASE_URL + "PepSeqPred/PepSeqPred_logo_white.png",
      alt: "PepSeqPred logo",
    },
    {
      src: BASE_URL + "UltraSignUp/UltraSignUp_logo.png",
      alt: "UltraSignUp logo",
    },
    {
      src: BASE_URL + "MACH-IV_Clustering/MACH-IV_Clustering_logo.png",
      alt: "MACH-IV Clustering logo",
    },
    {
      src: BASE_URL + "LouiesRatings/LouiesRatings_logo.png",
      alt: "Louie's Ratings logo",
    },
  ];
  const carouselRow2 = [
    {
      src: BASE_URL + "ArtemiS3/NASA_Worm_logo.svg.png",
      alt: "NASA logo",
    },
    {
      src: BASE_URL + "ArtemiS3/USGS_logo.svg",
      alt: "USGS logo",
    },
    {
      src: BASE_URL + "UltraSignUp/NAU_SCE_logo.jpg",
      alt: "NAU SCE logo",
    },
    {
      src: BASE_URL + "ITHelpdeskChatbot/CavcoIndustries_logo.png",
      alt: "Cavco Industries logo",
    },
    {
      src: BASE_URL + "CampusHealthChatbot/CANIS_Lab_logo.jpg",
      alt: "CANIS Lab logo",
    },
    {
      src: BASE_URL + "PepSeqPred/PMI_logo.png",
      alt: "PMI logo",
    },
  ];
  const carouselLoop1 = [...carouselRow1, ...carouselRow1];
  const carouselLoop2 = [...carouselRow2, ...carouselRow2];

  let marqueeLeftEl: HTMLDivElement | null = null;
  let marqueeRightEl: HTMLDivElement | null = null;

  const setmarqueeDistance = (el: HTMLDivElement | null) => {
    if (!el) return;
    const dist = Math.round(el.scrollWidth / 2);
    el.style.setProperty("--marquee-distance", `${dist}px`);
  };

  onMount(() => {
    const update = () => {
      setmarqueeDistance(marqueeLeftEl);
      setmarqueeDistance(marqueeRightEl);
    };

    const ro = new ResizeObserver(update);
    if (marqueeLeftEl) ro.observe(marqueeLeftEl);
    if (marqueeRightEl) ro.observe(marqueeRightEl);

    return () => ro.disconnect();
  });
</script>

<main>
  <!-- Hero  -->
  <section class="sectionPad">
    <div class="wrap heroStack">
      <div class="heroHeader">
        <h1 class="heroName">{name}</h1>
        {#if headline}
          <p class="heroTitle">{headline}</p>
        {/if}

        <div class="heroSocials" aria-label="Social links">
          {#each socials as social}
            <a
              class="socialPill"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <social.icon />
              <span>{social.label.toUpperCase()}</span>
            </a>
          {/each}
        </div>
      </div>

      <div class="marqueeStack" aria-label="Project highlights">
        <div class="marquee">
          <div class="marqueeTrack marqueeLeft" bind:this={marqueeLeftEl}>
            {#each carouselLoop1 as image, index (image.src + index)}
              <img
                class="marqueeImg"
                src={image.src}
                alt={image.alt}
                loading="eager"
                decoding="async"
              />
            {/each}
          </div>
        </div>

        <div class="marquee">
          <div class="marqueeTrack marqueeRight" bind:this={marqueeRightEl}>
            {#each carouselLoop2 as image, index (image.src + index)}
              <img
                class="marqueeImg"
                src={image.src}
                alt={image.alt}
                loading="eager"
                decoding="async"
              />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="about sectionPad" aria-label="About">
    <div class="wrap aboutGrid">
      <div>
        <h2 class="aboutTitle">About me</h2>
      </div>
      <p class="prose">
        {summary}
      </p>
    </div>
  </section>
</main>
