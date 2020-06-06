import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Chat from '../../../componentes/Mensajeria/Chat/Chat.svelte';

export default { title: "Componentes/Mensajeria/Chat" }

export const chatDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Chat,
        datos: {

        }
    }
});