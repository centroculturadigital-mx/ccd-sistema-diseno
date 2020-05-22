import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Selector from '../../../elementos/formularios/Selector/Selector.svelte';

export default { title: "Elementos/Formularios/Selector" }

let opciones = [{
        valor: 'AGU',
        texto: 'Aguascalientes'
    },
    {
        valor: 'BCN',
        texto: 'Baja California'
    },
    {
        valor: 'BCS',
        texto: 'Baja California Sur'
    }
];


const accion = e => console.log("una accion", e);

const ejemplo = "Selecciona un estado"

export const inputSelectDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Selector,
        datos: {
            opciones,
            accion
        }
    },
});
export const inputSelectPlaceholder = () => ({
    Component: ThemeTester,
    props: {
        componente: Selector,
        datos: {
            ejemplo,
            opciones,
            accion
        }
    },
});