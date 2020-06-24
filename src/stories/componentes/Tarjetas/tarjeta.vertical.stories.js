import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TarjetaVertical from "../../../componentes/Tarjetas/TarjetaVertical/TarjetaVertical.svelte";

import imagenEjemplo from '../../../data/recursos/placeholder.png';

import moment from 'moment';

export default { title: "Componentes/Tarjetas/Tarjeta Vertical" }

let acciones = [{
        texto: "Guardar",
        accion: () => console.log("Guardado"),
        //boton: "primario" // default. este campo es opcional
    },
    {
        texto: "Eliminar",
        accion: () => confirm("Eliminar"),
        boton: "peligro"
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

export const tarjetaVerticalDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Esto es un título.',
            descripcion: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3'
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
            acciones: [{
                texto: "Guardar",
                accion: () => console.log("Guardado"),
            }],
        }
    }
});
export const tarjetaVerticalAcciones = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            nombre: 'Tarjeta con varias mas de una acción',
            nivelTitulo: 'h3',
            acciones,
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
export const tarjetaVerticalTodo = () => ({
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
            acciones,
            enlaces
        }
    }
});