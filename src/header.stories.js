import HeaderMovilVista from '../src/stories/header/HeaderVista.svelte';
import Placeholder from '../public/placeholder.texto.jpg';

export default {title: 'Header'}

let items = ["Item","Item","Item","Item","Item"];

export const headerDefault = () => ({
    Component: HeaderMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
    }
});
export const headerColorBG = () => ({
    Component: HeaderMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightblue',
        altura: '100px',
    }
});
export const headerColorTexto = () => ({
    Component: HeaderMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightblue',
        altura: '100px',
        color: 'orange'
    }
});
export const headerAltura = () => ({
    Component: HeaderMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightblue',
        altura: '200px',
    }
});
export const headerSombra = () => ({
    Component: HeaderMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        altura: '70px',
        sombra: true,
    }
});
export const headerFixed = () => ({
    Component: HeaderMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});
export const headerLogoImagen = () => ({
    Component: HeaderMovilVista,
    props: {
        objetosMenu: items,
        logoImagenUrl: Placeholder,
        logoTexto: 'Logo Sitio',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});