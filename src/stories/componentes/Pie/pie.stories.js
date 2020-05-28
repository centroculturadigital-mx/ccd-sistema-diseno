import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Pie from '../../../componentes/Pie/Pie.svelte';
import ImagenArchivo from '../../../../public/placeholder.jpg';

export default { title: 'Componentes/Pie/Pie' }

let rutas = [{
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    }
]

export const PieDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            logotipo: ImagenArchivo,
            estilos: {
                altura: '4rem',
            }
        }
    }
})
export const PieLogo = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            logotipo: ImagenArchivo,
            estilos: {
                altura: '4rem',
            }
        }
    }
})
export const PieCopyright = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            logotipo: ImagenArchivo,
            copyright: "CCD Mexico | 2020",
            estilos: {
                altura: '4rem',
            }
        }
    }
})
export const PieConMenu = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            logotipo: ImagenArchivo,
            copyright: "CCD Mexico | 2020",
            menu: rutas,
            estilos: {
                altura: '4rem',
            }
        }
    }
})