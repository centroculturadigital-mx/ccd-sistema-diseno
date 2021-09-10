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

    let contenedor

    let graficoPosicion

    let marcadoresMostrar = []
    

    graficoPosicion = {
        x: 0,
        y: 0,
    }

    const computarCss = (marcador, { pan, zoom }) => {

        console.log("pan", pan);
        console.log("zoom", zoom);
        
        if( ! zoom ) zoom = 1
        if( ! pan ) pan = {
            x: 0,
            y: 0,
        }

        const paths = Array.from( contenedor.querySelectorAll(".GraficoVectorialMarcadores svg path") )

        if( Array.isArray(paths) ) {

            const path = paths.find( p => p.getAttribute(marcador.path.atributo) === marcador.path.valor )

            if( path ) {

                const cajaPath = path.getBoundingClientRect();
                
                return `
                    left: ${(cajaPath.x - graficoPosicion.x + pan.x) * zoom }px;
                    top: ${(cajaPath.y - graficoPosicion.y + pan.y) * zoom }px;
                    width: ${(parseInt(cajaPath.width)) * zoom}px;
                    height: ${(parseInt(cajaPath.height)) * zoom}px;
                `
                
            }

            return ""
            
        }

    }

    const computarMarcadores = ( datos ) => {

        return marcadores.map( m => ({
            ...m,
            css: computarCss( m, datos )
        }))

    }


    const actualizarMarcadores = datos => {
        
        marcadoresMostrar = computarMarcadores( datos )

    }


    const actualizarGraficoVectorial = datos => {

        actualizarMarcadores( datos )

    }
    
    const seleccionarPath = path => console.log("seleccionarPath", path.getAttribute("id") )


    $: contenedor && actualizarMarcadores({})

    

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