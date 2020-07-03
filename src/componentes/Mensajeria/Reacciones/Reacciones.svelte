<script>
  import { fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let reacciones = [];
  export let reaccionar;

  let estado = false;

  let abrir = () => {
    estado = !estado;
  };

  const reaccionarAccion = reaccion => {

    if(typeof reaccionar == "function") {
      reaccionar(reaccion)
    }
    estado = !estado;

    
  };
</script>

<style>
  .Reacciones {
    position: relative;
    height: auto;
    width: 16rem;
  }
  .Reacciones:hover :global(img) {
    opacity: 0.75;
  }
  .ReaccionesLista {
    width: 100%;
    position: absolute;
    top: 3rem;
    right: 14rem;
    list-style-type: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: var(--theme-tarjetas-fondo);
    padding: var(--theme-espaciados-padding);
    margin: 0;
    box-sizing: border-box;
  }
  .ReaccionesLista :global(img) {
    border-radius: 5rem;
  }
  li {
    position: relative;
    /* display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 var(--theme-espaciados-margen); */
    cursor: pointer;
    margin: 0.125rem;
  }
  li .Texto {
    width: 5rem;
    position: absolute;
    top: -2rem;
    left: -2.5rem;
    background-color: rgba(0,0,0,0.9);
    display: none;
    padding: 0.125rem 0.125rem ;
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
</style>

<div class="Reacciones">
  <Icono icono={'reaccion'} on:click={abrir} />

  {#if !!estado}
    <ul class="ReaccionesLista" transition:fade>

      {#each reacciones as reaccion (reaccion)}
        <li on:click={reaccionarAccion(reaccion)}>
          <Imagen imagen={reaccion.imagen} />
          <div class="Texto">
            <Texto texto={reaccion.texto} css={{color:"white", "font-size": "0.75rem"}}/>
          </div>
        </li>
      {/each}
    </ul>
  {/if}
</div>
