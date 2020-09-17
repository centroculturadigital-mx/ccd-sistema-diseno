<script>

  import Selector from "../Selector/Selector.svelte";
  import CalendarioEntrada from "../../../componentes/Calendario/CalendarioEntrada/CalendarioEntrada";

  // propiedades
  export let tipo = "texto";
  export let ejemplo = "Introduce un valor";
  export let opciones = [];
  export let estado = "";
  export let minimo = 0;
  export let maximo = 999;
  export let enfocar;
  export let desenfocar;
  export let valorEstatico;

  // propiedades para lógica
  export let nombre = "";
  export let valor;
  export let cambiar;
  
  export let ultimo;
  
  let cambiado;

  let valorLocal;

  $: valorActualizar(valor);

  const valorActualizar = v => {
    valorLocal = v;
  };

  // actualizar datos cuando cambian campos
  // $: (typeof cambiar == "function" && !! valorLocal) && cambiar(valorLocal)
  // TODO : eliminar esto:
  const cambiarAccion = () => {
    cambiado = true
    if (typeof cambiar == "function") {
      cambiar(valorLocal);
    }
  };
  // $: ( && !! valorLocal) && cambiar(valorLocal)

  // $: cambiarValorDesdeFuera( valor )


  const desenfocarAccion = () => {
    if (cambiado) {
      if (typeof desenfocar == "function") {
        desenfocar()
      }
      if (typeof cambiar == "function") {
        cambiar(valorLocal);
      }
      cambiado = false
    }
  };
  
  const enfocarAccion = () => {
    cambiado = false
    // if (typeof enfocar == "function") {
    //   enfocar()
    // }
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
      case "casilla":
        tipo = "checkbox";
        break;
      case "radio":
        tipo = "radio";
        break;
      case "textarea":
        tipo = "textarea";
        break;
    }
  };


  const enfoque = async (el) => {
    if( ultimo ) {
      el.focus()
    }
  }
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
    padding: calc(var(--theme-campos-espacio) * 2) calc(var(--theme-campos-espacio) * 1.5);    margin-top: calc(var(--theme-espaciados-margen) / 2);
    margin-bottom: var(--theme-espaciados-margen);
    min-height: 2rem;
    width: 100%;
    box-sizing: border-box;
  }
  textarea {
    min-height: 8rem;
  }
  input[type="checkbox"],
  input[type="radio"] {
    height: auto !important;
    min-height: initial !important;
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
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="text"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque/>
{/if}

{#if tipo == 'contrasenna'}
  <input
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="password"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque/>
{/if}

{#if tipo == 'email'}
  <input
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="email"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque/>
{/if}

{#if tipo == 'numero'}
  <input
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="number"
    min={!!minimo ? minimo : ''}
    max={!!maximo ? maximo : ''}
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque/>
{/if}

{#if tipo == 'archivo'}
  <input
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="file"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque/>
{/if}

{#if tipo == 'telefono'}
  <input
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="tel"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque/>
{/if}

{#if tipo == 'casilla'}
  <input
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="checkbox"
    value={valorEstatico}
    use:enfoque/>
{/if}

{#if tipo == 'radio'}
  <input
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    type="radio"
    value={valorEstatico}
    use:enfoque/>
{/if}

{#if tipo == 'textarea'}
  <textarea
    class={clases}
    on:keyup={cambiarAccion}
    on:change={cambiarAccion}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    name={nombre}
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque/>
{/if}

{#if tipo == 'selector' && Array.isArray(opciones)}
  <Selector bind:value={valorLocal} desenfocar={desenfocarAccion}
  enfocar={enfocarAccion} {nombre} {opciones} {estado} cambiar={cambiarAccion}
  />
{/if}

{#if tipo == 'fecha'}
  <CalendarioEntrada
    bind:value={valorLocal}
    cambiar={cambiarAccion}
    desenfocar={desenfocarAccion}
    enfocar={enfocarAccion}
    />
{/if}
