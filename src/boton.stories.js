import BotonVista from './componentes/botones/Boton/BotonVista.svelte';

export default { title: 'Boton' }

// BotonVista
export const botonDefault = () => ({
    Component: BotonVista,
    props: {
        texto: 'Boton Default',
    },
});
export const botonColorTexto = () => ({
    Component: BotonVista,
    props: {
        texto: 'Color de texto',
        color: 'orange',
    },
});
export const botonColorFondo = () => ({
    Component: BotonVista,
    props: {
        texto: 'Color de fondo',
        colorBG: 'orange',
    },
});
export const botonPaddingX = () => ({
    Component: BotonVista,
    props: {
        texto: 'Padding',
        paddingX: '6rem',
    },
});
export const botonRadius = () => ({
    Component: BotonVista,
    props: {
        texto: '!',
        radius: '20px',
    },
});
