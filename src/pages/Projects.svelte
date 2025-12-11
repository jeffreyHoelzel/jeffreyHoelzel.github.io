<script lang="ts">
  import "../styles/Projects.css";

  type ProjectImage = {
    url: string;
    alt?: string;
  };

  type Project = {
    name: string;
    description: string;
    images: ProjectImage[];
    currentIndex: number;
    sourceUrl?: string;
    siteUrl?: string;
  };

  const BASE_URL = import.meta.env.BASE_URL;

  // add new project images here
  const pepSeqPredImgs: ProjectImage[] = [
    {
      url: BASE_URL + "PepSeqPred/arch_concept_A.png", 
      alt: "Concept architecture of training a model on peptide serology data"
    }, 
    {
      url: BASE_URL + "PepSeqPred/arch_concept_B.png", 
      alt: "Concept architecture of using a model training on peptide serology data to predict likely reactive peptides in a novel pathogen"
    }
  ];
  const ultraSignUpImgs: ProjectImage[] = [];
  const artemis3Imgs: ProjectImage[] = [
    {
      url: BASE_URL + "ArtemiS3/ArtemiS3_Final_Poster_1-Team_14.png", 
      alt: "The Fall 2025 NAU EngineeringFest ArtemiS3 capstone poster"
    }, 
    {
      url: BASE_URL + "ArtemiS3/artemis3_architecture.drawio.png", 
      alt: "Design review basic architecture diagram for ArtemiS3"
    }
  ];
  const machIvClusteringImgs: ProjectImage[] = [
    {
      url: BASE_URL + "MACH-IV_Clustering/low_mach.png", 
      alt: "Low Machiavellianism personality traits"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/mid_mach.png", 
      alt: "Mid Machiavellianism personality traits"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/high_mach.png", 
      alt: "High Machiavellianism personality traits"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/example_response_heatmap_k_3.png", 
      alt: "Mode sample responses from 3 clusters using hierarchical clustering"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/example_pca.png", 
      alt: "Example PCA plot for three clusters"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/dendrograms.png", 
      alt: "Dendrograms developed using 5,000 samples locally to choose linkage method"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/elbow_method.png", 
      alt: "Elbow method used for picking k-clusters in K-Means"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/gmm_metrics.png", 
      alt: "Metrics from running GMM on dataset"
    }, 
    {
      url: BASE_URL + "MACH-IV_Clustering/spectral_embedding_k_2.png", 
      alt: "Spectral embedding using 2 clusters in spectral clustering"
    }
  ];
  const itHelpdeskChatbotImgs: ProjectImage[] = [
    {
      url: BASE_URL + "ITHelpdeskChatbot/hiring_image.jpg", 
      alt: "Jeffrey Hoelzel Jr's welcome to Cavco banner"
    }, 
    {
      url: BASE_URL + "ITHelpdeskChatbot/presenting_chatbot.jpg", 
      alt: "Jeffrey and Destiny (another intern) presenting to the Cavco C-suite"
    }
  ];
  const campusHealthChatbotImgs: ProjectImage[] = [];
  const louiesRatingsImgs: ProjectImage[] = [
    {
      url: BASE_URL + "LouiesRatings/cover.png", 
      alt: "Louie's Ratings cover slide"
    }, 
    {
      url: BASE_URL + "LouiesRatings/use_case_diagram.png", 
      alt: "Use case diagram for the various use cases for Louie's Ratings"
    }, 
    {
      url: BASE_URL + "LouiesRatings/professor_page_demo2.png", 
      alt: "Professor page demo including grade distributions, pass/fail rates, and student review sections"
    }, 
    {
      url: BASE_URL + "LouiesRatings/class_page_demo.png", 
      alt: "Class page demo including grade distributions, pass/fail rates, and metadata"
    }, 
    {
      url: BASE_URL + "LouiesRatings/grade_distribution_demo.png", 
      alt: "Grade distribution showing number of students who got an A, B, C, D, or F, and withdrawl rates"
    }, 
    {
      url: BASE_URL + "LouiesRatings/login_demo.png", 
      alt: "Demo of the login functionality"
    }
  ];

  // add new projects here
  let projects: Project[] = [
    {
      name: "PepSeqPred", 
      description: "A machine learning model to predict antibody epitopes from peptide sequences using deep learning techniques.",
      images: pepSeqPredImgs, 
      sourceUrl: "https://github.com/LadnerLab/PepSeqPred", 
      currentIndex: 0
    }, 
    {
      name: "UltraSignUp Data Mining", 
      description: "A data mining pipeline that extracts and processes trail race data from UltraSignUp for analysis and reporting.", 
      images: ultraSignUpImgs, 
      currentIndex: 0
    }, 
    {
      name: "ArtemiS3", 
      description: "An intelligent search tool for NASA and USGS AWS S3 buckets, enabling efficient data retrieval and exploration.", 
      images: artemis3Imgs, 
      sourceUrl: "https://github.com/Artemi-S3/ArtemiS3", 
      siteUrl: "https://www.sce.nau.edu/capstone/projects/CS/2026/ArtemiS3_F25/", 
      currentIndex: 0
    }, 
    {
      name: "MACH-IV Clustering", 
      description: "A clustering algorithm implementation to group MACH-IV personality assessment results for psychological studies.", 
      images: machIvClusteringImgs, 
      sourceUrl: "https://github.com/jeffreyHoelzel/mach-iv-clustering", 
      siteUrl: "https://jeffreyhoelzel.github.io/mach-iv-clustering/", 
      currentIndex: 0
    }, 
    {
      name: "Cavco IT Helpdesk Chatbot", 
      description: "An AI-powered IT helpdesk chatbot developed as an internal tool to assist Cavco employees resolve IT-related technical issues.", 
      images: itHelpdeskChatbotImgs, 
      currentIndex: 0
    },
    {
      name: "Campus Health Chatbot", 
      description: "An AI-powered chatbot testing platform designed to assist students with campus health inquiries and provide relevant information.", 
      images: campusHealthChatbotImgs, 
      currentIndex: 0
    }, 
    {
      name: "Louie's Ratings", 
      description: "A web application similar to RateMyProfessor that allows students to rate and review their NAU professors and view course data like previous grade distributions.", 
      images: louiesRatingsImgs, 
      sourceUrl: "https://github.com/jeffreyHoelzel/LouiesRatings", 
      currentIndex: 0
    }
  ];

  // handle image rotation for projects with multiple images
  function currentImage(p: Project): ProjectImage | null {
    if (!p.images || p.images.length === 0) return null;
    return p.images[p.currentIndex] ?? p.images[0];
  }
  function nextImage(index: number) {
    const p = projects[index];
    if (!p || p.images.length === 0) return;
    p.currentIndex = (p.currentIndex + 1) % p.images.length;
    projects = [...projects];
  }
  function prevImage(index: number) {
    const p = projects[index];
    if (!p || p.images.length === 0) return;
    p.currentIndex = (p.currentIndex - 1 + p.images.length) % p.images.length;
    projects = [...projects];
  }

  // handle image suffix
  function isPdf(url: string): boolean {
    return url.toLowerCase().endsWith(".pdf");
  }
</script>

<main>
  <section class="sectionPad">
    <div class="wrap">
      <h1 class="pageTitle">Projects</h1>

      <div class="projectsGrid">
        {#each projects as project, i}
          {#key project.name}
            <article class="projectCard">
              <div class="thumbWrap" aria-label={project.name}>
                {#if currentImage(project)}
                  {#if isPdf(currentImage(project)!.url)}
                    <!--- load PDF thumbnail -->
                    <object
                      class="projectThumb"
                      data={currentImage(project)!.url}
                      type="application/pdf"
                      aria-label={currentImage(project)!.alt ?? `${project.name} thumbnail`}
                    >
                      <a
                        href={currentImage(project)!.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open {project.name} pdf
                      </a>
                    </object>
                  {:else}
                    <!-- Regular image thumbnail -->
                    <img
                      class="projectThumb"
                      src={currentImage(project)!.url}
                      alt={currentImage(project)!.alt ?? `${project.name} thumbnail`}
                      loading="lazy"
                    />
                  {/if}
                {:else}
                  <div class="projectThumb placeholder" aria-hidden="true">
                    No images available... yet
                  </div>
                {/if}

                <!-- handle revolving images -->
                {#if project.images.length > 1}
                  <button
                    class="carouselBtn prevCarouselBtn"
                    type="button"
                    aria-label="Previous image"
                    on:click={() => prevImage(i)}
                  >&#10094;</button>

                  <button
                    class="carouselBtn nextCarouselBtn"
                    type="button"
                    aria-label="Next image"
                    on:click={() => nextImage(i)}
                  >&#10095;</button>

                  <div class="carouselDots" aria-hidden="true">
                    {#each project.images as _, j}
                      <span 
                        class:dotActive={j === project.currentIndex}
                        class="dot"
                      ></span>
                    {/each}
                  </div>
                {/if}
              </div>

              <div class="projectMetadata">
                <h2 class="projectTitle">{project.name}</h2>
                {#if project.description}
                  <p class="projectDesc">{project.description}</p>

                  {#if project.sourceUrl || project.siteUrl}
                    <div class="projectLinks">
                      {#if project.sourceUrl}
                        <a
                          href={project.sourceUrl}
                          class="projectLink"
                          target="_blank"
                          rel="noreferrer"
                        >
                        View source code
                        </a>
                      {/if}

                      {#if project.siteUrl}
                        <a
                          href={project.siteUrl}
                          class="projectLink"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Visit website
                        </a>
                      {/if}
                    </div>
                  {/if}
                {/if}
              </div>
            </article>
          {/key}
        {/each}
      </div>
    </div>
  </section>
</main>