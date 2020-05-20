import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Input from '../../../elementos/inputs/Input/Input.svelte';

export default { title: 'Elementos/inputs/Input' }

export const inputDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Input,
        datos: {
            placeholder: 'Introduce Texto',
        }
    },
});

export const inputCorreo = () => ({
    Component: ThemeTester,
    props: {
        componente: Input,
        datos: {
            placeholder: 'Correo Electronico',
            tipo: "email",
        }
    },
});
export const inputNumero = () => ({
    Component: ThemeTester,
    props: {
        componente: Input,
        datos: {
            placeholder: 'Agrega un numero',
            tipo: "numero",
        }
    },
});

export const inputNumeroMinMax = () => ({
    Component: ThemeTester,
    props: {
        componente: Input,
        datos: {
            placeholder: 'Agrega minimo 1 + maximo 10',
            tipo: "numero",
            minimo: 1,
            maximo: 10
        }
    },
});

export const inputContrasenna = () => ({
    Component: ThemeTester,
    props: {
        componente: Input,
        datos: {
            placeholder: 'Agrega tu contrasenna',
            tipo: "contrasenna",
        }
    },
});