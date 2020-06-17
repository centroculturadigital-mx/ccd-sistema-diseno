import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Chat from '../../../componentes/Mensajeria/Chat/Chat.svelte';
import ChatObjeto from "../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte";

import imagen from '../../../data/recursos/placeholder.png';
import avatar from '../../../data/recursos/avatar.png';



export default { title: "Componentes/Mensajeria/Chat" }

const mensajes = new Array(6).fill(true).map((e, i) => ({
    usuario: {
        id: "abc",
        nombre: "Nombre usuario",
        imagen: avatar
    },
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing.",
}));

export const chatDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Chat,
        datos: {
            mensajes,
            enviar: mensaje => console.log("Enviaste mensaje", mensaje)

        }
    }
});