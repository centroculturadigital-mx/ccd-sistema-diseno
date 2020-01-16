import Header from '../../../componentes/Header/Header.svelte';
import Placeholder from '../../../../public/placeholder.jpg';

export default {title: 'Componentes/Header'}

let items = ["Menú","Menú","Menú","Menú","Menú"];

export const headerDefault = () => ({
    Component: Header,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
    }
});
export const headerColorBG = () => ({
    Component: Header,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightblue',
        altura: '100px',
    }
});
export const headerColorTexto = () => ({
    Component: Header,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightblue',
        altura: '100px',
        color: 'orange'
    }
});
export const headerAltura = () => ({
    Component: Header,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightblue',
        altura: '200px',
    }
});
export const headerSombra = () => ({
    Component: Header,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'white',
        altura: '70px',
        sombra: true,
    }
});
export const headerFixed = () => ({
    Component: Header,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'white',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});
export const headerLogoImagen = () => ({
    Component: Header,
    props: {
        objetosMenu: items,
        logoImagenUrl: Placeholder,
        colorFondo: 'white',
        logoTexto: 'Logo Sitio',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});