<script>
  import { slide } from "svelte/transition";
  import Titulo from "../../elementos/texto/Titulo/Titulo";
  import Contenido from "../../componentes/Contenido/Contenido";
  import Icono from "../../elementos/Icono/Icono";

  export let estado = false;
  export let titulo;
  export let nivel;
  export let contenido;
  export let elemento;

  const colapsar = () => {
    estado = !estado;
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .Acordeon {
    position: relative;
    background-color: var(--theme-colores-fondo);
    height: auto;
    width: 100%;
  }
  header {
    display: flex;
    justify-content: space-between;
    padding: var(--theme-espaciados-padding);
  }
  header :global(h1),
  header :global(h2),
  header :global(h3),
  header :global(h4),
  header :global(h5),
  header :global(h6) {
    margin: var(--theme-espaciados-margen) 0;
  }
  header:hover {
    opacity: 0.75;
    cursor: pointer;
  }
  .contenido {
    padding: var(--theme-espaciados-padding);
  }
</style>

<div class="Acordeon">
  <header on:click={colapsar}>
    <Titulo texto={titulo} {nivel} />
    {#if !!elemento || !!contenido}
    <Icono icono={estado ? 'arriba' : 'abajo'} />
    {/if}
  </header>
  {#if estado}
    <div class="contenido" transition:slide>

      {#if !!elemento}
        <svelte:component this={elemento.componente} {...elemento.datos} />
      {:else if !!contenido}
        <Contenido html={contenido} />
      {/if}

    </div>
  {/if}

</div>
