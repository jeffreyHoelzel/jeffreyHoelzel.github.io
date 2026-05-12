<script lang="ts">
  import { base } from "$app/paths";
  import "../styles/Resume.css";
  import "../styles/Home.css";

  const resumeUrl = `${base}/Jeffrey_Hoelzel_Jr_resume.pdf`;
  const title = "Resume";
  const subtitle1 = "View or download my current resume.";
  const subtitle2 = "Last updated March 10, 2026.";
</script>

<main>
  <section class="sectionPad">
    <div class="wrap resumeLayout">
      <div class="resumeHeader">
        <h1 class="pageTitle">{title}</h1>
        <p class="resumeSubtitle">{subtitle1} <i>{subtitle2}</i></p>

        <div class="ctaRow">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            class="socialPill"
          >
            View in another tab
          </a>

          <a
            href={resumeUrl}
            download="Jeffrey-Hoelzel-Resume_WEBSITE_ONLY.pdf"
            class="socialPill"
          >
            Download PDF
          </a>
        </div>
      </div>

      <aside class="resumePreviewCard" aria-label="Resume preview">
        <div class="resumeFrame">
          <iframe src={resumeUrl} title="Resume preview" loading="lazy"
          ></iframe>
        </div>
      </aside>
    </div>
  </section>
</main>
