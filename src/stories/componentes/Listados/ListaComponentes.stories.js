import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ListaComponentes from '../../../componentes/Listados/ListaComponentes/ListaComponentes.svelte';
import Tarjeta from '../../../componentes/Tarjetas/Tarjeta/Tarjeta';

export default { title: 'Componentes/Listado/ListaComponentes' }

const elementos = [{
        componente: Tarjeta,
        data: {
            titulo: "Voluptate velit laborum voluptate excepteur velit commodo aute.",
            imagenUrl: "http://fakeimg.pl/300x200?text=1"
        }
    },
    {
        componente: Tarjeta,
        data: {
            titulo: "Est consectetur aliqua ipsum et consectetur duis est dolor.",
            imagenUrl: "http://fakeimg.pl/300x200?text=2"
        }
    },
    {
        componente: Tarjeta,
        data: {
            titulo: "Laborum magna cupidatat exd aute elit cupidatat.",
            imagenUrl: "http://fakeimg.pl/300x200?text=3"
        }
    },
]

export const ListaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaComponentes,
        datos: {
            elementos
        }
    },
});

export const ListaMensajeVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaComponentes,
        datos: {
            elementos: [],
            mensajeVacio: "No hay elementos"
        },
    },
});

export const ListaVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaComponentes,
        datos: {
            elementos: [],
        },
    },
});