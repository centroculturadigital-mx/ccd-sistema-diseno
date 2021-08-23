<script>
    import Texto from "../../../elementos/texto/Texto/Texto.svelte";

    export let texto;
    export let posicionFlecha;
    export let coordenadas;

    $: posicionTipo =
        posicionFlecha === "ARRIBA_CENTRO"
            ? "arribaCentro"
            : posicionFlecha === "ARRIBA_IZQUIERDA"
            ? "arribaIzquierda"
            : posicionFlecha === "ARRIBA_DERECHA"
            ? "arribaDerecha"
            : posicionFlecha === "ABAJO_CENTRO"
            ? "abajoCentro"
            : posicionFlecha === "ABAJO_IZQUIERDA"
            ? "abajoIzquierda"
            : posicionFlecha === "ABAJO_DERECHA"
            ? "abajoDerecha"
            : posicionFlecha === "IZQUIERDA_CENTRO"
            ? "izquierdaCentro"
            : posicionFlecha === "IZQUIERDA_ARRIBA"
            ? "izquierdaArriba"
            : posicionFlecha === "IZQUIERDA_ABAJO"
            ? "izquierdaAbajo"
            : posicionFlecha === "DERECHA_CENTRO"
            ? "derechaCentro"
            : posicionFlecha === "DERECHA_ARRIBA"
            ? "derechaArriba"
            : posicionFlecha === "DERECHA_ABAJO"
            ? "derechaAbajo"
            : "";

    let estilos;

    if (coordenadas) {
        estilos = {
            style: `top: ${coordenadas.y}px;left: ${coordenadas.x}px;`,
        };
    }
    export let globoInstancia = (e) => {
        console.log("GLOBO", e);
    }

</script>

<div class="{posicionTipo} GloboInformacion" {...estilos} bind:this={globoInstancia}>
    <Texto {texto} />
</div>

<style>
    * {
        box-sizing: border-box;
    }
    .GloboInformacion {
        display: inline;
        position: absolute;
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
    /* .izquierdaCentro {
        right: 0;
    }
    .derechaCentro {
        left: 0;
    } */
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
        right: -0.6rem;
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
