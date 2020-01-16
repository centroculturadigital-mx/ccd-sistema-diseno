import BienvenidaVista from '../componentes/bienvenida/BienvenidaVista.svelte';
import ImagenFondo from '../../public/placeholder.no.texto.jpg';
import VideoFondoMp4 from '../../public/video.placeholder.mp4';
import VideoFondoWebm from '../../public/video.placeholder.webm';
// import VideoFondoOGV from '../../public/video.placeholder.ogv';

export default { title: "Bienvenida (Heroscreen)" }

let videos = [VideoFondoMp4, VideoFondoWebm];

export const bienvenidaImagenFondo = () => ({
    Component: BienvenidaVista,
    props: {
        imagenUrl: ImagenFondo,
    }
});
export const bienvenidaImagenOverlay = () => ({
    Component: BienvenidaVista,
    props: {
        imagenUrl: ImagenFondo,
        overlay: true,
        colorOverlay: 'red',
    }
});
export const bienvenidaImagenOverlayTexto = () => ({
    Component: BienvenidaVista,
    props: {
        imagenUrl: ImagenFondo,
        overlay: true,
        colorOverlay: 'red',
        titulo: 'Lorem ipsum dolor sit amet'
    }
});
export const bienvenidaVideoFondo = () => ({
    Component: BienvenidaVista,
    props: {
        videoUrls: videos,
    }
});
export const bienvenidaVideoOverlay = () => ({
    Component: BienvenidaVista,
    props: {
        videoUrls: videos,
        overlay: true,
        colorOverlay: 'red',
    }
});
export const bienvenidaVideoOverlayTexto = () => ({
    Component: BienvenidaVista,
    props: {
        videoUrls: videos,
        overlay: true,
        colorOverlay: 'red',
        titulo: 'Lorem ipsum dolor sit amet'
    }
});
export const bienvenidaPosicionTexto = () => ({
    Component: BienvenidaVista,
    props: {
        videoUrls: videos,
        overlay: true,
        colorOverlay: 'red',
        titulo: 'Lorem ipsum dolor sit amet',
        posicionTexto: 'right',
    }
});
