import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Reacciones from '../../../componentes/Mensajeria/Reacciones/Reacciones.svelte';

export default { title: "Componentes/Mensajeria/Reacciones" }

let reacciones = [{
    id: "id0",
    nombre: "nombre-reaccion-1",
    texto: "Reacción 1",
    imagen: "https://placeimg.com/32/32/reactions"
}, {
    id: "id1",
    nombre: "nombre-reaccion-2",
    texto: "Reacción 2",
    imagen: "https://placeimg.com/32/32/reactions"
}, {
    id: "id2",
    nombre: "nombre-reaccion-3",
    texto: "Reacción 3",
    imagen: "https://placeimg.com/32/32/reactions"
}, {
    id: "id3",
    nombre: "nombre-reaccion-4",
    texto: "Reacción 4",
    imagen: "https://placeimg.com/32/32/reactions"
}]

export const reaccionesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Reacciones,
        datos: {
            reacciones
        }
    }
});