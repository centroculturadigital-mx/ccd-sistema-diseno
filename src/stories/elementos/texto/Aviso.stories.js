import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Aviso from '../../../elementos/texto/Aviso/Aviso.svelte';

export default { title: 'Elementos/Texto/Aviso' }

export const avisoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Aviso,
        datos: {
            texto: 'Un mensaje de aviso',
        }
    },
});

export const avisoError = () => ({
    Component: ThemeTester,
    props: {
        componente: Aviso,
        datos: {
            texto: new Error('Un mensaje de error'),
        },
    }
});