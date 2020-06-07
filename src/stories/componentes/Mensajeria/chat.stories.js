import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Chat from '../../../componentes/Mensajeria/Chat/Chat.svelte';
import ChatObjeto from "../../../componentes/Mensajeria/Chat/ChatObjeto/ChatObjeto.svelte";

export default { title: "Componentes/Mensajeria/Chat" }

const usuario = {
    id: "id_usuario",
    nombre: "Nobre usuario",
    avatar: "https://fakeimg.pl/100?text=CCD",
    mensaje: "Soy un mensaje de <a href='#'>texto</a> para el chat",
    ofertas: []
};
const usuarioOferta = {
    id: "id_usuario",
    nombre: "Nobre usuario",
    avatar: "https://fakeimg.pl/100?text=CCD",
    mensaje: "Soy un mensaje de <a href='#'>texto</a> para el chat",
    ofertas: [{
        imagen: "https://fakeimg.pl/300?text=Oferta",
        titulo: "#01 - Titulo de objeto ofertado",
        contenido: "Breve descripción objeto oferta en tiempo real..."
    }]
};

export const chatDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Chat,
        datos: {
            // usuario
        }
    }
});
export const chatMensaje = () => ({
    Component: ThemeTester,
    props: {
        componente: Chat,
        datos: {
            usuario
        }
    }
});
export const chatMensajeConOferta = () => ({
    Component: ThemeTester,
    props: {
        componente: Chat,
        datos: {
            usuario: usuarioOferta
        }
    }
});