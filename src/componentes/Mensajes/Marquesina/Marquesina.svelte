<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let estado = true;
  export let partes = [];
  export let accion;
  

  let cinta;
  let icono = "derecha";

  onMount(() => {
    let ventana = window.innerWidth * -1;
    let pasosX = -1;
    let posX = Math.abs(ventana);
    const movimiento = () => {
      if (posX < ventana) {
        posX = Math.abs(ventana);
      } else {
        posX = posX + pasosX;
      }
      cinta.style.left = posX + "px";
      window.requestAnimationFrame(movimiento);
    };
    window.requestAnimationFrame(movimiento);
  });

  const ocultar = () => {
    estado = !estado;
    !!estado ? (icono = "derecha") : (icono = "mas");
  };
  
  const activar = id => {
    if( typeof accion == "function" ) {
      accion(id)
    }
  };

</script>

<style>
  .Marquesina {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    height: 2rem;
    background-color: whitesmoke;
    z-index: 100;
  }
  .Titulo {
    border-right: 1px solid #000;
    padding: 0 var(--theme-espaciados-padding);
  }
  .Titulo :global(h5) {
    margin: 0;
  }
  .Banda {
    display: flex;
    overflow: hidden;
    width: 100%;
  }
  .Cinta {
    display: flex;
    position: relative;
    /* transition: left 0.3s */
  }
  .Aviso {
    padding: 0 var(--theme-espaciados-padding);
    flex-shrink: 0;
  }
  .Banda :global(p) {
    display: flex;
    margin: 0;
  }
  .Oculta {
    background-color: var(--theme-colores-fondo);
    padding: 0.25rem;
    box-sizing: border-box;
    height: 100%;
  }
  .Oculta :global(.iconoContenedor) {
    width: 1.25rem;
    height: 100%;
  }
  .Oculta :global(.iconoContenedor img) {
    height: 1rem;
  }
  .Avanza {
    /* -moz-transform: translate3d(150%, 0, 0);
    -webkit-transform: translate3d(150%, 0, 0);
    transform: translate3d(150%, 0, 0);
    -moz-animation: bandaTransportadora 20s linear infinite;
    -webkit-animation: bandaTransportadora 20s linear infinite;
    animation: bandaTransportadora 20s linear infinite; */
  }

  @-webkit-keyframes bandaTransportadora {
    0% {
      -moz-transform: translate3d(100%, 0, 0);
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    100% {
      -moz-transform: translate3d(-100%, 0, 0);
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-200%, 0, 0);
    }
  }
  @keyframes bandaTransportadora {
    0% {
      -moz-transform: translate3d(100%, 0, 0);
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    100% {
      -moz-transform: translate3d(-100%, 0, 0);
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-200%, 0, 0);
    }
  }
</style>

<section class="Marquesina">

  <section class="Titulo">
    <Titulo texto={'Programa'} nivel={5} />
  </section>

  {#if !!estado}
    <section class="Banda" transition:fade>

      <div class="Cinta Avanza" bind:this={cinta} transition:fade>

        {#each partes as parte}
          <div class="Aviso">
            <!-- <a href={parte.enlace}> -->
              <Texto texto={parte.texto} on:click={()=>activar(parte.id)}/>
            <!-- </a> -->
          </div>
        {/each}

      </div>

    </section>
  {/if}

  <section class="Oculta" on:click={ocultar}>
    <Icono {icono} />
  </section>

</section>
