<script>
  import Entrada from "../../../elementos/formularios/Entrada/Entrada.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";
  import Bloque from "../../Bloque/Bloque.svelte";

  export let etiqueta;
  export let indicacion;
  export let instruccion;
  export let textosAuxiliares;
  export let nombre;
  export let requerido;
  export let tipo;
  export let ejemplo;
  export let error;
  export let estado;
  export let resolver;
  export let opciones;
  export let datos;
  export let info;

  export let valor;
  export let valorEstatico;
  export let validacion;
  export let cambiar;

  export let ultimo;
  export let deshabilitado;
  
  export let configuracion = {
    textos: {
      requerido: "* requerido"
    }
  };
  
  
  let enfocado = false;
  let valorMultiCampo = {};
  
  // necesario para validacion multicampo
  // TODO: aplicar a todas las entradas?
  // TODO: quizás bajar esto a entrada?
  let cambiarDespues;

  // TODO: eliminar cuando este 100% implementado instruccion
  $: instruccion = !! indicacion ? indicacion : instruccion
 
  // const calcularEstado = v => {
  //   if( ! enfocado ) {
  //     return estado
  //   } else {
  //     return validacion(v).estado
  //   }
  // }
  // temporalmente siempre validar:
  const calcularEstado = v => estado;

  const enfocar = () => {
    enfocado = true;
  };

  const desenfocar = () => {
    enfocado = false;
  };

  const cambiarAccion = v => {
    try {
      // if( ! enfocado ) {
      cambiar(v);
      // }
    } catch (err) {
      console.log("Error al cambiar", err);
    }

    // if( valor && enfocado) {
    //   // validar sin repintar pantalla
    //   estadoMostrar = calcularEstado(v)
    // }
  };


  const cambiarMultiCampo = (datos, campo) => {


    if (typeof valorMultiCampo == "object") {
      
      if( cambiarDespues ) {
        clearTimeout( cambiarDespues )        
      }

      cambiarDespues = setTimeout(()=>{
        valorMultiCampo[campo.nombre] = datos;
        cambiarAccion(valorMultiCampo);
      }, 400)
    }
  };

  const prepararMultiCampo = () => {

    // almacenar valor en almacen
    Array.isArray(datos.campos) && datos.campos.forEach(campo => {
      valorMultiCampo[campo.nombre] = campo.valor 
      valor = valorMultiCampo
      // valorMultiCampo[campo.nombre] = ( typeof valor == "object" ? valor[campo.nombre] : null) || campo.valor 
    })

    return {
      campos: Array.isArray(datos.campos)
        ? datos.campos
        .map(campo => ({
            ...campo,
            // valor: valorMultiCampo[campo.nombre],
            // cambiar: datos => setTimeout(()=>cambiarMultiCampo( datos, campo ), 400)
          cambiar: datos => {
            

            // ejecutar accion para conjunto de sub-campos
            cambiarMultiCampo(datos, campo)

            // ejecutar accion de sub-campo
            campo.cambiar(datos)
            

          }
        }))
        : []
    }
      
  }




  $: estadoMostrar = calcularEstado(estado);

  
  $: multiCampo = (tipo == "multicampo" && typeof valorMultiCampo == "object")
    ? prepararMultiCampo()
    : null;
    
  
  $: listo = !! tipo


  $: infoMostrar = info && (
    typeof info == "function" 
      ? info(valor)
      : info
  )
    
  
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .Campo {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label,
  label > * {
    width: 100%;
    max-width: 32rem;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: calc(var(--theme-textos-parrafo-tamanno) / 1.5);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    padding: calc(var(--theme-campos-espacio) / 4);
  }
  label :global(.requerido) {
    padding: 0;
    width: auto;
  }
  label :global(p) {
    margin: 0;
  }
  label :global(p span) {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-weight: 900;
  }
  label :global(.requerido span) {
    font-size: calc(var(--theme-textos-parrafo-tamanno) / 1.5);
    font-family: inherit;
    font-weight: inherit;
    padding: 0 var(--theme-espaciados-padding);
  }
  p {
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
  .instruccion,
  .textoAuxiliar {
    margin: 0.25rem 0;
  }
  .instruccion p,
  .textoAuxiliar p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.75rem;
    font-family: var(--theme-textos-parrafo-tipografia);
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-textos-parrafo-color);

  }
  .instruccion :global(*),
  .textoAuxiliar :global(*) {
    font-size: 0.75rem;
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
  }


  .textoAuxiliar :global(p) {
    margin: 0;  
  }

  .textoAuxiliar :global(a),
  .textoAuxiliar.accion,
  .textoAuxiliar.accion :global(span) {
    cursor: pointer;
    color: var(--theme-textos-enlaces-color);
    text-decoration: underline;
  }
  .textoAuxiliar :global(a:hover),

  .textoAuxiliar.accion:hover {
    color: var(--theme-textos-enlaces-hover);
  }
  .textoAuxiliar :global(a:hover) ,
  .textoAuxiliar.accion :global(span:hover) {
    color: inherit;
  }

  .error :global(*) {
    color: red !important;
  }
  .info :global(*) {
    margin-top: 0;
  }
  .opcional {
    color: var(--theme-textos-parrafo-neutro);
    font-weight: var(--theme-textos-parrafo-peso);
    padding: 0;
    padding-left: 0.25rem;
    width: auto;
  }
  .textos {
    display: flex;
    flex-direction: column;
  }
  .textosSuperiores {
    display: flex;
  }
  .textos :global(p) {
    margin: 0.25rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .requerido {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 var(--theme-espaciados-padding);
  }
</style>

<div class="Campo">
  {#if listo }
  
  <div class="textos">

    <!-- <label> -->
      <div class="textosSuperiores">

        {#if !!etiqueta}
        <Parrafo texto={etiqueta} />
        {#if requerido && !configuracion.indicarOpcionales}
        <span class="requerido">
          
          <Texto
          variante="CHICO"
          texto={configuracion.textos.requerido}
          css={{ color: 'red' }} />
          
        </span>
        {/if}
        {#if !requerido && configuracion.indicarOpcionales}
        <span class="opcional">
          <Texto
          variante="CHICO"
          texto={configuracion.textos.opcional}
          />
        </span>
        {/if}
        {/if}
      </div>
        <!-- </label> -->
        
        {#if !!instruccion}
        <div class="instruccion">
          <!-- <Parrafo variante="CHICO" texto={instruccion}/> -->
          <p>
            {@html instruccion}
          </p>
        </div>
        {/if}
  
  </div>
    
    {#if tipo != 'multicampo'}
      <Entrada
        {tipo}
        {nombre}
        {valor}
        {valorEstatico}
        {ejemplo}
        estado={estadoMostrar}
        {opciones}
        {datos}
        {enfocar}
        {desenfocar}
        {ultimo}
        cambiar={cambiarAccion}
        {resolver}
        {deshabilitado} />
    {:else}

      {#each multiCampo.campos as campo (campo.nombre)}

        <svelte:self {...campo} />

      {/each}
      
    {/if}

    {#if Array.isArray(textosAuxiliares)}
      {#each textosAuxiliares as textoAuxiliar (textoAuxiliar)}
        <div class={`textoAuxiliar${
          typeof textoAuxiliar.accion == "function" ?
          ' accion' : ''
        }`} on:click={textoAuxiliar.accion}>
        <!-- <div class="textoAuxiliar" on:click={
        }> -->
          <Parrafo contenido={textoAuxiliar.contenido} />
        </div>
      {/each}
    {/if}


    {#if error instanceof Error}
      <div class="error">
        <Parrafo texto={error.message} />
      </div>
    {/if}


    {#if infoMostrar }
      <div class="info">
        <Parrafo texto={infoMostrar} />
      </div>
    {/if}
  {/if}

</div>
