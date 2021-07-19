<script>
    import GloboInformacion from "../GloboInformacion/GloboInformacion";

    export let globos;
    export let fondoMostrar;
    export let estado;
</script>

{#if estado}
    <section class="GlobosInformacion">
        {#if fondoMostrar}
            <div class="fondo" />
        {/if}
        {#each globos as globo, i}
            <GloboInformacion
            texto={globo.texto}
            posicion={globo.posicion}
            coordenadas={globo.coordenadas}
            />
        {/each}
    </section>
{/if}

<style>
    * {
        box-sizing: border-box;
    }
    .GlobosInformacion {
        position: relative;
        top: 0;
        left: 0;
    }
    .fondo {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0,0,0,0.35);
        z-index: 0;
    }
</style>
