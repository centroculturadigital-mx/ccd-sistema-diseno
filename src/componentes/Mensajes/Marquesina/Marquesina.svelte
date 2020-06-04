<script>
  import { onMount } from "svelte";
  import { fade, slide, fly, draw } from "svelte/transition";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let estado = true;
  export let partes = [];

  let cinta;

  onMount(() => {
    const velocidad = 1000 / 60;
    let pasosX = 1;
    let posX = 0;

    setInterval(() => {
      posX = posX + pasosX;
      if (posX < 0) {
        pasosX = pasosX * -1;
      }
      // cinta.style.left = posX + "px";
      // console.log("Animacion", posX);
    }, velocidad);
  });

  const ocultar = () => {
    estado = !estado
  };
</script>

<style>
  .Marquesina {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-height: 3rem;
    background-color: whitesmoke;
  }
  .Titulo {
    border-right: 1px solid #000;
    padding: var(--theme-espaciados-padding);
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
  }
  .Avanza {
    /* animation: bandaTransportadora 5s infinite; */
    animation-timing-function: linear;
  }

  @-webkit-keyframes bandaTransportadora {
    0% {
      transform: translate3d(-100vw, 0, 0);
    }
    100% {
      transform: translate3d(100vw, 0, 0);
    }
  }
  @keyframes bandaTransportadora {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-10vw, 0, 0);
    }
  }
</style>

<section class="Marquesina">

  <section class="Titulo">
    <Titulo texto={'Programa'} nivel={5} />
  </section>

  {#if !!estado}
    <section class="Banda" transition:slide>

      <div class="Cinta Avanza" bind:this={cinta}>

        {#each partes as parte}
          <div class="Aviso">
            <a href={parte.enlace}>
              <Parrafo texto={parte.texto} />
            </a>
          </div>
        {/each}

      </div>

    </section>
  {/if}

  <section class="Oculta" on:click={ocultar}>
    <Icono icono={'cerrar'} />
  </section>

</section>
