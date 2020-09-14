<script>
  import Entrada from "../../../elementos/formularios/Entrada/Entrada.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";

  export let etiqueta;
  export let nombre;
  export let requerido;
  export let tipo;
  export let ejemplo;
  export let error;
  export let estado;
  export let opciones;

  export let valor;
  export let validacion;
  export let cambiar;
  
  export let desenfocar;
  export let enfocar;
  export let ultimo;

  
  
  let enfocado = false
  
  const calcularEstado = v => {
    if( ! enfocado ) {
      return estado
    } else {      
      return validacion(v).estado
    }
  }

  let estadoMostrar = calcularEstado(valor)

  const desenfocarAccion = v => {
    if (typeof desenfocar == "function") {
      console.log("d.E.");
      desenfocar(nombre);
    }
    enfocado = false  
  }

  const enfocarAccion = v => {
    if (typeof enfocar == "function") {
        enfocar(nombre);
    }
    enfocado = true  
  }

  const cambiarAccion = (v) => {
    if (typeof cambiar == "function") {
      // if( ! enfocado ) {
        console.log("cambiar");
        cambiar(v);
      // }
    }
    
    if( valor && enfocado) {
      // validar sin repintar pantalla
      estadoMostrar = calcularEstado(v)
    }
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
  label :global(p span) {
    color: var(--theme-alertas-error);
    font-size: calc(var(--theme-textos-parrafo-tamanno) / 1.5);
    font-family: inherit;
    font-weight: inherit;
  }
  p {
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
  }
  p span {
    display: contents;
    margin-left: calc(var(--theme-campos-espacio) / 2);
  }
</style>

{#if !!tipo}
  <label>
    {#if !!etiqueta}
      <p>
        {etiqueta}
        {#if requerido}
          <span>*requerido</span>
        {/if}
      </p>
    {/if}
  </label>

    <Entrada
      {tipo}
      {nombre}
      {valor}
      {ejemplo}
      estado={estadoMostrar}
      cambiar={cambiarAccion}
      {opciones}
      enfocar={enfocarAccion}
      desenfocar={desenfocarAccion}
      {ultimo}
    />

    {#if error instanceof Error}
      <div class="error">
        <Parrafo texto={error.message} />
      </div>
    {/if}

{/if}
