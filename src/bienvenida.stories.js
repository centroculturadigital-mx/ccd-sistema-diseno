import BienvenidaVista from './stories/bienvenida/BienvenidaVista.svelte';
import ImagenFondo from '../public/placeholder.texto.jpg';

export default { title: "Bienvenida (Heroscreen)" }


export const bienvenidaImagen = () => ({
    Component: BienvenidaVista,
    props: {
        imagenUrl: ImagenFondo,
    }
});
// export const bienvenidaImagen = () => ({
//     Component: BienvenidaVista,
//     props: {
//         imagenUrl: './placeholder.texto.jpg',
//     }
// });