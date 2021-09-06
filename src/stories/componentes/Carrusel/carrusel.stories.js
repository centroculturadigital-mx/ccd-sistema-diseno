import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Carrusel from "../../../componentes/Carrusel/Carrusel.svelte";
import Logo from "../../../componentes/Logo/Logo.svelte";
import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
import Prueba from "./Prueba/Prueba.svelte";

import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Complejos/Carrusel" }

let tamannos = {
    cargando: "https://fakeimg.pl/320x320/?text=Cargando",
    xl: {
        x1: "https://fakeimg.pl/1680x1680/ff0000/?text=1680-1x",
        x2: "https://fakeimg.pl/1680x1680/ff0000/?text=1680-2x",
        x3: "https://fakeimg.pl/1680x1680/ff0000/?text=1680-3x",
    },
    lg: {
        x1: "https://fakeimg.pl/1220x1220/00ff00/?text=1220-1x",
        x2: "https://fakeimg.pl/1220x1220/00ff00/?text=1220-2x",
        x3: "https://fakeimg.pl/1220x1220/00ff00/?text=1220-3x",
    },
    md: {
        x1: "https://fakeimg.pl/768x768/0000ff/?text=768-1x",
        x2: "https://fakeimg.pl/768x768/0000ff/?text=768-2x",
        x3: "https://fakeimg.pl/768x768/0000ff/?text=768-3x",
    },
    sm: {
        x1: "https://fakeimg.pl/465x465/0f0f0f/?text=465-1x",
        x2: "https://fakeimg.pl/465x465/0f0f0f/?text=465-2x",
        x3: "https://fakeimg.pl/465x465/0f0f0f/?text=465-3x",
    },
    xs: {
        x1: "https://fakeimg.pl/320x320/f0f0ff/?text=320-1x",
        x2: "https://fakeimg.pl/465x465/0f0f0f/?text=320-2x",
        x3: "https://fakeimg.pl/465x465/0f0f0f/?text=320-3x",
    }
}

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
export const carruselConFondo = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos,
            fondo: true,
            navegacion: false

        }
    }
});
export const carruselConImagen = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos: [
                {
                    componente: Imagen,
                    data: {
                        tamannos,
                        nombre: "Lorem Ipsum Dolor",
                        descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
                        maximizar: () => console.log("Abre modal"),
                    }
                }
            ],
            fondo: true,
            navegacion: false
        }
    }
});
export const carruselConImagenDescripcionAfuera = () => ({
    Component: ThemeTester,
    props: {
        componente: Carrusel,
        datos: {
            elementos: [
                {
                    componente: Imagen,
                    data: {
                        tamannos,
                        nombre: "Lorem Ipsum Dolor",
                        descripcion: "Lorem Ipsum Dolor sit amet tiniebla sonorum inferno",
                        descripcionPosicion: true,
                        maximizar: () => console.log("Abre modal"),
                        estilos: {
                            ajuste: "cover"
                        }
                    }
                }
            ],
            fondo: true,
            navegacion: false
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