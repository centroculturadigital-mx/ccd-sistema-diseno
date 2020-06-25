import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuEscritorio from '../../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte';

export default { title: 'Elementos/Menú/Menú Escritorio' }

let rutas = [{
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    }
]


export const menuEscritorioDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuEscritorio,
        datos: {
            elementos: rutas,
        }
    }
});