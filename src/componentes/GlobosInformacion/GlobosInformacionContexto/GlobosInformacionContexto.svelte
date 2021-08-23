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
    
    const mostrarGlobo = (evento, texto) => {
        let elemento = evento.target.getBoundingClientRect();
        
        calcularPosicion(elemento);

        console.log("Globox::: ", document.querySelector(".GloboInformacion"));
        
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
        // console.log("Retirar");
    };

    // TODO: calcular posicion de globo de manera adecuada
    // TODO: traer el valor de ancho del globo para el calculo
    const calcularPosicion = (elemento) => {
        let ventanaAncho = window.innerWidth;
        let ventanaAlto = window.innerHeight;
        let tamannoX = elemento.width;
        let tamannoY = elemento.height;

        if (elemento.right > (ventanaAncho * 0.5)) {//globo a laizquierda

            elementoX = elemento.right - tamannoX * 5; //cambiar por el ancho del globo
            elementoY = elemento.top;
            posicionFlecha = "DERECHA_CENTRO";
            console.log("elemento está a la derecha");
        }

        if (elemento.left <= (ventanaAncho / 2)) {

            elementoX = elemento.left + tamannoX;
            elementoY = elemento.top;
            posicionFlecha = "IZQUIERDA_CENTRO";
            console.log("elemento está a la izquierda");
        }
        if (elemento.top <= (ventanaAlto * 0.5)) {

            elementoX = elemento.left - tamannoX;//necesita valor de globo
            elementoY = elemento.top + tamannoY;
            posicionFlecha = "ARRIBA_CENTRO";
            console.log("elemento está arriba");
        }
        if (elemento.top > (ventanaAlto / 2)) {

            elementoX = elemento.left - tamannoX;//necesita dividir entre el tamanno de globo
            elementoY = elemento.top - tamannoY;
            posicionFlecha = "ABAJO_CENTRO";
            console.log("elemento está a abajo");
        }
    };

    const datosPreparados = {
        ...datos,
        hover: mostrarGlobo,
        hoverRetirar: retirarGlobo,
    };
</script>

<section class="GlobosInformacionContexto">
    <GlobosInformacion {globo} {estado} />

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
