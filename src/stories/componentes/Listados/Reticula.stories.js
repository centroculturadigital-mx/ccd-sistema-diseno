import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Reticula from '../../../componentes/Listados/Reticula/Reticula.svelte';
import TarjetaVertical from '../../../componentes/Tarjetas/TarjetaVertical/TarjetaVertical';

import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Listado/Reticula' }

const elementos = new Array(12).fill(0).map(e => ({
    componente: TarjetaVertical,
    data: {
        titulo: "Est consectetur adipisicing minim occaecat aliqua ipsum et nisi consectetur duis est dolor.",
        imagen: ImagenArchivo
    }
}))


export const ReticulaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Reticula,
        datos: {
            elementos
        }
    },
});

export const ReticulaGrid = () => ({
    Component: ThemeTester,
    props: {
        componente: Reticula,
        datos: {
            layout: "grid",
            elementos
        }
    },
});

export const ReticulaVacia = () => ({
    Component: ThemeTester,
    props: {
        componente: Reticula,
        datos: {
            layout: "grid",
            mensajeVacio: "No hay elementos"
        }
    },
});