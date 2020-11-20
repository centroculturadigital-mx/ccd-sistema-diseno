<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let estado = false;
  export let componente = null;
  export let datos = {};
  export let cerrar;

  const cerrarModal = () => {
    estado = !estado;
    if (typeof cerrar == "function") {
      cerrar();
    }
  };

</script>

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
    z-index: 1000;
  }
  .Modal header {
    position: absolute;
    top: 0;
    right: 0;
    padding: calc(var(--theme-espaciados-padding) * 1);
    height: auto;
    width: auto;
    display: flex;
    justify-content: flex-end;
    z-index: 1001;
  }
  .Modal header :global(img) {
    transition: var(--theme-transisiones-normal);
    height: 1.25rem !important  ;
  }
  .Modal header :global(img:hover) {
    filter: invert();
  }
  .Contenedor {
    position: relative;
    max-width: 85vw;
    overflow: hidden;
    z-index: 1001;
  }
  .Contenedor :global(.cerrar) {
    fill: #aaaaaa !important;
    cursor: pointer;
  }
  .Contenedor :global(.cerrar:hover) {
    opacity: 0.75;
  }
  .Contenedor :global(svg) {
    height: 100%;
    width: 100%;
  }
  .capaCerrar {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
</style>

{#if !!estado}

  <section class="Modal" transition:fade >

    <div class="capaCerrar" on:click={cerrarModal}/>

    <div class="Contenedor">

      <header>
        <div on:click={cerrarModal}>
          <Icono icono={'cerrar'}/>
        </div>
      </header>

      <svelte:component this={componente} {...datos}/>

    </div>

  </section>

{/if}
