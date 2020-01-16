import TextArea from '../../../elementos/inputs/TextArea/TextArea.svelte';

export default { title: 'Elementos/Inputs/Text Area' }

export const textAreaDefault = () => ({
    Component:TextArea,
    props: {
        textoLabel: 'Nombre: ',
        textoPlaceholder: 'Proident laborum',
    },
});
export const textAreaTamanoY = () => ({
    Component:TextArea,
    props: {
        textoLabel: 'Nombre: ',
        textoPlaceholder: 'Proident laborum',
        altura: "25rem",
    },
});
export const textAreaTamanoX = () => ({
    Component:TextArea,
    props: {
        textoLabel: 'Nombre: ',
        textoPlaceholder: 'Proident laborum',
        ancho: "25rem",
        altura: "25rem"
    },
});
