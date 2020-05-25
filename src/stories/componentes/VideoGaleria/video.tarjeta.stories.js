import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import VideoTarjeta from '../../../componentes/VideoGaleria/VideoTarjeta/VideoTarjeta.svelte';
import imagenArchivo from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Media/VideoTarjeta' }

export const VideoTarjetaVacia = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoTarjeta,
        datos: {
            imagen: "",
        }
    }
});
export const VideoTarjetaImagen = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoTarjeta,
        datos: {
            imagen: imagenArchivo,
        }
    }
});