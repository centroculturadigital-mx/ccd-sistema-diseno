import ImagenVista from './stories/imagen/ImagenVista.svelte';
import Imagen from '../public/placeholder.texto.jpg';
export default { title: "Imagen" }

export const imagenDefault = () => ({
    Component: ImagenVista,
    props: {
        imagenUrl: Imagen
    },
});
export const imagenAltTexto = () => ({
    Component: ImagenVista,
    props: {
        altTexto: "Aquí vá una imagen"
    },
});
export const imagenAjuste = () => ({
    Component: ImagenVista,
    props: {
        imagenUrl: Imagen,
        altTexto: "Aquí vá una imagen",
        ajuste: 'cover',
        altura: '200px',
    },
});
export const imagenAltura = () => ({
    Component: ImagenVista,
    props: {
        imagenUrl: Imagen,
        altTexto: "Aquí vá una imagen",
        ajuste: 'fill',
        altura: '320px',
    },
});