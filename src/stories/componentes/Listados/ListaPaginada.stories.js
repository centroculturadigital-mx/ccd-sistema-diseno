import ListaPaginada from '../../../componentes/Listados/ListaPaginada/ListaPaginada.svelte';
import TarjetaHorizontal from '../../../componentes/Tarjetas/TarjetaHorizontal/TarjetaHorizontal';

export default { title: 'Componentes/Listado/ListaPaginada' }

const elementos = new Array(12).fill(0).map((e, i) => ({
    componente: TarjetaHorizontal,
    data: {
        titulo: "Est consectetur adipisicing minim occaecat aliqua ipsum et nisi consectetur duis est dolor.",
        imagenUrl: "http://fakeimg.pl/300x200?text=" + i
    }
}))

export const ListaPaginadaDefault = () => ({
    Component: ListaPaginada,
    props: {
        elementos,
        elementosPagina: 3
    },
});

let pagina = 0
export const ListaPaginadaFuncion = () => ({
    Component: ListaPaginada,
    props: {
        elementos,
        elementosPagina: 3,
        seleccionar: i => {
            console.log("seleccionaste:", i);
            pagina = i
        },
        pagina
    },
});