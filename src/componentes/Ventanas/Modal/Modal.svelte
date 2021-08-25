<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let estado = false;
  export let componente = null;
  export let datos = {};
  export let cerrar;
  export let cerrarBoton = false;

  const cerrarModal = () => {
    estado = !estado;
    if (typeof cerrar == "function") {
      cerrar();
    }
  };
  $: console.log("modalxxx", cerrarBoton);
</script>

{#if !!estado}
  <section class="Modal" transition:fade|local>
    <div class="capaCerrar" on:click={cerrarModal} />

    {#if !!cerrarBoton}
      <header>
        <div on:click={cerrarModal}>
          <Icono icono={"cerrar"} />
        </div>
      </header>
    {/if}
    <div class="Contenedor">
      <svelte:component this={componente} {...datos} />
    </div>
  </section>
{/if}

<style>
  * {
    box-sizing: border-box;
  }
  .Modal {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }
  .Modal header {
    position: absolute;
    top: var(--theme-espaciados-padding);
    right: var(--theme-espaciados-padding);
    padding: calc(var(--theme-espaciados-padding) * 1);
    height: auto;
    width: auto;
    cursor: pointer;
    z-index: 11000;
  }
  .Modal header :global(img) {
    transition: var(--theme-transisiones-normal);
    height: 1.25rem !important  ;
  }
  .Modal header :global(img:hover) {
    filter: invert();
  }
  .Modal header :global(.cerrar) {
    fill: #aaaaaa !important;
    cursor: pointer;
  }
  .Modal header :global(.cerrar:hover) {
    opacity: 0.75;
  }
  .Contenedor {
    position: relative;
    max-width: 85vw;
    overflow: hidden;
    z-index: 1001;
  }
  /* .Contenedor :global(svg) {
    height: 100%;
    width: 100%;
  } */
  .capaCerrar {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
</style>
