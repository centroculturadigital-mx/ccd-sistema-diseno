import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Chat from '../../../componentes/Mensajeria/Chat/Chat.svelte';
import ChatObjeto from "../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte";

import moment from 'moment';

import imagen from '../../../data/recursos/placeholder.png';
import avatar from '../../../data/recursos/avatar.png';

export default { title: "Componentes/Mensajeria/Chat" }

const mensajes = new Array(100).fill(true).map((e, i) => ({
    usuario: {
        id: "abc",
        nombre: "Nombre usuario",
        imagen: avatar,
        enlace: "/usuarios/nombre-usuario"
    },
    mensaje: "Lorem ipsum dolor sit amet consectetur adipisicingSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
    fechaCreacion: moment().format('h:m'),
    reacciones: [{
            id: "id0",
            imagen: "https://placeimg.com/32/32/reactions",
            usuarios: []
        },
        {
            id: "id2",
            imagen: "https://placeimg.com/32/32/reactions",
            usuarios: []
        }
    ]
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