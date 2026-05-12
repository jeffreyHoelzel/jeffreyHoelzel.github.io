<script lang="ts">
  import { base } from "$app/paths";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  const faviconHref = `${base}/circular_portfolio_icon.png`;
</script>

<svelte:head>
  <title>Jeffrey Hoelzel Jr.</title>
  <link rel="icon" type="image/png" href={faviconHref} />
</svelte:head>

<Header />
<slot />
<Footer />
