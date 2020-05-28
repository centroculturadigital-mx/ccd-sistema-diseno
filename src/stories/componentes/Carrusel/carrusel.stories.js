import Carrusel from "../../../componentes/Carrusel/Carrusel.svelte";
import Logo from "../../../componentes/Logo/Logo.svelte";
import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
import Prueba from "./Prueba/Prueba.svelte";

import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Carrusel" }

// const generarComponente = i=>()

const elementos = [{
        componente: Prueba,
        data: {
            nombre: "Prueba"
        }
    },
    {
        componente: Logo,
        data: {
            logotipo: ImagenArchivo,
            enlace: "http://enlace.com",
            nombre: "Un Logo"
        }
    },
    {
        componente: Parrafo,
        data: {
            texto: "Et aliqua nisi pariatur laboris aliquip mollit qui dolore enim anim est exercitation adipisicing pariatur."
        }
    },
    {
        componente: Imagen,
        data: {
            imagenUrl: ImagenArchivo,
            altTexto: "Una imagen",
            altura: "10rem",
        }
    },
    {
        componente: Prueba,
        data: {
            nombre: "Prueba 1"
        }
    },
    {
        componente: Parrafo,
        data: {
            texto: "Eiusmod enim irure ea commodo. Sit dolore Lorem dolor exercitation irure reprehenderit veniam ad labore."
        }
    },
    {
        componente: Imagen,
        data: {
            imagenUrl: ImagenArchivo,
            altTexto: "Otra imagen",
            altura: "6rem",
        }
    },
    {
        componente: Prueba,
        data: {
            nombre: "Prueba 2"
        }
    },
    {
        componente: Prueba,
        data: {
            nombre: "Prueba 3"
        }
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

export const carruselAutoplay = () => ({
    Component: Carrusel,
    props: {
        elementos,
        pagina: 3,
        direccion: "vertical",
        alto: 400,
        autoplay: true
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