<script>
  import Campo from "../Campo/Campo.svelte";
  import Aviso from "../../../elementos/texto/Aviso/Aviso";

  let tiposValidos = [
    "texto",
    "email",
    "textarea",
    "numero",
    "archivo",
    "contrasenna",
    "selector"
  ];

  let datos = {};

  export let campos;
  export let enviar;
  export let cambiar;
  export let respuesta;

  $: camposMostrar = Array.isArray(campos) ? computarCampos(campos, datos) : [];

  const computarCampos = (campos, datos) => {
    const camposPreparados = campos
      .map(c => {
        if (validarCampo(c)) {
          let valor = datos[c.nombre];

          let resultadoValidacion = c.validacion(valor);

          const campoPreparado = {
            ...c,
            // valor,
            // valor: c.valorInicial ? c.valorInicial : null,
            cambiar: v => {
              cambiarCampo(v, c);
            },
            error: resultadoValidacion.error,
            estado: resultadoValidacion.estado
          };

          return campoPreparado;
        }

        return null;
      })
      .filter(c => !!c);

    return camposPreparados;
  };

  const cambiarCampo = (valor, c) => {
    // if( typeof c.validacion == "function" ) {
    // if( c.validacion(valor).valido ) {
    datos[c.nombre] = valor;
    // } else {
    // datos[c.nombre] = null
    // }
    // }

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

  const validarCampo = c => {
    if (!c.nombre) {
      return false;
    }
    if (typeof c.validacion != "function") {
      return false;
    }

    if (tiposValidos.includes(c.tipo)) {
      return true;
    }

    return false;
  };
</script>

<style>
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
  form input[type="submit"]:focus,
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
    color: var(--theme-botones-secundario-color);
  }
</style>

{#if !respuesta}

  {#if Array.isArray(campos)}
    {#if campos.length > 0}
      <form on:submit|preventDefault={enviarFuncion}>

        {#each camposMostrar as campo, i ('formulario_campo_' + i)}
          <Campo {...campo} />
        {/each}

        {#if !!enviar}
          <input disabled={hayErrores || hayRequeridosVacios} type="submit" class={hayErrores || hayRequeridosVacios ? "inactivo":"activo"}/>
        {/if}

      </form>
    {/if}
  {/if}
{:else}
  <Aviso texto={respuesta} />
{/if}
