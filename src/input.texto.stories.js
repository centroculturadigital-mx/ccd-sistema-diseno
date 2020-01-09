import InputTextoView from './stories/formularios/InputTexto/InputTextoView.svelte';
import TextAreaVista from './stories/formularios/TextAreaVista.svelte';

export default { title: 'Input Texto' }

export const inputTextoLabel = () => ({
    Component:InputTextoView,
    props: {
        textoLabel: 'Nombre: ',
        textoPlaceholder: 'Con Label',
    },
})
export const inputTextoNoLabel = () => ({
    Component:InputTextoView,
    props: {
        textoPlaceholder: 'Sin label',
    },
})
// text area
export const textArea = () => ({
    Component:TextAreaVista,
    props: {
        texto: 'Hola mundo'
    }
})
