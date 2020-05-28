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
];
let logos = [{
        logotipo: ImagenArchivo,
        enlace: "#",
        nombre: "Storybook"
    },
    {
        logotipo: ImagenArchivo,
        enlace: "#",
        nombre: "Storybook"
    },
    {
        logotipo: ImagenArchivo,
        enlace: "#",
        nombre: "Storybook"
    }
]

export const PieDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
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
export const PieLogos = () => ({
    Component: ThemeTester,
    props: {
        componente: Pie,
        datos: {
            logotipos: logos,
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
            menu: rutas,
            estilos: {
                altura: '4rem',
            }
        }
    }
})
export const PieConMenuYCopyright = () => ({
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