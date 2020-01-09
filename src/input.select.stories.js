import InputSelectVista from './stories/formularios/InputSelect/InputSelectVista.svelte';

export default { title: "Input Select"}

let objetos = ["Hola", "Mundo", "a", "punto", "de", "estallar"];

export const inputSelectLabel = () => ({
    Component: InputSelectVista,
    props: {
        textoLabel: 'Selecciona: ',
        opciones: objetos,
    },
});
export const inputSelectNoLabel = () => ({
    Component: InputSelectVista,
    props: {
        textoPlaceholder: "Selecciona asunto",
        opciones: objetos,
    },
});