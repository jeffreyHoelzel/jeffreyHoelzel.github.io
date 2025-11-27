<script lang="ts">
  import "./styles/Home.css";
  import { FaGithub, FaLinkedin } from "svelte-icons/fa";
  import Router from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Projects from "./pages/Projects.svelte";

  const routes = {
    "/": Home, 
    "/projects": Projects
  };
</script>

<main>
  <Router {routes} />
</main>
