import InputTextoView from './stories/formularios/InputTexto/InputTextoView.svelte';

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

