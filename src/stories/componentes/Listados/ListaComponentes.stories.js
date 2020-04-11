import ListaComponentes from '../../../componentes/Listados/ListaComponentes/ListaComponentes.svelte';
import TarjetaHorizontal from '../../../componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal';

export default {title: 'Componentes/Listado/ListaComponentes'}

const elementos = [
    {
        componente: TarjetaHorizontal,
        data: {
            titulo: "Voluptate velit laborum voluptate excepteur consectetur cupidatat elit incididunt velit commodo aute.",
            imagenUrl: "http://fakeimg.pl/300x200?text=1"
        }
    },
    {
        componente: TarjetaHorizontal,
        data: {
            titulo: "Est consectetur adipisicing minim occaecat aliqua ipsum et nisi consectetur duis est dolor.",
            imagenUrl: "http://fakeimg.pl/300x200?text=2"
        }
    },
    {
        componente: TarjetaHorizontal,
        data: {
            titulo: "Laborum aliqua sit do in nostrud magna cupidatat ex fugiat enim ad aute elit cupidatat.",
            imagenUrl: "http://fakeimg.pl/300x200?text=3"
        }
    },
]

export const ListaDefault = () => ({
    Component: ListaComponentes,
    props: {
        elementos
    },
});

export const ListaMensajeVacio = () => ({
    Component: ListaComponentes,
    props: {
        elementos: [],
        mensajeVacio: "No hay elementos"
    },
});

export const ListaVacio = () => ({
    Component: ListaComponentes,
    props: {
        elementos: [],
    },
});