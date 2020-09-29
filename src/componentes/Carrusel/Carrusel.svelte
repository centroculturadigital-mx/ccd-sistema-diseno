<script>
  import { onMount } from "svelte";
  import IconoCaretIzquierda from "../../../public/recursos/iconos/caret-izquierda-64-negro.png";
  import IconoCaretArriba from "../../../public/recursos/iconos/caret-arriba-64-negro.png";
  import IconoCaretDerecha from "../../../public/recursos/iconos/caret-derecha-64-negro.png";
  import IconoCaretAbajo from "../../../public/recursos/iconos/caret-abajo-64-negro.png";

  export let elementos;

  export let pagina = 1;
  export let centrado = false;
  export let pieMargen = 3;
  export let autoplay = false;
  export let autoplayMs = 2500;
  export let flechas = true;
  export let navegacion = true;

  export let activo = -1;

  export let estilos = {
    direccion: "horizontal",
    ancho: 288,
    alto: 288
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

  const calcularScrollX = activo => {
    if (estilos.direccion == "horizontal") {
      return calcularScroll(activo, anchoCarrusel, anchoElemento);
    }
    return 0;
  };
  const calcularScrollY = activo => {
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

  const ir = i => {
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

    carruseles = carruseles.map(c =>
      parseInt(c.getAttribute("id").split("carrusel_")[1])
    );

    return carruseles;
  };

  const obtenerDireccionCarrusel = direccion => {
    if (direccion == "vertical") {
      return "column";
    }
    return "row";
  };

  const generarClases = i => {
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

<style>
  .Carrusel {
    padding: 0;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    min-width: 15rem;
    min-height: 15rem;
  }

  .ventana {
    box-sizing: border-box;
    width: calc(100% - 4rem);
    margin-left: 2rem;
    height: 100%;
    display: block;
    overflow: hidden;
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
    box-sizing: border-box;
    transition: transform 0.4s ease-in-out;
  }

  .elemento {
    display: flex;
    justify-content: center;
    align-items: center;

    transform: scale(1);
    opacity: 1;
  }

  .elemento:not(.activo) {
    transform: scale(0.8);
    opacity: 0.7;
  }

  .elemento:last-child {
    margin-right: 0 !important;
  }

  :global(.Carrusel .elemento > *) {
    max-width: 100% !important;
    max-height: 100% !important;
  }

  .elementosBotones {
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
    bottom: 0.66rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem;
  }
  .elementosBotones li {
    list-style: none;
    height: 0.75rem;
    width: 0.75rem;
    margin: 0.15rem;
    box-sizing: border-box;
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
    position: absolute;
    bottom: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none !important;
    border: none;
    border-radius: 50%;
    outline: none;
  }

  .boton-flecha img {
    height: 70%;
    object-fit: contain;
    transition: all 0.3s ease-in-out;
    opacity: 0.25;
    cursor: pointer;
  }

  .boton-flecha:hover img,
  .boton-flecha:active img {
    transform: scale(1.03);
    opacity: 0.8;
    /* background-color: rgba(0,0,0,0.2);
        box-shadow: 3px 3px 3px rgba(0,0,0,0.1); */
  }

  .boton-anterior {
    right: calc(100% - 2rem);
  }
  .boton-siguiente {
    right: 0;
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

<div
  class={`Carrusel ${estilos.direccion}`}
  id={`carrusel_${id}`}
  style={estilosCarrusel}>

  {#if Array.isArray(elementos)}
    <div bind:this={carrusel} class="ventana" style={estilosVentana}>

      <div class="elementos" style={estilosLista}>

        {#each elementos as elemento, i (elemento)}
          <div
            class={i == activo ? 'elemento activo' : 'elemento'}
            style={estilosElemento}
            on:click={ir(i)}>

            <svelte:component this={elemento.componente} {...elemento.data} />

          </div>
        {/each}

      </div>

    </div>

    {#if !!navegacion}
      <ul class="elementosBotones">
        {#each elementosBotones as boton, i ('boton_' + i)}
          <li class={activo == i ? 'activo' : ''}>
            <button on:click={ir(i)}>
            {i}
            </button>
          </li>
        {/each}
      </ul>
    {/if}

    {#if !!flechas}
      <button class="boton-flecha boton-anterior" on:click={ir(activo - 1)}>
        <img
          src={estilos.direccion == 'vertical' ? IconoCaretArriba : IconoCaretIzquierda}
          alt="Anterior" />
      </button>
      <button class="boton-flecha boton-siguiente" on:click={ir(activo + 1)}>
        <img
          src={estilos.direccion == 'vertical' ? IconoCaretAbajo : IconoCaretDerecha}
          alt="Siguiente" />
      </button>
    {/if}
  {/if}
</div>
