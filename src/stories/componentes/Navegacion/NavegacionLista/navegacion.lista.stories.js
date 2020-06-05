import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import NavegacionLista from '../../../../componentes/Navegacion/NavegacionLista/NavegacionLista.svelte';

export default { title: 'Componentes/Navegacion/NavegacionLista/NavegacionLista' }

let elementos = [{
        texto: "Hola"
    },
    {
        texto: "Mundo"
    },
    {
        texto: "Madre",
        elementos: [{
                texto: "Hija 1"
            },
            {
                texto: "Hija 2",
                elementos: [{
                        texto: "Nieta 1"
                    },
                    {
                        texto: "Nieta 2"
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