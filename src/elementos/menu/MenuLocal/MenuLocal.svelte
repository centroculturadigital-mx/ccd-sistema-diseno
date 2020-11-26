<script>
  import Texto from "../../texto/Texto/Texto.svelte";
  import Icono from "../../Icono/Icono.svelte";

  export let elementos = [];
  export let actual = 0;

  let responsivo;
</script>

<style>
  nav {
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-width: 80rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 3);
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    flex-shrink: 0;
    cursor: pointer;
  }

  li.Enlace {
    padding: 0 !important;
  }
  li.Enlace a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 3);      
  }

  li a {
    width: 100%;
    height: 100%;
    display: block;
    text-decoration: none;
  }

  li:hover {
    opacity: 0.75;
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
  li :global(.iconoContenedor) {
    height: 1.25rem !important;
    width: 1.25rem !important;
  }
  li :global(svg) {
    fill: var(--theme-textos-parrafo-color) !important;
    height: 100%;
  }
  .actual {
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
</style>


<svelte:window bind:innerWidth={responsivo}/>


<nav>
  <ul>
    {#each elementos as elemento, i ('elemento_local_' + i)}
      {#if elemento.enlace}
        <li class={`Enlace ${i == actual ? ' actual' : ''}`}>
          <a href={elemento.enlace}>
            {#if elemento.icono && responsivo < 768}
              <Icono icono={elemento.icono} />
            {/if}
            <Texto texto={elemento.texto} />
          </a>
        </li>
      {:else}
        <li on:click={elemento.accion(i)} class={i == actual ? 'actual' : ''}>
          {#if elemento.icono && responsivo < 768}
            <Icono icono={elemento.icono} />
          {/if}
          <Texto texto={elemento.texto} />
        </li>
      {/if}
    {/each}
  </ul>
</nav>
