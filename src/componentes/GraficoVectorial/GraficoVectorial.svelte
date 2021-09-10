<script>

    import { onMount } from "svelte";

    export let mostrarControles = true
    export let svg
    export let actualizarPanZoom
    export let atributoPaths = "id"

    let panZoom;

    let svgPanZoom;

    let svgZoomeable

    let clases = ""

    const hacerClicSvg = e => {

        clases = "clicado"


    }
    
    const soltarClicSvg = e => {

        clases = ""

        actualizarPanZoomAccion()

    }


    const actualizarPanZoomAccion = () => {

        if( typeof actualizarPanZoom == "function" ) {

            actualizarPanZoom({
                pan: svgZoomeable.getPan(),
                zoom: svgZoomeable.getZoom(),
            })

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
            beforePan,
        })


        svgZoomeable.setOnPan( actualizarPanZoomAccion );


        svgCargado.querySelectorAll("path").forEach(p => p.addEventListener("click", e => console.log(e.target.getAttribute( atributoPaths )) ))
        
        
        svgCargado.addEventListener("mousedown", hacerClicSvg )
        svgCargado.addEventListener("mouseup", soltarClicSvg )


    });





</script>


{#if svg}
    <div class={ `GraficoVectorial${ clases != "" ? ` ${clases}` : "" }`}>
        {@html svg }
    </div>
{/if}



<style>

    .GraficoVectorial {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
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