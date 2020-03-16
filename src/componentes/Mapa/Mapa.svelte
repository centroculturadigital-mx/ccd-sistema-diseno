<script>
    import {onMount} from "svelte";
    

    export let seleccionar
    // export let seleccionar = () => console.log("seleccionar");
    
    export let mapa    
    export let datos
    
    let pathSeleccionado = null
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
            n.addEventListener('click',clicarPath)
        })
        
        
        svg.setAttribute('viewBox',`0 0 ${width} ${height}`)
        svg.setAttribute('preserveAspectRatio',"xMidYMid meet")

        width = 300;
        height = 300;

        svg.setAttribute('width',width);
        svg.setAttribute('height',height);
        
    })


    const clicarPath = (e) => {
        
        pathSeleccionado = e.target.getAttribute('id');
        const pathNombre = e.target.getAttribute('name');
        
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
        e.target.setAttribute('active',true)
        
        e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${w} ${h}`)
        // e.target.parentNode.setAttribute('viewBox',`${x} ${y} ${containerWidth} ${containerHeight}`)
    
                
        if( typeof seleccionar == "function" ) {
            seleccionar( pathNombre )
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

        seleccionar()
    }

</script>

<style>

    .mapa {
        background: #aaa;
        width: 300px;
        height: 300px;
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

<h1>Mapa</h1>

<div class="mapa">
    {@html mapa }
</div>