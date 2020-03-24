<script>

    import {onMount} from "svelte"

    export let elementos;
    
    export let ancho;
    export let alto;
    export let direccion = "horizontal";
    export let pagina = 3;

    
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
    

    $: anchoCarrusel = carrusel ? carrusel.clientWidth : 240
    $: altoCarrusel = carrusel ? carrusel.clientHeight : 240
    $: console.log( carrusel? carrusel.getAttribute('id') : "",anchoCarrusel,altoCarrusel )
    
    $: anchoElemento = anchoCarrusel/Math.max(parseInt(pagina),1)
    
    $: estilosCarrusel = generarEstilos(ancho,alto)

    $: estilosLista = generarEstilos(anchoElemento*elementos.length,alto,true)
    
    $: estilosElemento = generarEstilos(anchoElemento,altoCarrusel)

    const generarEstilos = (
        ancho,
        alto,
        usarDireccion
    ) => `
        width: ${ancho ? `${parseInt(ancho)}px` : '100%' };
        height: ${alto ? `${parseInt(alto)}px` : '100%' };
        ${ usarDireccion ? `flex-direction: ${obtenerDireccionCarrusel(direccion)};` : '' }
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
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

</div>