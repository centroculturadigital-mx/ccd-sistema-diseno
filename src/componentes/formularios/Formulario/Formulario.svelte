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

  export let pasos;
  export let datos = {};
  export let campos;
  export let enviar;
  export let cambiar;
  export let respuesta;
  export let enviando = false;

  export let configuracion = {};

  let configuracionDefault = {
    textos: {
      requerido: "* requerido",
      opcional: "(opcional)",
    },
    indicarOpcionales: false,
  };

  $: configuracion = {
    ...configuracionDefault,
    ...configuracion,
    textos: {
      ...configuracionDefault.textos,
      ...configuracion.textos,
    },
  };

  let cargadoInicial = false;

  let estado = {};

  // orden cargado datos
  // 1. desde "datos"
  // 2. desde campos

  const todosLosDatos = [];

  const hidratarEstado = () => {
    // hidratar desde datos:
    Object.entries(datos).forEach((par) => {
      const [clave, valor] = par;

      if (typeof valor == "object") {
        if (valor.tipo == "multicampo") {
          valor.datos.campos.forEach((mC) => {
            if (datos[mC.nombre]) {
              cambiarEstado(mC.nombre, datos[mC.nombre]);
            }
          });
        }
      } else {
        cambiarEstado(clave, valor);
      }
    });

    // hidratar desde campos
    todosTusCampos.forEach((c) => {
      if (
        c.valor ||
        (c.tipo == "casillas" &&
          c.datos &&
          (c.datos.tipo == "UNICO" || c.datos.tipo == "UNICO_OTRA") &&
          c.valor === 0)
      ) {
        cambiarEstado(c.nombre, c.valor);
      }
    });
  };

  const cambiarEstado = (clave, valor) => {
    estado = {
      ...estado,
      [clave]: valor,
    };
  };

  onMount(() => {
    hidratarEstado();

    //eliminar valores campos

    // // setTimeout(() => {
    // todosTusCampos.forEach(c=>{
    //   delete c.valor
    // })
    // // })

    cargadoInicial = true;

    if (Array.isArray(pasos)) {
      // pasoActual = 1
      setTimeout(() => {
        pasoActual = 0;
      });
    }
  });

  // const llenarDatosCampos = ( campos ) => {
  //   const nuevosDatos = {}
  //   // campos.filter(c => ( c && c.valor ) ).forEach(c=>{
  //   campos.filter(c => ( c && (c.valor || c.valor===0) ) ).forEach(c=>{
  //   // campos.filter(c => ( c && (c.valor || c.valor===0) ) ).forEach(c=>{
  //     nuevosDatos[c.nombre]=c.valor
  //   })
  //   datos = {
  //     ...datos,
  //     ...nuevosDatos
  //   }
  //   cargadoInicial = true
  // }

  // $: ! cargadoInicial && Array.isArray(todosTusCampos) && llenarDatosCampos( todosTusCampos )

  $: respuesta &&
    (() => {
      enviando = false;
    })();

  export let config = {
    textos: {
      enviar: "Enviar",
      enviando: "Enviando...",
    },
  };

  // let pasoActual;
  let pasoActual = Array.isArray(pasos) ? null : 0;

  let formularioId = Math.random().toString().replace("0.", ""); // identificador para ids de campos

  let ultimoCampoCambiado;

  const cambiarCampo = (c, v) => {
    ultimoCampoCambiado = c;

    if (c.tipo == "multicampo") {
      const subpreguntaPar = Object.entries(v).filter((p) => !!p[1]);

      if (subpreguntaPar) {
        cambiarEstado(subpreguntaPar[0], subpreguntaPar[1]);
      }
    }
    //  else {

    cambiarEstado(c.nombre, v);

    // }

    realizarCambioCampo(v, c);
  };

  const prepararConfiguracionCampo = () => {
    // TODO: conceptualizar mejor
    return configuracion;
  };

  const computarCampos = (campos, estado) => {
    const camposPreparados = campos
      .map((c) => {
        if (revisarValidezCampo(c)) {
          // primero revisar si viene un valor desde afuera.

          // let valor = (c.tipo == "casilla")
          //   ? datos[c.nombre]
          //   : c.valor || datos[c.nombre];

          let valor = estado[c.nombre];

          let campoPreparado = {
            ...c,
            valor,
            ultimo: c == ultimoCampoCambiado,
            // valor: c.valorInicial ? c.valorInicial : null,
            cambiar: (v) => cambiarCampo(c, v),
            configuracion: prepararConfiguracionCampo(),
          };

          if (c.tipo == "multicampo") {
            campoPreparado = {
              ...campoPreparado,
              // cambiar: v => cambiarCampo(c, v),
              configuracion: prepararConfiguracionCampo(),

              datos: {
                ...campoPreparado.datos,
                campos: campoPreparado.datos.campos.map((cC) => ({
                  ...cC,
                  valor: estado[cC.nombre],
                  // cambiar: v => {}
                  cambiar: (v) => cambiarCampo(cC, v),
                  configuracion: prepararConfiguracionCampo(),
                })),
                // campos: campoPreparado.datos.campos.map(cC=>({
                //   ...cC,
                //   valor: estado[cC.nombre],
                //   cambiar: v => cambiarCampo(cC, v)
                // }))
              },
            };
          }

          if (
            (c.tipo == "casilla" || !!valor) &&
            typeof c.validacion == "function"
          ) {
            let resultadoValidacion = c.validacion(valor);
            campoPreparado = {
              ...campoPreparado,
              error: resultadoValidacion.error,
              estado: resultadoValidacion.estado,
            };
          }

          return campoPreparado;
        }

        return null;
      })
      .filter((c) => !!c);

    return camposPreparados;
  };

  const realizarCambioCampo = (valor, c) => {
    // if( ! c.valorExterno ) {
    //   // if( c.tipo != "multicampo" ) {
    //   //   datos[c.nombre] = valor;
    //   // } else {
    //   //   datos[c.nombre] = valor;
    //   // }
    //   // datos[c.nombre] = valor;

    // }

    if (typeof c.cambiar == "function") {
      c.cambiar(valor);
    }

    if (typeof cambiar == "function") {
      cambiar(valor, c);
    }
  };

  $: todosTusCampos = (Array.isArray(pasos)
    ? pasos.reduce(
        (a, p) => (Array.isArray(p.campos) ? [...a, ...p.campos] : a),
        []
      )
    : [...campos]
  ).reduce(
    (acc, c) =>
      c.tipo == "multicampo"
        ? [...acc, { ...c }, ...c.datos.campos]
        : [...acc, c],
    []
  );

  $: camposMostrar = Array.isArray(todosTusCampos)
    ? computarCampos(todosTusCampos, estado)
    : [];

  $: hayErrores =
    !camposMostrar || camposMostrar.filter((c) => !!c.error).length > 0;

  // TODO: validar implementación "casilla"

  const textoLleno = (campo, valor) =>
    (campo.tipo == "texto" || campo.tipo == "textarea") && valor !== "";

  const numeroLleno = (campo, valor) => campo.tipo == "numero" && valor === 0;

  const casillasLlenas = (campo, valor) =>
    campo.tipo == "casillas" &&
    campo.datos &&
    (campo.datos.tipo == "UNICO" || campo.datos.tipo == "UNICO_OTRA") &&
    valor === 0;

  const multiCampoLleno = (campo, estado) => {
    if (campo && campo.tipo == "multicampo" && campo.datos && estado) {
      const valoresCampos = campo.datos.campos.map((c) => estado[c.nombre]);

      return !valoresCampos.includes(undefined);
    }

    // (
    //   (
    //     campo.tipo= ="multicampo"
    //   ) && valor === 0
    // )
  };

  const calcularRequeridosVacios = (campos, datos) => {
    if (campos.filter((c) => !!c.requerido).length == 0) {
      return false;
    }

    const llenos = campos
      .filter((c) => !!c.requerido)
      .filter(
        (cR) =>
          (// si tiene un valor no 0 o no nulo,
          (!!datos[cR.nombre] &&
            // y no es multicampo
            cR.tipo != "multicampo") ||
            // de otro modo, checamos excepciones a 0 o nulo:
            textoLleno(cR, datos[cR.nombre]) ||
            numeroLleno(cR, datos[cR.nombre]) ||
            casillasLlenas(cR, datos[cR.nombre]) ||
            // multiCampoLleno(cR, datos)
            multiCampoLleno(cR, datos[cR.nombre])) &&
          datos[cR.nombre] != null &&
          datos[cR.nombre] != undefined &&
          typeof datos[cR.nombre] != "undefined"
      );

    return llenos.length < campos.filter((c) => !!c.requerido).length;
  };

  const enviarFuncion = () => {
    if (typeof enviar == "function") {
      if (!hayErrores || !hayRequeridosVacios()) {
        enviar(estado);
        enviando = true;
      }
    }
  };

  const revisarValidezCampo = (c) => {
    if (!c.nombre) {
      return false;
    }

    if (tiposValidos.includes(c.tipo)) {
      return true;
    }

    return false;
  };

  let superior;

  const avanzar = () => {
    pasoActual = pasoActual + 1;
    superior.scrollIntoView();
  };
  const regresar = () => {
    pasoActual = pasoActual - 1;
    superior.scrollIntoView();
  };

  const cambiarPaso = (i) => {
    pasoActual = i;
    superior.scrollIntoView();
  };

  // let pasoUltimo
  let pantallaActual;

  const init = (el) => {
    el.focus();
  };

  const actualizarPantalla = (pasoActual, camposMostrar) => {
    pantallaActual =
      Array.isArray(pasos) && pasos.length > 0
        ? {
            ...pasos[pasoActual],
            campos:
              pasos[pasoActual].campos &&
              computarCampos(pasos[pasoActual].campos, estado),
          }
        : {
            campos: computarCampos(campos, estado),
          };
  };

  const reiniciar = () => {
    respuesta = null;
    estado = {};
    // TODO: Verificar si sig. línea todavía aplica:
    datos = {};
    enviando = false;
  };

  const calcularErroresCampos = (campos) =>
    campos.filter((c) => !!c.error).length > 0;

  const calcularCamposCorrectos = (campos, datos) => {
    return (
      Array.isArray(campos) &&
      typeof datos == "object" &&
      !calcularRequeridosVacios(campos, datos) &&
      !calcularErroresCampos(computarCampos(campos, datos))
    );
  };

  $: (pasoActual > 0 || pasoActual === 0) &&
    actualizarPantalla(pasoActual, camposMostrar);

  $: clasesContenedor =
    Array.isArray(pasos) && pasos.length > 0 ? "paso paso_" + pasoActual : "";

  $: esHTML = isHTML(respuesta);

  $: hayRequeridosVacios =
    (!pasos || !Array.isArray(pasos) || pasos.length > 0) &&
    calcularRequeridosVacios(camposMostrar, estado);

  $: pasoActualCorrecto =
    Array.isArray(pasos) &&
    estado &&
    calcularCamposCorrectos(pasos[pasoActual ? pasoActual : 0].campos, estado);

  // $: pasoActualCorrecto = (Array.isArray(pasos) && estado && pasoActual) && calcularCamposCorrectos(pasos[pasoActual].campos, estado)

</script>

<section class="Formulario" bind:this={superior}>
  {#if !respuesta}
    {#if Array.isArray(pasos)}
      <header class="pasos">
        <nav>
          {#each pasos as paso, i (paso)}
            <button
              class="botonPaso {pasoActual > i ? 'pasado' : ''}
              {pasoActual == i ? 'actual' : ''}"
              on:click={() => cambiarPaso(i)}
              disabled={i != 0 &&
                pasoActual != i &&
                !calcularCamposCorrectos(pasos[i - 1].campos, estado)}
            >
              {pasoActual == i ? i + 1 + " . " + paso.nombre : i + 1}
            </button>
          {/each}
        </nav>
      </header>
    {/if}
    {#if pantallaActual}
      <div class={clasesContenedor}>
        {#if !!pantallaActual.titulo}
          <Titulo texto={pantallaActual.titulo} nivel={1} />
        {/if}
        {#if !!pantallaActual.texto}
          <Parrafo texto={pantallaActual.texto} />
        {/if}

        <form on:submit|preventDefault={enviarFuncion}>
          {#if Array.isArray(pantallaActual.campos) && pantallaActual.campos.length > 0}
            {#each pantallaActual.campos as campo, i ("formulario_" + formularioId + "_" + campo.nombre)}
              <Campo {...campo} />
            {/each}
          {/if}

          {#if !!enviar}
            {#if !Array.isArray(pasos) || pasoActual == pasos.length - 1}
              <input
                disabled={enviando || hayErrores || hayRequeridosVacios}
                type="submit"
                class={hayErrores || hayRequeridosVacios
                  ? "inactivo"
                  : "activo"}
                value={enviando ? config.textos.enviando : config.textos.enviar}
              />
            {/if}
          {/if}
        </form>
      </div>
    {/if}

    {#if Array.isArray(pasos)}
      <nav class="navegacion">
        <div class="regresa">
          {#if pasoActual > 0}
            <BotonIcono
              texto={"Regresa"}
              icono={"irIzquierda"}
              click={regresar}
            />
          {/if}
        </div>

        <div class="avanza">
          {#if pasoActual < pasos.length - 1}
            <BotonIcono
              texto={"Siguiente"}
              icono={"irDerecha"}
              click={avanzar}
              deshabilitado={!pasoActualCorrecto}
            />
            <!-- deshabilitado={ pasoCompleto } -->
          {/if}
        </div>
      </nav>
    {/if}
  {:else}
    <section class="respuesta">
      {#if typeof respuesta == "string"}
        {#if esHTML}
          <Contenido html={respuesta} />
        {:else}
          <Aviso texto={respuesta} />
        {/if}
      {/if}

      {#if typeof respuesta == "object"}
        <Titulo texto={respuesta.titulo} nivel={1} />
        <Parrafo texto={respuesta.texto} nivel={1} />
      {/if}

      {#if respuesta instanceof Error}
        <div class="error">
          <Titulo texto={"Error"} nivel={1} />
          <Parrafo texto={respuesta.message} />
        </div>
        <footer>
          <Boton texto="Reiniciar" click={reiniciar} />
        </footer>
      {/if}
    </section>
  {/if}
</section>

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
    transition: var(--theme-transiciones-normal);
    color: var(--theme-botones-primario-color);
    background-color: var(--theme-botones-primario-fondo);
    padding: calc(var(--theme-botones-primario-espacio) / 2)
      var(--theme-botones-primario-espacio);
    font-family: var(--theme-botones-primario-familia);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-textos-parrafo-tamanno);
    border-radius: calc(var(--theme-botones-primario-esquinas) / 2);
    border: none;
    cursor: pointer;
    margin: 0;
    /* IOS rendering */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 1;
  }
  form input[type="submit"]:hover,
  .paso input[type="submit"]:hover {
    background-color: var(--theme-botones-primario-hover);
  }
  form input[type="submit"]:active,
  .paso input[type="submit"]:active {
    background-color: var(--theme-botones-primario-activo);
  }
  form input[type="submit"]:focus,
  .paso input[type="submit"]:focus {
    background-color: var(--theme-botones-primario-foco);
  }
  form input[type="submit"]:visited,
  .paso input[type="submit"]:visited {
    background-color: var(--theme-botones-primario-visitado);
  }
  form input[type="submit"].inactivo,
  .paso input[type="submit"].inactivo {
    background-color: var(--theme-botones-primario-inactivo);
    border-color: var(--theme-botones-primario-inactivo);
    color: var(--theme-botones-primario-claro);
  }
  .pasos {
    background-color: var(--theme-colores-fondo);
    position: sticky;
    top: -0.1px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
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
    bottom: -4.2rem;
    transition: var(--theme-transiciones-normal);
    color: var(--theme-botones-primario-color);
    background-color: var(--theme-botones-primario-fondo);
    padding: calc(var(--theme-botones-primario-espacio) / 2)
      var(--theme-botones-primario-espacio);
    font-family: var(--theme-botones-primario-familia);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-textos-parrafo-tamanno);
    border-radius: calc(var(--theme-botones-primario-esquinas) / 2);
    border: none;
    cursor: pointer;
    margin: 0;
    /* IOS rendering */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 1;
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
  /* .navegacion :global(button) {
    padding: calc(var(--theme-botones-primario-espacio) * 1.5)
      calc(var(--theme-botones-primario-espacio) * 2.5);
  } */
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
    margin-bottom: 0.5rem;
  }

  :global(.inactivo),
  :global(.inactivo *),
  :global(input[disabled="true"]),
  :global(input[disabled="true"]:hover) {
    cursor: unset !important;
    background-color: var(--theme-botones-primario-inactivo) !important;
  }

</style>
