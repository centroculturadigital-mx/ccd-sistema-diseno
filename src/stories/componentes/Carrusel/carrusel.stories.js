import Carrusel from "../../../componentes/Carrusel/Carrusel.svelte";

export default {title: "Componentes/Carrusel"}


export const carruselDefault = () => ({
    Component: Carrusel,
    props: {
        elementos: [
            {
                a: "b"
            }
        ]
    }
});

export const carruselArrayVacio = () => ({
    Component: Carrusel,
    props: {
        elementos: []
    }
});

export const carruselVacio = () => ({
    Component: Carrusel,
    props: {}
});