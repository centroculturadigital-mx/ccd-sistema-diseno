import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuEscritorio from '../../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte';

export default { title: 'Elementos/Menú/Menú Escritorio' }

let rutas = [{
        texto: "Ruta",
        ruta: "una-ruta"
    },
    {
        texto: "Ruta",
        ruta: "una-ruta"
    },
    {
        texto: "Ruta",
        ruta: "una-ruta"
    },
    {
        texto: "Ruta",
        ruta: "una-ruta"
    },
    {
        texto: "Ruta",
        ruta: "una-ruta"
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