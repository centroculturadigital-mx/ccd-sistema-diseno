<script>

  import Selector from "../Selector/Selector.svelte";
  import CalendarioEntrada from "../../../componentes/Calendario/CalendarioEntrada/CalendarioEntrada";
  
  import Casilla from "../Casilla/Casilla";

  import Casillas from "../Casillas/Casillas";

  import Icono from "../../../elementos/Icono/Icono"

  // propiedades
  export let tipo = "texto";
  export let ejemplo = "Introduce un valor";
  export let opciones = [];
  export let datos = {};
  export let estado = "";
  export let minimo = 0;
  export let maximo = 999999;
  export let enfocar;
  export let desenfocar;
  export let valorEstatico;
  export let resolver;

  // propiedades para lógica
  export let nombre = "";
  export let valor;
  export let cambiar;
  
  export let ultimo;
  export let deshabilitado;
  
  // let cambiado;

  let valorLocal;
  let valorLocalObjeto = {};


  const prepararObjeto = tipo => {
    if( tipo == "texto-numero" ) {

      valorLocalObjeto = valor || {
        texto: "",
        numero: 0
      }

    }

  }

  $: prepararObjeto( tipo )

  const actualizarValorObjeto = valorLocalObjeto => {
    valorLocal = valorLocalObjeto
  }

  $: actualizarValorObjeto( valorLocalObjeto )

  $: valorActualizar(valor);

  const valorActualizar = v => {
    valorLocal = v;
  };

  // actualizar datos cuando cambian campos
  // $: (typeof cambiar == "function" && !! valorLocal) && cambiar(valorLocal)
  // TODO : eliminar esto:
  const cambiarAccion = (valor) => {
    // cambiado = true
    if (typeof cambiar == "function") {
      // TODO : revisar si esto todavía se necesita:
      if( tipo != "selector" &&  tipo != "casilla" ) {
        cambiar((!!valor||valor===0) ? valor : valorLocal);
      } else {        
        cambiar(valor);
      }
      // cambiar((!!valor||valor===0) ? valor : valorLocal);
      // cambiar(valor);
    }
  };
  // $: ( && !! valorLocal) && cambiar(valorLocal)

  // $: cambiarValorDesdeFuera( valor )


  const desenfocarAccion = () => {
    // if (cambiado) {
      if (typeof desenfocar == "function") {
        desenfocar()
      }
      setTimeout(()=>{
        if (typeof cambiar == "function") {
          cambiar(valorLocal);
        }
      },100)
      // cambiado = false
    // }
  };
  
  const enfocarAccion = () => {
    // cambiado = false
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
      case "casilla":
        tipo = "casilla";
        break;
      case "radio":
        tipo = "radio";
        break;
      case "textarea":
        tipo = "textarea";
        break;
      
      
      case "texto-numero":
        tipo = "texto-numero";
        break;
    }
  };


  const enfoque = async (el) => {
    if( ultimo ) {
      // el.focus()
    }
  }

  let verContrasenna = false;
  
  const ver = () => {
    return verContrasenna =! verContrasenna;  
  }

</script>

<style>
  * {
    box-sizing: border-box;
  }
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
  /* input[type="checkbox"],
  input[type="radio"] {
    height: auto !important;
    min-height: initial !important;
  } */
  input[type="checkbox"]
  /* ,
  input[type="radio"] */
  {
    visibility: hidden;
  }
  
  .error {
    border: 1px solid var(--theme-alertas-error);
    color: var(--theme-alertas-error);
  }
  .ok {
    border: 1px solid var(--theme-alertas-exito);
    color: var(--theme-alertas-exito);
  }

  .TextoNumero {
    display: grid;
    grid-template-columns: 1fr 4rem;
  }
  .contrasenna {
    position: relative;
  }
  .ver {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    cursor: pointer;
  }
  .ver :global(.iconoContenedor) {
    background-color: #FFF
  }
  .ver :global(svg) {
    stroke-width: 1px;
    fill: gray;
    opacity: 0.5;
  }
</style>

{#if tipo == 'texto'}

  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    type="text"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    disabled={deshabilitado}
    />
{/if}

{#if tipo == 'contrasenna'}

<div class="contrasenna">
  {#if verContrasenna}
    <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    type="text"
    disabled={deshabilitado}
    />
  {:else}
    <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    type="password"
    disabled={deshabilitado}
    />
  {/if}

  <div class="ver" on:click={ver}>
    <Icono icono={verContrasenna ? "ojoAbierto" : "ojoCerrado"}/>
  </div>
</div>
{/if}

{#if tipo == 'email'}
  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    type="email"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    disabled={deshabilitado}
    />
{/if}

{#if tipo == 'numero'}
  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:input={()=>cambiarAccion()}
    on:keyup={()=>cambiarAccion()}
    on:change={()=>cambiarAccion()}
    name={nombre}
    type="number"
    min={!!minimo ? minimo : ''}
    max={!!maximo ? maximo : ''}
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    disabled={deshabilitado}
    />
{/if}

{#if tipo == 'archivo'}
  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    type="file"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    disabled={deshabilitado}
    />
{/if}

{#if tipo == 'telefono'}
  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    type="tel"
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    disabled={deshabilitado}
    />
{/if}


{#if tipo == 'radio'}
  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    type="radio"
    value={valorEstatico}
    use:enfoque
    disabled={deshabilitado}
    />
{/if}

{#if tipo == 'textarea'}
  <textarea
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    placeholder={ejemplo}
    bind:value={valorLocal}
    use:enfoque
    disabled={deshabilitado}
    />
{/if}



<!-- Tipos de Entradas mas complejos: -->


{#if tipo == 'casilla'}
    <Casilla texto={datos.texto} {valor} cambiar={cambiarAccion} {resolver}
    {deshabilitado}/>
{/if}

{#if tipo == 'casillas'}
    <Casillas {nombre} {opciones} {valor} cambiar={cambiarAccion} {...datos} {resolver}
    {deshabilitado}/>
{/if}




{#if tipo == 'selector' && Array.isArray(opciones)}
  <Selector
    valor={valorLocal}
    {ejemplo}
    desenfocar={desenfocarAccion}
    enfocar={enfocarAccion} {nombre} {opciones} {estado} cambiar={cambiarAccion}
    {deshabilitado}
  />
  <!-- {resolver} -->
{/if}

{#if tipo == 'fecha'}
  <CalendarioEntrada
    bind:value={valorLocal}
    {ejemplo}
    cambiar={cambiarAccion}
    desenfocar={()=>desenfocarAccion()}
    enfocar={()=>enfocarAccion()}
    {deshabilitado}
  />
    <!-- {resolver} -->
{/if}



{#if tipo == 'texto-numero' && (! valorLocal || typeof valorLocal == "object" )}
  

<div class="TextoNumero">

  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:keyup={()=>cambiarAccion()}
    name={nombre}
    type="text"
    bind:value={ valorLocalObjeto.texto }
    use:enfoque
    disabled={deshabilitado}
    />
    <!-- placeholder={ejemplo} -->

  <input
    class={clases}
    on:focusout={()=>desenfocarAccion()}
    on:focus={()=>enfocarAccion()}
    on:input={()=>cambiarAccion()}
    on:keyup={()=>cambiarAccion()}
    on:change={()=>cambiarAccion()}
    name={nombre}
    type="number"
    min={!!minimo ? minimo : ''}
    max={!!maximo ? maximo : ''}
    bind:value={ valorLocalObjeto.numero }
    use:enfoque
    disabled={deshabilitado}
    />
    <!-- placeholder={ejemplo} -->


</div>

    <!-- {resolver} -->
{/if}

