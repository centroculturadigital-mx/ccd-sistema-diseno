<script>
 import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  
 export let elemento = {
        enlace: "",
        texto: "",
        elementos: []
    }
    $: subElementos = Array.isArray(elemento.elementos) ? elemento.elementos : []
 
</script>

<style>

</style>

<!-- ListaElemento -->
<li>
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
            {/each}
        </ul>
    {/if}
</li>
