import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TarjetaVertical from "../../../componentes/Tarjetas/TarjetaVertical/TarjetaVertical.svelte";
import imagenEjemplo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Tarjetas/Tarjeta Vertical" }


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
export const tarjetaVerticalTamanoTitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaVertical,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h1'
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