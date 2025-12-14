  <script lang="ts">
    import { onMount } from "svelte";
    import "../styles/Home.css";
    import { FaBars, FaTimes } from "svelte-icons/fa";

    const name = "Jeffrey Hoelzel Jr.";
    const avatar = {
      url: import.meta.env.BASE_URL + "headshot_2025_Jeffrey-Hoelzel_3.jpg", 
      alt: "Headshot of Jeffrey Hoelzel Jr."
    };

  const actions = [
    {
      label: "More about me", 
      url: "#/about"
    }, 
    {
      label: "View projects", 
      url: "#/projects"
    }, 
    {
      label: "View resume", 
      url: "#/resume"
    }
  ];

  let navOpen = false;
  const toggleNav = () => (navOpen = !navOpen);
  const closeNav = () => (navOpen = false);

  let isMobile = false;
  const checkScreen = () => (isMobile = window.innerWidth <= 720);
  onMount(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  });
  </script>
  
  <!-- Header -->
  <header class="siteHeader">
    <div class="wrap">
      <div class="navRow">
        <a href="#/" class="brand" aria-label="home">
          <div class="brandLogo">
            {#if avatar.url}
              <img
                class="brandPhoto"
                src={avatar.url}
                alt={avatar.alt}
                width="36"
                height="36"
              />
            {:else}
              <div class="brandPhoto" aria-hidden="true"></div>
            {/if}
          </div>
          <span class="brandName">{name}</span>
        </a>

        <!-- Mobile burger menu -->
        <button
          class="navToggle {isMobile ? 'iconBtn' : ''}"
          type="button"
          on:click={toggleNav}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
        >
          {#if navOpen}
            <FaTimes size="22" />
          {:else}
            <FaBars size="22" />
          {/if}
        </button>

        {#if actions.length}
          <nav aria-label="Actions" class="navLinks" class:navLinksOpen={navOpen}>
            {#each actions as action}
              <a href={action.url} class="navLink" on:click={closeNav}>
                {action.label}
              </a>
            {/each}
          </nav>
        {/if}
      </div>
    </div>
  </header>
