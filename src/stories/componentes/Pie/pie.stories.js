import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Pie from '../../../componentes/Pie/Pie.svelte';
// import placeholder from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Pie/Pie' }

export const PieDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            altura: '3rem',
            logImagenUrl: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png",
        }
    }
})
export const PieLogo = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            altura: '3rem',
            logImagenUrl: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png",
        }
    }
})
export const PieCopyright = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            altura: '3rem',
            logImagenUrl: "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png",
            copyright: "CCD Mexico | 2020"
        }
    }
})