<script>

  export let contenido;

</script>

{#if Array.isArray(contenido) }
  {#each contenido as componente,j ("componente_"+j) }

    <svelte:component this={componente.componente} {...componente.data}/>

  {/each}
          
{:else}

  {@html contenido}

{/if}