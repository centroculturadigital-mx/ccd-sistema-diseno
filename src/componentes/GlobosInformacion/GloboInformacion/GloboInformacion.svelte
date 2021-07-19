<script>
    import Texto from "../../../elementos/texto/Texto/Texto.svelte";

    export let texto;
    export let posicion;
    export let coordenadas;

    $: posicionTipo =
        posicion === "ARRIBA_CENTRO"
            ? "arribaCentro"
            : posicion === "ARRIBA_IZQUIERDA"
            ? "arribaIzquierda"
            : posicion === "ARRIBA_DERECHA"
            ? "arribaDerecha"
            : posicion === "ABAJO_CENTRO"
            ? "abajoCentro"
            : posicion === "ABAJO_IZQUIERDA"
            ? "abajoIzquierda"
            : posicion === "ABAJO_DERECHA"
            ? "abajoDerecha"
            : posicion === "IZQUIERDA_CENTRO"
            ? "izquierdaCentro"
            : posicion === "IZQUIERDA_ARRIBA"
            ? "izquierdaArriba"
            : posicion === "IZQUIERDA_ABAJO"
            ? "izquierdaAbajo"
            : posicion === "DERECHA_CENTRO"
            ? "derechaCentro"
            : posicion === "DERECHA_ARRIBA"
            ? "derechaArriba"
            : posicion === "DERECHA_ABAJO"
            ? "derechaAbajo"
            : "";

    let estilos;

    if (coordenadas) {
        estilos = {
            style: `top: ${coordenadas.y}px;left: ${coordenadas.x}px;`,
        };
    }
</script>

<div class="{posicionTipo} GloboInformacion" {...estilos}>
    <Texto {texto} />
</div>

<style>
    * {
        box-sizing: border-box;
    }
    .GloboInformacion {
        position: relative;
        background-color: #000;
        padding: 0.25rem 0.5rem;
        max-width: 14rem;
        border-radius: 0.25rem;
    }
    .GloboInformacion:before,
    .GloboInformacion:after {
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: 0.35rem solid transparent;
        border-bottom-color: black;
    }

    .arribaCentro:before {
        content: "";
        left: calc(50% - 0.625rem);
        top: -0.6rem;
    }
    .arribaIzquierda:before {
        content: "";
        left: 0.15rem;
        top: -0.6rem;
    }
    .arribaDerecha:before {
        content: "";
        right: 0.15rem;
        top: -0.6rem;
    }
    .abajoCentro:after {
        content: "";
        left: calc(50% - 0.625rem);
        bottom: -0.65rem;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
    }
    .abajoIzquierda:after {
        content: "";
        left: 0.15rem;
        bottom: -0.65rem;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
    }
    .abajoDerecha:after {
        content: "";
        right: 0.15rem;
        bottom: -0.65rem;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
    }
    .izquierdaCentro:after {
        content: "";
        left: -0.65rem;
        top: calc(50% - 0.25rem);
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
    }
    .izquierdaArriba:after {
        content: "";
        left: -0.65rem;
        top: calc(10% + 0.25rem);
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
    }
    .izquierdaAbajo:after {
        content: "";
        left: -0.65rem;
        top: calc(90% - 0.55rem);
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
    }
    .derechaCentro:before {
        content: "";
        right: -0.65rem;
        top: calc(50% - 0.25rem);
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
    }
    .derechaArriba:before {
        content: "";
        right: -0.65rem;
        top: calc(0% + 0.25rem);
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
    }
    .derechaAbajo:before {
        content: "";
        right: -0.65rem;
        top: calc(90% - 0.55rem);
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
    }

    .GloboInformacion :global(span) {
        color: #fff;
    }
</style>
