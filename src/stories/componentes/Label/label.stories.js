import Label from '../../../componentes/Label/Label.svelte';

export default {title: 'Componentes/Label/Label'}

export const LabelDefault = () => ({
    Component: Label,
    props: {
        type: 'text',
        placeholder: 'Nombre'
    },
});
export const labelNumeroConTitulo = () => ({
    Component: Label,
    props: {
        type: 'number',
        textoLabel: "Cantidad: "
    },
});
export const labelColor = () => ({
    Component: Label,
    props: {
        type: 'color',
        textoLabel: "Seleciona Color: ",
    },
});
export const labeArchivo = () => ({
    Component: Label,
    props: {
        type: 'file',
        textoLabel: "Seleciona Archivo: ",
    },
});