<script>
  export let ejemplo;
  export let opciones;
  export let estado;
  export let nombre;
  export let cambiar;
  export let enfocar;
  export let desenfocar;
  export let vacioPermitido = true;

  // export let value;


  $: clases = 'Selector' + (estado ? " " + estado : '' );

  // const actualizarValor = v => {
  //   value = v;
  // };

  let valorLocal;

  // $: actualizarValor(value);



  const desenfocarAccion = () => {
    // if (cambiado) {
      if (typeof desenfocar == "function") {
        desenfocar()
      }

      if (typeof cambiar == "function") {
        cambiar(valorLocal);
      }
      
      // cambiado = false
    // }
  };
  
  const enfocarAccion = () => {
    // cambiado = false
    if (typeof enfocar == "function") {
      enfocar()
    }
  };


  const cambiarAccion = () => {
    // cambiado = true
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
</style>

<select
  class={clases}
  name={nombre}
  on:focus={()=>enfocarAccion()}
  on:focusout={()=>desenfocarAccion()}
  on:change={()=>cambiarAccion()}
  bind:value={valorLocal}>

      {#if !!opciones}
        <!-- primer elemento de ejemplo -->
          <option
          class="ejemplo"
          selected
          disabled={ vacioPermitido ? false : true }
          >
            {#if !!ejemplo}
                {ejemplo}
            {/if}
          </option>
        <!-- Si elementos que monstrar se popula la lista de opciones -->
        {#each opciones as opcion}
          <option
          value={opcion.valor}
          selected={ opcion.valor === valorLocal }>
            {opcion.texto}
          </option>
        {/each}
      {/if}

</select>
