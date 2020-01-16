import TextAreaVista from '../componentes/formularios/TextArea/TextAreaVista.svelte';

export default { title: 'Area de Texto' }


// text area
export const textAreaLabel = () => ({
    Component:TextAreaVista,
    props: {
        textoLabel: 'Nombre: ',
        textoPlaceholder: 'Proident laborum',
        
    },
})
export const textAreaNoLabel = () => ({
    Component:TextAreaVista,
    props: {
        textoPlaceholder: 'Proident laborum',
        
    },
})