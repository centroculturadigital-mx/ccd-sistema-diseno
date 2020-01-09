import InputEmailVista from './stories/formularios/InputEmailVista.svelte';

export default { title: 'Input Email' }

export const inputEmailLabel = () => ({
    Component:InputEmailVista,
    props: {
        textoLabel: 'Correo: ',
        textoPlaceholder: 'con@label.com',
    },
})
export const inputEmailNoLabel = () => ({
    Component:InputEmailVista,
    props: {
        textoPlaceholder: 'sin@label.com',
    },
})

