<script>

    import GraficoVectorialContexto from "../GraficoVectorialContexto/GraficoVectorialContexto.svelte";
    import GraficoVectorialMarcadores from "./GraficoVectorialMarcadores.svelte";

    export let svg

    const actualizarPanZoom = datos => console.log("actualizarPanZoom", datos)
    const seleccionarPath = path => console.log("seleccionarPath", path.getAttribute("id") )


    let componentes = [
        {
            componente: GraficoVectorialMarcadores,
            datos: {
                marcadores: [ "holi" ]
            }
        }
    ]


    $: propiedades = {
        svg,
        actualizarPanZoom,
        seleccionarPath,
        componentes
    }


</script>


<GraficoVectorialContexto {...propiedades}/>