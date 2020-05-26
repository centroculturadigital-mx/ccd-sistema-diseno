import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuMovil from '../../../elementos/menu/MenuMovil/MenuMovil.svelte';

export default { title: 'Elementos/Menú/Menú Movil' }

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
];

export const menuMovilAbierto = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estadoMenu: true,
            objetosMenu: rutas,
        }
    }
});
export const menuMovilSombra = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estadoMenu: true,
            objetosMenu: rutas,
            sombra: true
        }
    }
});
export const menuMovilCerrado = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estadoMenu: false,
            objetosMenu: rutas,
        }
    }
});
export const menuMovilVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estadoMenu: true,
            objetosMenu: [],
        }
    }
});