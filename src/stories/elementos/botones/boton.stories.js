import Boton from '../../../elementos/botones/Boton/Boton.svelte';

export default { title: 'Elementos/Botones/Botón' }

export const botonDefault = () => ({
    Component: Boton,
    props: {
        texto: 'Botón',
    },
});
export const botonColorTexto = () => ({
    Component: Boton,
    props: {
        texto: 'Color de texto',
        color: 'orange',
    },
});
export const botonColorFondo = () => ({
    Component: Boton,
    props: {
        texto: 'Color de fondo',
        colorBG: 'orange',
    },
});
export const botonPaddingX = () => ({
    Component: Boton,
    props: {
        texto: 'Padding X',
        paddingX: '6rem',
    },
});
export const botonRadius = () => ({
    Component: Boton,
    props: {
        texto: '!',
        radius: '10px',
    },
});
