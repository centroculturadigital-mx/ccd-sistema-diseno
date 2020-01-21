import Logo from '../../../componentes/Logo/Logo.svelte';
import ImagenFondo from '../../../../public/placeholder.jpg';

export default { title: "Componentes/Logo/Logo" }

export const logoTexto = () => ({
    Component: Logo,
    props: {
        alineacion: "center",
        logoTexto: 'Texto si no hay imágen',
    }
});
export const logoImagen = () => ({
    Component: Logo,
    props: {
        logoAncho: '40%',
        logoTexto: 'Logo sistema diseno',
        logoImagenUrl: ImagenFondo,
    }
});
export const logoAnchoFila = () => ({
    Component: Logo,
    props: {
        logoAncho: '33%',
        logoImagenUrl: ImagenFondo,
        logoTexto: 'Ancho de fila Custom',
    }
});
// export const logoAlineadoDerecha = () => ({
//     Component: Logo,
//     props: {
//         logoAncho: '40%',
//         alineacion: 'right',
//         logoTexto: 'Logo sistema diseno',
//         logoImagenUrl: ImagenFondo,
//     }
// });
