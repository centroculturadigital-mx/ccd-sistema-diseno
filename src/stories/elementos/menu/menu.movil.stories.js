import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuMovil from '../../../elementos/menu/MenuMovil/MenuMovil.svelte';

export default { title: 'Elementos/Menú/Menú Movil' }

let rutas = [{
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    },
    {
        texto: "Ruta",
        enlace: "una-ruta"
    }
];

export const menuMovilAbierto = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estado: true,
            elementos: rutas,
        }
    }
});
export const menuMovilSombra = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estado: true,
            elementos: rutas,
            sombra: true
        }
    }
});
export const menuMovilCerrado = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estado: false,
            elementos: rutas,
        }
    }
});
export const menuMovilVacio = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estado: true,
            elementos: [],
        }
    }
});