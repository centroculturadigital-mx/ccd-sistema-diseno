import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonSecundario from '../../../elementos/botones/BotonSecundario/BotonSecundario.svelte';

export default { title: 'Elementos/Botones/BotónSecundario' }

export const botonSecundario = () => ({
    Component: ThemeTester,
    props: {
        componente: BotonSecundario,
        datos: {
            texto: 'Botón secundario',
        }
    },
});