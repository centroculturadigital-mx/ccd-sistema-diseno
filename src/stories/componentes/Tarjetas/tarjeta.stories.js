import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Tarjeta from "../../../componentes/Tarjetas/Tarjeta/Tarjeta.svelte";
import imagenEjemplo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Tarjetas/Tarjeta" }

export const tarjetaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3'
        }
    }
});
export const tarjetaTamanoTitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h1'
        }
    }
});

export const tarjetaSombra = () => ({
    Component: ThemeTester,
    props: {
        componente: Tarjeta,
        datos: {
            imagen: imagenEjemplo,
            titulo: 'Esto es un título.',
            texto: 'Mei sanctus delenit denique in, dolore legere at eos, eam putant deserunt ei. Vidit adhuc eam ne, partem animal ne pro. Esse eligendi no qui, feugiat nonumes voluptatibus sit ei. Duis nihil aperiri sed ei.',
            nivelTitulo: 'h3',
            sombra: true,
        }
    }
});