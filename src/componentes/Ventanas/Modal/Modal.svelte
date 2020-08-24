<script>
  import { fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let estado = false;
  export let componente = null;
  export let datos = {};
  export let cerrar;

  let cerrarAccion = () => {
    estado = !estado;
    if (typeof cerrar == "function") {
      cerrar();
    }
  };
</script>

<style>
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
    box-sizing: border-box;
  }
  .Modal header {
    position: absolute;
    top: -1.05rem;
    right: -2.9rem;
    padding: calc(var(--theme-espaciados-padding) * 2);
    height: auto;
    width: auto;
    display: flex;
    justify-content: flex-end;
    z-index: 1001;
    box-sizing: border-box;
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
  }
</style>

{#if !!estado}
  <section class="Modal" transition:fade>

    <div class="Contenedor">
      <header>
        <div on:click={cerrarAccion}>
          <Icono icono={'cerrar'} />
        </div>
      </header>

      <svelte:component this={componente} {...datos} />
    </div>

  </section>
{/if}
