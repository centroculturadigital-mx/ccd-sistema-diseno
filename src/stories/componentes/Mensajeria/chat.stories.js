import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Chat from '../../../componentes/Mensajeria/Chat/Chat.svelte';
import ChatObjeto from "../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte";

import mensajes from '../../../data/mensajes';

export default { title: "Componentes/Mensajeria/Chat" }


const reacciones = [{
    id: "id0",
    imagen: "https://placeimg.com/32/32/reactions",
    texto: "Reacción 2",
    nombre: "reaccion-2",
},
{
    id: "id2",
    imagen: "https://placeimg.com/32/32/reactions",
    texto: "Reacción 1",
    nombre: "reaccion-1",

}]


export const chatDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Chat,
        datos: {
            mensajes,
            reacciones,
            enviar: mensaje => console.log("Enviaste mensaje", mensaje)

        }
    }
});