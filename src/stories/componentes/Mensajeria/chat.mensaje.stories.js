import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ChatMensaje from '../../../componentes/Mensajeria/Chat/ChatMensaje/ChatMensaje.svelte';
import ChatObjetoEjemplo from '../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjetoEjemplo.svelte';


import imagen from '../../../data/recursos/placeholder.png';

import reacciones from '../../../data/reacciones';
import mensajes from '../../../data/mensajes';

const mensaje = mensajes[0]

export default { title: "Componentes/Mensajeria/ChatMensaje" }

export const chatMensajeDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatMensaje,
        datos: {
            reacciones,
            mensaje: {
                ...mensaje,
                reacciones: []
            }
        }
    }
});
export const chatMensajeConReacciones = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatMensaje,
        datos: {
            mensaje
        }
    }
});
export const chatMensajeObjetoConReacciones = () => ({
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