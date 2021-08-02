<script>
    import GloboInformacion from "../GloboInformacion/GloboInformacion";

    export let globo;
    export let globos;
    export let fondoMostrar;
    export let estado;

</script>

{#if estado}
    <section class="GlobosInformacion">
        {#if fondoMostrar}
            <div class="fondo" />
        {/if}
        <!-- DEBUG: globo se utiliza como primer paso -->
        {#if globo}
            <GloboInformacion
                texto={globo.texto}
                posicionFlecha={globo.posicionFlecha}
                coordenadas={globo.coordenadas}
            />
            <!--  -->
        {:else}
            {#each globos as globo (globo)}
                <GloboInformacion
                    texto={globo.texto}
                    posicionFlecha={globo.posicionFlecha}
                    coordenadas={globo.coordenadas}
                />
            {/each}
        {/if}
    </section>
{/if}

<style>
    * {
        box-sizing: border-box;
    }
    .GlobosInformacion {
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100vh;
        width: 100%;
        z-index: 1;
    }
    .fondo {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.35);
        z-index: 0;
    }
</style>
