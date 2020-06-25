<script>
  export let contenido;
  export let texto;

  export let estilos = {
    tamanno: "",
    color: "",
  }

  $: estilosCalculados = calcularEstilos()

  const calcularEstilos = () => {
    let str = ''
    if( estilos.tamanno ) {
      str += `font-size: ${estilos.tamanno};`
    }
    if( estilos.color ) {
      str += `color: ${estilos.color};`
    }
  }

</script>

<style>
  /* span {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
  } */
</style>

{#if !!contenido}

  {#if Array.isArray(contenido)}
    {#each contenido as componente (componente)}
      <svelte:component
        this={componente.componente}
        {...componente.data}
        tamanno={estilos.tamanno} />
    {/each}
  {:else if typeof contenido == 'object' && !!contenido.componente}
    <svelte:component
      this={contenido.componente}
      {...contenido.data}
      tamanno={estilos.tamanno} />
  {:else}
    <span style={estilosCalculados}>
      {@html contenido}
    </span>
  {/if}
{:else}

  {#if !!texto}
    <span style={estilosCalculados}>{texto}</span>
  {/if}
{/if}
