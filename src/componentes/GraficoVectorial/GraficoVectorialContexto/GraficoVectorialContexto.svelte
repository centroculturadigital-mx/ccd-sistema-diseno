<script>
    
    import GraficoVectorial from "../GraficoVectorial.svelte"

    export let svg

    const actualizarPanZoom = datos => {

        console.log("actualizarPanZoom", datos);

    }

</script>


<GraficoVectorial {svg} {actualizarPanZoom}/>