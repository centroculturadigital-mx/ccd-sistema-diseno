import Tarjeta from "../../../componentes/Tarjetas/Tarjeta/Tarjeta.svelte";
import Placeholder from '../../../../public/placeholder.jpg';

export default {title: "Componentes/Tarjetas/Tarjeta"}


export const tarjetaDefault = () => ({
    Component: Tarjeta,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3'
    }
});
export const tarjetaTamanoTitulo = () => ({
    Component: Tarjeta,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h1'
    }
});
export const tarjetaColorTitulo = () => ({
    Component: Tarjeta,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
    }
});
export const tarjetaColorTexto = () => ({
    Component: Tarjeta,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        texto:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'gray',
        color: 'gray',
    }
});
export const tarjetaColorFondo = () => ({
    Component: Tarjeta,
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
export const tarjetaSombra = () => ({
    Component: Tarjeta,
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