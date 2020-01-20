import MenuEscritorio from '../../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte';

export default { title: 'Elementos/Menú/Menú Escritorio' }

let rutas =  [
    {
        label: "Una Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Una Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Una Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Una Ruta",
        ruta: "una-ruta"
    },
    {
        label: "Una Ruta",
        ruta: "una-ruta"
    }
]


export const menuEscritorioDefault = () => ({
    Component: MenuEscritorio,
    props: {
        objetosMenu: rutas,
    }
});

export const menuEscritorioColorTexto = () => ({
    Component: MenuEscritorio,
    props: {
        objetosMenu: rutas,
        colorFondo: 'lightblue',
        color: 'orange',
    }
});
