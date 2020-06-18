import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TarjetaVertical from "../../../componentes/Tarjetas/TarjetaVertical/TarjetaVertical.svelte";

import imagenEjemplo from '../../../data/recursos/placeholder.png';

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

export const tarjetaVerticalDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
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
            titulo: 'Tarjeta con una acción.',
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
            titulo: 'Tarjeta con varias mas de una acción',
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
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
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
            titulo: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
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
            titulo: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            leyenda: "fechas",
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});
export const tarjetaVerticalTodo = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            leyenda: "17 junio 2020",
            sombra: true,
            acciones,
        }
    }
});