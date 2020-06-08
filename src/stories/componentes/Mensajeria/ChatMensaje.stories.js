import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ChatMensaje from '../../../componentes/Mensajeria/Chat/ChatMensaje/ChatMensaje.svelte';
import ChatObjetoEjemplo from '../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjetoEjemplo.svelte';

import imagen from '../../../data/recursos/placeholder.png';
import avatar from '../../../data/recursos/avatar.png';

export default { title: "Componentes/Mensajeria/ChatMensaje" }

const mensaje = {
    usuario: {
        id: "abc",
        nombre: "Nombre usuario",
        imagen: avatar
    },
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing.",
}

export const chatMensajeDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatMensaje,
        datos: {
            mensaje
        }
    }
});
export const chatMensajeObjeto = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatMensaje,
        datos: {
            mensaje,
            objeto: {
                componente: ChatObjetoEjemplo,
                datos: {
                    titulo: "Titulo de objeto",
                    texto: "Magna ad id quis excepteur eu nostrud sint esse sunt sint officia dolore ut.",
                    imagen
                }
            }
        }
    }
});