import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
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