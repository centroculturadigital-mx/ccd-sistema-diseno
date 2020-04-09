import Icono from '../../../elementos/Icono/Icono.svelte';

export default { title: 'Elementos/Icono' }

export const iconoPlay = () => ({
    Component: Icono,
    props: {
        icono: "play",
    },
});
export const iconoMenu = () => ({
    Component: Icono,
    props: {
        icono: "menu",
    },
});
export const iconoCerrar = () => ({
    Component: Icono,
    props: {
        icono: "cerrar",
    },
});