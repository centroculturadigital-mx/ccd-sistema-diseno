<script>

    import { onMount } from "svelte";

    export let mostrarControles = true
    export let svg
    export let actualizarGraficoVectorial
    export let seleccionar
    export let habilitados
    export let configuracion = {
        centrarAlSeleccionar: true,
        anchoTrazosConstante: true
    }


    configuracion = configuracion ? {
        ...configuracion,
        habilitados: configuracion.habilitados ? configuracion.habilitados : {
            mostrar: true,
            color: "#aaa",
        }
    } : {
        habilitados: {
            mostrar: true,
            color: "#aaa",
        }
    }


    let panZoom;

    let svgPanZoom;

    let svgZoomeable

    let clases = ""
    
    let contenedor

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
            seleccionarAccion( path )
        }
    }

    const seleccionarAccion = ( path ) => {
        
        if( configuracion.centrarAlSeleccionar ) {
            if( Array.isArray(habilitados) && habilitados.includes(path.getAttribute( configuracion.habilitados.atributo || "id")) ) {

                svgZoomeable.resetZoom(); 
                svgZoomeable.resetPan();
                
                
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



        if( typeof seleccionar == "function" ) {

            seleccionar( path, svgZoomeable )

                        
        }

    }




    const mostrarHabilitados = ( paths ) => {

        console.log("ppaths", paths, configuracion );

        if( configuracion && configuracion.habilitados && configuracion.habilitados.mostrar ) {            
            
            paths.forEach( p => p.style = `fill: ${ configuracion.habilitados.color ? configuracion.habilitados.color : "#aaa" };`)

            configurarAnchoTrazos( contenedor )

        }

    }


    const activarHabilitados = () => {
        
        const paths = Array.from(contenedor.querySelectorAll("svg path"))
        
        if( !! paths ) {

            if(Array.isArray(habilitados) && habilitados.length > 0 ){                                
                

                const pathsHabilitados = paths.filter(
                    p => habilitados.includes( p.getAttribute( configuracion.habilitados.atributo || "id" ) )
                )


                console.log("pathsHabilitados", pathsHabilitados);
                

                paths.forEach(p=>{
                    // p.removeEventListener('click',clicarPath)
                    p.setAttribute('inhabilitado',true)
                })
                pathsHabilitados.forEach(p=>{
                    p.setAttribute('inhabilitado',false)
                    // p.addEventListener('click',clicarPath)
                })

                mostrarHabilitados( pathsHabilitados )

                return pathsHabilitados
            
            }
        }
        
        return []

    }


    const configurarAnchoTrazos = contenedor => {

        if( configuracion.anchoTrazosConstante ) {

            const paths = Array.from(contenedor.querySelectorAll("svg path"))
            
            paths.forEach( p => p.setAttribute("vector-effect","non-scaling-stroke"))
            
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


    $: contenedor && activarHabilitados( contenedor )
    $: contenedor && configurarAnchoTrazos( contenedor )


</script>


{#if svg}
    <div class={ `GraficoVectorial${ clases != "" ? ` ${clases}` : "" }`} bind:this={ contenedor }>
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
        overflow: hidden;
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