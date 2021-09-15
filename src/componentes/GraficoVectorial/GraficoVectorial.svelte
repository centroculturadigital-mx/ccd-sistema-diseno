<script>

    import { onMount } from "svelte";

    export let mostrarControles = true
    export let svg
    export let actualizarGraficoVectorial
    export let seleccionarPath

    let panZoom;

    let svgPanZoom;

    let svgZoomeable

    let clases = ""

    const hacerClicSvg = e => {

        clases = "clicado"


    }
    
    const soltarClicSvg = e => {

        clases = ""

        actualizarGraficoVectorialAccion()

    }


    const actualizarGraficoVectorialAccion = () => {

        if( typeof actualizarGraficoVectorial == "function" ) {

            actualizarGraficoVectorial({
                pan: svgZoomeable.getPan(),
                zoom: svgZoomeable.getZoom(),
            })

        }

    }


    let pathClicado = false
    let pathArrastrando = false
    
    const clicarPath = ( path ) => {
        pathClicado = true
        pathArrastrando = false
    }

    const moverPath = ( path ) => {
        if( pathClicado ) {
            pathArrastrando = true
        }
    }

    const soltarPath = ( path ) => {
        if( pathClicado && ! pathArrastrando ) {
            seleccionarPathAccion( path )
        }
    }

    const seleccionarPathAccion = ( path ) => {

        if( typeof seleccionarPath == "function" ) {

            seleccionarPath( path, svgZoomeable )

        }

    }

    onMount(async () => {

        const module = await import("svg-pan-zoom");
        
        svgPanZoom = module.default;

        const svgCargado = document.querySelector(".GraficoVectorial svg")

        const beforePan = function(oldPan, newPan){
          var stopHorizontal = false
            , stopVertical = false
            , gutterWidth = svgCargado.clientWidth
            , gutterHeight = svgCargado.clientHeight
              // Computed variables
            , sizes = this.getSizes()
            , leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth
            , rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom)
            , topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight
            , bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom)

          const customPan = {}
          customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x))
          customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y))

          return customPan

        }


        svgZoomeable = svgPanZoom( svgCargado, {
            contain: true,
            controlIconsEnabled: mostrarControles,
            // beforePan,
        })


        svgZoomeable.setOnPan( actualizarGraficoVectorialAccion );
        svgZoomeable.setOnZoom( actualizarGraficoVectorialAccion );


        svgCargado.querySelectorAll("path").forEach(p => p.addEventListener("mousedown", e => clicarPath(e.target) ))
        svgCargado.querySelectorAll("path").forEach(p => p.addEventListener("mousemove", e => moverPath(e.target) ))
        svgCargado.querySelectorAll("path").forEach(p => p.addEventListener("mouseup", e => soltarPath(e.target) ))
        
        
        svgCargado.addEventListener("mousedown", hacerClicSvg )
        svgCargado.addEventListener("mouseup", soltarClicSvg )

        actualizarGraficoVectorialAccion()


    });





</script>


{#if svg}
    <div class={ `GraficoVectorial${ clases != "" ? ` ${clases}` : "" }`}>
        {@html svg }
    </div>
{/if}



<style>

    /* .GraficoVectorial { */
    .GraficoVectorial,
    .GraficoVectorial :global( svg ) {
        width: 100%;
        height: 100%;
    }

    .GraficoVectorial {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;

        pointer-events: all;

    }

    .GraficoVectorial :global(svg) {
        cursor: move;
        cursor: url('https://www.google.com/intl/en_ALL/mapfiles/openhand.cur'), all-scroll;
        cursor: grab;
        cursor: -webkit-grab;
        cursor: -moz-grab;
        cursor: grab;
    }

    .GraficoVectorial.clicado :global(svg) {
        cursor: move;
        cursor: url('https://www.google.com/intl/en_ALL/mapfiles/closedhand.cur'), all-scroll;
        cursor: grabbing;
        cursor: -webkit-grabbing;
        cursor: -moz-grabbing;
        cursor: grabbing;
    }

</style>