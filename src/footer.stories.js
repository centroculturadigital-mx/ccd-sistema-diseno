import FooterMovilVista from '../src/stories/footer/FooterVista.svelte';
import Placeholder from '../public/placeholder.texto.jpg';


export default {title: 'Footer'}
let items = ["Item","Item"];

export const footerDefault = () => ({
    Component: FooterMovilVista,
    props: {
        objetosMenu: items,
        logoImagenUrl: Placeholder,
        altura: '70px',
        
    }
});

export const footerSombra = () => ({
    Component: FooterMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'black',
        altura: '70px',
        sombra: true,
    }
});
export const footerColorBG = () => ({
    Component: FooterMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'lightblue',
        altura: '100px',
    }
});

export const footerLogoImagen = () => ({
    Component: FooterMovilVista,
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