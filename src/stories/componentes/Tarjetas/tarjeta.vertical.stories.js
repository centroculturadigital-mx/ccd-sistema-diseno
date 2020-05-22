import TarjetaVertical from "../../../componentes/Tarjetas/TarjetaVertical/TarjetaVertical.svelte";
import imagenEjemplo from '../../../../public/placeholder.jpg';

export default {title: "Componentes/Tarjetas/Tarjeta Vertical"}


export const tarjetaVerticalDefault = () => ({
    Component: TarjetaVertical,
    props: {
        imagenUrl: imagenEjemplo,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3'
    }
});
export const tarjetaVerticalTamanoTitulo = () => ({
    Component: TarjetaVertical,
    props: {
        imagenUrl: imagenEjemplo,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h1'
    }
});
export const tarjetaVerticalColorTitulo = () => ({
    Component: TarjetaVertical,
    props: {
        imagenUrl: imagenEjemplo,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
    }
});
export const tarjetaVerticalColorTexto = () => ({
    Component: TarjetaVertical,
    props: {
        imagenUrl: imagenEjemplo,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
    }
});
export const tarjetaVerticalColorFondo = () => ({
    Component: TarjetaVertical,
    props: {
        imagenUrl: imagenEjemplo,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
        colorBG: 'lightgray'
    }
});
export const tarjetaVerticalSombra = () => ({
    Component: TarjetaVertical,
    props: {
        imagenUrl: imagenEjemplo,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
        colorBG: 'white',
        sombra: true,
    }
});