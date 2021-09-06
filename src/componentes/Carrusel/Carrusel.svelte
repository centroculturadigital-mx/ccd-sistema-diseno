<script>
  import { onMount } from "svelte";
  import Icono from "../../elementos/Icono/Icono";

  export let elementos;

  export let pagina = 1;
  export let centrado = false;
  export let pieMargen = 3;
  export let autoplay = false;
  export let autoplayMs = 2500;
  export let flechas = true;
  export let navegacion = true;
  export let fondo = false;

  export let activo = 0;

  export let estilos = {
    direccion: "horizontal",
    ancho: 288,
    alto: 288,
  };

  let carrusel;

  const generarID = () => Math.floor(Math.random() * 99999);

  let id = generarID();

  onMount(() => {
    let carruselesIDs = obtenerIDsCarruseles();

    // si no hay valor desde fuera, inicializar en 0
    activo = activo == -1 ? 0 : activo;

    while (carruselesIDs.includes(id) || id == undefined) {
      id = generarID();
    }

    carrusel.classList.add("carrusel_listo");

    if (autoplay) {
      setInterval(() => {
        ir(activo + 1);
      }, autoplayMs);
    }
  });

  $: anchoCarrusel = carrusel ? carrusel.clientWidth : 240;
  $: altoCarrusel = carrusel ? carrusel.clientHeight : 240;

  $: anchoElemento =
    estilos.direccion == "horizontal"
      ? anchoCarrusel / Math.max(parseInt(pagina), 1)
      : anchoCarrusel;
  $: altoElemento =
    estilos.direccion == "vertical"
      ? altoCarrusel / Math.max(parseInt(pagina), 1)
      : altoCarrusel;

  $: paginasNum = Array.isArray(elementos)
    ? Math.ceil(elementos.length / Math.max(pagina, 1))
    : 0;
  $: elementosBotones = Array.isArray(elementos)
    ? new Array(elementos.length)
    : 0;

  $: scrollX = calcularScrollX(activo);

  $: scrollY = calcularScrollY(activo);

  $: estilosCarrusel = generarEstilosAnchoAlto(estilos.ancho, estilos.alto);

  const calcularScrollX = (activo) => {
    if (estilos.direccion == "horizontal") {
      return calcularScroll(activo, anchoCarrusel, anchoElemento);
    }
    return 0;
  };
  const calcularScrollY = (activo) => {
    if (estilos.direccion == "vertical") {
      return calcularScroll(activo, altoCarrusel, altoElemento);
    }
    return 0;
  };

  const calcularScroll = (activo, tamannoCarrusel, tamannoElemento) => {
    const mitad = (tamannoCarrusel - tamannoElemento) / 2;
    let scroll = activo * tamannoElemento - mitad;
    // let scroll = (activo*tamannoElemento);
    let minimo = 0;
    // if( ! centrado ) {
    const totalElementos = Array.isArray(elementos)
      ? elementos.length * tamannoElemento
      : 0;
    minimo = mitad / pagina;
    if (scroll > minimo) {
      scroll = Math.max(scroll, minimo);
    } else {
      scroll = 0;
    }
    scroll = Math.min(scroll, totalElementos - tamannoCarrusel);
    // } else {
    // // implmentar centrado
    // }
    return -parseInt(scroll);
  };

  $: tamannoElemento =
    estilos.direccion == "vertical" ? altoElemento : anchoElemento;
  $: tamannoLista = Array.isArray(elementos)
    ? elementos.length * tamannoElemento - pieMargen * 16
    : 0;

  $: estilosLista =
    estilos.direccion == "vertical"
      ? generarEstilosAnchoAlto(anchoCarrusel, tamannoLista, estilos.alto) +
        generarEstilosLista(scrollX, scrollY)
      : generarEstilosAnchoAlto(tamannoLista, altoCarrusel) +
        generarEstilosLista(scrollX, scrollY);

  $: estilosVentana = `
        ${
          estilos.direccion == "horizontal"
            ? `width: calc( 100% - ${4}rem );`
            : ``
        }
        ${
          estilos.direccion == "vertical"
            ? `height: calc( 100% - ${2}rem );`
            : ``
        }
    `;
  // $: estilosLista = generarEstilosAnchoAlto(anchoElemento*elementos.length,estilos.alto)+generarEstilosLista(scrollX,scrollY)

  $: estilosElemento = generarEstilosAnchoAlto(anchoElemento, altoCarrusel);

  const ir = (i) => {
    if (typeof i == "number") {
      if (i < 0) {
        activo = elementos.length - 1;
      } else {
        activo = i % elementos.length;
      }
    }
  };

  const obtenerIDsCarruseles = () => {
    let carruseles = Array.from(
      document.getElementsByClassName("carrusel_listo")
    );

    carruseles = carruseles.map((c) =>
      parseInt(c.getAttribute("id").split("carrusel_")[1])
    );

    return carruseles;
  };

  const obtenerDireccionCarrusel = (direccion) => {
    if (direccion == "vertical") {
      return "column";
    }
    return "row";
  };

  const generarClases = (i) => {
    let clases = "elemento";

    clases += " " + estilos.direccion;

    if (i == activo) {
      clases += " activo";
    }
    return clases;
  };

  const generarEstilosAnchoAlto = (ancho, alto) => `
        min-width: ${ancho ? `${parseInt(ancho)}px` : "100%"} !important;
        width: ${ancho ? `${parseInt(ancho)}px` : "100%"};
        height: ${alto ? `${parseInt(alto)}px` : "100%"};
    `;

  const generarEstilosLista = (scrollX, scrollY) => `
        flex-direction: ${obtenerDireccionCarrusel(estilos.direccion)};
        transform: translate( ${scrollX}px, ${scrollY}px);
        justify-content: center;        
    `;
</script>

<div
  class={`Carrusel ${estilos.direccion}`}
  id={`carrusel_${id}`}
  style={estilosCarrusel}
>
  {#if fondo}
    <div class="fondo" />
  {/if}

  {#if Array.isArray(elementos)}
    <div bind:this={carrusel} class="ventana" style={estilosVentana}>
      <div class="elementos" style={estilosLista}>
        {#each elementos as elemento, i (elemento)}
          <div
            class={i == activo ? "elemento activo" : "elemento"}
            style={estilosElemento}
            on:click={ir(i)}
          >
            <svelte:component this={elemento.componente} {...elemento.data} />
          </div>
        {/each}
      </div>
    </div>

    {#if !!navegacion}
      <ul class="elementosBotones">
        {#each elementosBotones as boton, i ("boton_" + i)}
          <li class={activo == i ? "activo" : ""}>
            <button on:click={ir(i)}>
              {i}
            </button>
          </li>
        {/each}
      </ul>
    {/if}

    {#if !!flechas}
      <button class="boton-flecha boton-anterior" on:click={ir(activo - 1)}>
        <Icono
          icono={estilos.direccion == "vertical" ? "irArriba" : "irIzquierda"}
        />
      </button>
      <button class="boton-flecha boton-siguiente" on:click={ir(activo + 1)}>
        <Icono
          icono={estilos.direccion == "vertical" ? "irAbajo" : "irDerecha"}
        />
      </button>
    {/if}
  {/if}
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .Carrusel {
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 15rem;
    min-height: 15rem;
  }
.fondo {
  background-color: rgba(0,0,0,0.75);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
}
  .ventana {
    margin-left: 2rem;
    height: 100%;
    display: block;
    overflow: hidden;
    width: calc(100% - 4rem);
  }

  .elementos {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: none;
    flex-direction: row;
  }

  .horizontal .elementos {
    margin-left: 1.5rem;
  }
  .elementos,
  .elemento {
    transition: transform 0.4s ease-in-out;
  }

  .elemento {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1);
    opacity: 1;
    overflow: hidden;
  }

  .elemento:not(.activo) {
    transform: scale(0.8);
    opacity: 0.7;
  }

  :global(.Carrusel .elemento > *) {
    max-width: 100% !important;
    max-height: 100% !important;
    cursor: pointer;
  }

  .elementosBotones {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0;
    margin: 0;
    width: 100%;
  }
  .elementosBotones li {
    list-style: none;
    height: 0.75rem;
    width: 0.75rem;
    margin: 0.15rem;
    opacity: 0.6;
  }

  .elementosBotones li button {
    background-color: var(--theme-botones-primario-inactivo);
    color: transparent;
    padding: 0;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    border-radius: 10rem;
    transition: background-color 0.25s ease-in-out;
    cursor: pointer;
  }
  .elementosBotones li:hover button {
    background-color: var(--theme-botones-primario-fondo);
  }
  .elementosBotones li.activo button {
    background-color: var(--theme-botones-primario-fondo);
    color: transparent;
  }

  .boton-flecha {
    transition: var(--theme-transiciones-normal);
    position: absolute;
    bottom: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.6;
    cursor: pointer;
  }
  .boton-flecha:hover {
    opacity: 0.9;
  }

  .boton-flecha :global(svg) {
    fill: #fff;
  }
  .boton-flecha :global(.iconoContenedor) {
    background-color: #000;
    border-radius: 5rem;
    padding: 0.4rem;
    box-sizing: border-box;
  }

  .boton-anterior {
    right: calc(100% - 2.5rem);
  }
  .boton-siguiente {
    right: 0.5rem;
  }

  .Carrusel.vertical .elementosBotones {
    width: 2rem;
    position: absolute;
    margin: 0;
    padding: 0;
    bottom: 0.66rem;
    left: 100%;
    right: -2rem;
    flex-direction: column;
    height: 100%;
  }

  .Carrusel.vertical .boton-flecha {
    right: -2rem;
  }
  .Carrusel.vertical .boton-anterior {
    top: 0rem;
  }
  .Carrusel.vertical .boton-siguiente {
    bottom: 2rem;
  }
</style>
