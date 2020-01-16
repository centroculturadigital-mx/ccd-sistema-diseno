import InputTextoView from '../componentes/formularios/InputTexto/InputTextoVista.svelte';

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

