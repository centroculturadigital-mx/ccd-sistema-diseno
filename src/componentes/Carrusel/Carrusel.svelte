<script>

    import {onMount} from "svelte"

    import xrand from "../../funciones/random/xrand"

    export let elementos;

    

    

    const generarID = ()=>xrand()
    
    let id = generarID();


    onMount(()=>{

        let carruselesIDs = obtenerIDsCarruseles()


        while( carruselesIDs.includes(id) ) {

            console.log("id duplicado",id);
            id = generarID()
            
        }
        
    })



    const obtenerIDsCarruseles = () => {
        
        let carruseles=Array.from(document.getElementsByClassName('carrusel'))
        
        carruseles=carruseles.map(c=>parseInt(c.getAttribute('id').split("carrusel_")[1]))
        
        return carruseles

    }

</script>

<style>
    .carrusel {
        padding: 1rem;
        outline: 1px solid #def;
    }
</style>

<div class="carrusel" id={`carrusel_${id}`}>


    {#if Array.isArray(elementos) }
        {#each elementos as elemento, i ("elemento_"+i) }

            <div>
                <h6>
                    Hola Elemento!
                </h6>
            </div>


        {/each}
    {/if}


</div>