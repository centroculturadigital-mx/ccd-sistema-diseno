import Imagen from '../../../elementos/media/Imagen/Imagen.svelte';
import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: "Elementos/Media/Imagen" }

export const imagenDefault = () => ({
    Component: Imagen,
    props: {
        imagenUrl: ImagenArchivo
    },
});
export const imagenAltTexto = () => ({
    Component: Imagen,
    props: {
        altTexto: "Aquí vá una imagen"
    },
});
export const imagenAjuste = () => ({
    Component: Imagen,
    props: {
        imagenUrl: ImagenArchivo,
        altTexto: "Aquí va una imagen",
        ajuste: 'cover',
        altura: '200px',
    },
});
export const imagenAltura = () => ({
    Component: Imagen,
    props: {
        imagenUrl: ImagenArchivo,
        altTexto: "Aquí va una imagen",
        ajuste: 'fill',
        altura: '320px',
    },
});