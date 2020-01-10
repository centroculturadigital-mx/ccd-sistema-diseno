import Logo from './stories/logo/LogoVista.svelte';

export default {title: "Logo"}

export const logoTexto = () => ({
    Component: Logo,
    props: {
        alineacion: "center",
        logoTexto: 'Mi Marca',
    }
});
export const logoAncho = () => ({
    Component: Logo,
    props: {
        ancho: '33%',
        logoTexto: 'Ancho de fila Custom',
    }
});
export const logoImagen = () => ({
    Component: Logo,
    props: {
        ancho: '40%',
        logoTexto: 'Logo sistema diseno',
        logoImagenUrl: '/assets/placeholder.jpg',
    }
});
export const logoAlineadoDerecha = () => ({
    Component: Logo,
    props: {
        alineacion: 'right',
        logoTexto: 'Logo sistema diseno',
        logoImagenUrl: 'placeholder.texto.jpg',
    }
});
