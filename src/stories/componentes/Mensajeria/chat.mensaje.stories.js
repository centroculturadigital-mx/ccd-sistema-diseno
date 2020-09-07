import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ChatMensaje from '../../../componentes/Mensajeria/Chat/ChatMensaje/ChatMensaje.svelte';
import TarjetaHorizontalChica from '../../../componentes/Tarjetas/TarjetaHorizontalChica/TarjetaHorizontalChica.svelte';


import imagen from '../../../data/recursos/placeholder.png';

import reacciones from '../../../data/reacciones';
import mensajes from '../../../data/mensajes';

export default { title: "Componentes/Mensajeria/Chat/ChatMensaje" }

const mensaje = mensajes[0]

let datos = {
    imagen,
    titulo: "Titulo de objeto",
    texto: "Magna ad id quis excepteur eu nostrud sint esse sunt sint officia dolore ut.",
}

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
            mensaje: {
                ...mensaje,
                objeto: {
                    componente: TarjetaHorizontalChica,
                    datos
                }
            },

        }
    }
});