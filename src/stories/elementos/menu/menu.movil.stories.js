import MenuMovil from '../../../elementos/menu/MenuMovil/MenuMovil.svelte';

export default { title: 'Elementos/Menú/Menú Movil' }

let items = ["Menu","Menu","Menu","Menu","Menu"];

export const menuMovilDefault = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: items,
    }
});
export const menuMovilColorFondo = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: items,
        colorFondo: 'lightblue',
    }
});
export const menuMovilAlturaObjetoMenu = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: items,
        colorFondo: 'lightblue',
        alturaObjetoMenu: '2rem',
    }
});
export const menuMovilColorTexto = () => ({
    Component: MenuMovil,
    props: {
        estadoMenu: true,
        objetosMenu: items,
        colorFondo: 'lightblue',
        alturaObjetoMenu: '2rem',
        color: 'orange',
    }
});
