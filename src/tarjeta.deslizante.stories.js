import TarjetaDeslizanteVista from "./stories/tarjetas/TarjetaDeslizante/TarjetaDeslizanteVista.svelte";
import Placeholder from '../public/placeholder.texto.jpg';

export default {title: 'Tarjeta Deslizante'}


export const TarjetaDeslizanteDefault = () => ({
    Component: TarjetaDeslizanteVista,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        textoParrafo:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3'
    }
});
export const TarjetaDeslizanteTamanoTitulo = () => ({
    Component: TarjetaDeslizanteVista,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        textoParrafo:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h1'
    }
});
export const TarjetaDeslizanteColorTitulo = () => ({
    Component: TarjetaDeslizanteVista,
    props: {
        imagenUrl: Placeholder,
        titulo: 'Esto es un título.',
        textoParrafo:'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
        nivelTitulo: 'h3',
        colorTitulo: 'red',
    }
});