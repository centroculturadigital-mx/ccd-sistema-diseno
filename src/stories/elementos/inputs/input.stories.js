import Input from '../../../elementos/inputs/Input/Input.svelte';

export default { title: 'Elementos/inputs/Input' }

export const inputDefault = () => ({
    Component: Input,
    props: {
        placeholder: 'Introduce Texto',
    },
})
export const inputEmail = () => ({
    Component: Input,
    props: {
        placeholder: 'Correo Electronico',
        tipo: "email",
    },
})

