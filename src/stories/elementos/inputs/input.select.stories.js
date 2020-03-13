import InputSelect from '../../../elementos/inputs/InputSelect/InputSelect.svelte';

export default { title: "Elementos/Inputs/Input Select"}

let objetos = [
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

export const inputSelectDefault = () => ({
    Component: InputSelect,
    props: {
        opciones: objetos,
    },
});
export const inputSelectPlaceholder = () => ({
    Component: InputSelect,
    props: {
        textoPlaceholder: "Selecciona un estado",
        opciones: objetos,
    },
});