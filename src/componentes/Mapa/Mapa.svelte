<script>
    import {onMount} from "svelte";
    

    export let seleccionar
    
    export let mapa    
    export let datos    
    export let ancho = 300
    export let alto = 300
    export let seleccionado
    
    export let ajustarVentana
    
    let anchoOriginal
    let altoOriginal

    $: (seleccion=>{
        
        if(!seleccion&&!!pathSeleccionado) {
            regresar()
            return
        }
        if( !! paths ) {
            pathSeleccionado=paths.find(p=>p.getAttribute("name")==seleccion)
            if( !! pathSeleccionado ) {
                setTimeout(()=>centrarPath(pathSeleccionado))
            }
        }
    })(seleccionado) 

    
    let pathSeleccionado
    
    let svg;
    let paths;

    onMount(()=>{
        setTimeout(()=>{
            configurar()
        },100)
    })
    $: ancho && alto && !! svg && escalar(ancho,alto);
    $: datos && activarHabilitados()

    

    const configurar = () => {
        
        svg = document.querySelector('.mapa-svg svg')

        console.log("svg", svg);
        // containerHeight = svg.parentNode.clientHeight

        if(!!svg) {
            
            let contenedorAncho = svg.parentNode.clientWidth
            let contenedorAlto = svg.parentNode.clientHeight

            escalar(contenedorAncho,contenedorAlto)
            
            svg.parentNode.classList.add("listo")
            setTimeout(()=>svg.parentNode.parentNode.classList.add("listo"),300)

            paths = obtenerPaths();

            const habilitados = activarHabilitados()

            // paths.forEach(p=>p.removeEventListener('click',clicarPath))
            paths.forEach(p=>p.addEventListener('click',clicarPath))
                        
            
        }

        
    }
    const escalar = (w,h) => {

        let wFinal = w;
        let hFinal = h;

        let width = svg.getAttribute("width")
        let height = svg.getAttribute("height")
        

        svg.setAttribute('preserveAspectRatio',"xMidYMid meet")
        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)
        
        setTimeout(()=>{
            
            anchoOriginal = width
            altoOriginal = height

            svg.setAttribute('width',wFinal);
            svg.setAttribute('height',hFinal);
        })

      
    }
    

    const obtenerPaths = () => {
        const nodos = Array.from(svg.childNodes)
    
        const paths = nodos.filter(n=>n.tagName=='path');

        return paths
    }
    

    const clicarPath = (e) => {
        
        const inhabilitado = e.target.getAttribute('inhabilitado');
        
        if( inhabilitado !== false ) {

            
            pathSeleccionado = e.target.getAttribute('id');
            const pathNombre = e.target.getAttribute('name');
            
            centrarPath(e.target);
                    
            if( typeof seleccionar == "function" ) {
                seleccionar( pathNombre )
            }
            

        
        }

    }


    const centrarPath = path => {
        
        let x = path.getBBox().x
        let y = path.getBBox().y
        let w = path.getBBox().width * 1.618
        let h = path.getBBox().height * 1.618
        
        
        // const containerWidth = svg.parentNode.clientWidth
        // const containerHeight = svg.parentNode.clientHeight
        
        x = x - path.getBBox().width / (1.618*2)
        y = y - path.getBBox().height / (1.618*2)
        

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        path.setAttribute('active',true)
        path.setAttribute('active',true)
        
        path.parentNode.setAttribute('viewBox',`${x} ${y} ${w} ${h}`)
        
        if( typeof ajustarVentana == "function" ) {
            ajustarVentana(x,y,w,h)
        }

    }


    const regresar = () => {

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        const width = anchoOriginal
        const height = altoOriginal
        
        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)
        
        ajustarVentana(0,0,width,height)

        pathSeleccionado = null

        // seleccionar()


    }

    const activarHabilitados = () => {
        if( !! paths ) {

            if( typeof datos == "object" ) {
                if( Object.keys(datos).includes('habilitados') ) {
                    if(Array.isArray(datos.habilitados)){                                
                        
                        const habilitados = paths.filter(p=>datos.habilitados.includes(p.getAttribute('name')))
                        
                        if( habilitados.length > 0 ) {
                            paths.forEach(p=>{
                                // p.removeEventListener('click',clicarPath)
                                p.setAttribute('inhabilitado',true)
                            })
                            habilitados.forEach(p=>{
                                p.setAttribute('inhabilitado',false)
                                // p.addEventListener('click',clicarPath)
                            })
                            return habilitados
                        }
                        
                    }
                }
            }
        }
        return []
    }

</script>

<style>

    .mapa {
        position: relative;
        background: #aaa;
        transition:opacity 0.4s;
        opacity: 0;
    }
    .mapa>header {
        position: absolute;
        top: 1rem;
        left: 1rem;
        display: flex;
        width: 100%;
    }
    .mapa>header button {
        border: none;
        background: rgba(0,0,0,0.3);
        padding: 0.5rem 1rem;
        color: #fff;
    }
     

    .mapa-svg,
    .mapa-svg :global( svg) {
        width: 100%;
        height: 100%;
    }

    :global(.mapa.listo) {
        opacity: 1 !important;
    }
    :global(.mapa path) {
        fill: #bbb;
        stroke: #aaa;
        transition: fill 0.5s;
    }
    :global(.mapa path:hover) {
        fill: #ccc  ;
    }
    :global(.mapa path[active="true"]) {
        fill: #ddd  ;
    }
    
    :global(.mapa path[inhabilitado="true"]) {
        fill: #9a9a9a  ;
    }

</style>



<div class="mapa" style={`width: ${ancho}px; height: ${alto}px`}>
    <header>
        {#if !! pathSeleccionado}
            <button on:click={()=>seleccionar()}>
                Regresar
            </button>
        {/if}

    </header>
    <div class="mapa-svg">
        {@html mapa }
    </div>
</div>