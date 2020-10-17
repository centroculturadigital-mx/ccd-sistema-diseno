<script>
  import Entrada from "../../../elementos/formularios/Entrada/Entrada.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";

  export let etiqueta;
  export let indicacion;
  export let nombre;
  export let requerido;
  export let tipo;
  export let ejemplo;
  export let error;
  export let estado;
  export let resolver;
  export let opciones;
  export let datos;

  export let valor;
  export let valorEstatico;
  export let validacion;
  export let cambiar;
  
  export let ultimo;

  
  let enfocado = false
  
  // const calcularEstado = v => {
  //   if( ! enfocado ) {
  //     return estado
  //   } else {      
  //     return validacion(v).estado
  //   }
  // }
  // temporalmente siempre validar:
  const calcularEstado = v => estado

  $: estadoMostrar = calcularEstado(estado)

  const enfocar = () => {
    enfocado = true  
  }
  
  const desenfocar = () => {
    enfocado = false  
  }

  const cambiarAccion = (v) => {
    try {


      console.log("cambiar", v);
      // if( ! enfocado ) {
        cambiar( v );
      // }

    } catch( err) {
      
      console.log("Error al cambiar", err);

    }
    
    // if( valor && enfocado) {
    //   // validar sin repintar pantalla
    //   estadoMostrar = calcularEstado(v)
    // }
  }

  

</script>

<style>

  label,
  label > * {
    width: 100%;
    max-width: 32rem;
    height: auto;
    display: flex;
    flex-direction: column;
    /*  */
    font-size: calc(var(--theme-textos-parrafo-tamanno) / 1.5);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    padding: calc(var(--theme-campos-espacio) / 4);
    box-sizing: border-box;
  }
  label :global(.requerido span) {
    /* color: var(--theme-alertas-error); */
    font-size: calc(var(--theme-textos-parrafo-tamanno) / 1.5);
    font-family: inherit;
    font-weight: inherit;
    margin-left: calc(var(--theme-campos-espacio) / 2);

  }
  p {
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  .indicacion :global(*) {
    color: #888;
  }
  
</style>

{#if !!tipo}
  <label>
    {#if !!etiqueta}
      <Parrafo texto={etiqueta}/>
      {#if requerido}
        <span class="requerido">
          <Texto variante="CHICO" texto={'*requerido'} css={{
            color: "red"
          }}/>
        </span>
      {/if}
    {/if}
  </label>
  
  {#if !!indicacion}
    <div class="indicacion">
      <Parrafo variante="CHICO" texto={indicacion}/>
    </div>
  {/if}

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
    />

    {#if error instanceof Error}
      <div class="error">
        <Parrafo texto={error.message} />
      </div>
    {/if}

{/if}
