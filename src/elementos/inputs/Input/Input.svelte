<script>
  import Selector from "../Selector/Selector.svelte";

  export let tipo = "texto";
  export let placeholder;
  export let valor;
  export let cambiar;
  export let nombre;
  export let opciones;
  export let status;
  export let minimo;
  export let maximo;

  let valorLocal;

  $: valorActualizar(valor);

  const valorActualizar = v => {
    valorLocal = v;
  };

  // $: (typeof cambiar == "function" && !! valorLocal) ? cambiar(valorLocal) : null

  // $: cambiarValorDesdeFuera( valor )

  $: clases = "Input" + (status ? " " + status : "");

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
  input, textarea {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    border: 1px solid var(--theme-campos-borde);
    border-radius: var(--theme-campos-esquinas);
    padding: var(--theme-campos-espacio);
    margin-top: var(--theme-espaciados-margin);
    margin-bottom: var(--theme-espaciados-margin);
    min-height: 2rem;
  }
  textarea {
    min-height: 12rem;
  }
  .error {
    border: 1px solid var(--theme-alertas-error);
    color: rgb(250, 233, 233);
  }
  .ok {
    border: 1px solid var(--theme-alertas-exito);
    color: var(--theme-alertas-exito);
  }
</style>

{#if tipo == 'texto'}

  <input
    class={clases}
    on:keyup={e => cambiar(e.target.value)}
    name={nombre}
    type="text"
    {placeholder}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'contrasenna'}
  <input
    class={clases}
    on:keyup={e => cambiar(e.target.value)}
    name={nombre}
    type="password"
    {placeholder}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'email'}
  <input
    class={clases}
    on:keyup={e => cambiar(e.target.value)}
    name={nombre}
    type="email"
    {placeholder}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'numero'}
  <input
    class={clases}
    on:keyup={e => cambiar(e.target.value)}
    name={nombre}
    type="number"
    min={!!minimo ? minimo : ''}
    max={!!maximo ? maximo : ''}
    {placeholder}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'archivo'}
  <input
    class={clases}
    on:keyup={e => cambiar(e.target.value)}
    name={nombre}
    type="file"
    {placeholder}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'textarea'}
  <textarea
    class={clases}
    on:keyup={e => cambiar(e.target.value)}
    name={nombre}
    {placeholder}
    bind:value={valorLocal} />
{/if}

{#if tipo == 'selector' && Array.isArray(opciones)}
  <Selector bind:value={valorLocal} {nombre} {opciones} {status} {cambiar} />
{/if}
