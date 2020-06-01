<script>
  import { fade } from "svelte/transition";
  import Icono from "../../elementos/Icono/Icono.svelte";
  export let estado = false;
  export let componente = null;
  export let datos = {};

  let cerrar = () => {
    estado = !estado;
  };
</script>

<style>
  .Modal {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
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
    top: 0;
    right: 0;
    padding: calc(var(--theme-espaciados-padding) * 2);
    height: auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    z-index: 1001;
    box-sizing: border-box;
  }
  .Modal header :global(img) {
      transition: var(--theme-transisiones-normal);
  }
  .Modal header :global(img:hover) {
      filter: invert();
  }
</style>

{#if !!estado}
  <section class="Modal" transition:fade>
    <header>
      <div on:click={cerrar}>
        <Icono icono={'cerrar'} />
      </div>
    </header>

    <div class="ModalContenedor">
      <svelte:component this={componente} {...datos} />
    </div>

  </section>
{/if}
