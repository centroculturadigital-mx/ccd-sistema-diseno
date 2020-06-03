<script>
  import ListaElemento from ".././../../elementos/listas/ListaElemento/ListaElemento.svelte";

  export let elementos;
</script>

<style>

</style>

<ul>
  {#if Array.isArray(elementos)}
    {#each elementos as elemento, i ('sub_elemento_' + i)}
      <ListaElemento {elemento} />
    {/each}
  {/if}
</ul>

<!--  -->

<!-- <li>
    {#if Array.isArray(subElementos) && subElementos.length > 0 }
        <button>
            >
        </button>
    {/if}
    <a href={elemento.enlace}>
        {elemento}
    </a>
    {#if Array.isArray(subElementos) && subElementos.length > 0 }
        <ul>
            {#each subElementos as subElemento}
                <svelte:self elemento={subElemento}/>
                <ListaElemento texto={"WZAA!"}/>
            {/each}
        </ul>
    {/if}
</li> -->
