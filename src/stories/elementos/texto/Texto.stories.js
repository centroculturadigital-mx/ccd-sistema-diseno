import Texto from '../../../elementos/texto/Texto/Texto.svelte';

export default { title: 'Elementos/Texto/Texto' }


export const textoDefault = () => ({
    Component: Texto,
    props: {
        texto: 'Texto Default',
    },
});

export const textoBold = () => ({
    Component: Texto,
    props: {
        texto: 'Texto Bold',
        estilos: [
            "bold"
        ]
    },
});

export const textoItalic = () => ({
    Component: Texto,
    props: {
        texto: 'Texto Italic',
        estilos: [
            "italic"
        ]
    },
});

export const textoBoldItalic = () => ({
    Component: Texto,
    props: {
        texto: 'Texto Bold Italic',
        estilos: [
            "bold",
            "italic",
        ]
    },
});