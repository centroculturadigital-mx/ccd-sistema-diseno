<script>

    import { onMount } from "svelte";

    export let mostrarControles = true
    export let svg

    let panZoom;

    let svgPanZoom;

    let svgZoomeable

    onMount(async () => {
        const module = await import("svg-pan-zoom");
        svgPanZoom = module.default;

        const svgCargado = document.querySelector(".GraficoVectorial svg")

        const beforePan = function(oldPan, newPan){
          var stopHorizontal = false
            , stopVertical = false
            , gutterWidth = 100
            , gutterHeight = 100
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
            eventsListenerElement: svgCargado.querySelector('path')
        })


        svgZoomeable.setOnPan( ( punto ) => console.log("punto", punto) );


        svgCargado.querySelectorAll("path").forEach(p => p.addEventListener("click", e => console.log(e.target) ))


    });





</script>


{#if svg}
    <div class="GraficoVectorial">
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
</style>