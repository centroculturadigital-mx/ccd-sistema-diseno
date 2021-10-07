import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuLocal from '../../../elementos/menu/MenuLocal/MenuLocal.svelte';

export default { title: 'Elementos/Menu/MenuLocal' }

let elementos = [{
        texto: "Menú 1",
        icono: "twitter",
        enlace: "/un/enlace/1",
        accion: () => console.log("Navegación local"),
    },
    {
        texto: "Menú 2",
        icono: "twitter",
        enlace: "/un/enlace/2",
        accion: () => console.log("Navegación local"),
    },
    {
        texto: "Menú 3",
        icono: "twitter",
        enlace: "/un/enlace/3",
        accion: () => console.log("Navegación local"),
    },
    {
        texto: "Menú 4",
        icono: "twitter",
        enlace: "/un/enlace/4",
        accion: () => console.log("Navegación local"),
    },
    {
        texto: "Menú 5",
        icono: "twitter",
        enlace: "/un/enlace/5",
        accion: () => console.log("Navegación local"),
    }
]

export const menuLocalEnlaces = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos: elementos.map(e=>{
                let obj = { ...e }
                delete obj.accion
                return obj
            })
        }
    }
});

export const menuLocalAcciones = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos: elementos.map(e=>{
                let obj = { ...e }
                delete obj.enlace
                return obj
            })
        }
    }
});