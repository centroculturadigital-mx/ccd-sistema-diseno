import TextAreaVista from './stories/formularios/TextArea/TextAreaVista.svelte';

export default { title: 'Area de Texto' }


// text area
export const textArea = () => ({
    Component:TextAreaVista,
    props: {
        textoPlaceHolder: 'placeholder',
        texto: 'texto'
    },
})