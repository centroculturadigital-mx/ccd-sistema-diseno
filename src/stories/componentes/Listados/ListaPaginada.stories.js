import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ListaPaginada from '../../../componentes/Listados/ListaPaginada/ListaPaginada.svelte';
import TarjetaHorizontal from '../../../componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal';

import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Listado/ListaPaginada' }

const elementos = new Array(11).fill(0).map((e, i) => ({
    componente: TarjetaHorizontal,
    data: {
        // chica: true,
        nombre: "Est consectetur adipisicing minim occaecat aliqua ipsum et nisi consectetur duis est dolor.",
        imagen: ImagenArchivo
    }
}))

export const ListaPaginadaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaPaginada,
        datos: {
            elementos,
            elementosPagina: 3
        }
    },
});

let pagina = 0
export const ListaPaginadaFuncion = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaPaginada,
        datos: {
            elementos,
            elementosPagina: 3,
            seleccionar: i => {
                pagina = i
            },
            pagina
        },
    },
});

export const ListaPaginadaAutomatico = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaPaginada,
        datos: {
            elementos,
            elementosPagina: 3
        },
    }
});