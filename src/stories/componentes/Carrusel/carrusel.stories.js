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

export const carruselTamanno = () => ({
    Component: Carrusel,
    props: {
        ancho: 800,
        alto: 400,
        elementos: [
            {
                a: "b"
            },
            {
                a: "b"
            },
            {
                a: "b"
            },
        ]
    }
});


export const carruselVertical = () => ({
    Component: Carrusel,
    props: {
        ancho: 400,
        alto: 500,
        direccion: "vertical",
        elementos: [
            {
                a: "b"
            },
            {
                a: "b"
            },
            {
                a: "b"
            },
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