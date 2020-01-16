<script>
  import { slide } from "svelte/transition";
  export let estadoMenu;
  export let objetosMenu;
  export let colorFondo;
  export let color;
  export let alturaObjetoMenu;
  export let sombra;
</script>

<style>
  ul {
    height: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: 100%;
    position: absolute;
    z-index: 1000;
  }
  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.75;
  }
</style>

{#if estadoMenu === true}
  <ul
    style="background-color:{colorFondo};{!!sombra ? 'box-shadow: 0 1px 1px rgba(0,0,0,0.5)' : ''}"
    transition:slide>

    {#each objetosMenu as objeto}
      <li style="height:{alturaObjetoMenu};color={color}">
        <a href="#" style="color:{color}">{objeto}</a>
      </li>
    {/each}

  </ul>
{/if}
