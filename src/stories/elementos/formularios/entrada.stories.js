import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Entrada from '../../../elementos/formularios/Entrada/Entrada.svelte';

export default { title: 'Elementos/Formularios/Entrada' }

export const entradaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Introduce Texto',
        }
    },
});

export const entradaCorreo = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Correo Electronico',
            tipo: "email",
        }
    },
});
export const entradaNumero = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega un numero',
            tipo: "numero",
        }
    },
});

export const entradaNumeroMinMax = () => ({
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

export const entradaContrasenna = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu contrasenna',
            tipo: "contrasenna",
        }
    },
});

export const entradaTextArea = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu contraseña',
            tipo: "textarea",
        }
    },
});
export const entradaTelefono = () => ({
    Component: ThemeTester,
    props: {
        componente: Entrada,
        datos: {
            ejemplo: 'Agrega tu teléfono',
            tipo: "telefono",
        }
    },
});