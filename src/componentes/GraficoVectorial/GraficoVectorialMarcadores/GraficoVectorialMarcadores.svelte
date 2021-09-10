<script>

    import GraficoVectorialContexto from "../GraficoVectorialContexto/GraficoVectorialContexto.svelte";
    import Marcadores from "../../Marcadores/Marcadores.svelte";

    export let svg
    export let marcadores = [
        {
            contenido: "hola!",
            path: "Veracruz"
            // css: `
            //   left: ${caja.x - mapa.x}px;
            //   top: ${caja.y - mapa.y}px;
            //   width: ${parseInt(caja.width)}px;
            //   height: ${parseInt(caja.height)}px;
            // `

        }
    ]

    const computarCss = marcador => {

        const paths = Array.from( contenedor.querySelectorAll(".GraficoVectorialMarcadores svg path") )

        console.log("paths", paths);

        if( Array.isArray(paths) ) {

            const path = paths.find( p => p.getAttribute("id") == marcador.path )

            console.log( "path", path );


            return `
              left: ${100}px;
              top: ${100}px;
              width: ${100}px;
              height: ${100}px;
            `

        }

    }

    const computarMarcadores = (contenedor) => {
        if( contenedor ) {

            return marcadores.map( m => ({
                ...m,
                css: computarCss( m )
            }))

        }
        
        return []
    }

    $: marcadoresMostrar = computarMarcadores( contenedor )

    const actualizarGraficoVectorial = datos => console.log("actualizarGraficoVectorial", datos)
    const seleccionarPath = path => console.log("seleccionarPath", path.getAttribute("id") )

    let contenedor

    let componentes = [
        {
            componente: Marcadores,
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

<div class="GraficoVectorialMarcadores" bind:this={contenedor}>

    <GraficoVectorialContexto {...propiedades}/>
    
</div>


<style>

    .GraficoVectorialMarcadores,
    .GraficoVectorialMarcadores :global(.GraficoVectorialContexto) {
        width: 100%;
        height: 100%;
    }

</style>