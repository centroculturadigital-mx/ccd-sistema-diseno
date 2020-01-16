import Titulo from '../../../elementos/texto/Titulo/Titulo.svelte';

export default { title: 'Elementos/Texto/Titulo' }


export const tituloDefault = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo Default',
        color: '#000'
    },
});

export const tituloColor = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo Color',
        color: '#f0a'
    },
});

export const titulo1 = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo 1',
        nivelTitulo: 'h1'
    },
});

export const titulo2 = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo 2',
        nivelTitulo: 'h2'
    },
});

export const titulo3 = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo 3',
        nivelTitulo: 'h3'
    },
});

export const titulo4 = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo 4',
        nivelTitulo: 'h4'
    },
});

export const titulo5 = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo 5',
        nivelTitulo: 'h5'
    },
});

export const titulo6 = () => ({
    Component: Titulo,
    props: {
        titulo: 'Titulo 6',
        nivelTitulo: 'h6'
    },
});