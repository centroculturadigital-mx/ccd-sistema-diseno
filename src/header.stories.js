import HeaderMovilVista from '../src/stories/header/HeaderVista.svelte';

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
export const headerMovilSombra = () => ({
    Component: HeaderMovilVista,
    props: {
        logoTexto: 'Logo Sitio',
        logoImagenUrl: 'placeholder.jpg',
        altura: '70px',
        sombra: true,
    }
});
export const headerMovilFixed = () => ({
    Component: HeaderMovilVista,
    props: {
        logoTexto: 'Logo Sitio',
        logoImagenUrl: 'placeholder.jpg',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});