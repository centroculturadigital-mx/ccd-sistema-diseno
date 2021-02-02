<script>
  import Entrada from "../../../elementos/formularios/Entrada/Entrada.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";
  import Bloque from "../../Bloque/Bloque.svelte";

  export let etiqueta;
  export let indicacion;
  export let instruccion;
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
  export let deshabilitado;

  
  
  let enfocado = false;
  let valorMultiCampo = {};
  

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

    console.log("campo.nombre] = datos;", campo.nombre, datos);
    if (typeof valorMultiCampo == "object") {
      valorMultiCampo[campo.nombre] = datos;
      cambiarAccion(valorMultiCampo);
    }
  };

  const prepararMultiCampo = () => {

    // almacenar valor en almacen
    Array.isArray(datos.campos) && datos.campos.forEach(campo => {
      valorMultiCampo[campo.nombre] = datos[campo.nombre] || ( typeof valor == "object" ? valor[campo.nombre] : null) || campo.valor 
    })

    return {
      campos: Array.isArray(datos.campos)
        ? datos.campos.map(campo => ({
            ...campo,
            valor: valorMultiCampo[campo.nombre],
            // cambiar: datos => setTimeout(()=>cambiarMultiCampo( datos, campo ), 400)
            // cambiar: datos => cambiarMultiCampo(datos, campo)
          }))
        : []
    }
      
  }




  $: estadoMostrar = calcularEstado(estado);

  
  $: multiCampo = (tipo == "multicampo" && typeof valorMultiCampo == "object")
    ? prepararMultiCampo()
    : null;
    
  
  $: listo = !! tipo

    
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
    /*  */
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
    /* color: var(--theme-alertas-error); */
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
  .instruccion {
    margin: 0.5rem 0;
  }
  .instruccion :global(*) {
    color: #555;
    font-size: 0.7rem;
  }
</style>

<div class="Campo">
  {#if listo }
    <label>
      {#if !!etiqueta}
        <Parrafo texto={etiqueta} />
        {#if requerido}
          <span class="requerido">
            <Texto
              variante="CHICO"
              texto={'* requerido'}
              css={{ color: 'red' }} />
          </span>
        {/if}
      {/if}
    </label>

    {#if !!instruccion}
      <div class="instruccion">
        <!-- <Parrafo variante="CHICO" texto={instruccion}/> -->
        <p>
          {@html instruccion}
        </p>
      </div>
    {/if}

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

    {#if error instanceof Error}
      <div class="error">
        <Parrafo texto={error.message} />
      </div>
    {/if}
  {/if}

</div>
