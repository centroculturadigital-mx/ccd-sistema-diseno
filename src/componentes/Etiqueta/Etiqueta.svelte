<script>
    import Texto from "../../elementos/texto/Texto/Texto";
    import Icono from "../../elementos/Icono/Icono";
    import Imagen from "../../elementos/media/Imagen/Imagen";
    import { TextEncoder } from "util";

    export let texto;
    export let cerrar;
    export let icono;
    export let imagen;

    let estado = true;

    const cerrarAccion = () => {
        estado = !estado;
    };
</script>

{#if estado}
    <div class="Etiqueta">
        {#if icono || imagen}
            <div class="media">
                {#if icono}
                    <Icono {icono} />
                {/if}
                {#if imagen}
                    <Imagen {imagen} alt={texto} />
                {/if}
            </div>
        {/if}

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
        padding: var(--theme-espaciados-padding);
    }
    .Etiqueta :global(span) {
        padding: 0 var(--theme-espaciados-padding);
        font-size: 0.875rem;
    }
    .Etiqueta :global(.iconoContenedor svg) {
        fill: var(--theme-textos-parrafo-color);
        height: 100%;
    }
    .cerrar {
        display: flex;
        align-items: center;
        height: 100%;
        width: auto;
        cursor: pointer;
    }
    .media {
        padding: 0 calc(var(--theme-espaciados-padding) / 2);
        height: 1.5rem;
        width: 1.5rem;
    }
    .media :global(.iconoContenedor) {
        height: 100% !important;
        width: 100% !important;
    }
    .cerrar:hover :global(.iconoContenedor svg) {
        transition: 0.25s;
        fill: #F2F2F2;
        background-color: #666;
        border-radius: 0.125rem;
    }
    .cerrar :global(.iconoContenedor) {
        height: 1rem !important;
        width: 1rem !important;
    }

</style>
