<script>
    import GlobosInformacion from "../GlobosInformacion/GlobosInformacion.svelte";

    export let globo;
    export let globos = [];
    export let componente;
    export let direccion = "HORIZONTAL"; //HORIZONTAL - VERTICAL
    export let datos;

    let estado;
    let posicionFlecha;
    let elementoX;
    let elementoY;
    let elementoGloboAlto = 0;
    let elementoGloboAncho = 0;

    const inicializarGlobo = (elemento) => {
        elementoGloboAncho = elemento.getBoundingClientRect().width;
        elementoGloboAlto = elemento.getBoundingClientRect().height;
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

        console.log("calcularPosicion", elementoGloboAncho, elementoGloboAlto);

        if ((elementoGloboAncho > 0, elementoGloboAlto > 0)) {

            if (cuadranteIzquierdo && !cuadranteArriba && !cuadranteAbajo) {
                if (direccion === "VERTICAL") {
                    elementoX = elemento.right + tamannoFlecha;
                    elementoY = elemento.top;
                    posicionFlecha = "IZQUIERDA_ARRIBA";
                    return;
                } else {
                    elementoX = elemento.right + tamannoFlecha;
                    elementoY =
                        elemento.top + (tamannoY / 2 - elementoGloboAlto / 2);
                    posicionFlecha = "IZQUIERDA_CENTRO";
                }
            }
            if (cuadranteDerecho && !cuadranteArriba && !cuadranteAbajo) {
                if (direccion === "VERTICAL") {
                    elementoX = elemento.right - (elementoGloboAncho + (tamannoX + tamannoFlecha));
                    elementoY = elemento.top
                    posicionFlecha = "DERECHA_ARRIBA";
                    return;
                } else {
                    elementoX = elemento.right - (elementoGloboAncho + (tamannoX + tamannoFlecha));
                    elementoY = elemento.top + (tamannoY / 2 - elementoGloboAlto / 2);
                    posicionFlecha = "DERECHA_CENTRO";
                }
            }
            if (cuadranteArriba && !cuadranteDerecho && !cuadranteIzquierdo) {
                if (direccion === "VERTICAL") {
                    elementoX = elemento.right + (tamannoX / 2) - tamannoFlecha
                    elementoY = elemento.top
                    posicionFlecha = "IZQUIERDA_ARRIBA";
                    return;
                } else {
                    elementoX = elemento.left - (elementoGloboAncho / 2 - (tamannoX / 2) - tamannoFlecha / 2)
                    elementoY = elemento.top + (elementoGloboAlto + tamannoFlecha);
                    posicionFlecha = "ARRIBA_CENTRO";
                    return;
                }
            }
            if (cuadranteAbajo && !cuadranteDerecho && !cuadranteIzquierdo) {
                if (direccion === "VERTICAL") {
                    elementoX = elemento.right + tamannoFlecha
                    elementoY = elemento.bottom - elementoGloboAlto
                    posicionFlecha = "IZQUIERDA_ABAJO";
                    return;
                } else {
                    elementoX = elemento.left - (elementoGloboAncho / 2 - tamannoX / 1.5);
                    elementoY = elemento.top - (elementoGloboAlto + tamannoFlecha);
                    posicionFlecha = "ABAJO_CENTRO";
                    return;
                }
            }
            if (cuadranteIzquierdo && cuadranteArriba) {
                if (direccion === "VERTICAL") {
                    elementoX = elemento.left + (tamannoX + tamannoFlecha);
                    elementoY = elemento.top;
                    posicionFlecha = "IZQUIERDA_ARRIBA";
                    return;
                } else {
                    elementoX =
                        elemento.left - (tamannoX / 2 - elementoGloboAlto);
                    elementoY = elemento.top + (tamannoY + tamannoFlecha);
                    posicionFlecha = "ARRIBA_IZQUIERDA";
                    return;
                }
            }

            if (cuadranteDerecho && cuadranteArriba) {
                if (direccion === "VERTICAL") {
                    elementoX =
                        elemento.left - (elementoGloboAncho + tamannoFlecha);
                    elementoY = elemento.top;
                    posicionFlecha = "DERECHA_ARRIBA";
                    return;
                } else {
                    elementoX = elemento.left - (elementoGloboAncho / 2 - (tamannoX / 2) - tamannoFlecha / 2);
                    elementoY = elemento.bottom + tamannoFlecha;
                    posicionFlecha = "ARRIBA_DERECHA";
                    return;
                }
            }
            if (cuadranteAbajo && cuadranteIzquierdo) {
                if (direccion === "VERTICAL") {
                    elementoX = elemento.right + tamannoFlecha;
                    elementoY = elemento.bottom - elementoGloboAlto;
                    posicionFlecha = "IZQUIERDA_ABAJO";
                    return;
                } else {
                    elementoX =
                        elemento.left - (tamannoX / 2 - elementoGloboAlto);
                    elementoY =
                        elemento.top - (elementoGloboAlto + tamannoFlecha);
                    posicionFlecha = "ABAJO_IZQUIERDA";
                    return;
                }
            }
            if (cuadranteAbajo && cuadranteDerecho) {
                if (direccion === "VERTICAL") {
                    elementoX =
                        elemento.left - (elementoGloboAncho + tamannoFlecha);
                    elementoY = elemento.bottom - elementoGloboAlto;
                    posicionFlecha = "DERECHA_ABAJO";
                    return;
                } else {
                    elementoX =
                        elemento.left - (elementoGloboAncho - tamannoX / 1.5);
                    elementoY =
                        elemento.top - (elementoGloboAlto + tamannoFlecha);
                    posicionFlecha = "ABAJO_DERECHA";
                    return;
                }
            }
            //default
            if (
                !cuadranteAbajo &&
                !cuadranteArriba &&
                !cuadranteIzquierdo &&
                !cuadranteDerecho
            ) {
                if (direccion === "VERTICAL") {
                    elementoX = elemento.right + tamannoFlecha;
                    elementoY = elemento.top;
                    posicionFlecha = "IZQUIERDA_ARRIBA";
                    return;
                } else {
                    elementoX = elemento.right + tamannoFlecha;
                    elementoY =
                        elemento.top + (tamannoY / 2 - elementoGloboAlto / 2);
                    posicionFlecha = "IZQUIERDA_CENTRO";
                    return;
                }
            }
        } 
    };

    const mostrarGlobo = (evento, texto) => {
        let elemento = evento.target.getBoundingClientRect();

        calcularPosicion(elemento);
        
        
        if ((elementoGloboAncho > 0, elementoGloboAlto > 0)) {
            
            console.log("Muestra con datos");
            if (evento && texto) {
                globo = {
                    texto: texto,
                    coordenadas: {
                        x: elementoX,
                        y: elementoY,
                    },
                    posicionFlecha,
                }
                estado = true
            } 
            
        } else {
            
            console.log("Muestra sin datos");
            globo = {
                    texto: "",
                    coordenadas: {
                        x: 1,
                        y: 1,
                    },
                }
            estado = true
        } 
    };
    
    const retirarGlobo = () => {
        globo = null;
        estado = false;
        console.log("Retira");
    };

    $: datosPreparados = {
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
