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
        let tamannoFlecha = 8;

        let cuadranteIzquierdo = elemento.right < elementoGloboAncho + tamannoFlecha;
        let cuadranteDerecho = ventanaAncho < elemento.right + (elementoGloboAncho + tamannoFlecha);
        let cuadranteArriba = elemento.top < elementoGloboAlto + tamannoFlecha;
        let cuadranteAbajo = ventanaAlto < elemento.bottom + (elementoGloboAlto + tamannoFlecha);

                        // DEBUG:
        $: console.log(
            "CuadranteIzquierdo: ",
            cuadranteIzquierdo,
            "CuadranteDerecho: ",
            cuadranteDerecho,
            "CuadranteArriba: ",
            cuadranteArriba,
            "CuadranteAbajo: ",
            cuadranteAbajo
        );
        if (cuadranteIzquierdo && !cuadranteArriba && !cuadranteAbajo) {
            //elemento izquierda centro, globo a la derecha
            elementoX = elemento.right + tamannoFlecha;
            elementoY = elemento.top + (tamannoY / 2 - elementoGloboAlto / 2); // centra verticalmente
            posicionFlecha = "IZQUIERDA_CENTRO";
            return
        }
        if (cuadranteDerecho && !cuadranteArriba && !cuadranteAbajo) {
            //elemento a la derecha centro, globo a la izquierda
            elementoX = elemento.right - (elementoGloboAncho + (tamannoX + tamannoFlecha));
            elementoY = elemento.top + (tamannoY / 2 - elementoGloboAlto / 2);
            posicionFlecha = "DERECHA_CENTRO";
            return
        }
        if (cuadranteArriba && !cuadranteDerecho && !cuadranteIzquierdo) {
            //elemento al centro arriba, globo abajo
            elementoX = elemento.right - tamannoX / 3 - elementoGloboAncho / 2;
            elementoY = elemento.top + (elementoGloboAlto + tamannoFlecha);
            posicionFlecha = "ARRIBA_CENTRO";
            return
        }
        if (cuadranteAbajo && !cuadranteDerecho && !cuadranteIzquierdo) {
            //elemento al centro abajo, globo abajo
            elementoX = elemento.right - (elementoGloboAncho / 2) - tamannoFlecha
            elementoY = elemento.top - (elementoGloboAlto + tamannoFlecha);
            posicionFlecha = "ABAJO_CENTRO";
            return
        }

        if (cuadranteIzquierdo && cuadranteArriba) {
            //elemento a la izquierda arriba, globo abajo derecha
            elementoX = elemento.left - ((tamannoX / 2) - elementoGloboAlto);
            elementoY = elemento.top + (tamannoY + tamannoFlecha);
            posicionFlecha = "ARRIBA_IZQUIERDA";
            return
        }

        if (cuadranteDerecho && cuadranteArriba) {
            //elemento a la derecha arriba, globo abajo izquierda
            elementoX = elemento.left - (elementoGloboAncho - (tamannoX / 1.5));
            elementoY = elemento.bottom + tamannoFlecha;
            posicionFlecha = "ARRIBA_DERECHA";
            return
        }
        if (cuadranteAbajo && cuadranteIzquierdo) {
            //elemento a la izquierda abajo, globo arriba derecha
            elementoX = elemento.left - ((tamannoX / 2) - elementoGloboAlto)
            elementoY = elemento.top - (elementoGloboAlto + tamannoFlecha);
            posicionFlecha = "ABAJO_IZQUIERDA";
            return
        }
        if (cuadranteAbajo && cuadranteDerecho) {
            //elemento a la derecha abajo, globo arriba izquierda
            elementoX = elemento.left - (elementoGloboAncho - (tamannoX / 1.5));
            elementoY = elemento.top - (elementoGloboAlto + tamannoFlecha);
            posicionFlecha = "ABAJO_DERECHA";
            return
        }
        //default
        if (!cuadranteAbajo && !cuadranteArriba && !cuadranteIzquierdo && !cuadranteDerecho) {
            elementoX = elemento.right + tamannoFlecha;
            elementoY = elemento.top + (tamannoY / 2 - elementoGloboAlto / 2); // centra verticalmente
            posicionFlecha = "IZQUIERDA_CENTRO";
            return
        }
        
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
