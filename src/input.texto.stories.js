import InputTextoView from './stories/formularios/InputTextoView.svelte';
import TextAreaVista from './stories/formularios/TextAreaVista.svelte';

export default { title: 'Input Texto' }

// input texto
export const inputTextoLabel = () => ({
    Component:InputTextoView,
    props: {
        textoLabel: 'Nombre: ',
        textoPlaceHolder: 'Con Label',
    },
})
export const inputTextoNoLabel = () => ({
    Component:InputTextoView,
    props: {
        textoPlaceHolder: 'Sin label',
    },
})
// text area
export const textArea = () => ({
    Component:TextAreaVista,
    props: {
        texto: 'Hola mundo'
    }
})
