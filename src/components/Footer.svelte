<script lang="ts">
  import "../styles/Home.css";
  import { FaGithub, FaLinkedin, FaEnvelope } from "svelte-icons/fa";

  const name = "Jeffrey Hoelzel Jr.";

  const socials = [
    {
      icon: FaGithub, 
      label: "GitHub", 
      url: "https://github.com/jeffreyHoelzel"
    }, 
    {
      icon: FaLinkedin, 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/jeffrey-hoelzel-jr/"
    }, 
    {
      icon: FaEnvelope, 
      label: "Email", 
      url: "mailto:jeffreyhoelzeljr@gmail.com"
    }
  ];
</script>

<footer class="footer">
  <div class="wrap">
    <div class="footerContacts">
      {#each socials as social}
        <a 
          class="footerLink"
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
        >
          <social.icon />
          {social.label.toUpperCase()}
        </a>
      {/each}
    </div>

    <div class="footerCopyright">© 2025 {name}</div>
  </div>
</footer>
