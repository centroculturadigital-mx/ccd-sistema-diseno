<script>
  import { fade } from "svelte/transition";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Icono from "../../../elementos/Icono/Icono";
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let reacciones = [];
  export let reaccionar;


  let estado = false;

  let accion = () => {
    estado = !estado;
  };
  const reaccionarAccion = reaccion => {
    if(typeof reaccionar == 'function' ) {
      reaccionar(reaccion)
    }
    estado = !estado;
  };
</script>

<style>
  .Reacciones {
    position: relative;
    height: auto;
    width: auto;
  }
  .Reacciones:hover :global(img) {
    opacity: 0.75;
  }
  .ReaccionesLista {
    position: absolute;
    top: 2rem;
    right: 0rem;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    background-color: var(--theme-tarjetas-fondo);
    padding: var(--theme-espaciados-padding);
    margin: 0;
    box-sizing: border-box;
  }
  .ReaccionesLista :global(img) {
    border-radius: 5rem;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 var(--theme-espaciados-margen);
    cursor: pointer;
  }
  .ReaccionesLista li :global(img) {
    height: 1.5rem;
    width: 1.5rem;
  }
  .ReaccionesLista li:hover {
    opacity: 0.75;
  }
</style>

<div class="Reacciones">
  <Icono icono={'reaccion'} on:click={accion} />

  {#if !!estado}
    <ul class="ReaccionesLista" transition:fade>

      {#each reacciones as reaccion, i ('reaccion_' + i)}
        <li on:click={reaccionarAccion(reaccion)}>
          <Imagen imagen={reaccion.icono} />
          <Texto texto={reaccion.texto} />
        </li>
      {/each}
    </ul>
  {/if}
</div>
