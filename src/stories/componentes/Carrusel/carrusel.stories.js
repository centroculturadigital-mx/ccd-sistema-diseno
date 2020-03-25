import Carrusel from "../../../componentes/Carrusel/Carrusel.svelte";
import Prueba from "./Prueba/Prueba.svelte";

export default {title: "Componentes/Carrusel"}

const generarComponente = i=>({
    componente: Prueba,
    data: {
        "nombre": `Prueba ${i+1}`
    }
})

const elementos = new Array(7).fill(0).map((e,i)=>generarComponente(i))


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
        elementos,
        alto: 400
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
        direccion: "vertical",
        alto: 400
    }
});

export const carruselVerticalPorPaginaTres = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 3,
        direccion: "vertical",
        alto: 400
    }
});
export const carruselPorPaginaTres = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 3
    }
});
export const carruselPorPaginaSeis = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 6,
        ancho: 900
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


export const carruselEmpezarDesdeIndice = () => ({
    Component: Carrusel,
    props: {
        elementos,
        activo: 3
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