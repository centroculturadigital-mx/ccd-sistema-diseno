<script>
    import {onMount} from "svelte";
    

    export let estadoSeleccionar = () => console.log("seleccionar");
    
    import mapa from "../../../public/recursos/imagenes/vectores/mapamx.js";
    
    let estadoSeleccionado = null
    let containerWidth;
    let containerHeight;


    onMount(()=>{

        const svg = document.getElementsByTagName('svg')[0]

        containerWidth = svg.parentNode.clientWidth,
        containerHeight = svg.parentNode.clientHeight
        
        let width = parseInt(svg.getAttribute('width'))
        let height = parseInt(svg.getAttribute('height'))
        
        let nodos = Array.from(svg.childNodes)
        
        nodos = nodos.filter(n=>n.tagName=='path');

        nodos.forEach(n=>{
            n.addEventListener('click',seleccionarEstado)
        })
        console.log(
            nodos,
            // containerWidth,
            // containerHeight,
            // width,
            // height            
        );

        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)
        svg.setAttribute('preserveAspectRatio',"xMidYMid meet")

    })

    const seleccionarEstado = (e) => {
        
        estadoSeleccionado = e.target.getAttribute('id');
        const estadoNombre = e.target.getAttribute('name');
        
        
        console.log(estadoNombre);
        

        let svg = e.target.parentNode;

        let x = e.target.getBBox().x
        let y = e.target.getBBox().y
        let w = e.target.getBBox().width * 1.618
        let h = e.target.getBBox().height * 1.618
        
        
        const containerWidth = svg.parentNode.clientWidth
        const containerHeight = svg.parentNode.clientHeight



        x = x - e.target.getBBox().width / (1.618*2)
        y = y - e.target.getBBox().height / (1.618*2)
        
    
        const paths = document.getElementsByTagName('path')

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        e.target.setAttribute('active',true)
        
        e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${w} ${h}`)
        // e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${containerWidth} ${containerHeight}`)
    
                
        if( !! estadoSeleccionar ) {
            estadoSeleccionar( estadoNombre )
        }
        

    }





    const regresar = () => {

        const paths = document.getElementsByTagName('path')

        for( let i in paths ) {
            if(typeof(paths[i])=="object") {
                paths[i].removeAttribute('active')
            }
        }

        const svg = document.getElementsByTagName('svg')[0]
        const width = svg.getAttribute('width')
        const height = svg.getAttribute('height')
        
        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)

        estadoSeleccionar()
    }

</script>

<!-- <style>

</style> -->

<h1>Mapa</h1>

<div class="mapa">
    {@html mapa }
</div>