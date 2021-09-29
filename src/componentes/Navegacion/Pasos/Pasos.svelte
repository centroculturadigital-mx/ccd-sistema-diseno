<script>
    import Icono from "../../../elementos/Icono/Icono";
    import Texto from "../../../elementos/texto/Texto/Texto";

    export let pasos;
    export let activo;
    export let mostrarTextoAuxiliar;

    let iconoListo = "confirma";
    let iconoError = "cerrar";
    let iconoPaso = "derecha";

</script>

<div class="Pasos">
    <nav>
        {#each pasos as paso, i (paso)}
            <div class="{activo === (i + 1) ? "activo": ""} {(i + 1) < activo ? "listo" : ""} {(i + 1) > activo ? "esperando" : ""} paso">

                <div class="contenedor {paso.error ? "error" : ""}  ">
                {#if (i + 1) > 1}
                <span class="iconoPaso">
                    <Icono icono={iconoPaso} />
                </span>
                {/if}
                {#if activo > (i + 1) || paso.error}
                <span class="icono">
                    <Icono icono={(i + 1) < activo ? iconoListo : paso.error ? iconoError : ""} />
                </span>
                {/if}
                <div class="texto">
                    <Texto texto={paso.titulo} />
                </div>
                </div>

            </div>
            {#if mostrarTextoAuxiliar && activo === (i + 1)}
            <div class="textoAuxiliar">
                <Texto texto={paso.texto}/>
            </div>
            {/if}
        {/each}
    </nav>
</div>

<style>
    * {
        box-sizing: border-box;
    }
    .Pasos {
        background-color: var(--theme-colores-fondo);
        position: sticky;
        top: -0.1px;
        height: auto        ;
        width: auto;
        z-index: 2;
    }
    .Pasos nav {
        position: relative;
        display: flex;
        flex-wrap: wrap ;
        justify-content: flex-start;
        height: 100%;
        width: 100%;
    }
        .contenedor {
            display: flex;
            align-items: center;
        }
    .paso {
        display: flex;
        flex-direction: column;
    }
    .icono,
    .iconoPaso {
        height: 1.25rem;
        width: 1.25rem;
    }
    .icono :global(.iconoContenedor),
    .iconoPaso :global(.iconoContenedor) {
        height: 100% !important;
        width: 100% !important;
    }
    .icono :global(svg),
    .iconoPaso :global(svg) {
        height: 100%;
    }
    .iconoPaso,
    .icono {
        margin: 0 var(--theme-espaciados-margen) 0 0;
    }
    .texto {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        height: 100%;
    }
    .textoAuxiliar {
        background-color: #F2F2F2;
        padding: var(--theme-espaciados-padding);
        width: 100%;
        order: 1;
    }
    .textoAuxiliar :global(span) {
        color: var(--theme-textos-parrafo-color) !important;
    }
    /* colores estado: activo, terminado, En Progreso, Esperando */
    .activo .texto {
        background-color: var(--theme-fondos-fondo4);
    }
    .activo :global(span) {
        color: var(--theme-colores-secundario1);
    }
    .activo .icono :global(span) {
        color: var(--theme-colores-primario);
    }
    .activo .icono :global(svg) {
        fill: var(--theme-colores-secundario1) !important;
    }
    .activo .iconoPaso :global(svg) {
        fill: var(--theme-colores-secundario1) !important;
    }
    /* listo */
    .listo .icono :global(.iconoContenedor) {
        background-color: var(--theme-colores-secundario1);
    }
    .listo .icono :global(svg) {
        fill: var(--theme-colores-fondo);
    }
    .listo .iconoPaso :global(svg) {
        fill: var(--theme-colores-secundario1) !important;
    }
    /* esperando */
    .esperando :global(span) {
        color: var(--theme-fondos-fondo2);
    }
    .esperando :global(svg) {
        fill: var(--theme-fondos-fondo2);
    }
    /* error */
    .error :global(span) {
        color: #EF4B48;
    }
    .error .icono :global(.iconoContenedor) {
        background-color: #EF4B48;
    }
    .error .icono :global(svg) {
        fill: var(--theme-colores-fondo) !important;
    }
    .error .iconoPaso :global(svg) {
        fill: #EF4B48 !important;
    }
</style>
