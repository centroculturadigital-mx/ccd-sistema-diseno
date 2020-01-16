import Video from './componentes/video/Video.svelte';
import VideoFondoMp4 from '../public/video.placeholder.mp4';
import VideoFondoWebm from '../public/video.placeholder.webm';
// import VideoFondoOGV from '../public/video.placeholder.ogv';

let videos = [VideoFondoMp4, VideoFondoWebm];

export default {title: "Video"}

export const VideoFullScreen = () => ({
    Component: Video,
    props: {
        videoUrls: videos,
    }
});
export const VideoControles = () => ({
    Component: Video,
    props: {
        videoUrls: videos,
        controls: true,
    }
});
export const VideoLoop = () => ({
    Component: Video,
    props: {
        videoUrls: videos,
        loop: true,
    }
});
export const VideoAltura = () => ({
    Component: Video,
    props: {
        videoUrls: videos,
        controls: false,
        altura: '400px',
    }
});