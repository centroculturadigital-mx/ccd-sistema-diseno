import TarjetaHorizontal from "../../../componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal.svelte";
import Placeholder from '../../../../public/placeholder.jpg';

export default {title: "Componentes/Tarjetas/Tarjeta Horizontal"}


export const tarjetaHorizontalDefault = () => ({
    Component: TarjetaHorizontal,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3'
    }
});
export const tarjetaHorizontalTamanoTitulo = () => ({
    Component: TarjetaHorizontal,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h1'
    }
});
export const tarjetaHorizontalColorTitulo = () => ({
    Component: TarjetaHorizontal,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
    }
});
export const tarjetaHorizontalColorTexto = () => ({
    Component: TarjetaHorizontal,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
    }
});
export const tarjetaHorizontalColorFondo = () => ({
    Component: TarjetaHorizontal,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
        colorBG: 'lightgray'
    }
});
export const tarjetaHorizontalSombra = () => ({
    Component: TarjetaHorizontal,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
        colorBG: 'white',
        sombra: true,
    }
});
export const tarjetaHorizontalChica = () => ({
    Component: TarjetaHorizontal,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
        colorBG: 'white',
        chica: true,
    }
});