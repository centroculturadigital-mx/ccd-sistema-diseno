<script>
    
    import GraficoVectorial from "../GraficoVectorial.svelte"

    export let svg
    export let actualizarPanZoom
    export let seleccionarPath
    export let componentes

    $: propiedades = {
        svg,
        actualizarPanZoom,
        seleccionarPath,
    }

    $: componentesMostrar = Array.isArray( componentes ) ? componentes : []

</script>


<GraficoVectorial {...propiedades}/>


{#each componentesMostrar as componente (componente) }
    {#if typeof componente.datos === "object"  }

        <svelte:component this={ componente.componente } {...componente.datos}/>

    {/if}
{/each}