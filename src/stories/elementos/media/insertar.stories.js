import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Insertar from '../../../elementos/media/Insertar/Insertar.svelte';

export default { title: "Elementos/Media/Insertar" }

export const iframeVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: Insertar,
        datos: {}
    }
});
export const iframeYoutube = () => ({
    Component: ThemeTester,
    props: {
        componente: Insertar,
        datos: {
            enlace: "https://www.youtube.com/embed/nkd5WXMOMJM",
        },
    }
});
export const iframeVimeo = () => ({
    Component: ThemeTester,
    props: {
        componente: Insertar,
        datos: {
            enlace: "https://player.vimeo.com/video/139989023",
        },
    }
});
export const iframeVimeoAltura = () => ({
    Component: ThemeTester,
    props: {
        componente: Insertar,
        datos: {
            enlace: "https://player.vimeo.com/video/139989023",
            estilos: {
                altura: "20rem",
            }
        },
    }
});