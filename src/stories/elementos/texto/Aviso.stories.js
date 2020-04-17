import Aviso from '../../../elementos/texto/Aviso/Aviso.svelte';

export default { title: 'Elementos/Texto/Aviso' }


export const avisoDefault = () => ({
    Component: Aviso,
    props: {
        texto: 'Un mensaje de aviso',
    },
});

export const avisoError = () => ({
    Component: Aviso,
    props: {
        texto: new Error('Un mensaje de error'),
    },
});