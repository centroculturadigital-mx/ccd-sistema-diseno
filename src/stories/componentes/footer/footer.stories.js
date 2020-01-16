import Footer from '../../../componentes/Footer/Footer.svelte';
import Placeholder from '../../../../public/placeholder.jpg';


export default {title: 'Componentes/Footer'}

let items = ["Item","Item"];
let itemsLogos = ['Placeholder','Placeholder'];

export const footerDefault = () => ({
    Component: Footer,
    props: {
        objetosMenu: items,
        logosPleca: 'Logo Sitio',
        colorFondo: 'grey',
        altura: '70px',
        
    }
});

export const footerLogoImagen = () => ({
    Component: Footer,
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