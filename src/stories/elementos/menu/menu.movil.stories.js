import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuMovil from '../../../elementos/menu/MenuMovil/MenuMovil.svelte';
import Tarjeta from '../../../componentes/Tarjetas/Tarjeta/Tarjeta';

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
export const menuMovilConComponentes = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuMovil,
        datos: {
            estado: true,
            componentes: [{
                componente: Tarjeta,
                datos: {
                    nombre: "Hola mundo",
                    subtitulo: "Foo ipsum dolor"
                }
            }]
        }
    }
});