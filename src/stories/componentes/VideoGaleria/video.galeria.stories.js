import VideoGaleria from '../../../componentes/VideoGaleria/VideoGaleria.svelte';

const videoGaleria = {
    videos: [{
        url: "https://www.youtube.com/embed/rZUGniKYuZg",
        titulo: "lorem Ipsum dolor sit amet tiniebla",
        imagen: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png"
    }]
}

export default { title: 'Componentes/Media/VideoGaleria' }

export const VideoGaleriaDefault = () => ({
    Component: VideoGaleria,
    props: {
        estado: false,
        videos: videoGaleria.videos,
    }
})