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
              <span class="aboutInfoIcon aboutInfoIconEducation" aria-hidden="true">
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
              <span class="aboutInfoIcon aboutInfoIconMission" aria-hidden="true">
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
</main>
