import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Video from '../../../elementos/media/Video/Video.svelte';
import VideoFondoMp4 from '../../../../public/video.placeholder.mp4';
import VideoFondoWebm from '../../../../public/video.placeholder.webm';
// import VideoFondoOGV from '../../../../public/video.placeholder.ogv';

let videos = [VideoFondoMp4, VideoFondoWebm];

export default { title: "Elementos/Media/Video" }

export const VideoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Video,
        datos: {
            videos: videos,
        }
    }
});
export const VideoAutoPlay = () => ({
    Component: ThemeTester,
    props: {
        componente: Video,
        datos: {
            videos: videos,
            autoplay: true,
        },
    }
});
export const VideoControles = () => ({
    Component: ThemeTester,
    props: {
        componente: Video,
        datos: {
            videos: videos,
            controls: true,
            autoplay: false,
        },
    }
});
export const VideoLoop = () => ({
    Component: ThemeTester,
    props: {
        componente: Video,
        datos: {
            videos: videos,
            loop: true,
            autoplay: false,
            controls: true,
        },
    }
});

export const VideoYoutube = () => ({
    Component: ThemeTester,
    props: {
        componente: Video,
        datos: {
            enlace: "https://www.youtube.com/embed/nkd5WXMOMJM",
        },
    }
});
export const VideoVimeo = () => ({
    Component: ThemeTester,
    props: {
        componente: Video,
        datos: {
            enlace: "https://player.vimeo.com/video/139989023",
        },
    }
});