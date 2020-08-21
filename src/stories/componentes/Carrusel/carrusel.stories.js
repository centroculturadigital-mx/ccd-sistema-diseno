import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
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
            imagen: ImagenArchivo,
            alt: "Una imagen",
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
            imagen: ImagenArchivo,
            alt: "Otra imagen",
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
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos
        }
    }
});


export const carruselVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            estilos: {
                direccion: "vertical",
                alto: 400
            }
        }
    }
});

export const carruselPorPaginaDos = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            pagina: 2
        }
    }
});

export const carruselVerticalPorPaginaDos = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            pagina: 2,
            estilos: {
                alto: 400,
                direccion: "vertical",
            }
        }
    }
});

export const carruselAutoplay = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            pagina: 3,
            autoplay: true,
            estilos: {
                alto: 400,
                direccion: "vertical",
            }
        }
    }
});


export const carruselVerticalPorPaginaTres = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            pagina: 3,
            estilos: {
                direccion: "vertical",
                alto: 400
            }
        }
    }
});
export const carruselPorPaginaTres = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            pagina: 3
        }
    }
});
export const carruselPorPaginaSeis = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            pagina: 6,
            estilos: {
                ancho: 900
            }
        }
    }
});


export const carruselTamanno = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            estilos: {
                ancho: 800,
                alto: 400,
            }
        }
    }
});


export const carruselEmpezarDesdeIndice = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            activo: 3
        }
    }
});

export const carruselSinFlechas = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            activo: 3,
            flechas: false

        }
    }
});

export const carruselSinNavegacion = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            activo: 3,
            navegacion: false
        }
    }
});

export const carruselSinNavegacionNiFlechas = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            activo: 3,
            autoplay: true,
            flechas: false,
            navegacion: false
        }
    }
});


export const carruselArrayVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos: []
        }
    }
});

export const carruselVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {

        }
    }
});