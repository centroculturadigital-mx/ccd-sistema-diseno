import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import VideoReproductor from '../../../componentes/VideoGaleria/VideoReproductor/VideoReproductor.svelte';

const video = "https://www.youtube.com/embed/U9OZFAAESRY";

export default { title: 'Componentes/Media/VideoReproductor' }

export const VideoReproductorVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoReproductor,
        datos: {
            enlace: "",
        }
    }
});
export const VideoReproductorYouTube = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoReproductor,
        datos: {
            enlace: video,
        }
    }
});