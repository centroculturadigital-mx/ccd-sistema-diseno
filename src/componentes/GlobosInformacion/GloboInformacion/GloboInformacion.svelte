<script>
    import { onMount } from "svelte";

    import Texto from "../../../elementos/texto/Texto/Texto.svelte";

    export let texto;
    export let flecha;
    export let coordenadas
    export let inicializar;

    let elemento;

    $: posicionTipo =
        flecha === "ARRIBA_CENTRO"
            ? "arribaCentro"
            : flecha === "ARRIBA_IZQUIERDA"
            ? "arribaIzquierda"
            : flecha === "ARRIBA_DERECHA"
            ? "arribaDerecha"
            : flecha === "ABAJO_CENTRO"
            ? "abajoCentro"
            : flecha === "ABAJO_IZQUIERDA"
            ? "abajoIzquierda"
            : flecha === "ABAJO_DERECHA"
            ? "abajoDerecha"
            : flecha === "IZQUIERDA_CENTRO"
            ? "izquierdaCentro"
            : flecha === "IZQUIERDA_ARRIBA"
            ? "izquierdaArriba"
            : flecha === "IZQUIERDA_ABAJO"
            ? "izquierdaAbajo"
            : flecha === "DERECHA_CENTRO"
            ? "derechaCentro"
            : flecha === "DERECHA_ARRIBA"
            ? "derechaArriba"
            : flecha === "DERECHA_ABAJO"
            ? "derechaAbajo"
            : "";

    let estilos;
    let inicializado

        $: estilos = coordenadas 
        ? { style: `top: ${coordenadas.y}px;left: ${coordenadas.x}px;`} 
        : {} ;

    onMount(() => {
        if (typeof inicializar == 'function') {
            
            inicializar(elemento);
            setTimeout(() => {
                inicializado = true
            });
        
        }
    
    });

    $: clases = inicializado ? "visible" : " invisible"

</script>

<div class="{posicionTipo} GloboInformacion" {...estilos} bind:this={elemento}>
    <Texto texto={texto ? texto : ""} />  
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
        border-radius: 0.2rem;
    }
    /* .visible {
        visibility: visible;
    }
    .invisible {
        visibility: hidden;
    } */
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
        bottom: -0.6rem;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
    }
    .abajoIzquierda:after {
        content: "";
        left: 0.15rem;
        bottom: -0.6rem;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
    }
    .abajoDerecha:after {
        content: "";
        right: 0.15rem;
        bottom: -0.6rem;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
    }
    .izquierdaCentro:after {
        content: "";
        left: -0.6rem;
        top: calc(50% - 0.25rem);
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
    }
    .izquierdaArriba:after {
        content: "";
        left: -0.6rem;
        top: 0.25rem;
        transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
    }
    .izquierdaAbajo:after {
        content: "";
        left: -0.6rem;
        bottom: 0.25rem;
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
        right: -0.6rem;
        top: 0.25rem;
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
    }
    .derechaAbajo:before {
        content: "";
        right: -0.6rem;
        bottom: 0.25rem;
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
    }

    .GloboInformacion :global(span) {
        color: #fff;
    }
</style>
