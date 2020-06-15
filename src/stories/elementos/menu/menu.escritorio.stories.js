import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuEscritorio from '../../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte';

export default { title: 'Elementos/Menú/Menú Escritorio' }

let rutas = [{
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Ruta",
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