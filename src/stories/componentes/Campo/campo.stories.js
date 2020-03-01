import Campo from '../../../componentes/Campo/Campo.svelte';

export default {title: 'Componentes/Campo/Campo'}

export const FieldDefault = () => ({
    Component: Campo,
    props: {
        type: 'text',
        placeholder: 'Nombre'
    },
});
export const campoNumeroConTitulo = () => ({
    Component: Campo,
    props: {
        type: 'number',
        textoField: "Cantidad: "
    },
});
export const campoColor = () => ({
    Component: Campo,
    props: {
        type: 'color',
        textoField: "Seleciona Color: ",
    },
});
export const campoArchivo = () => ({
    Component: Campo,
    props: {
        type: 'file',
        textoField: "Seleciona Archivo: ",
    },
});