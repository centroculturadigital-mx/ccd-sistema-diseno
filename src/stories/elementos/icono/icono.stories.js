import Icono from '../../../elementos/Icono/Icono.svelte';

export default { title: 'Elementos/Icono' }

export const iconoDefault = () => ({
    Component: Icono,
    props: {
        icono: "play",
    },
});
export const iconoColor = () => ({
    Component: Icono,
    props: {
        icono: "cerrar",
        color: "red"
    },
});
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

export const iconoAvatar = () => ({
    Component: Icono,
    props: {
        icono: "avatar",
    },
});