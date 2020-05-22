import TextArea from '../../../elementos/formularios/TextArea/TextArea.svelte';

export default { title: 'Elementos/Entradas/Text Area' }

export const textAreaDefault = () => ({
    Component:TextArea,
    props: {
        texto: 'Nombre: ',
        ejemplo: 'Proident laborum',
    },
});
export const textAreaTamanoY = () => ({
    Component:TextArea,
    props: {
        texto: 'Nombre: ',
        ejemplo: 'Proident laborum',
        altura: "25rem",
    },
});
export const textAreaTamanoX = () => ({
    Component:TextArea,
    props: {
        texto: 'Nombre: ',
        ejemplo: 'Proident laborum',
        ancho: "25rem",
        altura: "25rem"
    },
});
