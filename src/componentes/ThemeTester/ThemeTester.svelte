<script>
  import temas from "../../temas/temas";
  import {
    ThemeWrapper,
    ThemeToggle
  } from "@centroculturadigital-mx/svelte-themer";

  export let componente = null;
  export let datos = {};
</script>

<style>
  .ThemeTester {
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
  }

  header {
    border-bottom: 1px solid #666;
    position: relative;
    z-index: 1;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  .container {
    width: 100%;
    min-height: 20rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 0.5rem;
    padding: 1rem;
    box-sizing: border-box;
  }
</style>

<div class="ThemeTester">
  <ThemeWrapper themes={temas}>

    <header>

      <ThemeToggle />

    </header>

    <div class="container">
      <svelte:component this={componente} {...datos} />
    </div>

  </ThemeWrapper>

</div>
