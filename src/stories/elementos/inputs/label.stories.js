import Label from '../../../elementos/inputs/Label/Label.svelte';
import Input from '../../../elementos/inputs/Input/Input.svelte';

export default {title: 'Elementos/Inputs/Label'}

let entrada = Input;

console.log(entrada);

export const LabelDefault = () => ({
    Component: Label,
    props: {
        // input: Input,
        textoLabel: "Nombre"
    },
});
export const labelSinTitulo = () => ({
    Component: Label,
    props: {
        input: Input,
    },
});