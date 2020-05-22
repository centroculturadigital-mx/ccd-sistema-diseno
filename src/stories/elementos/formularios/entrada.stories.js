import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Entrada from '../../../elementos/formularios/Entrada/Entrada.svelte';

export default { title: 'Elementos/Formularios/Entrada' }

export const inputDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Introduce Texto',
        }
    },
});

export const inputCorreo = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Correo Electronico',
            tipo: "email",
        }
    },
});
export const inputNumero = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega un numero',
            tipo: "numero",
        }
    },
});

export const inputNumeroMinMax = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega minimo 1 + maximo 10',
            tipo: "numero",
            minimo: 1,
            maximo: 10
        }
    },
});

export const inputContrasenna = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu contrasenna',
            tipo: "contrasenna",
        }
    },
});

export const inputTextArea = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu contraseña',
            tipo: "textarea",
        }
    },
});