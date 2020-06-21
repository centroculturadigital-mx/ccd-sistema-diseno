import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ChatMensaje from '../../../componentes/Mensajeria/Chat/ChatMensaje/ChatMensaje.svelte';
import ChatObjetoEjemplo from '../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjetoEjemplo.svelte';

import moment from 'moment';

import imagen from '../../../data/recursos/placeholder.png';
import avatar from '../../../data/recursos/avatar.png';

import mensaje from '../../../data/chatMensaje';

export default { title: "Componentes/Mensajeria/ChatMensaje" }

export const chatMensajeDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatMensaje,
        datos: {
            mensaje: {
                usuario: {
                    id: "abc",
                    nombre: "Nombre usuario",
                    imagen: avatar,
                    enlace: "/usuarios/nombre-usuario"
                },
                mensaje: "Lorem ipsum dolor sit amet consectetur adipisicing, Lorem ipsum dolor sit amet consectetur adipisicing.",
                fechaCreacion: moment().format('hh:mm'),
                reacciones: [{
                    id: "id0",
                    imagen: "https://placeimg.com/32/32/reactions",
                    usuarios: []
                }]
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