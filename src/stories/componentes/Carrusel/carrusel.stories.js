import Carrusel from "../../../componentes/Carrusel/Carrusel.svelte";

export default {title: "Componentes/Carrusel"}

const elementos = [
    {
        a: "b"
    },
    {
        a: "b"
    },
    {
        a: "b"
    },
    {
        a: "b"
    },
    {
        a: "b"
    },
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

export const carruselDefault = () => ({
    Component: Carrusel,
    props: {
        elementos
    }
});

export const carruselNoCentrado = () => ({
    Component: Carrusel,
    props: {
        elementos,
        centrado: false
    }
});

export const carruselMargenGrande = () => ({
    Component: Carrusel,
    props: {
        elementos,
        margen: 240
    }
});

export const carruselEmpezarDesdeIndice = () => ({
    Component: Carrusel,
    props: {
        elementos,
        activo: 3
    }
});

export const carruselTamanno = () => ({
    Component: Carrusel,
    props: {
        ancho: 800,
        alto: 400,
        elementos
    }
});


export const carruselVertical = () => ({
    Component: Carrusel,
    props: {
        ancho: 400,
        alto: 500,
        direccion: "vertical",
        elementos
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