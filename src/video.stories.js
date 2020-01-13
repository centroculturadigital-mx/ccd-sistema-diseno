import VideoVista from './stories/video/VideoVista.svelte';
import VideoFondoMp4 from '../public/video.placeholder.mp4';
import VideoFondoWebm from '../public/video.placeholder.webm';
// import VideoFondoOGV from '../public/video.placeholder.ogv';

let videos = [VideoFondoMp4, VideoFondoWebm];

export default {title: "Video"}

export const VideoFullScreen = () => ({
    Component: VideoVista,
    props: {
        videoUrls: videos,
    }
});
export const VideoControles = () => ({
    Component: VideoVista,
    props: {
        videoUrls: videos,
        controls: true,
    }
});
export const VideoAltura = () => ({
    Component: VideoVista,
    props: {
        videoUrls: videos,
        controls: false,
        altura: '400px',
    }
});