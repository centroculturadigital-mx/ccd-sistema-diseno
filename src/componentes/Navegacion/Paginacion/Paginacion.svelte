<script>
    
    const revisarNumero = n => ((parseInt(n)===0)||(parseInt(n)>0))


    export let elementos
    export let elementosPagina=10
    export let pagina=0
    export let seleccionar

    
    $: elementosMostrar = revisarNumero(elementos) ?
        elementos : Array.isArray(elementos) ?
            elementos.length : null

    
    $: mostrar = revisarNumero(elementosMostrar)
    
    $: paginasNum = Math.ceil( elementosMostrar / elementosPagina )
    $: paginas = Array(3).fill(0).map((e,i)=>i)
        
    $: actual =  pagina ? pagina : paginaSeleccionada ? paginaSeleccionada : 0
    $: console.log(pagina,actual);
    

    let paginaSeleccionada

    const accion = (e,i) => {    

        if( revisarNumero(i) && i < elementosMostrar ) {
        
            if(typeof seleccionar == "function") {
                seleccionar(i)
            }

            paginaSeleccionada = i

        }
    }

</script>


<style>
    nav {
        width: 100%;
        display: flex;
    }
    ul {
        display: flex;
    }
    li {
        list-style: none;
    }
    .actual button {
        background-color: #000;
        color: #fff;
    }

</style>


{#if mostrar}
    <div class="Paginacion">
    
        <nav>
            <ul>
                {#each paginas as pagina, i ("pagina_"+i)}

                    <li class={ i == actual ? "actual" : "" }>
                        <button on:click={e=>accion(e,i)}>
                            {i}
                        </button>
                    </li>

                {/each}
            </ul>
        </nav>
    </div>
{/if}


