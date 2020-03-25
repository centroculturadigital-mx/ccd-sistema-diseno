<script>

    import {onMount} from "svelte"

    export let elementos;
    
    export let ancho;
    export let alto;
    export let direccion = "horizontal";
    export let pagina = 3;
    export let centrado = true;
    
    export let activo = -1;

    
    let carrusel;
    

    const generarID = ()=>Math.floor(Math.random()*99999)
    
    let id=generarID()


    onMount(()=>{

        let carruselesIDs = obtenerIDsCarruseles()
        
        // si no hay valor desde fuera, inicializar en 0
        activo = activo == -1 ? 0 : activo;

        while( carruselesIDs.includes(id) || id == undefined ) {

            id = generarID()
            
        }

        carrusel.classList.add('carrusel_listo')
        
        
    })



    $: anchoCarrusel = carrusel ? carrusel.clientWidth : 240
    $: console.log("anchoCarrusel",anchoCarrusel);
    $: altoCarrusel = carrusel ? carrusel.clientHeight : 240
    
    $: anchoElemento = direccion == "horizontal" ? (
        anchoCarrusel/Math.max(parseInt(pagina),1)
    ) : anchoCarrusel
    $: console.log("anchoElemento",anchoElemento);
    $: altoElemento = direccion == "vertical" ? (
        altoCarrusel/Math.max(parseInt(pagina),1)
    ) : altoCarrusel

    $: paginasNum = Math.ceil(elementos.length/Math.max(pagina,1))
    $: elementosBotones = new Array( elementos.length )

    // $: console.log("elementosBotones",elementosBotones);
    
    
    $ : scrollX = calcularScrollX(activo);

    $ : scrollY = calcularScrollY(activo);
    

    $: estilosCarrusel = generarEstilosAnchoAlto(ancho,alto)


    const calcularScrollX = activo => {
        let scroll = 0;
        if(direccion == "horizontal") {
            scroll = (activo*anchoElemento);
            if( ! centrado ) {
                const totalElementos = (elementos.length-1) * anchoElemento;
                
                console.log(scroll, totalElementos-anchoCarrusel,Math.min( scroll, totalElementos-anchoCarrusel));
                scroll = Math.min( scroll, totalElementos-anchoCarrusel);
                
            } else {
                scroll -= (centrado ? (anchoCarrusel-anchoElemento)/2 : 0)
            }
        }
        return - parseInt(scroll)
    };
    const calcularScrollY = activo => {
        let scroll = 0;
        if(direccion == "vertical") {
            scroll = (activo*altoElemento);
            if( ! centrado ) {
                const totalElementos = (elementos.length-1) * altoElemento;
                
                console.log(scroll, totalElementos-altoCarrusel,Math.min( scroll, totalElementos-altoCarrusel));
                scroll = Math.min( scroll, totalElementos-altoCarrusel);
                
            } else {
                scroll -= (centrado ? (altoCarrusel-altoElemento)/2 : 0)
            }
        }
        return - parseInt(scroll)
    };



    $: tamannoLista = (anchoCarrusel=>{
        
        let max = anchoElemento * elementos.length;

        let totalElementos;
        
        if(direccion == "vertical") {
            totalElementos = elementos.length * anchoElemento;
        } else {
            totalElementos = elementos.length * altoElemento;
        }

        if(centrado) {
            if(direccion == "vertical") {
                totalElementos += anchoCarrusel-anchoElemento
            } else {
                totalElementos += altoCarrusel-altoElemento
            }
        } 

        let tamanno = totalElementos;

        // else {
        //     if(direccion == "vertical") {
        //         max -= anchoElemento
        //     } else {
        //         max -= altoElemento
        //     }
        // }

        // tamanno = Math.min(tamanno,max)

        return tamanno

    })(anchoCarrusel)

    $: estilosLista = direccion == "vertical" ? 
        generarEstilosAnchoAlto(anchoCarrusel,tamannoLista,alto)+generarEstilosLista(scrollX,scrollY)
        :
        generarEstilosAnchoAlto(tamannoLista,altoCarrusel)+generarEstilosLista(scrollX,scrollY);

    // $: estilosLista = generarEstilosAnchoAlto(anchoElemento*elementos.length,alto)+generarEstilosLista(scrollX,scrollY)

    $: estilosElemento = generarEstilosAnchoAlto(anchoElemento,altoCarrusel)
    
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
        min-width: ${ancho ? `${parseInt(ancho)}px` : '100%' };
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


</script>

<style>
    .carrusel, .elemento {
        outline: 1px solid #def;
    }

    .carrusel {
        padding: 0;
        padding-bottom: 2rem;
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        min-width: 15rem;
        min-height: 15rem;

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

    .elementosBotones {
        width: 100%;
        position: absolute;
        margin: 0;
        padding: 0;
        bottom: 0.3725rem;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1rem;
    }
    .elementosBotones li {
        list-style: none;
        padding: 0 0.1225rem;
    }

    .elementosBotones li button {
        background: #aaa;
        color: transparent;
        border: none;
        outline: none;
        border-radius: 50%;
        width: .75rem;
        height: .75rem;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.25);
    }
    .elementosBotones li.activo button {
        background: #333;
        color: transparent;
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
            <li class={activo==i?'activo':''}>
                <button on:click={ir(i)}>
                    {i}
                </button>
            </li>
        {/each}        
    </ul>

</div>