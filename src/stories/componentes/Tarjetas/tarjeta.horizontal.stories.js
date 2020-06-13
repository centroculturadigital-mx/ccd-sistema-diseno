import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TarjetaHorizontal from "../../../componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal.svelte";
import imagenEjemplo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Tarjetas/Tarjeta Horizontal" }

export const tarjetaHorizontalDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaHorizontal,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3'
        }
    }
});
export const tarjetaHorizontalTamanoTitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaHorizontal,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h1'
        }
    }
});

export const tarjetaHorizontalSombra = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaHorizontal,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});
export const tarjetaHorizontalChica = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaHorizontal,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            nivelTitulo: 'h3',
            chica: true,
        }
    }
});
export const tarjetaHorizontalSubtitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaHorizontal,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            nivelTitulo: 'h3',
        }
    }
});
export const tarjetaHorizontalLeyenda = () => ({
    Component: ThemeTester,
    props: {
        componente: TarjetaHorizontal,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            subtitulo: "Esto es un subtitulo",
            leyenda: "Fechas",
            nivelTitulo: 'h3',
        }
    }
});