<script>
  import { slide } from "svelte/transition";

  export let segment;
  export let estado;
  export let elementos;
  export let sombra;
  export let componentes;

</script>

<style>
  nav {
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
  ul {
    height: auto;
    margin: 0;
    padding: 0;
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
  .sombra {
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.5);
  }
  nav :global(.Herramientas) {
    display: flex;
    justify-content: center;
  }
</style>

{#if estado === true}
  <nav
    class={!!sombra ? 'sombra MenuMovil' : 'MenuMovil'}
    transition:slide|local>
    {#if Array.isArray(elementos) && elementos.length > 0}
      <ul>
        {#each elementos as elemento, i ('elemento_' + i)}
          <li>
            <a
              class:selected={segment === elemento.enlace}
              href={elemento.enlace}
              on:click>
              {elemento.texto}
            </a>
          </li>
        {/each}
      </ul>
    {/if}
    {#if Array.isArray(componentes) && componentes.length > 0}
      <div class="Herramientas">
        {#each componentes as componente}
          <svelte:component
            this={componente.componente}
            {...componente.datos} />
        {/each}
      </div>
    {/if}
  </nav>
{/if}
