import MenuMovil from '../../../elementos/menu/MenuMovil/MenuMovil.svelte';

export default { title: 'Elementos/Menú/Menú Movil' }

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

export const menuMovilDefault = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: rutas,
    }
});
export const menuMovilColorFondo = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: rutas,
        colorFondo: 'lightblue',
    }
});
export const menuMovilAlturaObjetoMenu = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: rutas,
        colorFondo: 'lightblue',
        alturaObjetoMenu: '2rem',
    }
});
export const menuMovilColorTexto = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: rutas,
        colorFondo: 'lightblue',
        alturaObjetoMenu: '2rem',
        color: 'orange',
    }
});
