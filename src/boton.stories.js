import BotonView from './stories/botones/BotonView.svelte';

export default { title: 'Boton' }

// BotonView
export const botonDefault = () => ({
    Component: BotonView,
    props: {
        texto: 'Boton Default',
    },
});
export const botonColorTexto = () => ({
    Component: BotonView,
    props: {
        texto: 'Color de texto',
        color: 'orange',
    },
});
export const botonColorFondo = () => ({
    Component: BotonView,
    props: {
        texto: 'Color de fondo',
        colorBG: 'orange',
    },
});
export const botonPaddingX = () => ({
    Component: BotonView,
    props: {
        texto: 'Padding',
        paddingX: 6,
    },
});
export const botonRadius = () => ({
    Component: BotonView,
    props: {
        texto: '!',
        radius: 20,
    },
});
