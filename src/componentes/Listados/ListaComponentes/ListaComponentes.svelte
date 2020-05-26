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
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    ul, ul li {
        margin: 0;
        padding: 0;
    }
    
    ul li {
        list-style-type: none;
        margin-bottom: var(--theme-tamannos-xl);
    }

</style>

<div class="ListaComponentes">
    {#if Array.isArray(elementos) && elementos.length > 0 }
        <ul>


            {#each elementos as elemento, i ("elemento_"+i) }

                <li>
                    <!-- <article style="background: #ddd; width: 15rem; height 12rem; display: flex; justify-content: center; align-items: center;">
                        <h6>
                            Hola Elemento!
                        </h6>
                    </article> -->
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

