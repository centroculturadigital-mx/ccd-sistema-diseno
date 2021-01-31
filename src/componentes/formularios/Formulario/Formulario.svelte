<script>
  import { onMount } from "svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono";
  import Boton from "../../../elementos/botones/Boton/Boton";
  import Campo from "../Campo/Campo.svelte";
  import Aviso from "../../../elementos/texto/Aviso/Aviso";
  import Contenido from "../../../componentes/Contenido/Contenido";
  
  import isHTML from "../../../funciones/isHTML";
  
  

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
    "casilla",
    "casillas",
    "radio",
    "multicampo",
    "texto-numero",
  ];

  let datos = {};

  export let pasos;
  export let campos;
  export let enviar;
  export let cambiar;
  export let respuesta;
  export let enviando = false

  let cargadoInicial = false

  const llenarDatosCampos = ( campos ) => {
    const nuevosDatos = {}
    // campos.filter(c => ( c && c.valor ) ).forEach(c=>{
    campos.filter(c => ( c && (c.valor || c.valor===0) ) ).forEach(c=>{
    // campos.filter(c => ( c && (c.valor || c.valor===0) ) ).forEach(c=>{
      nuevosDatos[c.nombre]=c.valor
    })
    datos = {
      ...datos,
      ...nuevosDatos
    }
    cargadoInicial = true
  }

  $: ! cargadoInicial && Array.isArray(todosLosCampos) && llenarDatosCampos( todosLosCampos )



  $: respuesta && (()=>{ enviando=false })()

  export let config = {
    textos: {
      enviar: "Enviar",
      enviando: "Enviando...",
    }
  };

  let pasoActual = 0;

  let formularioId = Math.random().toString().replace("0.","") // identificador para ids de campos
  
  let ultimoCampoCambiado

  const computarCampos = (campos, datos) => {

    const camposPreparados = campos
      .map(c => {
        if (revisarCampo(c)) {
          // primero revisar si viene un valor desde afuera. 

          let valor = (c.tipo == "casilla")
            ? datos[c.nombre]
            : c.valor || datos[c.nombre];

          let campoPreparado = {
            ...c,
            valor,
            ultimo: c==ultimoCampoCambiado,
            // valor: c.valorInicial ? c.valorInicial : null,
            cambiar: v => {
              ultimoCampoCambiado = c
              cambiarCampo(v, c);
            }
          };

          if (( (c.tipo == "casilla") || !!valor) && typeof c.validacion == "function") {

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
    
    if( ! c.valorExterno ) {
      // if( c.tipo != "multicampo" ) {
      //   datos[c.nombre] = valor;    
      // } else {
      //   datos[c.nombre] = valor;    
      // }
      datos[c.nombre] = valor;
          
    }

    if (typeof c.cambiar == "function") {
      c.cambiar(valor);
    }

    if (typeof cambiar == "function") {
      cambiar(valor, c);
    }
  };


  

  $: todosLosCampos = Array.isArray(pasos) ? pasos.reduce((a,p)=>Array.isArray(p.campos)?[...a,...p.campos]:a,[]) : campos
  

  $: camposMostrar = Array.isArray(todosLosCampos) ? computarCampos(todosLosCampos, datos) : []

  
  $: hayErrores =
    !camposMostrar || camposMostrar.filter(c => !!c.error).length > 0;


  // TODO: validar implementación "casilla"

  const textoLleno = (campo, valor) => (
    (
      campo.tipo=="texto" ||
      campo.tipo=="textarea"
    ) && valor !== ""
  )

  const numeroLleno = (campo, valor) => (
    (
      campo.tipo=="numero"
    ) && valor === 0
  )
  const casillasLlenas = (campo, valor) => (
    (
      campo.tipo=="casillas"
    ) && valor === 0
  )

  const calcularRequeridosVacios = (campos, datos) => {
    
    const llenos = campos.filter(c => !!c.requerido)
      .filter(cR => (
        (
          (!! datos[cR.nombre])
          ||
          textoLleno(cR, datos[cR.nombre])
          ||
          numeroLleno(cR, datos[cR.nombre])
          ||
          casillasLlenas(cR, datos[cR.nombre])
        )
        &&
        (
          datos[cR.nombre] != null &&
          datos[cR.nombre] != undefined &&
          (typeof datos[cR.nombre] != "undefined")
        )
    ) )

    

    return (llenos.length < campos.length);
  
  }

  $: hayRequeridosVacios = calcularRequeridosVacios( camposMostrar, datos )



  const enviarFuncion = () => {
    if (typeof enviar == "function") {
      if (!hayErrores || !hayRequeridosVacios()) {
        enviar(datos);
        enviando = true
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
    document.querySelector("header.pasos").scrollIntoView()
  };
  const regresar = () => {
    pasoActual = pasoActual - 1;
    document.querySelector("header.pasos").scrollIntoView()
  };

  const cambiarPaso = i => {
    pasoActual = i;
  };

  // let pasoUltimo
  let pantallaActual;

  const init = el => {
    el.focus();
  };

  const actualizarPantalla = (pasoActual, camposMostrar) => {
    pantallaActual =
      Array.isArray(pasos) && pasos.length > 0
        ? {
            ...pasos[pasoActual],
            campos:
              pasos[pasoActual].campos &&
              computarCampos(pasos[pasoActual].campos, datos)
          }
        : {
            campos: computarCampos(campos, datos)
          };

  };

  const reiniciar = () => {
    respuesta = null
    datos = {}
    enviando = false
  }

  $: actualizarPantalla(pasoActual, camposMostrar);

  $: clasesContenedor = Array.isArray(pasos) && pasos.length > 0 ? 'paso paso_' + pasoActual : ''


  $: esHTML = isHTML(respuesta)


  const calcularErroresCampos = (campos) => campos.filter(c => !!c.error).length > 0

  
  const calcularCamposCorrectos = (campos, datos) => ( Array.isArray(campos) && typeof datos == "object" ) &&
  (    
    (! calcularRequeridosVacios(campos, datos) )
    &&
    (! calcularErroresCampos( computarCampos(campos, datos) ) )
  )

  $: pasoActualCorrecto = (Array.isArray(pasos) && datos) && calcularCamposCorrectos(pasos[pasoActual].campos, datos)
  
  


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
    padding: calc(var(--theme-espaciados-padding) * 2)
      calc(var(--theme-espaciados-padding) * 3);
    border: 1px solid #000;
    height: 100%;
    box-sizing: border-box;
  }
  .botonPaso {
    cursor: pointer;
  }
  .botonPaso:hover {
    opacity: 0.75;
  }
  .pasado {
    background-color: var(--theme-colores-secundario1) !important;
    color: #fff;
  }
  .actual {
    background-color: var(--theme-colores-secundario1) !important;
    color: #fff;
    width: 100%;
  }
  .paso {
    position: relative;
    padding: calc(var(--theme-espaciados-padding) * 2);
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
    bottom: -4.75rem;
    padding: calc(var(--theme-botones-primario-espacio) * 1.5)
      calc(var(--theme-botones-primario-espacio) * 4);
    color: var(--theme-botones-primario-color) !important;
    box-sizing: border-box;
  }
  .paso input[type="submit"]:hover {
    background-color: var(--theme-botones-secundario-hover);
  }
  .navegacion {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    box-sizing: border-box;
  }
  .navegacion :global(button) {
    padding: calc(var(--theme-botones-primario-espacio) * 1.5)
      calc(var(--theme-botones-primario-espacio) * 2.5);
  }
  .regresa :global(button .iconoContenedor) {
    order: -1;
  }
  .respuesta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .respuesta :global(h1) {
    margin: 0.5rem 0;
  }
  .error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .error :global(p span) {
    color: var(--theme-alertas-error);
  }


  .Formulario :global(.Campo) {
    margin-bottom: .5rem;
  }



  :global(.inactivo),
  :global(.inactivo *),
  :global(input[disabled=true]),
  :global(input[disabled=true]:hover ){
    cursor:unset !important;
    background-color: var(--theme-botones-primario-inactivo) !important;
  }



</style>

<section class="Formulario">

  {#if !respuesta}
    {#if Array.isArray(pasos)}
      <header class="pasos">
        <nav>
          {#each pasos as paso, i (paso)}
            <button
              class="botonPaso {pasoActual > i ? 'pasado' : ''}
              {pasoActual == i ? 'actual' : ''}"
              on:click={() => cambiarPaso(i)}
              disabled={ pasoActual != i && ! calcularCamposCorrectos(paso.campos, datos) }
              >
              {pasoActual == i ? i + 1 + ' . ' + paso.nombre : i + 1}
            </button>
          {/each}
        </nav>
      </header>
    {/if}

    <div class={clasesContenedor}>
      {#if !!pantallaActual.titulo}
        <Titulo texto={pantallaActual.titulo} nivel={1} />
      {/if}
      {#if !!pantallaActual.texto}
        <Parrafo texto={pantallaActual.texto} />
      {/if}

      <form on:submit|preventDefault={enviarFuncion}>

        {#if Array.isArray(pantallaActual.campos) && pantallaActual.campos.length > 0}
          {#each pantallaActual.campos as campo, i ("formulario_" +formularioId + "_" + campo.nombre)}
          <!-- {#each pantallaActual.campos as campo, i (campo)} -->
            <Campo {...campo} />
          {/each}
        {/if}

        {#if !!enviar}
          {#if !Array.isArray(pasos) || pasoActual == pasos.length - 1}
            <input
              disabled={enviando || hayErrores || hayRequeridosVacios}
              type="submit"
              class={hayErrores || hayRequeridosVacios ? 'inactivo' : 'activo'}
              value={ enviando ? config.textos.enviando : config.textos.enviar} />
          {/if}
        {/if}

      </form>

    </div>

    {#if Array.isArray(pasos)}
      <section class="navegacion">

        <div class="regresa">
          {#if pasoActual > 0}
            <BotonIcono
              texto={'Regresa'}
              icono={'irIzquierda'}
              click={regresar} />
          {/if}
        </div>

        <div class="avanza">
          {#if (pasoActual < pasos.length - 1) }
            <BotonIcono
              texto={'Siguiente'}
              icono={'irDerecha'}
              click={avanzar}
              deshabilitado={ ! pasoActualCorrecto }
              />
              <!-- deshabilitado={ pasoCompleto } -->
          {/if}
        </div>

      </section>
    {/if}
  {:else}
    <section class="respuesta">
      {#if typeof respuesta == 'string'}
        {#if esHTML }
          <Contenido html={respuesta}/>
        {:else}
          <Aviso texto={respuesta} />
        {/if}
      {/if}

      {#if typeof respuesta == 'object'}
        <Titulo texto={respuesta.titulo} nivel={1} />
        <Parrafo texto={respuesta.texto} nivel={1} />
      {/if}

      {#if respuesta instanceof Error}
        <div class="error">
          <Titulo texto={'Error'} nivel={1} />
          <Parrafo texto={respuesta.message} />
        </div>
        <footer>

          <Boton texto="Reiniciar" click={reiniciar}/>

        </footer>
      {/if}
    </section>
  {/if}

</section>
