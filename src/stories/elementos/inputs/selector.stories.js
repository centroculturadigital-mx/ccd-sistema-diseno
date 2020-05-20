import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Selector from '../../../elementos/inputs/Selector/Selector.svelte';

export default { title: "Elementos/Inputs/Selector" }

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

const textoPlaceholder = "Selecciona un estado"

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
            textoPlaceholder,
            opciones,
            accion
        }
    },
});