<script lang="ts">
  import { base } from "$app/paths";
  import "../styles/Home.css";
  import { FaLink, FaGithub, FaLinkedin, FaEnvelope } from "svelte-icons/fa";

  const name = "Jeffrey Hoelzel Jr";
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", url: `${base}/` },
    { label: "Projects", url: `${base}/projects/` },
    { label: "Resume", url: `${base}/resume/` },
    { label: "Contact", url: "mailto:jeffreyhoelzeljr@gmail.com" },
  ];

  const skills = [
    "Full-Stack Development",
    "AI/ML Engineering",
    "Data Engineering",
  ];

  const socials = [
    {
      icon: FaLink,
      label: "Portfolio",
      url: "https://jeffreyhoelzel.com",
    },
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
</script>

<footer class="footer">
  <div class="wrap footerWrap">
    <div class="footerGrid">
      <section class="footerColumn">
        <h3 class="footerHeading">About Me</h3>
        <p class="footerAboutText">
          A passionate software engineer focused on practical AI, full-stack
          systems, and meaningful user experiences.
        </p>
      </section>

      <section class="footerColumn">
        <h3 class="footerHeading">Quick Links</h3>
        <ul class="footerList">
          {#each quickLinks as link}
            <li>
              <a class="footerListLink" href={link.url}>{link.label}</a>
            </li>
          {/each}
        </ul>
      </section>

      <section class="footerColumn">
        <h3 class="footerHeading">Skills</h3>
        <ul class="footerList">
          {#each skills as skill}
            <li class="footerListText">{skill}</li>
          {/each}
        </ul>
      </section>

      <section class="footerColumn">
        <h3 class="footerHeading">Connect</h3>
        <div class="footerSocialRow">
          {#each socials as social}
            <a
              class="footerSocialLink"
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <span class="footerSocialIcon" aria-hidden="true">
                <social.icon />
              </span>
            </a>
          {/each}
        </div>
      </section>
    </div>

    <div class="footerDivider"></div>
    <div class="footerCopyright">
      &copy; {year}
      {name}. All rights reserved.
    </div>
  </div>
</footer>
