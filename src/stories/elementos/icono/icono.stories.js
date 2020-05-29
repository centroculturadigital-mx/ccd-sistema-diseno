import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Icono from '../../../elementos/Icono/Icono.svelte';   

export default { title: 'Elementos/Icono' } 

export const iconoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "play",
        }
    },
});
export const iconoColor = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos :{
        icono: "cerrar",
        color: "red"
    }
    },
});
export const iconoPlay = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos:{
        icono: "play",
    }
    },
});
export const iconoMenu = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "menu",
    }
    },
});
export const iconoCerrar = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "cerrar",
    }
    },
});

export const iconoAvatar = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "avatar",
    }
    },
    
});

export const iconoFacebook = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "facebook",
    }
    },
    
});

export const iconoTwitter = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "twitter",
    }
    },
    
});

export const iconoInstagram = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "instagram",
    }
    },
    
});

export const iconoAgregar = () => ({
    Component: ThemeTester,
    props: {
        componente: Icono,
        datos: {
        icono: "agregar",
    }
    },
    
});

