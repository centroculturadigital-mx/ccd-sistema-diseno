<script>
  import { fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let reacciones = [];
  export let reaccionar;

  let estado = false;
  let lista;

  let abrir = () => {
    var rect = lista.getBoundingClientRect();

    if (window.innerHeight - rect.bottom < 120) {
      lista.style.top = -152 + "px";
    }

    estado = !estado;
  };

  const reaccionarAccion = reaccion => {
    if (typeof reaccionar == "function") {
      reaccionar(reaccion);  
    }
    estado = !estado;
  };

</script>

<style>
  .Reacciones {
    position: relative;
    width: auto;
    height: auto;
  }
  .Reacciones:hover :global(.iconoContenedor) {
    opacity: 0.75;
  }
  .ReaccionesLista {
    transition: 0.5s;
    position: relative;
    background-color: var(--theme-tarjetas-fondo);
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    padding: 0;
    top: 1.75rem;
    right: 1.75rem;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    height: auto;
    max-height: 8rem;
    width: 16rem;
    box-sizing: border-box;
    z-index: -1;
  }
  .ReaccionesLista :global(img) {
    border-radius: 5rem;
  }
  li {
    position: relative;
    cursor: pointer;
    margin: 0.125rem;
  }
  li .Texto {
    width: 5rem;
    position: absolute;
    top: -2rem;
    left: -2.5rem;
    background-color: rgba(0, 0, 0, 0.9);
    display: none;
    padding: 0.125rem 0.125rem;
    text-align: center;
    border-radius: 0.5rem;
  }
  li:hover .Texto {
    display: inline;
  }
  .ReaccionesLista li :global(img) {
    height: 1.5rem;
    width: 1.5rem;
  }
  .ReaccionesLista li:hover {
    opacity: 0.75;
  }
  .abierto {
    padding: 0.5rem 0;
    box-sizing: border-box;
    z-index: 10000;
  }
</style>

<div class="Reacciones">

  <Icono icono={'reaccion'} on:click={abrir} />

    <ul bind:this={lista} class="ReaccionesLista {!!estado ? "abierto" : ""}" transition:fade>
  {#if !!estado}
      {#each reacciones as reaccion (reaccion)}
        <li on:click={reaccionarAccion(reaccion)}>
          <Imagen imagen={reaccion.imagen} />
          <div class="Texto">
            <Texto
              texto={reaccion.texto}
              css={{ color: 'white', 'font-size': '0.75rem' }} />
          </div>
        </li>
      {/each}
  {/if}
    </ul>
</div>
