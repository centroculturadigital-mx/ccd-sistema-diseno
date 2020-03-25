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


export const carruselVertical = () => ({
    Component: Carrusel,
    props: {
        direccion: "vertical",
        elementos
    }
});

export const carruselPorPaginaDos = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 2
    }
});

export const carruselVerticalPorPaginaDos = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 2,
        direccion: "vertical"
    }
});
export const carruselPorPaginaTres = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 3
    }
});
export const carruselPorPaginaCuatro = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 4
    }
});
export const carruselPorPaginaSiete = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 6
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




// export const carruselCentrado = () => ({
//     Component: Carrusel,
//     props: {
//         elementos,
//         centrado: true
//     }
// });



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