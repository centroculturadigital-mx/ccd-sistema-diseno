import InputTextoView from './stories/formularios/InputTextoView.svelte';

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
