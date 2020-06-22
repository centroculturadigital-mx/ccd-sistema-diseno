import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ListaComponentes from '../../../componentes/Listados/ListaComponentes/ListaComponentes.svelte';
import Tarjeta from '../../../componentes/Tarjetas/Tarjeta/Tarjeta';

import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Listado/ListaComponentes' }

const elementos = [{
        componente: Tarjeta,
        data: {
            nombre: "Voluptate velit laborum voluptate excepteur velit commodo aute.",
            imagen: ImagenArchivo
        }
    },
    {
        componente: Tarjeta,
        data: {
            nombre: "Est consectetur aliqua ipsum et consectetur duis est dolor.",
            imagen: ImagenArchivo
        }
    },
    {
        componente: Tarjeta,
        data: {
            nombre: "Laborum magna cupidatat exd aute elit cupidatat.",
            imagen: ImagenArchivo
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