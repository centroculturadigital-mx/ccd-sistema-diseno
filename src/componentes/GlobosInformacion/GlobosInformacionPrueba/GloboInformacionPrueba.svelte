<script>
    import GlobosInformacionContexto from "../GlobosInformacionContexto/GlobosInformacionContexto";

    export let componente;
    export let datos;
    // 
    export let posicionContenido; //Para poder crear historias con distintas posiciones de UsuariosLista y comprobar la posici[on del globo]

    let estado;

    $: clases =
        posicionContenido == "ARRIBA_IZQUIERDA"
            ? "arribaIzquierda"
            : posicionContenido == "DERECHA"
            ? "derecha"
            : posicionContenido == "CENTRO"
            ? "centro"
            : posicionContenido == "ARRIBA"
            ? "arriba"
            : posicionContenido == "ABAJO"
            ? "abajo"
            : "";

// POSICIONES
// ARRIBA_IZQUIERDA
// ARRIBA_DERECHA
// ABAJO_IZQUIERDA
// ABAJO_DERECHA
// ABAJO_CENTRO
// IZQUIERDA_CENTRO
// IZQUIERDA_ARRIBA
// IZQUIERDA_ABAJO
// DERECHA_ABAJO
// DERECHA_CENTRO
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
    .arribaIzquierda :global(.UsuariosLista ul) {
        align-items: flex-start !important;
        justify-content: flex-start;
    }
    .derecha :global(.UsuariosLista ul) {
        align-items: flex-end !important;
    }
    .centro :global(.UsuariosLista ul) {
        align-items: center !important;
    }
    .arriba :global(.UsuariosLista ul) {
        justify-content: flex-start !important;
    }
    .abajo :global(.UsuariosLista ul) {
        justify-content: flex-end !important;
    }
</style>
