<script>
    import Parrafo from '../../../elementos/texto/Parrafo/Parrafo'

    export let elementos;    
    export let mensajeVacio

</script>

<style>
    .ListaComponentes {
        height: auto;
        width: 100%;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    ul, ul li {
        padding: 0;
        margin: 0;
    }
    
    ul li {
        list-style-type: none;
        margin: var(--theme-espaciados-margen);
    }

</style>

<div class="ListaComponentes">
    {#if Array.isArray(elementos) && elementos.length > 0 }
        <ul>


            {#each elementos as elemento, i ("elemento_"+i) }

                <li>
                    <svelte:component this={elemento.componente} {...elemento.data}/>
                </li>


            {/each}

        </ul>


    {:else}


        {#if mensajeVacio }
            <div class="Aviso">
                <Parrafo texto={mensajeVacio}/>
            </div>
        {/if}


    {/if}
</div>

