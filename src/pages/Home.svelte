<script lang="ts">
  import "../styles/Home.css";
  import { FaGithub, FaLinkedin, FaEnvelope } from "svelte-icons/fa";

  // manually change if necessary
  const name = "Jeffrey Hoelzel Jr.";
  const headline = "Researcher & Software Engineering Student";
  const summary = `
    I am a Software Engineering student at Northern Arizona University graduating in May 2026, with experience spanning machine learning, data science, and full-stack development. As a HURA Researcher, I apply AI to computational biology by predicting antibody epitopes across the infectome, advancing immunological research through deep learning. I have built large-scale data mining pipelines, developed AI-powered chatbots, and designed enterprise support tools that integrate RAG workflows and ML classifiers. Across research and industry, I focus on creating practical, impactful systems at the intersection of software engineering and machine learning.
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

  const iconFor = (raw?: string) => {
    const key = (raw || "").toLowerCase();
    if (key === "github") return FaGithub;
    if (key === "linkedin") return FaLinkedin;
    if (key === "email") return FaEnvelope;

    return null;
  };

  const carouselRow1 = [
    {
      src:
        import.meta.env.BASE_URL +
        "ArtemiS3/ArtemiS3_Final_Poster_1-Team_14.png",
      alt: "ArtemiS3 poster",
    },
    {
      src: import.meta.env.BASE_URL + "LouiesRatings/cover.png",
      alt: "Louies Ratings cover",
    },
    {
      src: import.meta.env.BASE_URL + "MACH-IV_Clustering/high_mach.png",
      alt: "MACH-IV clustering heatmap",
    },
    {
      src: import.meta.env.BASE_URL + "PepSeqPred/arch_concept_A.png",
      alt: "PepSeqPred architecture concept A",
    },
    {
      src: import.meta.env.BASE_URL + "UltraSignUp/architecture_diagram.png",
      alt: "UltraSignUp architecture diagram",
    },
    {
      src:
        import.meta.env.BASE_URL + "CampusHealthChatbot/chat_room_chatbot.png",
      alt: "Campus Health Chatbot interface",
    },
  ];
  const carouselRow2 = [
    {
      src:
        import.meta.env.BASE_URL + "ArtemiS3/artemis3_architecture.drawio.png",
      alt: "ArtemiS3 architecture diagram",
    },
    {
      src: import.meta.env.BASE_URL + "LouiesRatings/login_demo.png",
      alt: "Louies Ratings login demo",
    },
    {
      src: import.meta.env.BASE_URL + "MACH-IV_Clustering/example_pca.png",
      alt: "MACH-IV PCA plot",
    },
    {
      src: import.meta.env.BASE_URL + "PepSeqPred/arch_concept_B.png",
      alt: "PepSeqPred architecture concept B",
    },
    {
      src: import.meta.env.BASE_URL + "UltraSignUp/sequence_diagram.png",
      alt: "UltraSignUp sequence diagram",
    },
    {
      src:
        import.meta.env.BASE_URL + "CampusHealthChatbot/sample_interaction.png",
      alt: "Campus Health Chatbot interaction sample",
    },
  ];
  const carouselLoop1 = [...carouselRow1, ...carouselRow1];
  const carouselLoop2 = [...carouselRow2, ...carouselRow2];
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
          <div class="marqueeTrack marqueeLeft">
            {#each carouselLoop1 as image, index (image.src + index)}
              <img
                class="marqeeImg"
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            {/each}
          </div>
        </div>

        <div class="marquee">
          <div class="marqueeTrack marqueeRight">
            {#each carouselLoop2 as image, index (image.src + index)}
              <img
                class="marqeeImg"
                src={image.src}
                alt={image.alt}
                loading="lazy"
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
