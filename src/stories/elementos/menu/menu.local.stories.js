import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import MenuLocal from '../../../elementos/menu/MenuLocal/MenuLocal.svelte';

export default { title: 'Elementos/Menú/Menú Local' }

let elementos = [{
        texto: "Menú 1",
        accion: () => console.log("Navegación local"),
    },
    {
        texto: "Menú 2",
        accion: () => console.log("Navegación local"),

    },
    {
        texto: "Menú 3",
        accion: () => console.log("Navegación local"),

    },
    {
        texto: "Menú 4",
        accion: () => console.log("Navegación local"),

    },
    {
        texto: "Menú 5",
        accion: () => console.log("Navegación local"),

    }
]

export const menuLocalDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: MenuLocal,
        datos: {
            elementos
        }
    }
});