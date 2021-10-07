<script>
  import Texto from "../../texto/Texto/Texto.svelte";
  import Icono from "../../Icono/Icono.svelte";

  export let elementos = [];
  export let actual = 0;

  let responsivo;

  let estado = false;
  let inicio;
  let scrollIzq;
  
  const scrollHorizontal = (elemento) => {
    // activa scroll
    elemento.addEventListener("mousedown", (e) => {
      estado = true;
      elemento.classList.add("activo");
      inicio = e.pageX - elemento.offsetLeft;
      scrollIzq = elemento.scrollLeft;
    });
    elemento.addEventListener("touchstart", (e) => {
      estado = true;
      elemento.classList.add("activo");
      inicio = e.touches[0].pageX - elemento.offsetLeft;
      scrollIzq = elemento.scrollLeft;
    });
    // resetea al dejar eventos
    elemento.addEventListener("mouseleave", () => {
      estado = false;
      elemento.classList.remove("activo");
    });
    elemento.addEventListener("mouseup", () => {
      estado = false;
      elemento.classList.remove("activo");
    });
    elemento.addEventListener("touchend", () => {
      estado = false;
      elemento.classList.remove("activo");
    });
    // aplica cambio de valores
    elemento.addEventListener("mousemove", (e) => {
      if (estado) {
        e.preventDefault();
        let x = e.pageX - elemento.offsetLeft;
        let avanza = x - inicio;
        elemento.scrollLeft = scrollIzq - avanza;
      }
    });
    elemento.addEventListener("touchmove", (e) => {
      if (estado) {
        e.preventDefault();
        let x = e.touches[0].pageX - elemento.offsetLeft;
        let avanza = x - inicio;
        elemento.scrollLeft = scrollIzq - avanza;
      } 
    });
  };
</script>

<svelte:window bind:innerWidth={responsivo} />

<nav use:scrollHorizontal>
  <ul>
    {#each elementos as elemento, i (elemento)}
      {#if elemento.enlace}
        <li class={`Enlace ${i == actual ? " actual" : ""}`} >
          <a href={elemento.enlace}>
            {#if elemento.icono && responsivo < 768}
              <Icono icono={elemento.icono} />
            {/if}
            <Texto texto={elemento.texto} />
          </a>
        </li>
      {:else}
        <li on:click={elemento.accion(i)} class={i == actual ? "actual" : ""}>
          {#if elemento.icono && responsivo < 768}
            <Icono icono={elemento.icono} />
          {/if}
          <Texto texto={elemento.texto} />
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style>
  * {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
  }
  nav {
    position: relative;
    display: flex;
    justify-content: flex-start;
    height: auto;
    width: 100%;
    overflow: hidden;
    cursor: grab;
  }
  ul {
    position: relative;
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-width: 80rem;
    justify-content: flex-start;
  }
  .activo {
    cursor: grabbing;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 3);
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  li {
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 3);
  }
  li.Enlace a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    text-decoration: none;
  }

  li a:hover {
    opacity: 0.75;
    /* border-bottom: 3px solid var(--theme-pestannas-borde-hover); */
  }
  li :global(.iconoContenedor) {
    height: 1.25rem !important;
    width: 1.25rem !important;
  }
  li :global(svg) {
    fill: var(--theme-textos-parrafo-color) !important;
    height: 100%;
  }
  .actual {
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
  nav::-webkit-scrollbar {
    width: 0.75rem;
  }
  *::-webkit-scrollbar-track {
    background-color: #edf2f7;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #718096;
    border-radius: 9999px;
  }
</style>
