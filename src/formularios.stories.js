import InputTextoView from './stories/formularios/InputTextoView.svelte';

export default { title: 'Formularios' }

// input texto
export const InputTextoDefault = () => ({
    Component:InputTextoView,
    props: {
        textoLabel: 'Valida: ',
        textoValidado: 'Agenda cultura digital',
    },
})
