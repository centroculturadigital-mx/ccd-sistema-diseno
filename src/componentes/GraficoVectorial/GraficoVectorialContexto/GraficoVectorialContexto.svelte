<script>
    
    import GraficoVectorial from "../GraficoVectorial.svelte"

    export let svg
    export let actualizarGraficoVectorial
    export let seleccionarPath
    export let componentes

    $: propiedades = {
        svg,
        actualizarGraficoVectorial,
        seleccionarPath,
    }

    $: componentesMostrar = Array.isArray( componentes ) ? componentes : []

</script>

<div class="GraficoVectorialContexto">

    <GraficoVectorial {...propiedades}/>


    {#each componentesMostrar as componente (componente) }
        {#if typeof componente.datos === "object"  }

            <svelte:component this={ componente.componente } {...componente.datos}/>

        {/if}
    {/each}

</div>

<style>

    .GraficoVectorialContexto {
        position: relative;
        width: 100%;
        height: 100%;
        min-width: 50vw;
        min-height: 50vh;
    }

    .GraficoVectorialContexto :global(.GraficoVectorial) {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

</style>