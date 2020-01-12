import HeaderMovilVista from '../src/stories/header/HeaderMovilVista.svelte';

export default {title: 'Header Movil'}

let items = ["Menu","Menu","Menu","Menu","Menu"];

export const headerMovilDefault = () => ({
    Component: HeaderMovilVista,
    props: {
        logoTexto: 'Logo Sitio',
        logoImagenUrl: 'placeholder.jpg',
    }
});
export const headerMovilColorBG = () => ({
    Component: HeaderMovilVista,
    props: {
        logoTexto: 'Logo Sitio',
        logoImagenUrl: 'placeholder.jpg',
        color: 'lightblue',
    }
});
export const headerMovilAltura = () => ({
    Component: HeaderMovilVista,
    props: {
        logoTexto: 'Logo Sitio',
        logoImagenUrl: 'placeholder.jpg',
        color: 'lightblue',
        altura: '200px',
    }
});
export const headerMovilConMenu = () => ({
    Component: HeaderMovilVista,
    props: {
        logoTexto: 'Logo Sitio',
        logoImagenUrl: 'placeholder.jpg',
        color: 'lightblue',
        altura: '200px',
        objetosMenu: items,
    }
});