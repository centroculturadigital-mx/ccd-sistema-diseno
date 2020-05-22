import Footer from '../../../componentes/Footer/Footer.svelte';
import imagenEjemplo from '../../../../public/placeholder.jpg';


export default {title: 'Componentes/Footer/Footer'}

let itemsLogos = ['placeholder.jpg','placeholder.jpg'];

export const footerDefault = () => ({
    Component: Footer,
    props: {
        logosPleca: itemsLogos,
        logoTexto: 'Logo Sitio',
        logoImagenUrl: imagenEjemplo,
        colorFondo: 'white',
        altura: '70px',
        
    }
});

export const footerLogoImagen = () => ({
    Component: Footer,
    props: {
        logoImagenUrl: imagenEjemplo,
        logosPleca: itemsLogos,
        colorFondo: 'white',
        logoTexto: 'Logo Sitio',
        altura: '70px',
        sombra: true,
        fixed: true,
    }
});