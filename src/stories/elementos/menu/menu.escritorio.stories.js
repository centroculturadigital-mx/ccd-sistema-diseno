import MenuEscritorio from '../../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte';

export default { title: 'Elementos/Menú/Menú Escritorio' }

let items = ["Menu","Menu","Menu","Menu","Menu"];

export const menuEscritorioDefault = () => ({
    Component: MenuEscritorio,
    props: {
        objetosMenu: items,
    }
});

export const menuEscritorioColorTexto = () => ({
    Component: MenuEscritorio,
    props: {
        objetosMenu: items,
        colorFondo: 'lightblue',
        color: 'orange',
    }
});
