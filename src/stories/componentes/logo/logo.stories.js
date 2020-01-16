import Logo from '../../../componentes/Logo/Logo.svelte';
import ImagenFondo from '../../../../public/placeholder.jpg';

export default {title: "Componentes/Logo"}

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
        logoImagenUrl: ImagenFondo,
    }
});
// export const logoAlineadoDerecha = () => ({
//     Component: Logo,
//     props: {
//         ancho: '40%',
//         alineacion: 'right',
//         logoTexto: 'Logo sistema diseno',
//         logoImagenUrl: ImagenFondo,
//     }
// });
