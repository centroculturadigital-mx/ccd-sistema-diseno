<script>
  export let contenido;
  export let tamanno;
  export let texto;
  export let color;
</script>

<style>
  span {
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
  }
</style>

{#if !!contenido}

  {#if Array.isArray(contenido)}
    {#each contenido as componente, j ('componente_' + j)}
      <svelte:component
        this={componente.componente}
        {...componente.data}
        {tamanno} />
    {/each}
  {:else if typeof contenido == 'object' && !!contenido.componente}
    <svelte:component
      this={contenido.componente}
      {...contenido.data}
      {tamanno} />
  {:else}
    <span style={`font-size: ${tamanno};color: ${color};`}>
      {@html contenido}
    </span>
  {/if}
{:else}

  {#if !!texto}
    <span style={`font-size: ${tamanno};color: ${color};`}>{texto}</span>
  {/if}
{/if}
