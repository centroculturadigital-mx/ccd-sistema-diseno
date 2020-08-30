<script>
  import Selector from "../Selector/Selector.svelte";
  import Calendario from "../../../componentes/Calendario/Calendario";

  // propiedades
  export let tipo = "texto";
  export let ejemplo = "Introduce un valor";
  export let opciones = [];
  export let estado = "";
  export let minimo = 0;
  export let maximo = 999;
  export let enfocar;
  export let desenfocar;

  // propiedades para lógica
  export let nombre = "";
  export let valor;
  export let cambiar;

  let valorLocal;

  $: valorActualizar(valor);

  const valorActualizar = v => {
    valorLocal = v;
  };

  // actualizar datos cuando cambian campos
  // $: (typeof cambiar == "function" && !! valorLocal) && cambiar(valorLocal)
  // TODO : eliminar esto:
  const realizarCambio = () => {
    if (typeof cambiar == "function") {
      cambiar(valorLocal);
    }
  };
  // $: ( && !! valorLocal) && cambiar(valorLocal)

  // $: cambiarValorDesdeFuera( valor )


  const desenfocarAccion = () => {
    if (typeof desenfocar == "function") {
      desenfocar()
    }
    if (typeof cambiar == "function") {
      cambiar(valorLocal);
    }
  };
  
  const enfocarAccion = () => {
    if (typeof enfocar == "function") {
      enfocar()
    }
  };

  $: clases = "Entrada" + (estado ? " " + estado : "");
  // $: clases = "Entrada" + (enfocado && estado ? " " + estado : "");

  $: seleccionarTipo(tipo);

  // const cambiarValorDesdeFuera = nuevoValor => {
  //   valorLocal = nuevoValor
  // }

  const seleccionarTipo = tipo => {
    switch (tipo) {
      case "texto":
        tipo = "texto";
        break;
      case "numero":
        tipo = "number";
        break;
      case "fecha":
        tipo = "fecha";
        break;
      case "telefono":
        tipo = "telefono";
        break;
      case "contrasenna":
        tipo = "password";
        break;
      case "email":
        tipo = "email";
        break;
      case "textarea":
        tipo = "textarea";
        break;
    }
  };
</script>

<style>
  input,
  textarea {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    border: 1px solid var(--theme-campos-borde);
    border-radius: var(--theme-campos-esquinas);
    padding: var(--theme-campos-espacio);
    margin-top: calc(var(--theme-espaciados-margen) / 2);
    margin-bottom: var(--theme-espaciados-margen);
    min-height: 2rem;
  }
  textarea {
    min-height: 8rem;
  }
  .error {
    border: 1px solid var(--theme-alertas-error);
    color: var(--theme-alertas-error);
  }
  .ok {
    border: 1px solid var(--theme-alertas-exito);
    color: var(--theme-alertas-exito);
  }
</style>

{#if tipo == 'texto'}

  <input
    class={clases}
    on:keyup={realizarCambio}
    on:change={realizarCambio}
    on:focusout={desenfocarAccion}
    on:focus={enfocarAccion}
    name={nombre}
    type="text"
    placeholder={ejemplo}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'contrasenna'}
  <input
    class={clases}
    on:keyup={realizarCambio}
    on:change={realizarCambio}
    on:focusout={desenfocarAccion}
    on:focus={enfocarAccion}
    name={nombre}
    type="password"
    placeholder={ejemplo}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'email'}
  <input
    class={clases}
    on:keyup={realizarCambio}
    on:change={realizarCambio}
    on:focusout={desenfocarAccion}
    on:focus={enfocarAccion}
    name={nombre}
    type="email"
    placeholder={ejemplo}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'numero'}
  <input
    class={clases}
    on:keyup={realizarCambio}
    on:change={realizarCambio}
    on:focusout={desenfocarAccion}
    on:focus={enfocarAccion}
    name={nombre}
    type="number"
    min={!!minimo ? minimo : ''}
    max={!!maximo ? maximo : ''}
    placeholder={ejemplo}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'archivo'}
  <input
    class={clases}
    on:keyup={realizarCambio}
    on:change={realizarCambio}
    on:focusout={desenfocarAccion}
    on:focus={enfocarAccion}
    name={nombre}
    type="file"
    placeholder={ejemplo}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'telefono'}
  <input
    class={clases}
    on:keyup={realizarCambio}
    on:change={realizarCambio}
    on:focusout={desenfocarAccion}
    on:focus={enfocarAccion}
    name={nombre}
    type="tel"
    placeholder={ejemplo}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'textarea'}
  <textarea
    class={clases}
    on:keyup={realizarCambio}
    on:change={realizarCambio}
    on:focusout={desenfocarAccion}
    on:focus={enfocarAccion}
    name={nombre}
    placeholder={ejemplo}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'selector' && Array.isArray(opciones)}
  <Selector bind:value={valorLocal} {nombre} {opciones} {estado} cambiar={realizarCambio} />
{/if}

{#if tipo == 'fecha'}
  <Calendario seleccionar={realizarCambio} />
{/if}
