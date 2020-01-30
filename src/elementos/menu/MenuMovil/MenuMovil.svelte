<script>
  import { slide } from "svelte/transition";

  export let segment;
  export let alturaMenuMovil;
  export let estadoMenu;
  export let objetosMenu;
  export let objetosMenuExtra;
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
    display: grid;
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
    style="background-color:{colorFondo};{!!sombra ? 'box-shadow: 0 1px 1px rgba(0,0,0,0.5)' : ''};height:{alturaMenuMovil}"
    transition:slide>

    {#each objetosMenu as objeto, i}
      <li style="height:{alturaObjetoMenu};color={color}">
        <a
          class:selected={segment === objeto.ruta}
          href={objeto.ruta}
          style="color:{color}">
          {objeto.label}
        </a>
      </li>
    {/each}
    {#if !!objetosMenuExtra}
      <hr />
      {#each objetosMenuExtra as objeto, i}
        <li style="height:{alturaObjetoMenu};color={color}">
          <a
            class:selected={segment === objeto.ruta}
            href={objeto.ruta}
            style="color:{color}">
            {objeto.label}
          </a>
        </li>
      {/each}
    {/if}

  </ul>
{/if}
