import VideoGaleria from '../../../componentes/VideoGaleria/VideoGaleria.svelte';

const videoGaleria = {
    videos: [{
            url: "https://www.youtube.com/embed/U9OZFAAESRY",
            titulo: "Video 1 Convocatoria Residencias Memorial",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/OtKEAiWGi-Q",
            titulo: "Video 2 CCD - Noche Hello World",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/j5w0iT_-4cU",
            titulo: "Video 3 Fiesta de la Nube Mala",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/IF1CHAt08zg",
            titulo: "Video 4 Global Game Jam 2020 GigaSede Los Pinos",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/DfRfDhBgA5M",
            titulo: "Video 5 ¡Va el golpe!",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/TJ3DJPzP9Jw",
            titulo: "Video 6 CCD - Invitación a Inauguración: Desobediencia Electrónica",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        }
    ]
}

export default { title: 'Componentes/Media/VideoGaleria' }

export const VideoGaleriaDefault = () => ({
    Component: VideoGaleria,
    props: {
        estado: false,
        videos: videoGaleria.videos,
    }
})

export const VideoGaleriaVacia = () => ({
    Component: VideoGaleria,
    props: {
        estado: false,
    }
})

export const VideoGaleriaArregloVacio = () => ({
    Component: VideoGaleria,
    props: {
        estado: false,
        videos: []
    }
})