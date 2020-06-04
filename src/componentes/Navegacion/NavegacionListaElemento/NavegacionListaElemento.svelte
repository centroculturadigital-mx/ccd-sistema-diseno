<script>
  import ListaElemento from ".././../../elementos/listas/ListaElemento/ListaElemento.svelte";

  export let elementos;   

  // $: elementos = typeof elementos == 'object' ? elementos : {};

  // $: elementos = Array.isArray( elementos ) ? elementos : [];
</script>

<style>
ul {
    list-style: none;
    padding: 0;
}
</style>

<ul>
  {#if Array.isArray(elementos)}
    {#each elementos as elemento, i ('sub_elemento_' + i)}
      <ListaElemento {elemento} />
    {/each}
  {/if}
</ul>
