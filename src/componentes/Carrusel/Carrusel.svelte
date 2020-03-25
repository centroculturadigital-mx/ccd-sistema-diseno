<script>

    import {onMount} from "svelte"

    export let elementos;
    
    export let ancho=288;
    export let alto=288;
    export let direccion = "horizontal";
    export let pagina = 1;
    export let centrado = false;
    
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

    $: paginasNum = Array.isArray(elementos) ? Math.ceil(elementos.length/Math.max(pagina,1)) : 0
    $: elementosBotones = Array.isArray(elementos) ? new Array( elementos.length ) : 0

    // $: console.log("elementosBotones",elementosBotones);
    
    
    $ : scrollX = calcularScrollX(activo);
    $ : console.log(scrollX);
    
    $ : scrollY = calcularScrollY(activo);
    $ : console.log(scrollY);
    

    $: estilosCarrusel = generarEstilosAnchoAlto(ancho,alto)


    const calcularScrollX = activo => {
        if(direccion == "horizontal") {
            return calcularScroll(activo,anchoCarrusel,anchoElemento)
        }
        return 0
    };
    const calcularScrollY = activo => {
        if(direccion == "vertical") {
            return calcularScroll(activo,altoCarrusel,altoElemento)
        }
        return 0
    };
    

    
    const calcularScroll = (activo,tamannoCarrusel,tamannoElemento) => {
        const mitad = (tamannoCarrusel-tamannoElemento)/2
        let scroll = (activo*tamannoElemento)-mitad
        // let scroll = (activo*tamannoElemento);
        let minimo = 0
        // if( ! centrado ) {
            const totalElementos = Array.isArray(elementos) ? (elementos.length) * tamannoElemento : 0;
            minimo = mitad/pagina
            if( scroll > minimo ) {
                scroll = Math.max( scroll, minimo);
            } else {
                scroll = 0
            }
            scroll = Math.min( scroll, totalElementos-tamannoCarrusel);
        // } else {
        // // implmentar centrado   
        // }
        return -parseInt(scroll)
    };



    $: tamannoElemento = direccion == "vertical" ? altoElemento : anchoElemento;
    $: tamannoLista = Array.isArray(elementos) ? elementos.length * tamannoElemento : 0;

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
    

    const generarClases = i => {
        let clases = "elemento"
        console.log(i,activo);
        
        if( i == activo ) {
            clases += " activo"
        }
        return clases
    }


    const generarEstilosAnchoAlto = (
        ancho,
        alto
    ) => `
        min-width: ${ancho ? `${parseInt(ancho)}px` : '100%' } !important;
        width: ${ancho ? `${parseInt(ancho)}px` : '100%' };
        height: ${alto ? `${parseInt(alto)}px` : '100%' };
    `

    const generarEstilosLista = (
        scrollX,
        scrollY
    ) => `
        flex-direction: ${obtenerDireccionCarrusel(direccion)};
        transform: translate( ${scrollX}px, ${scrollY}px);
        justify-content: center;        
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
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: none;
        flex-direction: row;
    }

    .elementos,
    .elemento {
        transition: transform 0.4s ease-in-out;
    }

    .elemento {
        
        display: flex;
        justify-content: center;
        align-items: center;

        transform: scale(1);
        opacity: 1;
        
    }

    .elemento:not(.activo) {
        transform: scale(0.8);
        opacity: 0.7;
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

                <div class={ i==activo?"elemento activo":"elemento" }  style={estilosElemento} on:click={ir(i)}>
                    <article style="background: #ddd; width: 15rem; height 12rem; display: flex; justify-content: center; align-items: center;">
                        <h6>
                            Hola Elemento!
                        </h6>
                    </article>
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