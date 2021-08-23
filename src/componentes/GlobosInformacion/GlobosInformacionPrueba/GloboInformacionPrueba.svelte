<script>
    import GlobosInformacionContexto from "../GlobosInformacionContexto/GlobosInformacionContexto";

    export let componente;
    export let datos;
    // 
    export let posicionContenido; //Para poder crear historias con distintas posiciones de UsuariosLista y comprobar la posici[on del globo]

    let estado;

    $: clases =
        posicionContenido == "IZQUIERDA"
            ? "izquierda"
            : posicionContenido == "DERECHA"
            ? "derecha"
            : posicionContenido == "CENTRO"
            ? "centro"
            : posicionContenido == "ARRIBA"
            ? "arriba"
            : posicionContenido == "ABAJO"
            ? "abajo"
            : "";
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
    .izquierda :global(.UsuariosLista ul) {
        align-items: flex-start !important;
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
