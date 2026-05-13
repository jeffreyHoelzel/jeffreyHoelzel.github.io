export type ProjectCategory = "AI" | "ML" | "Full-Stack" | "Data" | "Automation" | "Computer Vision";

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
      "Python",
      "PyTorch",
      "ESM-2",
      "Sequence Models",
      "Optuna",
      "SLURM",
      "HPC",
      "PyPI",
      "Pipeline",
      "Next.js",
    ],
    accent: "blue",
    featured: true,
    coverImage: {
      src: "/PepSeqPred/pepseqpred_landing.png",
      alt: "PepSeqPred landing page",
    },
    galleryImages: [
      {
        src: "/PepSeqPred/pepseqpred_landing.png",
        alt: "PepSeqPred landing page",
      },
      {
        src: "/PepSeqPred/pepseqpred_pypi.png",
        alt: "PepSeqPred PyPI webpage",
      },
    ],
    aboutSections: [
      "PepSeqPred is an open-source machine learning pipeline I developed to predict antibody epitope locations across large pathogen proteins. The project was motivated by a major bottleneck in immunological research: experimentally mapping antibody binding sites through peptide serology is slow, expensive, and difficult to scale across large pathogen proteomes. PepSeqPred addresses this by learning sequence and structural patterns associated with antibody recognition, allowing researchers to prioritize high-likelihood peptide targets before committing to costly experimental validation. The project was conducted through Northern Arizona University's Pathogen and Microbiome Institute under a HURA research grant, with mentorship from Dr. Jason Ladner and Dr. Evan Elko.",
      "At the core of PepSeqPred is a residue-level classification pipeline that converts protein sequences into ESM-2 protein language model embeddings, then passes those embeddings through a fully-connected neural network to generate per-residue epitope probability predictions. Because ESM-2 has a sequence length limit, I implemented a sliding window embedding strategy for long proteins, averaging overlapping regions to better preserve full sequence context. The model uses peptide-level PepSeq serology reactivity measurements and projects those labels down to the residue level, enabling training on highly multiplexed data. To reduce leakage and improve generalization, the training pipeline also supports family-aware splitting, k-fold ensembling, deterministic multi-seeded experiments, and class imbalance handling.",
      "A major focus of the project was building a reproducible research pipeline rather than a one-off model. I designed the repository to support end- to-end preprocessing, ESM-2 embedding generation, residue-level label construction, fully-connected neural network training, Optuna hyperparameter tuning, prediction, evaluation, and HPC orchestration. The developer workflow includes command-line tools for each pipeline stage, SLURM scripts for large-scale runs on NAU's Monsoon supercompute cluster, and support for distributed training across multiple GPUs. This allowed PepSeqPred to scale across large embedding corpora while maintaining experiment reproducibility, deterministic split planning, and clear artifact contracts for checkpoints, ensemble manifests, label shards, and evaluation outputs.",
      "PepSeqPred was evaluated using metrics designed for extreme class imbalance, with precision-recall AUC prioritized over accuracy or ROC AUC because true epitope residues are rare. In validation, the model achieved a PR AUC of 0.246 compared to a random baseline of 0.070, representing a 3.53x improvement in ranking true epitopes. The model also showed improved ROC AUC, balanced accuracy, F1, and MCC compared to baseline expectations. External validation on an independent fungal dataset demonstrated that the model could maintain useful signal outside the human virome training domain, suggesting that PepSeqPred learned transferable patterns of antibody recognition rather than simply memorizing training data.",
      "To make the work practically usable, I packaged PepSeqPred as a Python library with a lightweight inference API and bundled pretrained models. Users can install the package with pip install pepseqpred, load a pretrained predictor, and generate residue-aligned binary epitope masks from a protein sequence or FASTA file. This turns the research pipeline into a tool that can be used directly by scientists to prioritize antibody targets, guide serological assay design, and accelerate large-scale studies of infection history.",
    ],
    links: {
      liveUrl: "https://ladnerlab.github.io/PepSeqPred/",
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
    technologies: [
      "Svelte",
      "TypeScript",
      "TailwindCSS",
      "Python",
      "FastAPI",
      "Boto3",
      "AWS S3",
      "Meilisearch",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "NGINX",
      "Leaflet"
    ],
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
        src: "/ArtemiS3/artemis3_img_preview.png",
        alt: "ArtemiS3 image preview",
      },
      {
        src: "/ArtemiS3/artemis3_geospatial.png",
        alt: "ArtemiS3 geospatial visualization of Mars",
      },
      {
        src: "/ArtemiS3/artemis3_folder_mode.png",
        alt: "ArtemiS3 folder mode search"
      },
    ],
    aboutSections: [
      "ArtemiS3 is an intelligent search and visualization platform built for the USGS Astrogeology Science Center to make large-scale planetary mission data easier to discover, navigate, and use. NASA and USGS store massive amounts of mission data in publicly accessible AWS S3 buckets, but researchers often have to browse through folder structures manually using simple a S3 browser interface with no search and filtering capabilities. ArtemiS3 was designed to solve that discovery problem by turning static cloud storage into an interactive research tool with full-text search, metadata indexing, filtering, previews, tagging, and a more intuitive file exploration experience.",
      "The goal of ArtemiS3 was to help scientists move from slow manual navigation to fast, targeted discovery. Instead of clicking through deeply nested folders to locate relevant planetary datasets, users can search across indexed S3 objects, filter results by attributes like file type, size, and date, inspect metadata, and organize important files through tagging and collaboration features. In the capstone presentation, the project was framed around the idea that NASA's data is growing faster than scientists can navigate it, and ArtemiS3 addresses that by helping users index, search, visualize, and discover the data more efficiently.",
      "From a technical perspective, ArtemiS3 was built as a modern, Dockerized web application. The frontend uses Svelte and Tailwind CSS to provide a responsive user interface, while the backend is built with Python's FastAPI to coordinate search requests, S3 access, and application logic. Boto3 is used to interact with NASA and USGS AWS S3 bucket storage, Meilisearch powers fast full-text and metadata search, and PostgreSQL stores lightweight user data such as recent searches and tagged files. The system was designed to run on an AWS EC2 instance with separate containers for the frontend, backend, database, and search engine.",
      "My role on the project was Architect, which centered on helping shape the system design, technology stack, and overall implementation approach. The architecture connected a Svelte frontend, FastAPI backend, Meilisearch index, PostgreSQL database, and AWS S3 data source through a containerized deployment model. This gave the team a clear separation of responsibilities across the UI, API layer, search infrastructure, storage access, and user data persistence. The frontend routes requests through the NGINX reverse proxy to the backend, the backend communicating with Meilisearch and PostgreSQL, and Boto3 connecting the application to NASA and USGS S3 buckets.",
      "The final product demonstrated a practical improvement over the existing workflow: before ArtemiS3, users were limited to manual folder navigation, no global filtering, difficult file discovery, and static storage interfaces; after ArtemiS3, users gained instant search, advanced filters, faster discovery, and a more interactive system. The project also included unit testing with Svelte's testing library and Pytest, integration testing with Postman, usability testing through USGS researcher surveys, and iterative improvements based on client feedback. Future work includes adding support for private S3 bucket access control, caching, rate control, and security auditing to make the system more scalable for enterprise and restricted research environments.",
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
    categories: ["ML", "Data", "Computer Vision"],
    technologies: [
      "Python",
      "PyTorch",
      "Torchvision",
      "timm",
      "ResNet50",
      "ViTs",
      "SLURM",
      "HPC",
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
        src: "/LesionShiftAI_port/lesionshiftai_results.png",
        alt: "Validation and external testing resilts for LesionShiftAI experiments",
      },
    ],
    aboutSections: [
      "LesionShiftAI is an end-to-end research benchmark I built to study how well skin lesion classification models generalize under dataset shift. The project focuses on binary benign vs malignant classification using dermoscopic images, with models trained and validated on ISIC 2019 and externally tested on HAM10000. The motivation was to go beyond internal validation accuracy and evaluate whether models that perform well on one dataset can still make reliable predictions when tested on images from a different source distribution.",
      "The project compares multiple deep learning approaches for melanoma risk classification, including a baseline ResNet50 CNN, a five-fold ResNet50 ensemble, ViT B16, and a larger ViT L16 model. All models were trained through a shared pipeline that handled data loading, preprocessing, binary label mapping, training, validation, checkpointing, metric export, and external testing. Images were standardized to 224x224 pixels, with training augmentations such as flips and brightness or contrast jitter, while validation and testing used deterministic preprocessing to keep evaluation consistent.",
      "A central part of LesionShiftAI was evaluating model performance with clinically meaningful metrics rather than relying only on accuracy alone. Because malignant lesions are the high risk class, I tracked metrics such as recall, F1, ROC AUC, and PR AUC, with special attention to false negatives because they represent malignant lesions incorrectly classified as benign. The results showed that all models experienced some performance drop on HAM10000, confirming that dataset shift is a major challenge in medical image classification. However, the ViT L16 model achieved the strongest overall performance across most major validation and external testing metrics, suggesting that larger pretrained vision transformers may offer stronger generalization than the CNN based approaches tested.",
      "From an engineering perspective, LesionShiftAI was structured as a reproducible machine learning framework rather than a single experiment. The repository includes configurable training scripts, model-specific pipelines, metric outputs, prediction exports, ROC and precision-recall curve generation, unit and integration tests, and SLURM launch scripts for running experiments on NAU's Monsoon HPC cluster. The project also supports artifact export for checkpoints, predictions, metrics, and generalization gap analysis, making it easier to compare models consistently and reproduce results across experiments.",
      "The project also highlights important ethical limitations of applying AI to medical screening. LesionShiftAI is not a diagnostic tool, but a research benchmark intended to study generalization behavior across datasets. The strongest model still produced false negatives on external testing, which reinforces the need for careful threshold tuning, broader dataset representation, and clinical oversight before any model like this could be considered for real-world decision support.",
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
      "Selenium",
      "BeautifulSoup",
      "pandas",
      "NumPy",
      "Jupyter Notebook",
      "Matplotlib",
      "Seaborn",
      "Statsmodels",
      "GPX route analysis",
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
      {
        src: "/UltraSignUp/female_velocity_vs_distance.png",
        alt: "Plot of female velocity vs race distance",
      },
      {
        src: "/UltraSignUp/male_velocity_vs_distance_resids.png",
        alt: "Plot of male velocity vs race distance residuals",
      },
      {
        src: "/UltraSignUp/female_velocity_vs_distance_resids.png",
        alt: "Plot of female velocity vs race distance residuals",
      },
    ],
    aboutSections: [
      "UltraSignup is a Python-based web scraping and data analysis pipeline I built to collect, clean, and structure large-scale trail race data from UltraSignup and Strava. The project began as a way to automate the tedious process of manually gathering race information, finisher statistics, and podium results across many events. Given an Excel file of race names, the system scrapes both general race details and top finisher data, then exports the results into structured CSV files that can be used for downstream analysis.",
      "A major part of the project was turning inconsistent web data into analysis-ready datasets. Race pages often contain event names, dates, distances, units, locations, and results in inconsistent formats, so I built post-processing logic to standardize extracted values, clean duplicated rows, sort outputs, and generate a unique event IDs that links race-level data with podium finisher data. This made it possible to analyze races across multiple dimensions, such as event distance, location, date, participation trends, and gender based podium outcomes, rather than treating each scraped page as an isolated result.",
      "The data processing layer was separated from the scraping layer so that raw collected data could be transformed into cleaner analytical outputs. Using tools like pandas, the pipeline reads input race lists, structures scraped data into DataFrames, applies formatting rules, standardizes columns, removes duplicates, and saves organized CSV files. This design allowed the project to function as a scraper and lightweight data engineering workflow that converts messy web-based race information into usable datasets for statistical analysis, visualization, and future modeling.",
      "Overall, the project demonstrates how I approach data-driven software engineering: automate data collection, clean and normalize inconsistent inputs, preserve relationships between datasets, and produce outputs that can support meaningful analysis. The final result was a reusable pipeline capable of transforming a list of race names into structured race and podium datasets, making it easier to study trail running events at scale.",
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
    technologies: [
      "Python",
      "Scikit-Learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "K-Means",
      "Gaussian Mixture Models",
      "Spectral Clustering",
      "Hierarchical Clustering",
      "PCA",
      "SLURM",
      "HPC",
      "HTML",
      "CSS",
    ],
    accent: "violet",
    featured: false,
    coverImage: {
      src: "/MACH-IV_Clustering/dendrograms.png",
      alt: "Dendrogram plots from hierarchical clustering methods",
    },
    galleryImages: [
      {
        src: "/MACH-IV_Clustering/mach-iv_clustering_site.png",
        alt: "MACH-IV website landing page"
      },
      {
        src: "/MACH-IV_Clustering/dendrograms.png",
        alt: "Dendrogram plots from hierarchical clustering methods",
      },
      {
        src: "/MACH-IV_Clustering/gmm_metrics.png",
        alt: "GMM model quality metrics",
      },
      {
        src: "/MACH-IV_Clustering/high_mach.png",
        alt: "High Machiavellianism profile",
      },
    ],
    aboutSections: [
      "MACH-IV Clustering is an unsupervised machine learning project focused on exploring latent patterns in Machiavellianism personality data. The project used the MACH-IV dataset from the Open Source Psychometrics Project, which contains responses to 20 Likert-scale Machiavellianism questions along with demographic and auxiliary variables such as age, gender, location, and education. The goal was to determine whether distinct respondent groups naturally emerge from the data and to characterize those groups in relation to broader personality traits, particularly traits from the Ten Item Personality Inventory.",
      "The project compared four clustering approaches: K-Means, Gaussian Mixture Models, Spectral Clustering, and Hierarchical Agglomerative Clustering. Each algorithm was implemented as its own modular pipeline with configurable parameters, preprocessing, clustering execution, and artifact generation. The cleaned dataset could be passed into any of the four clustering workflows, which produced cluster labels, PCA visualizations, question response heatmaps, and downstream analysis outputs. This made it possible to compare how different unsupervised learning methods grouped respondents and whether those groupings revealed consistent psychological patterns.",
      "A major focus of the project was interpretability. After clustering, the analysis pipeline generated visualizations such as heatmaps, PCA plots, and radar plots to help explain how each cluster differed across MACH-IV responses and TIPI personality traits. Across the results, higher Machiavellian clusters were generally associated with being more reserved or quiet, less sympathetic or warm, and less extraverted or enthusiastic. Some algorithms also suggested associations between higher Machiavellianism and traits such as being more critical or quarrelsome, more dependable or self disciplined, and less anxious or easily upset.",
      "From an engineering standpoint, the project was built with reproducibility and scalability in mind. The repository includes separate folders for each clustering algorithm, a shared cluster analysis module, raw and processed data directories, documentation, and a website containing more detailed interpretations. The team first tested the models locally on smaller samples, then created HPC-ready packages and SLURM scripts to run the full dataset on NAU's Monsoon cluster. This allowed the project to move from small-scale experimentation to larger full dataset analysis while keeping the workflow organized and reproducible.",
      "Overall, MACH-IV Clustering demonstrates my ability to lead and contribute to an applied machine learning project where the objective was exploratory analysis rather than supervised prediction. The project required data cleaning, algorithm implementation, cluster evaluation, visualization, interpretation, HPC execution, and clear technical documentation. While unsupervised learning does not provide definitive labels, the project produced a strong starting point for understanding personality-based groupings and identified several future directions, including using embeddings, more expressive models, or supervised learning with labeled Machiavellianism categories.",
    ],
    links: {
      repoUrl: "https://github.com/jeffreyHoelzel/mach-iv-clustering",
      liveUrl: "https://jeffreyhoelzel.github.io/mach-iv-clustering/",
    },
  },
  {
    slug: "campus-health-chatbot",
    name: "Campus Health Chatbot",
    subtitle: "Student Information Assistant",
    description:
      "A chatbot evaluation platform designed to support campus health questions and assess interaction quality in focus groups.",
    categories: ["AI", "Full-Stack"],
    technologies: [
      "React",
      "JavaScript",
      "Flask",
      "Python",
      "Firebase",
      "OpenAI API",
      "HuggingFace",
      "PyTorch",
      "Transformers",
      "Accelerate",
      "BitsAndBytes",
      "Docker",
      "Docker Compose",
      "GCP",
      "Lambda Labs",
      "RAG",
    ],
    accent: "teal",
    featured: false,
    coverImage: {
      src: "/CampusHealthChatbot/sample_interaction.png",
      alt: "Sample chatbot interaction",
    },
    galleryImages: [
      {
        src: "/CampusHealthChatbot/sample_interaction.png",
        alt: "Sample chatbot interaction",
      },
      {
        src: "/CampusHealthChatbot/post_chat_survey.png",
        alt: "Post-session survey prompts",
      },
    ],
    aboutSections: [
      "The Campus Health Chatbot Platform is a participatory-designed, LLM-powered chatbot system built to support college students as they seek, discuss, and understand health and wellness information. The platform was designed with a focus on first generation students and other underserved campus communities, creating a guided peer group environment where students can collaboratively ask health related questions, clarify concerns, and receive supportive responses in real time. Rather than only acting as a simple question answering bot, the system also facilitates a structured multi-user conversation space where the chatbot can provide fact-checking, resource recommendations, and sentiment sensitive support during group discussions.",
      "A major goal of the project was to study how language models can support health information seeking in realistic student centered settings. The platform combines prompt engineering, retrieval augmented generation (RAG), and model comparison to evaluate how different conversational structures and model types affect user trust, clarity, and engagement. The system was also designed to compare small language models against full-scale LLMs such as ChatGPT 4o, with the broader research goal of understanding the tradeoffs between response quality, computational cost, and environmental efficiency.",
      "From an engineering perspective, the platform was built as a Dockerized full-stack web application. The frontend uses React to support participant registration, chat rooms, chatbot interaction, pre and post surveys, and navigation flows. The backend is built with Flask and Flask SocketIO, enabling real-time communication between users and the chatbot. Firebase Firestore is used to store participant data, chat logs, survey responses, and tracking information, while the backend integrates with both OpenAI models and open source HuggingFace models through PyTorch, Transformers, Accelerate, and BitsAndBytes.",
      "The deployment workflow was designed to support both local development and cloud-based research sessions. Locally, the system runs through Docker Compose with separate frontend, backend, and proxy containers. For focus groups and higher compute experiments, the platform can be deployed on Lambda Labs GPU instances or Google Cloud Compute Engine, with Lambda Labs recommended because of its immediate GPU availability, lower operational friction, and suitability for running open-source models during research sessions. This made the platform flexible enough to support development, model testing, focus groups, and RITE testing in different environments.",
      "Overall, this project demonstrates my ability to build applied AI systems that combine full-stack engineering, real-time communication, cloud deployment, and human centered research goals. The Campus Health Chatbot Platform was not just a chatbot interface, but a research platform for studying how LLMs and SLMs can help students navigate health information collaboratively, empathetically, and responsibly.",
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
      "JavaScript",
      "Python",
      "Flask",
      "SQLite",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "DigitalOcean",
      "Apache",
      "Authentication",
    ],
    accent: "blue",
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
        src: "/LouiesRatings/class_page_demo.png",
        alt: "Class details page",
      },
      {
        src: "/LouiesRatings/grade_distribution_demo.png",
        alt: "Grade distribution visualization",
      },
      {
        src: "/LouiesRatings/LouiesRatings_logo.png",
        alt: "Louie's Ratings logo",
      },
    ],
    aboutSections: [
      "Louie's Ratings is a full-stack web application I originally conceptualized to help Northern Arizona University Computer Science students make more informed course enrollment decisions. I came up with the idea after recognizing that students often rely on scattered, incomplete, or overly subjective information when choosing courses and professors. The goal was to create an NAU-focused alternative to RateMyProfessor that combined professor reviews, class information, student comments, and historical grade distribution data in one centralized platform. Rather than simply showing opinions, Louie's Ratings emphasized visual grade distributions and course-specific insights so students could make scheduling decisions with more confidence.",
      "Because the project started from my idea, I helped lead the team through both the technical development process and the nontechnical project deadlines. This included shaping the product vision, guiding early requirements discussions, helping define the core value proposition, and keeping the team aligned around what students actually needed from the platform. Through interviews and requirements analysis, we identified that students wanted clearer access to grade distributions, withdrawal rates, professor teaching style, course difficulty, syllabus expectations, and side-by-side professor comparisons. Those findings helped turn the initial concept into a more concrete product direction.",
      "From a product perspective, Louie's Ratings supports professor and class search, professor ratings, student comments, graphical grade distribution displays, account login, and administrative moderation of inappropriate comments. Logged-in users can leave feedback and ratings, while other students can browse professor and class pages to compare prior student experiences and grade outcomes. The system was designed around the idea that students should not have to piece together information from multiple disconnected sources just to feel prepared for a semester.",
      "From an engineering perspective, Louie's Ratings was built as a Dockerized full-stack application with a React frontend, Flask backend, and relational database support. SQLite was used for development, PostgreSQL was selected for production, and the application was deployed on DigitalOcean using Docker Compose. The deployed architecture included separate containers for the backend service, frontend web interface, automated tests, and an Apache-based proxy for routing and content delivery.",
      "My individual contribution included implementing the login requirement, which allowed students to access their own account and view comments they had left. More broadly, this project gave me experience leading a team from idea formation through requirements, implementation, testing, documentation, and deployment planning. Louie's Ratings demonstrates my ability to contribute technically and to identify a real user problem, turn it into a concept, coordinate a team around that vision, and guide the project through engineering and course deliverable deadlines.",
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
