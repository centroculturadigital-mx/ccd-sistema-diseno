<script>
    import {onMount} from "svelte";
    

    export let seleccionar
    // export let seleccionar = () => console.log("seleccionar");
    
    export let mapa    
    export let datos    
    export let ancho = 300
    export let alto = 300
    
    let pathSeleccionado = null
    
    let svg;
    let paths;

    onMount(()=>{
        configurar()
    })


    $: ancho && alto && !! svg && escalar(ancho,alto);

    

    const configurar = () => {
        
        svg = document.getElementsByTagName('svg')[0]

        // containerHeight = svg.parentNode.clientHeight

        if(!!svg) {
            
            let contenedorAncho = svg.parentNode.clientWidth
            let contenedorAlto = svg.parentNode.clientHeight

            escalar(contenedorAncho,contenedorAlto)
            
            paths = obtenerPaths();
            paths.forEach(p=>p.addEventListener('click',clicarPath))

            setTimeout(()=>svg.parentNode.classList.add("listo"),300)
            

            // console.log("datos?",datos);
            
            // activarHabilitados()
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
        
        pathSeleccionado = e.target.getAttribute('id');
        const pathNombre = e.target.getAttribute('name');
        
        let x = e.target.getBBox().x
        let y = e.target.getBBox().y
        let w = e.target.getBBox().width * 1.618
        let h = e.target.getBBox().height * 1.618
        
        
        // const containerWidth = svg.parentNode.clientWidth
        // const containerHeight = svg.parentNode.clientHeight



        x = x - e.target.getBBox().width / (1.618*2)
        y = y - e.target.getBBox().height / (1.618*2)
        

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        e.target.setAttribute('active',true)
        e.target.setAttribute('active',true)
        
        e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${w} ${h}`)
        // e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${containerWidth} ${containerHeight}`)
    
                
        if( typeof seleccionar == "function" ) {
            seleccionar( pathNombre )
        }
        

    }





    const regresar = () => {

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        const width = svg.getAttribute('width')
        const height = svg.getAttribute('height')
        
        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)

        seleccionar()
    }


    const activarHabilitados = () => {
        if( typeof datos == "object" ) {
            if( Object.keys(datos).includes('habilitados') ) {
                if(Array.isArray(datos.habilitados)){
                    
                    const clavesDisponibles=paths.map(p=>p.value)

                    const habilitados = datos.habilitados.filter(dH=>(
                        clavesDisponibles.includes(dH)
                    ))

                    if(habilitados.length>0){
                        console.log("hay",habilitados);
                        
                    }
                }
            }
        }
    }

</script>

<style>

    .mapa {
        background: #aaa;
        transition:opacity 0.4s;
        opacity: 0;
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
</style>

<div class="mapa" style={`width: ${ancho}px; height: ${alto}px`}>
    {@html mapa }
</div>