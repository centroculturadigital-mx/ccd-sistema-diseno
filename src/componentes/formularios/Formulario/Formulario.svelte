<script>
  import { onMount } from "svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono";
  import Campo from "../Campo/Campo.svelte";
  import Aviso from "../../../elementos/texto/Aviso/Aviso";

  let tiposValidos = [
    "texto",
    "email",
    "textarea",
    "numero",
    "archivo",
    "contrasenna",
    "selector",
    "fecha",
    "telefono",
  ];

  let datos = {};

  export let pasos;
  export let campos;
  export let enviar;
  export let cambiar;
  export let respuesta;
  export let config = {
    textos: {
      enviar: "Enviar"
    }
  };

  let pasoActual = 0;

  $: camposMostrar = Array.isArray(campos) ? computarCampos(campos, datos) : [];

  
  const computarCampos = (campos, datos) => {
    const camposPreparados = campos
      .map(c => {
        if (revisarCampo(c)) {
          let valor = datos[c.nombre];

          let campoPreparado = {
            ...c,
            valor,
            // valor: c.valorInicial ? c.valorInicial : null,
            cambiar: v => {
              cambiarCampo(v, c);
            }
          };

          if (!!valor && typeof c.validacion == "function") {
            let resultadoValidacion = c.validacion(valor);
            campoPreparado = {
              ...campoPreparado,
              error: resultadoValidacion.error,
              estado: resultadoValidacion.estado
            };
          }

          return campoPreparado;
        }

        return null;
      })
      .filter(c => !!c);

    return camposPreparados;
  };


  const cambiarCampo = (valor, c) => {

    datos[c.nombre] = valor;

    if (typeof cambiar == "function") {
      cambiar(datos);
    }

  };

  $: hayErrores =
    !camposMostrar || camposMostrar.filter(c => !!c.error).length > 0;

  $: hayRequeridosVacios =
    camposMostrar.filter(c => !!c.requerido).filter(cR => !datos[cR.nombre])
      .length > 0;

  const enviarFuncion = () => {
    if (typeof enviar == "function") {
      if (!hayErrores || !hayRequeridosVacios()) {
        enviar(datos);
      }
    }
  };

  const revisarCampo = c => {
    if (!c.nombre) {
      return false;
    }

    if (tiposValidos.includes(c.tipo)) {
      return true;
    }

    return false;
  };

  const avanzar = () => {
    pasoActual = pasoActual + 1;
  };
  const regresar = () => {
    pasoActual = pasoActual - 1;
  };

  const cambiarPaso = i => {
    pasoActual = i;
  };

  let pasoUltimo
  let pantallaActual

  const actualizarPantalla = (pasoActual, camposMostrar) => {
    
    console.log("actualizarPantalla");
    if( pasoActual != pasoUltimo ) {

      pantallaActual = (Array.isArray(pasos) && pasos.length > 0)
        ? {
          ...pasos[pasoActual],
          campos: pasos[pasoActual].campos && computarCampos( pasos[pasoActual].campos, datos )
        }
        : {
          campos: computarCampos( campos, datos )
        };

      pasoUltimo = pasoActual
      
    }

  }

  $: actualizarPantalla(pasoActual, camposMostrar)


</script>

<style>
  .Formulario {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 32rem;
    box-sizing: border-box;
  }

  form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form input[type="submit"] {
    background-color: var(--theme-botones-primario-fondo);
    color: var(--theme-botones-primario-color);
    padding: calc(var(--theme-botones-primario-espacio) * 2)
      calc(var(--theme-botones-primario-espacio) * 4);
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-primario-esquinas);
    border: 1px solid var(--theme-botones-primario-borde);
    cursor: pointer;
    margin: 0;
    transition: 0.5s;
  }
  form input[type="submit"]:hover {
    background-color: var(--theme-botones-primario-hover);
    border-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-secundario-color);
  }
  form input[type="submit"]:ad,
  form input[type="submit"]:visited,
  form input[type="submit"]:active {
    background-color: var(--theme-botones-primario-activo);
    border-color: var(--theme-botones-primario-activo);
    color: var(--theme-botones-primario-claro);
  }
  form input[type="submit"].inactivo {
    background-color: var(--theme-botones-primario-inactivo);
    border-color: var(--theme-botones-primario-inactivo);
    color: var(--theme-botones-primario-claro);
  }
  form input[type="submit"].activo {
    background-color: var(--theme-botones-primario-hover);
    border-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-primario-color);
  }
  form input[type="submit"].activo:hover {
    background-color: var(--theme-botones-primario-hover);
    border-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-primario-inactivo);
  }
  .pasos {
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .pasos nav {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .pasos nav button {
    position: relative;
    background-color: transparent;
    padding: calc(var(--theme-espaciados-padding) * 2) calc(var(--theme-espaciados-padding) * 3);
    border: 1px solid #000;
    height: 100%;
    box-sizing: border-box;
  }
  .activo {
    background-color: var(--theme-colores-secundario1) !important;
    color: #FFF;
  }

  .paso {
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .paso :global(h1) {
    display: flex;
    justify-content: center;
  }
  .paso input[type="submit"] {
    position: absolute;
    right: 0.5rem;
    bottom: -5.25rem;
    padding: calc(var(--theme-botones-primario-espacio) * 2) calc(var(--theme-botones-primario-espacio) * 4);
    box-sizing: border-box;
  }
  .actual {
    display: none;
  }
  .navegacion {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    box-sizing: border-box;
  }
</style>

<section class="Formulario">

  {#if !respuesta}
    {#if Array.isArray(pasos)}
      <header class="pasos">
        <nav>
          {#each pasos as paso, i (paso)}
            <button class="botonPaso {pasoActual >= i ? "activo" : ""}" on:click={() => cambiarPaso(i)}>
              {pasoActual == i ? (i + 1) + ' . ' + paso.textoPaso : i + 1}
            </button>
          {/each}
        </nav>
      </header>
    {/if}

    <div class={'paso paso_' + pasoActual}>
      {#if !!pantallaActual.titulo}
        <Titulo texto={pantallaActual.titulo} nivel={1} />
      {/if}
      {#if !!pantallaActual.texto}
        <Parrafo texto={pantallaActual.texto} />
      {/if}

      <form on:submit|preventDefault={enviarFuncion}>

        {#if Array.isArray(pantallaActual.campos) && pantallaActual.campos.length > 0}
          {#each pantallaActual.campos as campo, i (campo)}
            <Campo {...campo} />
          {/each}
        {/if}

        {#if !!enviar}
          {#if !Array.isArray(pasos) || pasoActual == pasos.length - 1}
            <input
              disabled={hayErrores || hayRequeridosVacios}
              type="submit"
              class={hayErrores || hayRequeridosVacios ? 'inactivo' : 'activo'}
              value={config.textos.enviar} />
          {/if}
        {/if}

      </form>

    </div>

    {#if Array.isArray(pasos)}

      <section class="navegacion">

        <div>
          {#if pasoActual > 0}
            <BotonIcono
              texto={'Regresa'}
              icono={'flechaIzquierda'}
              click={regresar} />
          {/if}
        </div>

        <div>
          {#if pasoActual < pasos.length - 1}
            <BotonIcono
              texto={'Siguiente'}
              icono={'flechaDerecha'}
              click={avanzar} />
          {/if}
        </div>

      </section>
    
    {/if}

  {:else}

    {#if typeof respuesta == 'string'}
      <Aviso texto={respuesta} />
    {/if}

    {#if typeof respuesta == 'object'}
      <Titulo texto={respuesta.titulo} nivel={1} />
      <Parrafo texto={respuesta.texto} nivel={1} />
    {/if}
      
    {#if respuesta instanceof Error}
      <Titulo texto={"Error"} nivel={1} />
      <Parrafo texto={respuesta.message} />
    {/if}

  {/if}

</section>
