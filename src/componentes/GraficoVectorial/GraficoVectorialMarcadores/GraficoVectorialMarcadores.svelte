<script>

    import GraficoVectorialContexto from "../GraficoVectorialContexto/GraficoVectorialContexto.svelte";
    import Marcadores from "../../Marcadores/Marcadores.svelte";

    export let svg
    export let marcadores = [
        // {
        //     contenido: "Veracruz",
        //     path: {
        //         atributo: "id",
        //         valor: "Veracruz"
        //     }
        // },
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
    
    $: paths = !! contenedor
        ? Array.from( contenedor.querySelectorAll(".GraficoVectorialMarcadores svg path") )
        : []
    

    let pathsDentro
    
    const actualizarPathsDentro = () => {
        pathsDentro = paths.filter( filtrarDentro )
    }


    graficoPosicion = {
        x: 0,
        y: 0,
    }



    const filtrarDentro = path => {
        

        const mapa = contenedor.querySelector(".GraficoVectorialMarcadores svg")

        const mapaCaja = mapa.getBoundingClientRect()

        const caja = path.getBoundingClientRect();

        const dentro =
            caja.x > mapaCaja.x &&
            caja.x < mapaCaja.x + mapaCaja.width &&
            caja.y > mapaCaja.y &&
            caja.y < mapaCaja.y + mapaCaja.height;
            
        return dentro;

    }


    const computarCss = (marcador, { pan, zoom }) => {

        console.log("pan", pan);
        console.log("zoom", zoom);
        
        if( ! zoom ) zoom = 1
        if( ! pan ) pan = {
            x: 0,
            y: 0,
        }

        const mapa = contenedor.querySelector(".GraficoVectorialMarcadores svg")

        const mapaCaja = mapa.getBoundingClientRect()

        if( Array.isArray(paths) ) {

            const path = pathsDentro.find( p => p.getAttribute(marcador.path.atributo) === marcador.path.valor )

            if( path ) {

                const cajaPath = path.getBoundingClientRect();

                console.log("cajaPath", cajaPath);
                
                return `
                    left: ${(cajaPath.x - mapaCaja.x ) }px;
                    top: ${(cajaPath.y - mapaCaja.y ) }px;
                    width: ${(parseInt(cajaPath.width)) * zoom}px;
                    height: ${(parseInt(cajaPath.height)) * zoom}px;
                `
                // return `
                //     left: ${(cajaPath.x - mapaCaja.x - graficoPosicion.x + pan.x) * zoom }px;
                //     top: ${(cajaPath.y - mapaCaja.y - graficoPosicion.y + pan.y) * zoom }px;
                //     width: ${(parseInt(cajaPath.width)) * zoom}px;
                //     height: ${(parseInt(cajaPath.height)) * zoom}px;
                // `
                
            }

            return ""
            
        }

    }

    const computarMarcadores = ( datos ) => {

        return marcadores.filter(marcador => !! pathsDentro.find(
            p => p.getAttribute(marcador.path.atributo) === marcador.path.valor
        )).map( marcador => ({
            ...marcador,
            css: computarCss( marcador, datos )
        }))

    }


    const actualizarMarcadores = datos => {
        
        actualizarPathsDentro()

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