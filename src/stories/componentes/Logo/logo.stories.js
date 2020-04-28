import Logo from '../../../componentes/Logo/Logo.svelte';
import ImagenFondo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Logos/Logo" }

export const logoDefault = () => ({
    Component: Logo,
    props: {
        alineacion: "center",
        logotipo: ImagenFondo,
        logoTexto: 'LOGO',
        enlace: "http://centroculturadigital.mx"
    }
});
export const logoSoloTexto = () => ({
    Component: Logo,
    props: {
        logoTexto: 'LOGO',
        alineacion: "center",
    }
});
export const logoSinImagen = () => ({
    Component: Logo,
    props: {
        logoTexto: 'LOGO',
        alineacion: "center",
        enlace: "http://centroculturadigital.mx"
    }
});
export const logoSinEnlace = () => ({
    Component: Logo,
    props: {
        logoTexto: 'LOGO',
        alineacion: "center",
        logotipo: ImagenFondo,
    }
});
export const logoImagen = () => ({
    Component: Logo,
    props: {
        logoAncho: '40%',
        logoTexto: 'LOGO',
        logotipo: ImagenFondo,
    }
});
export const logoAnchoFila = () => ({
    Component: Logo,
    props: {
        logoAncho: '33%',
        logotipo: ImagenFondo,
        logoTexto: 'LOGO',
    }
});
export const logoConEnlace = () => ({
    Component: Logo,
    props: {
        logoAncho: '40%',
        alineacion: 'right',
        logoTexto: 'LOGO',
        logotipo: ImagenFondo,
        enlace: "http://centroculturadigital.mx"
    }
});