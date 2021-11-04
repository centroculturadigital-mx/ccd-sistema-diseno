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
        elementoGloboAncho = elemento.getBoundingClientRect().width;
        elementoGloboAlto = elemento.getBoundingClientRect().height;
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
        let tamannoFlecha = 10;

        // let cuadranteIzquierdo = elemento.left <= ventanaAncho / 2 //mitad pantalla
        // let cuadranteDerecho = elemento.right > ventanaAncho * 0.5 // mitad pantalla
        let cuadranteIzquierdo = elemento.right < (elementoGloboAncho + tamannoFlecha);
        let cuadranteDerecho = elemento.right > (elementoGloboAncho + tamannoFlecha);
        let cuadranteArriba = elemento.top < (elementoGloboAlto + tamannoFlecha);
        let cuadranteAbajo = elemento.bottom > (elementoGloboAlto + tamannoFlecha);

        
        if (cuadranteIzquierdo) {
            //elemento izquierda centro, globo a la derecha
            elementoX = tamannoX + elementoGloboAncho / 2;
            elementoY = elemento.top + (tamannoY / 2 - elementoGloboAlto / 2); // centra verticalmente
            posicionFlecha = "IZQUIERDA_CENTRO";
        }
        if (cuadranteDerecho) {
            //elemento a la derecha centro, globo a la izquierda
            elementoX = elemento.right - (elementoGloboAncho + (tamannoX + tamannoFlecha));
            elementoY = elemento.top + (tamannoY / 2 - elementoGloboAlto / 2);
            posicionFlecha = "DERECHA_CENTRO";
        }
        
        if (cuadranteArriba) {
            //elemento al centro arriba, globo abajo
            elementoX = (elemento.right - (tamannoX / 3)) - (elementoGloboAncho / 2);
            elementoY = elemento.top + (elementoGloboAlto + tamannoFlecha);
            posicionFlecha = "ARRIBA_CENTRO"
        }
        
        if (cuadranteAbajo && !cuadranteIzquierdo && !cuadranteDerecho) {
            //elemento al centro abajo, globo abajo
            elementoX = elemento.right - ((tamannoX * 1.5) + elementoGloboAlto)
            elementoY = elemento.top - (elementoGloboAlto + tamannoFlecha)
            posicionFlecha = "ABAJO_CENTRO"
            console.log("DEBUGX: ", elementoX, elementoY);
        }

        // // if (elemento.top < tamannoY && cuadranteIzquierdo) {
        // if (cuadranteArriba && cuadranteIzquierdo) {
        //     //elemento a la izquierda arriba, globo abajo derecha
        //     elementoX = elemento.left - ((tamannoX / 2) - elementoGloboAlto);
        //     elementoY = elemento.top + (tamannoY + tamannoFlecha);
        //     posicionFlecha = "ARRIBA_IZQUIERDA";
        // }

        // // if (elemento.top < tamannoY && cuadranteDerecho) {
        // if (cuadranteArriba && cuadranteDerecho) {
        //     //elemento a la derecha arriba, globo abajo izquierda
        //     elementoX = elemento.right - ((tamannoX / 2) - elementoGloboAlto);
        //     elementoY = elemento.top + (tamannoY + tamannoFlecha);
        //     posicionFlecha = "ARRIBA_IZQUIERDA";
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
