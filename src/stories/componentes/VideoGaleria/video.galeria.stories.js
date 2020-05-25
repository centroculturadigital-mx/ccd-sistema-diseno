import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import VideoGaleria from '../../../componentes/VideoGaleria/VideoGaleria.svelte';

const videoGaleria = {
    videos: [{
            enlace: "https://www.youtube.com/embed/U9OZFAAESRY",
            nombre: "Video 1 Convocatoria Residencias Memorial",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            enlace: "https://www.youtube.com/embed/OtKEAiWGi-Q",
            nombre: "Video 2 CCD - Noche Hello World",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            enlace: "https://www.youtube.com/embed/j5w0iT_-4cU",
            nombre: "Video 3 Fiesta de la Nube Mala",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            enlace: "https://www.youtube.com/embed/IF1CHAt08zg",
            nombre: "Video 4 Global Game Jam 2020 GigaSede Los Pinos",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            enlace: "https://www.youtube.com/embed/DfRfDhBgA5M",
            nombre: "Video 5 ¡Va el golpe!",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            enlace: "https://www.youtube.com/embed/TJ3DJPzP9Jw",
            nombre: "Video 6 CCD - Invitación a Inauguración: Desobediencia Electrónica",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        }
    ]
}

export default { title: 'Componentes/Media/VideoGaleria' }

export const VideoGaleriaThemed = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoGaleria,
        datos: {
            estado: false,
            videos: videoGaleria.videos,
        }
    }
});
export const VideoGaleriaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoGaleria,
        datos: {
            estado: false,
            videos: videoGaleria.videos,
        }
    }
});

export const VideoGaleriaVacia = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoGaleria,
        datos: {
            estado: false,
        }
    }
})

export const VideoGaleriaArregloVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: VideoGaleria,
        datos: {
            estado: false,
            videos: []
        }
    }
})