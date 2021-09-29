<script>
  export let ejemplo="Selecciona una opción";
  export let opciones;
  export let estado;
  export let nombre;
  export let cambiar;
  export let enfocar;
  export let desenfocar;
  export let vacioPermitido = true;

  export let valor;
  export let deshabilitado


  $: clases = 'Selector' + (estado ? " " + estado : '' );

  let valorLocal;

  const actualizarValor = v => {
    valorLocal = v;
  };

  
  $: actualizarValor(valor);



  const desenfocarAccion = () => {
    //  // if (cambiado) {
      // if (typeof desenfocar == "function") {
      //   desenfocar()
      // }

      // if (typeof cambiar == "function") {
      //   cambiar(valorLocal);
      // }
      
      // // cambiado = false
    // // }
  };
  
  const enfocarAccion = () => {
    // cambiado = false
    if (typeof enfocar == "function") {
      enfocar()
    }
  };


  const cambiarAccion = () => {
    if (typeof cambiar == "function") {
      setTimeout(()=>{
        cambiar(valorLocal)
      });
    }
  };
</script>

<style>
  .Selector {
    background-color: var(--theme-campos-fondo);
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    border: 1px solid var(--theme-campos-borde);
    border-radius: var(--theme-campos-esquinas);
    padding: calc(var(--theme-campos-espacio) * 2) calc(var(--theme-campos-espacio) * 1.5);
    margin-top: var(--theme-espaciados-margen);
    margin-bottom: var(--theme-espaciados-margen);
    min-height: 2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .Selector:focus,
  .Selector:active {
    border-color: var(--theme-campos-activo);
    outline: none;
  }

  .Selector.error {
    border-color: var(--theme-alertas-error);
  }

  .Selector.ok {
    outline: 1px solid var(--theme-alertas-exito);
  }


  select:disabled {
    color: #aaa;
    border-color: #ddd !important;
  }

</style>


<select
  class={clases}
  name={nombre}
  on:focus={()=>enfocarAccion()}
  on:focusout={()=>desenfocarAccion()}
  on:blur={()=>cambiarAccion()}
  bind:value={valorLocal}
  disabled={deshabilitado}
  >
  
    <!-- primer elemento -->
    <option
    value={false}
    disabled={ vacioPermitido ? false : true }
    >
      {ejemplo}
    </option>

    
    {#if ! deshabilitado && !!opciones}
      {#each opciones as opcion}
        <option
        value={opcion.valor}
        selected={ opcion.valor == valorLocal || opcion.texto == valorLocal }>
          {opcion.texto}
        </option>
      {/each}
    {/if}

</select>
