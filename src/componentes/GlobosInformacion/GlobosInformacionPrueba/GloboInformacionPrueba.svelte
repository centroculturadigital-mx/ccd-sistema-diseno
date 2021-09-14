<script>
    import GlobosInformacionContexto from "../GlobosInformacionContexto/GlobosInformacionContexto";

    export let componente;
    export let datos;
    // 
    export let posicionContenido; //Para poder crear historias con distintas posiciones de UsuariosLista y comprobar la posici[on del globo]

    let estado;

    $: clases =
        posicionContenido == "CENTRO_IZQUIERDA"
            ? "centroIzquierda"
            : posicionContenido == "CENTRO_DERECHA"
            ? "centroDerecha"
            : posicionContenido == "ARRIBA_CENTRO"
            ? "arribaCentro"
            : posicionContenido == "ABAJO_CENTRO"
            ? "abajoCentro"
            : posicionContenido == "ARRIBA_IZQUIERDA"
            ? "arribaIzquierda"
            : posicionContenido == "ABAJO"
            ? "abajo"
            : "";

//// POSICIONES Flecha
// ARRIBA_CENTRO - listo
// ARRIBA_IZQUIERDA - 
// ARRIBA_DERECHA
// ABAJO_CENTRO - listo
// ABAJO_IZQUIERDA
// ABAJO_DERECHA
// IZQUIERDA_CENTRO - listo
// IZQUIERDA_ARRIBA
// IZQUIERDA_ABAJO
// DERECHA_CENTRO / listo
// DERECHA_ABAJO
// DERECHA_ARRIBA
</script>

<section class="{clases} GloboInformacionPrueba">
    <GlobosInformacionContexto {componente} {datos} />
</section>

<style>
    * {
        box-sizing: border-box;
    }
    .GloboInformacionPrueba {
        position: relative;
        min-height: 90vh;
        width: 100%;
    }
    .GloboInformacionPrueba :global(.ListaComponentes) {
        display: flex;
    }
    .GloboInformacionPrueba :global(.ListaComponentes ul) {
        width: 100%;
    }
    .centroIzquierda :global(.UsuariosLista ul) {
        align-items: flex-start !important;
        justify-content: center;
    }
    .centroDerecha :global(.UsuariosLista ul) {
        align-items: flex-end !important;
        justify-content: center;
    }
    .arribaCentro :global(.UsuariosLista ul) {
        position: fixed;
        top: 0; 
        align-items: center !important;
        justify-content: flex-start;
    }
    .abajoCentro :global(.UsuariosLista ul) {
        position: fixed;
        bottom: 0;
        align-items: center !important;
        justify-content: flex-end;
    }
    .arribaIzquierda :global(.UsuariosLista ul) {
        position: fixed;
        top: 0;
        left: 0;
        align-items: flex-start;
    }
    .abajo :global(.UsuariosLista ul) {
        justify-content: flex-end !important;
    }
</style>
