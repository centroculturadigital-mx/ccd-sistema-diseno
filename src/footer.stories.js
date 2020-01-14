import HeaderMovilVista from '../src/stories/footer/FooterVista.svelte';
import Placeholder from '../public/placeholder.texto.jpg';

export default {title: 'Footer'}
let items = ["Item","Item","Item","Item","Item"];

export const FooterSombra = () => ({
    Component: FooterMovilVista,
    props: {
        objetosMenu: items,
        logoTexto: 'Logo Sitio',
        colorFondo: 'black',
        altura: '70px',
        sombra: true,
    }
});