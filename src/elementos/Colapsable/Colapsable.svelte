<script>
  import Icono from "../Icono/Icono";
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo";
  import Texto from "../../elementos/texto/Texto/Texto";

  export let titulo;
  export let componente;
  export let datos;

  let estado = true;

  const cambiaEstado = () => {
    estado = !estado;
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .Colapsable {
    transition: var(--theme-transiciones-normal);
    background-color: var(--theme-colores-fondo);
    position: relative;
    height: 100%;
    width: 100%;
  }
  header {
    padding: var(--theme-espaciados-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .colapsar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }
  .colapsar:hover {
    opacity: 0.75;
  }
  .colapsar :global(.iconoContenedor) {
    position: relative;
    right: -1rem;
    border-radius: 10rem;
    background-color: var(--theme-colores-primario);
    height: 1rem !important;
    width: 1rem !important;
  }
  .colapsar :global(span) {
    font-size: calc(var(--theme-textos-parrafo-tamanno) / 1.5);
  }
  .colapsar :global(svg) {
    fill: #fff;
    position: relative;
    left: -0.035rem;
  }
  .colapsado {
    width: 1px;
  }
  .abierto {
    width: 100%;
  }
  .contenedor {
    overflow: hidden;
  }
  .abrir :global(.iconoContenedor) {
    position: relative;
    right: 1rem;
    border-radius: 10rem;
    background-color: var(--theme-colores-primario);
    height: 1rem !important;
    width: 1rem !important;
  }
  .abrir :global(svg) {
    fill: #fff;
    position: relative;
    left: 0.035rem;
  }
  .noVisible {
      visibility: hidden;
  }
</style>

<aside class="Colapsable {estado ? 'abierto' : 'colapsado'}">

  <header>
    {#if !estado}
      <div class="abrir" on:click={cambiaEstado}>
        <Icono icono={'derecha'} />
      </div>
    {:else}
      <div>
        {#if !!titulo}
          <Parrafo texto={titulo} />
        {/if}
      </div>

      <div class="colapsar" on:click={cambiaEstado}>
        <Texto texto={'Ocultar'} />
        <Icono icono={'izquierda'} />
      </div>
    {/if}
  </header>

    <section class="contenedor {estado ? "" : "noVisible"}">

      <svelte:component this={componente} {...datos} />

    </section>
</aside>
