import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ListaPaginada from '../../../componentes/Listados/ListaPaginada/ListaPaginada.svelte';
import ListaPaginadaTester from '../../../componentes/Listados/ListaPaginada/ListaPaginadaTester.svelte';
import TarjetaHorizontal from '../../../componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal';

export default { title: 'Componentes/Listado/ListaPaginada' }

const elementos = new Array(11).fill(0).map((e, i) => ({
    componente: TarjetaHorizontal,
    data: {
        chica: true,
        titulo: "Est consectetur adipisicing minim occaecat aliqua ipsum et nisi consectetur duis est dolor.",
        imagenUrl: "http://fakeimg.pl/300x200?text=" + i
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