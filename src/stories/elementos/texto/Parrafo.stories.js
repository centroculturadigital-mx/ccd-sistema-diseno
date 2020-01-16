import Titulo from '../../../elementos/texto/Titulo/Titulo.svelte';

export default { title: 'Elementos/Texto/Parrafo' }


export const parrafoDefault = () => ({
    Component: Titulo,
    props: {
        texto: 'Parrafo todavia chaca',
    },
});