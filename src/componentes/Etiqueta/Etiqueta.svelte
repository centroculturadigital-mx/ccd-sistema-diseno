<script>
    import Texto from "../../elementos/texto/Texto/Texto";
    import Icono from "../../elementos/Icono/Icono";

    export let texto;
    export let cerrar;

    let estado = true;

    const cerrarAccion = () => {
        estado = !estado;
    };
</script>

{#if estado}
    <div class="Etiqueta">
        <Texto {texto} />

        {#if cerrar}
            <div class="cerrar" on:click={cerrarAccion}>
                <Icono icono="cerrar" />
            </div>
        {/if}
    </div>
{/if}

<style>
    * {
        box-sizing: border-box;
    }
    .Etiqueta {
        display: flex;
        align-items: center;
        background-color: #ccc;
        border-radius: 0.25rem;
    }
    .Etiqueta :global(span) {
        padding: calc(var(--theme-espaciados-padding) / 2);
    }
    .cerrar {
        display: flex;
        align-items: center;
        height: 100%;
        width: auto;
        cursor: pointer;
    }
    .cerrar:hover {
        opacity: 0.75;
    }
    .cerrar :global(.iconoContenedor) {
        height: 1rem !important;
        width: 1rem !important;
        padding: calc(var(--theme-espaciados-padding) / 2);
    }
    .cerrar :global(.iconoContenedor svg) {
        fill: var(--theme-textos-parrafo-color);
        height: 100%;
    }
</style>
