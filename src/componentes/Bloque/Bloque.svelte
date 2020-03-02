<script>

  export let elementos;

</script>

{#if Array.isArray(elementos) }
  {#each elementos as elemento,j ("elemento_"+j) }

    <svelte:component this={elemento.componente} {...elemento.data}/>

  {/each}
{/if}