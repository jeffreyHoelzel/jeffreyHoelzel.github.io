<script lang="ts">
  import { base } from "$app/paths";
  import "../styles/Resume.css";
  import { FaExternalLinkAlt, FaFileDownload } from "svelte-icons/fa";

  const resumeUrl = `${base}/Jeffrey_Hoelzel_Jr_resume.pdf`;
  const title = "Resume";
  const subtitle1 = "View or download my current resume.";
  const subtitle2 = "Last updated May 13, 2026.";
</script>

<main class="resumePage">
  <section class="resumeSection sectionPad">
    <div class="wrap resumeLayout">
      <header class="resumeHeader">
        <h1 class="resumeTitle">{title}</h1>
        <p class="resumeSubtitle">{subtitle1}</p>
        <p class="resumeUpdated">{subtitle2}</p>

        <div class="resumeActions">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            class="resumePrimaryBtn"
          >
            <span class="resumeActionIcon" aria-hidden="true">
              <FaExternalLinkAlt />
            </span>
            <span>View in another tab</span>
          </a>

          <a
            href={resumeUrl}
            download="Jeffrey-Hoelzel-Resume_WEBSITE_ONLY.pdf"
            class="resumeSecondaryBtn"
          >
            <span class="resumeActionIcon" aria-hidden="true">
              <FaFileDownload />
            </span>
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      <aside class="resumePreviewCard" aria-label="Resume preview">
        <div class="resumePreviewMeta">PDF Preview</div>
        <div class="resumeFrame">
          <iframe src={resumeUrl} title="Resume preview" loading="lazy"
          ></iframe>
        </div>
      </aside>
    </div>
  </section>
</main>
