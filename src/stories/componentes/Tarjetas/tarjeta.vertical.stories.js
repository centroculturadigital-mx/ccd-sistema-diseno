import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TarjetaVertical from "../../../componentes/Tarjetas/TarjetaVertical/TarjetaVertical.svelte";

import imagenEjemplo from '../../../data/recursos/placeholder.png';

import moment from 'moment';

export default { title: "Componentes/Tarjetas/Tarjeta Vertical" }

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
    colores: {
        fondo: "#FF0000",
        texto: "#FFF"
    },
    texto: "En vivo ahora!",
    icono: "play"
};

export const tarjetaVerticalDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            enlace: {
                url: "http://un-enlace.com",
                externo: true
            },
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtítulo",
            descripcion: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "Un texto configurable",
            sombra: true,
            acciones: [accionesFunciones[0], accionesEnlaces[0]],
            pleca,
            enlaces
        }
    }
});
export const tarjetaVerticalAccion = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una acción.',
            nivelTitulo: 'h3',
            acciones: accionesFunciones.slice(0, 1),
        }
    }
});
export const tarjetaVerticalAcciones = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con varias acciones',
            nivelTitulo: 'h3',
            acciones: accionesFunciones,
        }
    }
});

export const tarjetaVerticalAccionEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con enlaces acción',
            nivelTitulo: 'h3',
            acciones: accionesEnlaces,
        }
    }
});

export const tarjetaVerticalSombra = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            descripcion: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});
export const tarjetaVerticalSubtitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            descripcion: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});
export const tarjetaVerticalLeyenda = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
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
export const tarjetaVerticalConEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            descripcion: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: moment().format("DD/MMMM/YYYY"),
            sombra: true,
            // enlaces, 
            enlace: "#"
        }
    }
});
export const tarjetaVerticalEnlaces = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            descripcion: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
            enlaces,
        }
    }
});
export const tarjetaVerticalAccionesConEnlace = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con varias mas de una acción',
            nivelTitulo: 'h3',
            acciones: accionesFunciones,
            enlace: "#"
        }
    }
});
export const tarjetaVerticalConPleca = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con una pleca de aviso',
            acciones: accionesFunciones,
            pleca,
        }
    }
});