<script>

    import {onMount} from "svelte"

    export let elementos;
    
    export let ancho;
    export let alto;
    export let direccion = "horizontal";
    export let pagina = 3;
    export let margen = 32;
    export let centrado = true;
    
    export let activo = 0;

    
    let carrusel;
    

    const generarID = ()=>Math.floor(Math.random()*99999)
    
    let id=generarID()


    onMount(()=>{

        let carruselesIDs = obtenerIDsCarruseles()


        while( carruselesIDs.includes(id) || id == undefined ) {

            id = generarID()
            
        }

        carrusel.classList.add('carrusel_listo')
        
        console.log("id generado",id);
        
    })



    $: anchoCarrusel = carrusel ? carrusel.clientWidth : 240
    $: altoCarrusel = carrusel ? carrusel.clientHeight : 240
    
    $: anchoElemento = direccion == "horizontal" ? anchoCarrusel/Math.max(parseInt(pagina),1) : anchoCarrusel
    $: altoElemento = direccion == "vertical" ? altoCarrusel/Math.max(parseInt(pagina),1) : altoCarrusel

    $: paginasNum = Math.ceil(elementos.length/Math.max(pagina,1))
    $: elementosBotones = new Array( elementos.length )

    // $: console.log("elementosBotones",elementosBotones);
    
    
    $: scrollX = direccion == "horizontal" ? -parseInt(

        (activo*anchoElemento) + (activo*margen) - (centrado ? (anchoCarrusel-anchoElemento)/2 : 0)
    ) : 0;

    $ : scrollY = direccion == "vertical" ? -parseInt(
        (activo*altoElemento) + (activo*margen) - (centrado ? (altoCarrusel-altoElemento)/2 : 0)
    ) : 0;


    $: estilosCarrusel = generarEstilosAnchoAlto(ancho,alto)

    $: tamannoLista = (anchoCarrusel=>{
        
        let max = anchoCarrusel * paginasNum;

        const totalMargen = (elementos.length -1) * margen;
        let totalElementos;
        
        if(direccion == "vertical") {
            totalElementos = elementos.length * anchoElemento;
        } else {
            totalElementos = elementos.length * altoElemento;
        }

        let tamanno = totalElementos + totalMargen;

        if(centrado) {
            if(direccion == "vertical") {
                max += anchoCarrusel-anchoElemento
            } else {
                max += altoCarrusel-altoElemento
            }
        }

        tamanno = Math.max(tamanno,max)

        return tamanno

    })(anchoCarrusel)

    $: estilosLista = direccion == "vertical" ? 
        generarEstilosAnchoAlto(anchoCarrusel,tamannoLista,alto)+generarEstilosLista(scrollX,scrollY)
        :
        generarEstilosAnchoAlto(tamannoLista,altoCarrusel)+generarEstilosLista(scrollX,scrollY);

    // $: estilosLista = generarEstilosAnchoAlto(anchoElemento*elementos.length,alto)+generarEstilosLista(scrollX,scrollY)

    $: estilosElemento = generarEstilosAnchoAlto(anchoElemento,altoCarrusel)+generarEstilosElemento()
    
    const ir = i => {
        activo = i;
        console.log("ir",i);
    }
    



    const obtenerIDsCarruseles = () => {
        
        let carruseles=Array.from(document.getElementsByClassName('carrusel_listo'))
        
        carruseles=carruseles.map(c=>parseInt(c.getAttribute('id').split("carrusel_")[1]))
        
        return carruseles

    }


    const obtenerDireccionCarrusel = (direccion => {
        if( direccion == "vertical" ) {
            return "column"
        }
        return "row"
    })
    


    const generarEstilosAnchoAlto = (
        ancho,
        alto
    ) => `
        width: ${ancho ? `${parseInt(ancho)}px` : '100%' };
        height: ${alto ? `${parseInt(alto)}px` : '100%' };
    `

    const generarEstilosLista = (
        scrollX,
        scrollY
    ) => `
        flex-direction: ${obtenerDireccionCarrusel(direccion)};
        transform: translate( ${scrollX}px, ${scrollY}px);
        justify-content: ${ centrado ? 'center' : 'space-between' }
    `

    const generarEstilosElemento = () => `
        ${ centrado ? `margin-right: ${margen}px;`: `` }
    `

</script>

<style>
    .carrusel, .elemento {
        outline: 1px solid #def;
    }

    .carrusel {
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        min-width: 15rem;
        min-height: 15rem;

        padding: 0;
        margin: 0;
        
        overflow: hidden;

    }

    .elementos {
        min-width: 100%;
        min-height: 100%;
        display: flex;
        width: auto;
        flex-wrap: none;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: transform 0.4s ease-in-out;
    }

    .elemento:last-child {
        margin-right: 0 !important;
    }

</style>

<div bind:this={carrusel} class="carrusel" id={`carrusel_${id}`} style={estilosCarrusel}>

    <div class="elementos" style={estilosLista}>

        {#if Array.isArray(elementos) }
            {#each elementos as elemento, i ("elemento_"+i) }

                <div class="elemento"  style={estilosElemento}>
                    <h6>
                        Hola Elemento!
                    </h6>
                </div>


            {/each}
        {/if}

    </div>


    <ul class="elementosBotones">
        {#each elementosBotones as boton, i ("boton_"+i)}
            <button on:click={ir(i)}>
                {i}
            </button>
        {/each}        
    </ul>

</div>