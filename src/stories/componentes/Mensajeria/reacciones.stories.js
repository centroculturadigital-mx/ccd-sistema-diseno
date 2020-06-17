import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Reacciones from '../../../componentes/Mensajeria/Reacciones/Reacciones.svelte';

export default { title: "Componentes/Mensajeria/Reacciones" }

let reacciones = [{
    id: "id0",
    nombre: "me-gusta",
    texto: "Me Gusta",
    icono: "feliz"
}, {
    id: "id1",
    nombre: "me-gusta",
    texto: "Me Gusta",
    icono: "feliz"
}, {
    id: "id2",
    nombre: "me-gusta",
    texto: "Me Gusta",
    icono: "feliz"
}, {
    id: "id3",
    nombre: "me-gusta",
    texto: "Me Gusta",
    icono: "feliz"
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