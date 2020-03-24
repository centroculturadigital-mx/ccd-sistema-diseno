<script>

    import {onMount} from "svelte"

    import xrand from "../../funciones/random/xrand"

    export let elementos;
    
    export let ancho;
    export let alto;

    
    let carrusel;
    

    const generarID = ()=>xrand()
    
    let id = generarID();


    onMount(()=>{

        let carruselesIDs = obtenerIDsCarruseles()


        while( carruselesIDs.includes(id) ) {

            console.log("id duplicado",id);
            id = generarID()
            
        }
        
        console.log(id);
        
    })



    const obtenerIDsCarruseles = () => {
        
        let carruseles=Array.from(document.getElementsByClassName('carrusel'))
        
        carruseles=carruseles.map(c=>parseInt(c.getAttribute('id').split("carrusel_")[1]))
        
        return carruseles

    }

    let elementosPagina = 3;

    $: anchoCarrusel = carrusel ? carrusel.clientWidth : 240
    $: altoCarrusel = carrusel ? carrusel.clientHeight : 240
    $: console.log( carrusel? carrusel.getAttribute('id') : "",anchoCarrusel,altoCarrusel )
    
    $: estilosCarrusel = generarEstilos(ancho,alto)
    
    $: elementosPagina = elementos.length
    $: estilosElemento = generarEstilos(anchoCarrusel/elementosPagina,altoCarrusel)

    const generarEstilos = (
        ancho,
        alto
    ) => `
        width: ${ancho ? `${parseInt(ancho)}px` : '100%' };
        height: ${alto ? `${parseInt(alto)}px` : '100%' };
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

    }

    .elementos {
        min-width: 100%;
        min-height: 100%;
        display: flex;
        width: auto;
        flex-wrap: none;
    }
</style>

<div bind:this={carrusel} class="carrusel" id={`carrusel_${id}`} style={estilosCarrusel}>

    <div class="elementos">

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

</div>