import InputTextoView from './stories/formularios/InputTextoView.svelte';
import TextAreaVista from './stories/formularios/TextAreaVista.svelte';

export default { title: 'Formularios' }

// input texto
export const inputTextoDefault = () => ({
    Component:InputTextoView,
    props: {
        textoLabel: 'Valida: ',
        textoValidar: 'Agenda cultura digital',
    },
})
export const inputTexto = () => ({
    Component:InputTextoView,
    props: {
        textoValidar: 'Hola mundo',
    },
})
// text area
export const textArea = () => ({
    Component:TextAreaVista,
    props: {
        texto: 'Hola mundo'
    }
})
