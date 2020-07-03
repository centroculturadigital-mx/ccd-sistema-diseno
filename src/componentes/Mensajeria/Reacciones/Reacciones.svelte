<script>
  import { fade } from "svelte/transition";
  import Icono from "../../../elementos/Icono/Icono";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let reacciones = [];
  export let reaccionar;

  let estado = false;
  let lista

  let abrir = () => {

    var rect = lista.getBoundingClientRect();  

    console.log( "ventana",  );
    
    if( window.innerHeight - rect.bottom < 120 ) {
      lista.style.top = -152 +"px"
    }


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
    width: 16rem;
    height: 12rem;
  }
  .Reacciones:hover :global(img) {
    opacity: 0.75;
  }
  .ReaccionesLista {
    
    width: 16rem;
    height: auto;
    max-height: 8rem;
    
    overflow-y: auto;
    overflow-x: hidden;

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

    <ul bind:this={lista} class="ReaccionesLista" transition:fade>

      {#if !!estado}
      {#each reacciones as reaccion (reaccion)}
        <li on:click={reaccionarAccion(reaccion)}>
          <Imagen imagen={reaccion.imagen}/>
          <div class="Texto">
            <Texto texto={reaccion.texto} css={{color:"white", "font-size": "0.75rem"}}/>
          </div>
        </li>
      {/each}
      {/if}
    </ul>
</div>
