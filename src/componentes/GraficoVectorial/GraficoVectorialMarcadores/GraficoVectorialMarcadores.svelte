<script>

    import GraficoVectorialContexto from "../GraficoVectorialContexto/GraficoVectorialContexto.svelte";
    import Marcadores from "../../Marcadores/Marcadores.svelte";

    export let svg
    export let marcadores = [
        {
            contenido: "Veracruz",
            path: {
                atributo: "id",
                valor: "Veracruz"
            }
        },
        {
            contenido: "Chiapas",
            path: {
                atributo: "id",
                valor: "Chiapas"
            }
        },
        {
            contenido: "Chihuahua",
            path: {
                atributo: "id",
                valor: "Chihuahua"
            }
        },
    ]


    let graficoPosicion
    
    graficoPosicion = {
        x: 0,
        y: 0,
    }

    const computarCss = marcador => {

        const paths = Array.from( contenedor.querySelectorAll(".GraficoVectorialMarcadores svg path") )

        if( Array.isArray(paths) ) {

            const path = paths.find( p => p.getAttribute(marcador.path.atributo) === marcador.path.valor )

            if( path ) {

                const cajaPath = path.getBoundingClientRect();
                
                
                
                return `
                    left: ${cajaPath.x - graficoPosicion.x}px;
                    top: ${cajaPath.y - graficoPosicion.y}px;
                    width: ${parseInt(cajaPath.width)}px;
                    height: ${parseInt(cajaPath.height)}px;
                `
                
            }

            return ""
            
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

    $: componentes = [
        {
            componente: Marcadores,
            datos: {
                marcadores: marcadoresMostrar
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
        pointer-events: none;
    }

</style>