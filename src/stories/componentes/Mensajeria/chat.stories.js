import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Chat from '../../../componentes/Mensajeria/Chat/Chat.svelte';
import ChatPrueba from './ChatPrueba.svelte';

import mensajes from '../../../data/mensajes';
import reacciones from '../../../data/reacciones';

export default { title: "Componentes/Mensajeria/Chat" }

export const chatDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatPrueba,
        datos: {
            
            mensajes,
            reacciones,
            enviar: mensaje => console.log("Enviaste mensaje", mensaje)

        }
    }
});

export const chatAnonimo = () => ({
    Component: ThemeTester,
    props: {
        componente: ChatPrueba,
        datos: {
            
            mensajes,
            reacciones,
            enviar: mensaje => console.log("Enviaste mensaje", mensaje),
            
            anonimoPermitir: true

        }
    }
});


export const chatInactivo = () => ({
    Component: ThemeTester,
    props: {
        componente: Chat,
        datos: {
            
            mensajes,
            reacciones,
            enviar: mensaje => console.log("Enviaste mensaje", mensaje),
            activo: false,
            textoInactivo: "Texto opcional para estado inactivo"

        }
    }
});