export type ProjectCategory = "AI" | "ML" | "Full-Stack" | "Data" | "Automation";

export type ProjectAccent = "blue" | "violet" | "teal";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLinks = {
  repoUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
};

export type ProjectRecord = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  accent: ProjectAccent;
  featured: boolean;
  coverImage: ProjectImage;
  galleryImages: ProjectImage[];
  aboutSections: string[];
  links: ProjectLinks;
};

export const projectRecords: ProjectRecord[] = [
  {
    slug: "pepseqpred",
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
    accent: "blue",
    featured: true,
    coverImage: {
      src: "/PepSeqPred/pepseqpred_apis.png",
      alt: "Sample PepSeqPred APIs for research usage",
    },
    galleryImages: [
      {
        src: "/PepSeqPred/pepseqpred_apis.png",
        alt: "Sample PepSeqPred APIs for research usage",
      },
      {
        src: "/PepSeqPred/PepSeqPred_logo_white.png",
        alt: "PepSeqPred logo on light background",
      },
      {
        src: "/PepSeqPred/PepSeqPred_logo_black.png",
        alt: "PepSeqPred logo on dark background",
      },
      {
        src: "/PepSeqPred/PMI_logo.png",
        alt: "PMI logo used in PepSeqPred context",
      },
    ],
    aboutSections: [
      "PepSeqPred is a production-minded machine learning pipeline for identifying likely antibody-reactive peptide regions from protein sequence data. It focuses on practical workflows that can support rapid serology-oriented exploration and hypothesis generation.",
      "The project combines sequence modeling, curated preprocessing, and reproducible training routines so experimental teams can run repeatable studies. Its architecture is designed to support both iterative model development and downstream analysis tasks.",
      "From an engineering perspective, PepSeqPred demonstrates end-to-end ML system design: structured data flows, model experimentation, and scalable execution patterns that can run in HPC environments.",
    ],
    links: {
      repoUrl: "https://github.com/LadnerLab/PepSeqPred",
    },
  },
  {
    slug: "artemis3",
    name: "ArtemiS3",
    subtitle: "NASA and USGS S3 Search Platform",
    description:
      "An intelligent search platform for NASA and USGS AWS S3 datasets that improves discovery and retrieval speed.",
    categories: ["AI", "Full-Stack", "Data"],
    technologies: ["Svelte", "FastAPI", "AWS S3", "Meilisearch", "Docker"],
    accent: "violet",
    featured: true,
    coverImage: {
      src: "/ArtemiS3/artemis3_landing.png",
      alt: "ArtemiS3 landing page",
    },
    galleryImages: [
      {
        src: "/ArtemiS3/artemis3_landing.png",
        alt: "ArtemiS3 landing page",
      },
      {
        src: "/ArtemiS3/ArtemiS3_architecture_SWD.drawio.png",
        alt: "ArtemiS3 architecture overview",
      },
      {
        src: "/ArtemiS3/ArtemiS3_logo.png",
        alt: "ArtemiS3 project logo",
      },
    ],
    aboutSections: [
      "ArtemiS3 was built to make large-scale geospatial and scientific data in AWS S3 easier to discover. The project targets common discovery pain points where analysts know data exists but cannot locate it efficiently.",
      "The platform combines a modern front end with API-driven search orchestration and indexing. It supports faster query iteration and clearer result exploration for technical and non-technical users.",
      "As a capstone-grade full-stack system, ArtemiS3 highlights applied cloud integration, service composition, and search-focused product thinking for real data ecosystems.",
    ],
    links: {
      repoUrl: "https://github.com/Artemi-S3/ArtemiS3",
      liveUrl:
        "https://www.sce.nau.edu/capstone/projects/CS/2026/ArtemiS3_F25/",
    },
  },
  {
    slug: "lesionshiftai",
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
    accent: "teal",
    featured: true,
    coverImage: {
      src: "/LesionShiftAI_port/lesionshiftai_webpage.png",
      alt: "Screenshot of LesionShiftAI project webpage",
    },
    galleryImages: [
      {
        src: "/LesionShiftAI_port/lesionshiftai_webpage.png",
        alt: "LesionShiftAI project webpage",
      },
      {
        src: "/LesionShiftAI_port/val_final_pr.png",
        alt: "Validation PR curve for LesionShiftAI experiments",
      },
    ],
    aboutSections: [
      "LesionShiftAI focuses on robust skin lesion classification when training and evaluation data differ significantly. The project emphasizes realistic generalization challenges that appear in clinical and research environments.",
      "It provides a benchmark-oriented framework for training, comparing, and analyzing multiple model families under shift conditions. This includes structured experiment management and visual diagnostics for model behavior.",
      "The work showcases rigorous ML evaluation practices and practical engineering around reproducibility, reporting, and deployment-ready model experimentation.",
    ],
    links: {
      repoUrl: "https://github.com/jeffreyHoelzel/LesionShiftAI",
      liveUrl: "https://jeffreyhoelzel.com/LesionShiftAI/",
    },
  },
  {
    slug: "ultrasignup-data-mining",
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
    accent: "blue",
    featured: false,
    coverImage: {
      src: "/UltraSignUp/male_velocity_vs_distance.png",
      alt: "Plot of male velocity vs race distance",
    },
    galleryImages: [
      {
        src: "/UltraSignUp/male_velocity_vs_distance.png",
        alt: "Plot of male velocity vs race distance",
      },
    ],
    aboutSections: [
      "UltraSignUp Data Mining automates collection and cleaning of trail race results for exploratory analytics. The pipeline is geared toward repeatable extraction so new race data can be integrated with minimal manual effort.",
      "The workflow handles browser-driven collection, parsing, and transformation into analysis-ready datasets. That enables consistent trend analysis and easier reporting for performance insights.",
      "This project demonstrates practical automation engineering with a focus on data quality, process reliability, and end-to-end analytical usability.",
    ],
    links: {},
  },
  {
    slug: "mach-iv-clustering",
    name: "MACH-IV Clustering",
    subtitle: "Personality Segmentation Study",
    description:
      "A clustering study over MACH-IV assessment data to identify interpretable personality groupings for psychology research.",
    categories: ["AI", "ML"],
    technologies: ["Clustering", "PCA", "Scikit-learn", "Visualization", "HPC"],
    accent: "violet",
    featured: false,
    coverImage: {
      src: "/MACH-IV_Clustering/dendrograms.png",
      alt: "Dendrogram plots from hierarchical clustering methods",
    },
    galleryImages: [
      {
        src: "/MACH-IV_Clustering/dendrograms.png",
        alt: "Dendrogram plots from hierarchical clustering methods",
      },
      {
        src: "/MACH-IV_Clustering/elbow_method.png",
        alt: "Elbow method chart",
      },
      {
        src: "/MACH-IV_Clustering/example_pca.png",
        alt: "PCA projection of discovered clusters",
      },
      {
        src: "/MACH-IV_Clustering/example_response_heatmap_k_3.png",
        alt: "Response heatmap for three-cluster solution",
      },
      {
        src: "/MACH-IV_Clustering/gmm_metrics.png",
        alt: "GMM model quality metrics",
      },
      {
        src: "/MACH-IV_Clustering/high_mach.png",
        alt: "High Machiavellianism profile",
      },
      {
        src: "/MACH-IV_Clustering/low_mach.png",
        alt: "Low Machiavellianism profile",
      },
      {
        src: "/MACH-IV_Clustering/mid_mach.png",
        alt: "Mid Machiavellianism profile",
      },
      {
        src: "/MACH-IV_Clustering/spectral_embedding_k_2.png",
        alt: "Spectral embedding visualization",
      },
    ],
    aboutSections: [
      "MACH-IV Clustering explores latent structure in personality survey responses using unsupervised learning methods. The objective is to produce interpretable groupings that can support behavioral analysis.",
      "The project compares multiple clustering approaches and uses dimensionality reduction plus visual diagnostics to evaluate stability and separability of discovered segments.",
      "It highlights analytical rigor in model selection, interpretation, and communication of findings for mixed technical and research audiences.",
    ],
    links: {
      repoUrl: "https://github.com/jeffreyHoelzel/mach-iv-clustering",
      liveUrl: "https://jeffreyhoelzel.github.io/mach-iv-clustering/",
    },
  },
  {
    slug: "cavco-it-helpdesk-chatbot",
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
    accent: "teal",
    featured: false,
    coverImage: {
      src: "/ITHelpdeskChatbot/hiring_image.jpg",
      alt: "Welcome banner at Cavco",
    },
    galleryImages: [
      {
        src: "/ITHelpdeskChatbot/hiring_image.jpg",
        alt: "Welcome banner at Cavco",
      },
      {
        src: "/ITHelpdeskChatbot/presenting_chatbot.jpg",
        alt: "Chatbot presentation to Cavco leadership",
      },
      {
        src: "/ITHelpdeskChatbot/CavcoIndustries_logo.png",
        alt: "Cavco Industries logo",
      },
    ],
    aboutSections: [
      "This internal chatbot project was designed to reduce repetitive IT support overhead and improve employee response times for common issues.",
      "The system centers on practical prompt design, workflow constraints, and support-oriented response patterns so it can complement existing helpdesk processes.",
      "It demonstrates applied enterprise AI integration with an emphasis on reliability, user trust, and measurable operational impact.",
    ],
    links: {},
  },
  {
    slug: "campus-health-chatbot",
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
    accent: "blue",
    featured: false,
    coverImage: {
      src: "/CampusHealthChatbot/chat_room_chatbot.png",
      alt: "Multi-user chatbot chat room interface",
    },
    galleryImages: [
      {
        src: "/CampusHealthChatbot/chat_room_chatbot.png",
        alt: "Multi-user chatbot chat room interface",
      },
      {
        src: "/CampusHealthChatbot/sample_interaction.png",
        alt: "Sample chatbot interaction",
      },
      {
        src: "/CampusHealthChatbot/start_survey.png",
        alt: "Pre-session survey prompts",
      },
      {
        src: "/CampusHealthChatbot/post_chat_survey.png",
        alt: "Post-session survey prompts",
      },
      {
        src: "/CampusHealthChatbot/CANIS_Lab_logo.jpg",
        alt: "CANIS Lab logo",
      },
    ],
    aboutSections: [
      "Campus Health Chatbot was created to explore how conversational systems can support student-facing health information workflows in a structured evaluation setting.",
      "The platform combines a web interface with research instrumentation, enabling focus-group style studies and qualitative review of interaction quality.",
      "This work demonstrates the intersection of AI product implementation and human-centered evaluation for socially sensitive domains.",
    ],
    links: {},
  },
  {
    slug: "louies-ratings",
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
    accent: "violet",
    featured: false,
    coverImage: {
      src: "/LouiesRatings/cover.png",
      alt: "Louie's Ratings title slide",
    },
    galleryImages: [
      {
        src: "/LouiesRatings/cover.png",
        alt: "Louie's Ratings title slide",
      },
      {
        src: "/LouiesRatings/login_demo.png",
        alt: "Louie's Ratings login workflow",
      },
      {
        src: "/LouiesRatings/professor_page_demo2.png",
        alt: "Professor details page",
      },
      {
        src: "/LouiesRatings/class_page_demo.png",
        alt: "Class details page",
      },
      {
        src: "/LouiesRatings/grade_distribution_demo.png",
        alt: "Grade distribution visualization",
      },
      {
        src: "/LouiesRatings/use_case_diagram.png",
        alt: "Use case diagram",
      },
      {
        src: "/LouiesRatings/LouiesRatings_logo.png",
        alt: "Louie's Ratings logo",
      },
    ],
    aboutSections: [
      "Louie's Ratings is a student-centered application for course and instructor discovery, combining qualitative reviews with historical grade distribution context.",
      "The project integrates full-stack data flows and UI components to make institutional data easier to explore and compare before enrollment decisions.",
      "It showcases practical product engineering across frontend experience, backend services, and analytics-friendly data presentation.",
    ],
    links: {
      repoUrl: "https://github.com/jeffreyHoelzel/LouiesRatings",
    },
  },
];

export const featuredProjects = projectRecords.filter((project) => project.featured);

export const projectBySlug = Object.fromEntries(
  projectRecords.map((project) => [project.slug, project]),
) as Record<string, ProjectRecord>;

export function getProjectBySlug(slug: string): ProjectRecord | undefined {
  return projectBySlug[slug];
}
