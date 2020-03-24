import VideoGaleria from '../../../componentes/VideoGaleria/VideoGaleria.svelte';

const videoGaleria = {
    videos: [{
            url: "https://www.youtube.com/embed/rZUGniKYuZg",
            titulo: "Video 1 Lorem Ipsum dolor sit amet Tiniebla",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/rZUGniKYuZg",
            titulo: "Video 2 Lorem Ipsum dolor sit amet Tiniebla",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/rZUGniKYuZg",
            titulo: "Video 3 Lorem Ipsum dolor sit amet Tiniebla",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/rZUGniKYuZg",
            titulo: "Video 4 Lorem Ipsum dolor sit amet Tiniebla",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/rZUGniKYuZg",
            titulo: "Video 5 Lorem Ipsum dolor sit amet Tiniebla",
            imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
        },
        {
            url: "https://www.youtube.com/embed/rZUGniKYuZg",
            titulo: "Video 6 Lorem Ipsum dolor sit amet Tiniebla",
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