import Aviso from '../../../elementos/texto/Aviso/Aviso.svelte';

export default { title: 'Elementos/Texto/Aviso' }


export const parrafoDefault = () => ({
    Component: Aviso,
    props: {
        texto: 'Un mensaje de aviso',
    },
});