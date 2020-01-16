import InputSelect from '../../../elementos/inputs/InputSelect/InputSelect.svelte';

export default { title: "Elementos/Inputs/Input Select"}

let objetos = ["Hola", "Mundo", "a", "punto", "de", "estallar"];

export const inputSelectDefault = () => ({
    Component: InputSelect,
    props: {
        opciones: objetos,
    },
});
export const inputSelectPlaceholder = () => ({
    Component: InputSelect,
    props: {
        textoPlaceholder: "Placeholder",
        opciones: objetos,
    },
});