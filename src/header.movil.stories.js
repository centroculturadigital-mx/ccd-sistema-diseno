import HeaderMovilVista from '../src/stories/header/HeaderMovilVista.svelte';

export default {title: 'Header Movil'}

export const headerMovilDefault = () => ({
    Component: HeaderMovilVista,
    props: {
        logoTexto: 'Logo Sitio',
        logoImagenUrl: 'placeholder.jpg',
    }
});