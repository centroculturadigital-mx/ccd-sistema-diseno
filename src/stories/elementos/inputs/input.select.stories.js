import InputSelect from '../../../elementos/inputs/InputSelect/InputSelect.svelte';

export default { title: "Elementos/Inputs/Input Select"}

let opciones = [
    {
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


export const inputSelectDefault = () => ({
    Component: InputSelect,
    props: {
        opciones,
        accion
    },
});
export const inputSelectPlaceholder = () => ({
    Component: InputSelect,
    props: {
        textoPlaceholder: "Selecciona un estado",
        opciones,
        accion
    },
});