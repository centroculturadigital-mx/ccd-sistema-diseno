<script>
    
    import GraficoVectorialMarcador from "./GraficoVectorialMarcador/GraficoVectorialMarcador"
    
    export let marcadores

    $: marcadoresMostrar = Array.isArray( marcadores ) ? marcadores : []

</script>


<div class="Marcadores">

    {#each marcadoresMostrar as marcador (marcador) }
        {#if marcador.contenido }
            <GraficoVectorialMarcador {...marcador}/>
        {/if}
    {/each}

</div>

<style>

    .Marcadores {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

</style>