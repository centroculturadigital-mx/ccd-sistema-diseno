import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Embebido from '../../../elementos/media/Embebido/Embebido.svelte';

export default { title: "Elementos/Media/Embebido" }

export const iframeVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Embebido,
        datos: {}
    }
});
export const iframeYoutube = () => ({
    Component: ThemeTester,
    props: {
        componente: Embebido,
        datos: {
            enlace: "https://www.youtube.com/embed/nkd5WXMOMJM",
        },
    }
});
export const iframeVimeo = () => ({
    Component: ThemeTester,
    props: {
        componente: Embebido,
        datos: {
            enlace: "https://player.vimeo.com/video/139989023",
        },
    }
});
export const iframeVimeoAltura = () => ({
    Component: ThemeTester,
    props: {
        componente: Embebido,
        datos: {
            enlace: "https://player.vimeo.com/video/139989023",
            estilos: {
                altura: "20rem",
            }
        },
    }
});