<script>

    import GraficoVectorialContexto from "../GraficoVectorialContexto/GraficoVectorialContexto.svelte";
    import GraficoVectorialMarcadores from "./GraficoVectorialMarcadores.svelte";

    export let svg

    const actualizarGraficoVectorial = datos => console.log("actualizarGraficoVectorial", datos)
    const seleccionarPath = path => console.log("seleccionarPath", path.getAttribute("id") )


    let marcadores = [
        {
            contenido: "hola!"
        }
    ]

    let componentes = [
        {
            componente: GraficoVectorialMarcadores,
            datos: {
                marcadores
            }
        }
    ]


    $: propiedades = {
        svg,
        actualizarGraficoVectorial,
        seleccionarPath,
        componentes
    }


</script>


<GraficoVectorialContexto {...propiedades}/>


<style>

    :global(.GraficoVectorialContexto) {
        width: 80vw !important;
        height: 80vh !important;
    }

</style>