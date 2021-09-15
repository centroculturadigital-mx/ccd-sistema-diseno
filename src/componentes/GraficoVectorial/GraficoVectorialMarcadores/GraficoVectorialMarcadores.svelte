<script>

    import { onMount } from "svelte"

    import GraficoVectorialContexto from "../GraficoVectorialContexto/GraficoVectorialContexto.svelte";
    import Marcadores from "../../Marcadores/Marcadores.svelte";

    export let svg
    export let marcadores = []

    const prepararMarcadorEntrada = m => ({
        ...m,
        path: {
            ...m.path,
            atributo: m.path.atributo || "id",
            desplazamiento: m.path.desplazamiento
                ? {
                    x: m.path.desplazamiento.x || 0,
                    y: m.path.desplazamiento.y || 0,
                }
                : {
                    x: 0,
                    y: 0
                }
        }
    })

    $: marcadores = marcadores.map( prepararMarcadorEntrada )


    let contenedor


    let marcadoresMostrar = []
    
    $: paths = !! contenedor
        ? Array.from( contenedor.querySelectorAll(".GraficoVectorialMarcadores svg path") )
        : []
    

    let pathsDentro
    
    const actualizarPathsDentro = () => {
        const mapa = contenedor.querySelector(".GraficoVectorialMarcadores svg")

        const mapaCaja = mapa.getBoundingClientRect()

        pathsDentro = paths.filter( p => filtrarDentro( p, mapaCaja ) )
    }





    const filtrarDentro = (path, mapaCaja) => {
        
        const caja = path.getBoundingClientRect();

        const dentro =
            ((caja.x + caja.width/2) > mapaCaja.x ) &&
            ((caja.x + caja.width/2) < mapaCaja.x + mapaCaja.width ) &&
            ((caja.y + caja.height/2) > mapaCaja.y ) &&
            ((caja.y + caja.height/2) < mapaCaja.y + mapaCaja.height);
            
        return dentro;

    }


    const computarPosicion = (marcador, { pan, zoom }) => {

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

                return `
                    left: ${ cajaPath.x - mapaCaja.x + (marcador.path.desplazamiento.x * zoom) }px;
                    top: ${ cajaPath.y - mapaCaja.y + (marcador.path.desplazamiento.y * zoom) }px;
                    width: ${ parseInt(cajaPath.width) }px;
                    height: ${ parseInt(cajaPath.height) }px;
                `
                
            }

            return ""
            
        }

    }

    const computarMarcadores = ( datos ) => {

        return marcadores.filter(marcador => !! pathsDentro.find(
            p => p.getAttribute(marcador.path.atributo) === marcador.path.valor
        )).map( marcador => ({
            ...marcador,
            css: computarPosicion( marcador, datos )
        }))

    }


    const actualizarMarcadores = datos => {
        
        actualizarPathsDentro()

        marcadoresMostrar = computarMarcadores( datos )

    }


    const actualizarGraficoVectorial = datos => {

        setTimeout(()=>actualizarMarcadores( datos ), 30)

    }
    
    const seleccionarPath = (path, svgZoomeable) => {
        
        
        svgZoomeable.resetZoom();
        svgZoomeable.resetPan();
        

        if( marcadores.find(m=>m.contenido===path.getAttribute(m.path.atributo))) {
        
            const bb=path.getBBox();
            const vbb=svgZoomeable.getSizes().viewBox;
            const x=vbb.width/2-bb.x-bb.width/2;
            const y=vbb.height/2-bb.y-bb.height/2;
            const rz=svgZoomeable.getSizes().realZoom;
            
            const zoom=(vbb.height/bb.height) / 1.618;

            svgZoomeable.panBy({x:x*rz,y:y*rz});
            
            svgZoomeable.zoom(zoom);
                

        }

    } 


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