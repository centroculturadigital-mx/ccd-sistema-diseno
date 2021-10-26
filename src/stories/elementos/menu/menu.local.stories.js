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

const elementosActuales = new Array(15).fill(true).map((e,i) => ({
        texto: `Menú ${i+1}`,
        icono: "twitter",
        enlace: "/un/enlace",
        accion: () => console.log("Navegación local"),
}))
export const menuLocalEnlaces = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos: elementos.map(e=>{
                let obj = { ...e }
                delete obj.accion
                return obj
            }),
            actual: 3
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
            }),
            actual: 3
        }
    }
});
// 
export const MenuLocalActualCasiAlInicio = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos: elementosActuales,
            actual: 2,
        },
    },
});

export const MenuLocalActualEnMedio = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos: elementosActuales,
            actual: 8,
        },
    },
});

export const MenuLocalActualCasiAlFinal = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos: elementosActuales,
            actual: 13,
        },
    },
});


export const MenuLocalActualAlFinal = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos: elementosActuales,
            actual: 14,
        },
    },
});

