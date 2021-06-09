import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Tarjeta from "../../../componentes/Tarjetas/Tarjeta/Tarjeta.svelte";

import imagenEjemplo from '../../../data/recursos/placeholder.png';

import moment from 'moment';

export default { title: "Componentes/Complejos/Tarjetas/Tarjeta" }

let accionesFunciones = [{
        texto: "Acción 1",
        accion: () => console.log("Acción 1"),
    },
    {
        texto: "Acción 2",
        accion: () => confirm("Acción 2"),
        // variante: "PELIGRO"
    }
];
let accionesEnlaces = [{
        texto: "Enlace 1",
        enlace: "/enlace/1"
    },
    {
        texto: "Enlace 2",
        enlace: "/enlace/2"
    }
];

let enlaces = [{
        enlace: "#",
        texto: "Enlace mediano"
    },
    {
        enlace: "#",
        texto: "Enlace un poco mas largo"
    }, {
        enlace: "#",
        texto: "Enlace 3"
    },
    {
        enlace: "#",
        texto: "Enlace 4"
    },
];

let pleca = {
    texto: "En vivo ahora!",
    icono: "play"
};

export const tarjetaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            pleca,
            enlaces
        }
    }
});

export const tarjetaVideo = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            // pleca,
            video: 'https://www.youtube.com/embed/C0DPdy98e4c',
            enlaces
        }
    }
});

export const tarjetaSinImagen = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            // pleca,
            enlaces
        }
    }
});

export const tarjetaSinImagenConPleca = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            pleca,
            enlaces
        }
    }
});

export const tarjetaExtractoCorto = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            extractoExtension: 12,
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            pleca,
            enlaces
        }
    }
});

export const tarjetaImagenTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una acción.',
        }
    }
});

export const tarjetaAccion = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una acción.',
            nivelTitulo: 'h3',
            acciones: accionesFunciones.slice(0, 1),
        }
    }
});


export const tarjetaAcciones = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con varias acciones',
            nivelTitulo: 'h3',
            acciones: accionesFunciones,
        }
    }
});

export const tarjetaAccionEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con enlaces acción',
            nivelTitulo: 'h3',
            acciones: accionesEnlaces,
        }
    }
});

export const tarjetaSombra = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});
export const tarjetaSubtitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});
export const tarjetaLeyenda = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            leyenda: moment().format("DD/MMMM/YYYY"),
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});
export const tarjetaConEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: moment().format("DD/MMMM/YYYY"),
            sombra: true,
            // enlaces, 
            enlace: "#"
        }
    }
});
export const tarjetaEnlaces = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
            enlaces,
        }
    }
});
export const tarjetaAccionesConEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con varias mas de una acción',
            nivelTitulo: 'h3',
            acciones: accionesFunciones,
            enlace: "#"
        }
    }
});

export const tarjetaConPleca = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una pleca de aviso',
            acciones: accionesFunciones,
            pleca: {
                texto: "Texto pleca",
                colores: {
                    fondo: "#f00",
                    texto: "#fff"
                }
            },
        }
    }
});

export const tarjetaConPlecaIcono = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una pleca de aviso',
            acciones: accionesFunciones,
            pleca: {
                texto: "Texto pleca",
                icono: "mas",
                colores: {
                    fondo: "#f00",
                    texto: "#fff"
                }
            },
        }
    }
});

export const tarjetaConPlecaIconoColor = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una pleca de aviso',
            acciones: accionesFunciones,
            pleca: {
                texto: "Texto pleca",
                icono: "mas",
                colores: {
                    fondo: "#0561ad",
                    texto: "#0bc1ed"
                }
            },
        }
    }
});


export const tarjetaConPlecaConTextos = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una pleca de aviso',
            acciones: accionesFunciones,
            pleca: {
                textos: [
                    "Primer texto",
                    "Segundo",
                    "Tercero",
                ],
                colores: {
                    fondo: "#f00",
                    texto: "#fff"
                }
            },
        }
    }
});
export const tarjetaTipoVertical = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            pleca,
            enlaces,
            apariencia: "Vertical"
        }
    }
});
export const tarjetaTipoVerticalSinEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            pleca,
            enlaces,
            apariencia: "Vertical"
        }
    }
});
export const tarjetaTipoHorizontal = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            pleca,
            enlaces,
            apariencia: "Horizontal",
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
        }
    }
});
export const tarjetaTipoHorizontalSinEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            extracto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            pleca,
            enlaces,
            apariencia: "Horizontal",
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
        }
    }
});
export const tarjetaTipoChica = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título para la tarjeta apariencia chica.',
            nivelTitulo: 'h4',
            sombra: true,
            subtitulo: "Esto es un subtítulo",
            leyenda: "Un texto configurable",
            apariencia: "Chica"
        }
    }
});
export const tarjetaTipoChicaSinEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título para la tarjeta apariencia chica.',
            nivelTitulo: 'h4',
            sombra: true,
            subtitulo: "Esto es un subtítulo",
            leyenda: "Un texto configurable",
            apariencia: "Chica"
        }
    }
});