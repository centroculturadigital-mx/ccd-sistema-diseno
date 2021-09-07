<script>
    import { query_selector_all } from "svelte/internal";

    import GlobosInformacion from "../GlobosInformacion/GlobosInformacion.svelte";

    export let globo;
    // export let globos = [];
    export let componente;
    export let datos;

    let estado;
    let posicionFlecha;
    let elementoX;
    let elementoY;
    let elementoGloboAlto;
    let elementoGloboAncho;

    const inicializarGlobo = (elemento) => {
        elementoGloboAncho = elemento.getBoundingClientRect().width
        elementoGloboAlto = elemento.getBoundingClientRect().height
    };

    const mostrarGlobo = (evento, texto) => {
        let elemento = evento.target.getBoundingClientRect();

        calcularPosicion(elemento);

        if (evento && texto) {
            globo = {
                texto: texto,
                coordenadas: {
                    x: elementoX,
                    y: elementoY,
                },
                posicionFlecha,
            };

            estado = true;
        }
    };

    const retirarGlobo = () => {
        globo = null;
        estado = false;
    };

    const calcularPosicion = (elemento) => {
        let ventanaAncho = window.innerWidth;
        let ventanaAlto = window.innerHeight;
        let tamannoX = elemento.width;
        let tamannoY = elemento.height;

        inicializarGlobo

        console.log("GLBX", elemento, (tamannoY / 2) - (elemento.height / 2));

        if (elemento.left <= ventanaAncho / 2) {
            //elemento izquierda arriba, globo a la derecha
            posicionFlecha = "IZQUIERDA_CENTRO";
            elementoX = elemento.left + (tamannoX + 7)// 7 es el desface de la flecha
            elementoY = elemento.top + ((tamannoY / 2) - (elementoGloboAlto / 2))// centra verticalmente
            // console.log("elemento está a la izquierda Arriba");
        }

        if (elemento.right > ventanaAncho * 0.5) {
            //elemento a la derecha, globo a la izquierda
            elementoX = elemento.right - (elementoGloboAncho + tamannoX)
            elementoY = elemento.top - (elementoGloboAlto - tamannoY)
            posicionFlecha = "DERECHA_CENTRO";
            console.log("elemento está a la derecha");
        }
        
        // if (elemento.top <= ventanaAlto * 0.5) {
        //     elementoX = elemento.left - tamannoX; //necesita valor de globo
        //     elementoY = elemento.top + tamannoY;
        //     posicionFlecha = "ARRIBA_CENTRO";
        //     console.log("elemento está arriba");
        // }
        // if (elemento.top > ventanaAlto / 2) {
        //     elementoX = elemento.left - tamannoX; //necesita dividir entre el tamanno de globo
        //     elementoY = elemento.top - tamannoY;
        //     posicionFlecha = "ABAJO_CENTRO";
        //     console.log("elemento está a abajo");
        // }
    };

    const datosPreparados = {
        ...datos,
        hover: mostrarGlobo,
        hoverRetirar: retirarGlobo,
    };
</script>

<section class="GlobosInformacionContexto">
    <GlobosInformacion {globo} {estado} {inicializarGlobo} />

    <svelte:component this={componente} {...datosPreparados} />
</section>

<style>
    .GlobosInformacionContexto {
        position: absolute;
        top: 0;
        left: 0;
        height: 90vh;
        width: 100%;
        z-index: 1;
    }
</style>
