<script lang="ts">
  import { base } from "$app/paths";
  import "../styles/Home.css";
  import { onMount } from "svelte";
  import { FaChevronDown } from "svelte-icons/fa";

  const BASE_URL = `${base}/`;

  // manually change if necessary
  const intro = "Hello, I'm";
  const name = "Jeffrey Hoelzel Jr.";
  const roleTitles = ["Full-Stack Engineer", "AI/ML Engineer", "Data Engineer"];
  let activeRoleIndex = 0;
  let typedRole = roleTitles[0];

  const summary = `
    I am a Software Engineering student at Northern Arizona University graduating in May 2026, with experience spanning machine learning, data systems, and full-stack development. I currently work as a Software Engineering Intern at Altored Health, building LLM-assisted healthcare search systems that combine conversational interfaces, semantic retrieval, and backend APIs. Alongside this role, I serve as a Machine Learning Engineer at the Pathogen and Microbiome Institute under a HURA research grant, where I developed PepSeqPred, a PyTorch-based pipeline that predicts antibody epitope locations across diverse pathogens. I also work on data systems engineering at NAU SICCS, designing high throughput data pipelines and scraping infrastructure for large-scale datasets used in statistical analysis.
  `.trim();

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
