import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import NavegacionLista from '../../../../componentes/Navegacion/NavegacionLista/NavegacionLista.svelte';

export default { title: 'Componentes/Navegacion/NavegacionLista/NavegacionLista' }

let elementos = [{
        texto: "Incididunt eiusmod anim est.",
    },
    {
        texto: "Exercitation sint voluptate.",
    },
    {
        texto: "Labore culpa minim esse elit.",
        elementos: [
            {
                texto: "Labore non sint.",
            },
            {
                texto: "Ad et excepteur.",
                elementos: [
                    {
                        texto: "Veniam nostrud sint non.",
                    },
                    {
                        texto: "Veniam sit culpa.",
                    },
                ]
            },
        ]
    },
]

export const navegacionListaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionLista,
        datos: {
            elementos: elementos
        }
    },
});

export const navegacionListaAccion = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionLista,
        datos: {
            elementos,
            accion: () => alert("una accion desde afuera!")
        }
    },
});

export const navegacionListaVacia = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionLista,
        datos: {}
    },
});