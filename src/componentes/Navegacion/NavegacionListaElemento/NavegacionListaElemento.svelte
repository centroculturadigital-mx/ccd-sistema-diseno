<script>
  import Bloque from "../../../componentes/Bloque/Bloque.svelte";
  import Icono from "../../../elementos/Icono/Icono";

  import { slide } from 'svelte/transition';

  export let elemento = {};
  export let colapsado = true;
  export let accion = () => console.log("una accion");
  
  let iconoExpandido = "derecha";
  let iconoColapsado = "abajo";


  $: subElementos = Array.isArray(elemento.elementos) ? elemento.elementos : [];

  const activar = () => {
    colapsado = !colapsado;
    // accion(elemento);
  };
</script>

<style>
  .elementoLista :global(button) {
    border-style: none;
    padding: var(--theme-tamannos-sm);
    padding-left: 0;
    background-color: var(--theme-tarjetas-transparente);
    cursor: pointer;
    text-align: left;
  }
  .elementoLista :global(button:hover) {
    opacity: 0.75;
  }

  .flecha {
    background-color: var(--theme-tarjetas-fondo);
  }

  .flecha :global(.iconoContenedor img) {
    height: var(--theme-tamannos-md) !important;
    margin-right: 0.5rem;
  }

  span {
    display: inline-block;
    font-size: var(--theme-tamannos-md);
    font-family: var(--theme-botones-primario-familia);
    color: var(--theme-textos-parrafo-neutro);
  }

  ul {
    list-style: none;
    margin: 0;
  }

  li {
    list-style: none;
  }

  .activo {
    font-weight: bold;
  }

  
</style>

<li class="elementoLista">
  <button>
    {#if Array.isArray(subElementos) && subElementos.length > 0}
      <span class="flecha" on:click={activar}>
        {#if !colapsado}
          <Icono icono={'abajo'} />
        {:else}
          <Icono icono={'derecha'} />
        {/if}
      </span>
    {/if}
    <span class={ elemento.activo ? "activo" : "" } on:click={accion(elemento)}>
      {elemento.texto}
    </span>
  </button>

  {#if !colapsado && Array.isArray(subElementos) && subElementos.length > 0}
    <ul transition:slide>
      {#each subElementos as subElemento (subElemento)}
        <svelte:self elemento={subElemento} {accion}/>
      {/each}
    </ul>
  {/if}

</li>
