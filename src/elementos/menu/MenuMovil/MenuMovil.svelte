<script>
  import { slide } from "svelte/transition";

  export let segment;
  export let estadoMenu;
  export let objetosMenu;
  export let objetosMenuExtra;
  export let sombra;

</script>

<style>
  ul {
    height: auto;
    margin: 0;
    padding: 1rem 4rem;
    list-style-type: none;
    width: 100%;
    display: grid;
    position: absolute;
    z-index: 1000;
    box-sizing: border-box;
    background-color: var(--theme-cabeceras-principal-fondo);
  }
  li {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    text-decoration: none;
    font-size: var(--theme-textos-menu-escritorio-tamanno);
    font-family: var(--theme-textos-menu-escritorio-tipografia);
    color: var(--theme-textos-menu-escritorio-color);
    font-weight: var(--theme-textos-menu-escritorio-peso);
    text-transform: uppercase;
  }
  a:hover {
    color: var(--theme-textos-menu-escritorio-hover);
  }
  hr {
    width: 100%;
  }
  .sombra {
    box-shadow: 0px 4px 3px rgba(0,0,0,0.5);
  }
</style>

{#if estadoMenu === true}
  <ul
    class={!!sombra ? 'sombra' : ''}
    transition:slide>

    {#each objetosMenu as objeto, i}
      <li>
        <a class:selected={segment === objeto.ruta} href={objeto.ruta}>
          {objeto.label}
        </a>
      </li>
    {/each}
    {#if !!objetosMenuExtra}
      <hr />
      {#each objetosMenuExtra as objeto, i}
        <li>
          <a class:selected={segment === objeto.ruta} href={objeto.ruta}>
            {objeto.label}
          </a>
        </li>
      {/each}
    {/if}

  </ul>
{/if}
