<script>
    import GlobosInformacion from "../GlobosInformacion/GlobosInformacion.svelte";

    export let globo;
    export let globos = [];
    export let componente;
    export let direccion = "HORIZONTAL"; //HORIZONTAL - VERTICAL
    export let datos;
      
    const calcularPosicion = (elementoOrigen,globo) => {
        const recuadro = elementoOrigen.getBoundingClientRect()
        const recuadroGlobo = globo.getBoundingClientRect()

        let flecha;
        let x;
        let y;
        let ancho = recuadroGlobo.width;//globo
        let alto = recuadroGlobo.height;//globo

        let ventanaAncho = window.innerWidth;
        let ventanaAlto = window.innerHeight;
        let anchoElementoOrigen = recuadro.width;
        let altoElementoOrigen = recuadro.height;
        let tamannoFlecha = 8;

        let cuadranteIzquierdo = recuadro.right < ancho + tamannoFlecha;
        let cuadranteDerecho = ventanaAncho < recuadro.right + (ancho + tamannoFlecha);
        let cuadranteArriba = recuadro.top < alto + tamannoFlecha;
        let cuadranteAbajo = ventanaAlto < recuadro.bottom + (alto + tamannoFlecha);

            if (cuadranteIzquierdo && !cuadranteArriba && !cuadranteAbajo) {
                if (direccion === "VERTICAL") {
                    x = recuadro.right + tamannoFlecha;
                    y = recuadro.top;
                    flecha = "IZQUIERDA_ARRIBA";
                } else {
                    x = recuadro.right + tamannoFlecha;
                    y =
                        recuadro.top + (altoElementoOrigen / 2 - alto / 2);
                    flecha = "IZQUIERDA_CENTRO";
                }
            } else 
            if (cuadranteDerecho && !cuadranteArriba && !cuadranteAbajo) {
                if (direccion === "VERTICAL") {
                    x = recuadro.right - (ancho + (anchoElementoOrigen + tamannoFlecha));
                    y = recuadro.top
                    flecha = "DERECHA_ARRIBA";
                } else {
                    x = recuadro.right - (ancho + (anchoElementoOrigen + tamannoFlecha));
                    y = recuadro.top + (altoElementoOrigen / 2 - alto / 2);
                    flecha = "DERECHA_CENTRO";
                }
            } else
            if (cuadranteArriba && !cuadranteDerecho && !cuadranteIzquierdo) {
                if (direccion === "VERTICAL") {
                    x = recuadro.right + (anchoElementoOrigen / 2) - tamannoFlecha
                    y = recuadro.top
                    flecha = "IZQUIERDA_ARRIBA";
                } else {
                    x = recuadro.left - (ancho / 2 - (anchoElementoOrigen / 2) - tamannoFlecha / 2)
                    y = recuadro.top + (alto + tamannoFlecha);
                    flecha = "ARRIBA_CENTRO";
                }
            } else
            if (cuadranteAbajo && !cuadranteDerecho && !cuadranteIzquierdo) {
                if (direccion === "VERTICAL") {
                    x = recuadro.right + tamannoFlecha
                    y = recuadro.bottom - alto
                    flecha = "IZQUIERDA_ABAJO";
                } else {
                    x = recuadro.left - (ancho / 2 - anchoElementoOrigen / 1.5);
                    y = recuadro.top - (alto + tamannoFlecha);
                    flecha = "ABAJO_CENTRO";
                }
            } else
            if (cuadranteIzquierdo && cuadranteArriba) {
                if (direccion === "VERTICAL") {
                    x = recuadro.left + (anchoElementoOrigen + tamannoFlecha);
                    y = recuadro.top;
                    flecha = "IZQUIERDA_ARRIBA";
                } else {
                    x = recuadro.left - (anchoElementoOrigen / 2 - alto);
                    y = recuadro.top + (altoElementoOrigen + tamannoFlecha);
                    flecha = "ARRIBA_IZQUIERDA";
                }
            } else

            if (cuadranteDerecho && cuadranteArriba) {
                if (direccion === "VERTICAL") {
                    x =
                        recuadro.left - (ancho + tamannoFlecha);
                    y = recuadro.top;
                    flecha = "DERECHA_ARRIBA";
                } else {
                    x = recuadro.left - (ancho - (anchoElementoOrigen / 2) - tamannoFlecha);
                    y = recuadro.bottom + tamannoFlecha;
                    flecha = "ARRIBA_DERECHA";
                }
            } else
            if (cuadranteAbajo && cuadranteIzquierdo) {
                if (direccion === "VERTICAL") {
                    x = recuadro.right + tamannoFlecha;
                    y = recuadro.bottom - alto;
                    flecha = "IZQUIERDA_ABAJO";
                } else {
                    x =
                        recuadro.left - (anchoElementoOrigen / 2 - alto);
                    y =
                        recuadro.top - (alto + tamannoFlecha);
                    flecha = "ABAJO_IZQUIERDA";
                }
            } else
            if (cuadranteAbajo && cuadranteDerecho) {
                if (direccion === "VERTICAL") {
                    x =
                        recuadro.left - (ancho + tamannoFlecha);
                    y = recuadro.bottom - alto;
                    flecha = "DERECHA_ABAJO";
                } else {
                    x =
                        recuadro.left - (ancho - anchoElementoOrigen / 1.5);
                    y =
                        recuadro.top - (alto + tamannoFlecha);
                    flecha = "ABAJO_DERECHA";
                }
            } else
            //default
            if (
                !cuadranteAbajo &&
                !cuadranteArriba &&
                !cuadranteIzquierdo &&
                !cuadranteDerecho
            ) {
                if (direccion === "VERTICAL") {
                    x = recuadro.right + tamannoFlecha;
                    y = recuadro.top;
                    flecha = "IZQUIERDA_ARRIBA";
                } else {
                    x = recuadro.right + tamannoFlecha;
                    y = recuadro.top + (altoElementoOrigen / 2 - alto / 2);
                    flecha = "IZQUIERDA_CENTRO";
                }
            }

            return {
                flecha,
                x,
                y,
                ancho,
                alto,
            }
    };

    const inicializarGlobo = (g) => {
        const posicion = calcularPosicion(globo.elemento,g)

        globo = {
            ...globo,
            coordenadas: {
                x: posicion.x,
                y: posicion.y,
            },
            flecha: posicion.flecha,
        }
    }

    const mostrarGlobo = (evento, texto) => {
        let elemento = evento.target;

            if (evento && texto) {
                globo = {
                    texto: texto,
                    elemento,
                   
                }
            } 
    };
    
    const retirarGlobo = () => {
        globo = null;
    };

    $: datosPreparados = {
        ...datos,
        hover: mostrarGlobo,
        hoverRetirar: retirarGlobo,
    };
</script>

<section class="GlobosInformacionContexto">
    <GlobosInformacion {globo} {inicializarGlobo} />

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
