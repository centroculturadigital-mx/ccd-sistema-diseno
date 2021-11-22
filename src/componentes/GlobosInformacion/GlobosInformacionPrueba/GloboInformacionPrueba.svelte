<script>
    import GlobosInformacionContexto from "../GlobosInformacionContexto/GlobosInformacionContexto";

    export let componente;
    export let datos;
    export let direccion;
    // 
    export let posicionContenido; //Para poder crear historias con distintas posiciones de UsuariosLista y comprobar la posici[on del globo]

    let estado;

    $: clases =
        posicionContenido == "CENTRO_CENTRO"
            ? "centro"
            : posicionContenido == "CENTRO_IZQUIERDA"
            ? "centroIzquierda"
            : posicionContenido == "CENTRO_DERECHA"
            ? "centroDerecha"
            : posicionContenido == "ARRIBA_CENTRO"
            ? "arribaCentro"
            : posicionContenido == "ABAJO_CENTRO"
            ? "abajoCentro"
            : posicionContenido == "ARRIBA_IZQUIERDA"
            ? "arribaIzquierda"
            : posicionContenido == "ARRIBA_DERECHA"
            ? "arribaDerecha"
            : posicionContenido == "ABAJO_IZQUIERDA"
            ? "abajoIzquierda"
            : posicionContenido == "ABAJO_DERECHA"
            ? "abajoDerecha"
            : "";

</script>

<section class="{clases} GloboInformacionPrueba">
    <GlobosInformacionContexto {componente} {datos} {direccion}/>
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
    .arribaIzquierda :global(.UsuariosLista ul) {
        position: fixed;
        top: 0;
        left: 0;
        align-items: flex-start;
    }
    .arribaDerecha :global(.UsuariosLista ul) {
        position: fixed;
        top: 0;
        left: 0;
        align-items: flex-end;
    }
    .abajoIzquierda :global(.UsuariosLista ul) {
        justify-content: flex-end !important;
        align-items: flex-start !important;
    }
    .abajoDerecha :global(.UsuariosLista ul) {
        justify-content: flex-end !important;
        align-items: flex-end !important;
    }
    .abajoCentro :global(.UsuariosLista ul) {
        position: fixed;
        bottom: 0;
        justify-content: flex-end;
        align-items: center !important;
    }
    .centro :global(.UsuariosLista ul) {

        justify-content: center !important;
        align-items: center !important;
    }
</style>
