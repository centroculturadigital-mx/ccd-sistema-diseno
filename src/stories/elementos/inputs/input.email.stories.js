import InputEmail from '../../../elementos/inputs/InputEmail/InputEmail.svelte';

export default { title: 'Elementos/Inputs/Input Email' }

export const inputEmailDefault = () => ({
    Component:InputEmail,
    props: {
        textoLabel: 'Correo: ',
    },
})
export const inputEmailPlaceholder = () => ({
    Component:InputEmail,
    props: {
        textoLabel: 'Correo: ',
        textoPlaceholder: 'con@label.com',
    },
})


