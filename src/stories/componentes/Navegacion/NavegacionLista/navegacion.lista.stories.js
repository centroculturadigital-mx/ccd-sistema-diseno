import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import NavegacionLista from '../../../../componentes/Navegacion/NavegacionLista/NavegacionLista.svelte';

export default { title: 'Componentes/Navegacion/NavegacionLista/NavegacionLista' }

let elementos = [{
        texto: "Incididunt eiusmod anim est.",
        datos: {
            id: "id_0"
        },
    },
    {
        texto: "Exercitation sint voluptate.",
        datos: {
            id: "id_1"
        },
    },
    {
        texto: "Labore culpa minim esse elit.",
        datos: {
            id: "id_2"
        },
        elementos: [
            {
                texto: "Labore non sint.",
                datos: {
                    id: "id_3"
                },
            },
            {
                texto: "Ad et excepteur.",
                datos: {
                    id: "id_4"
                },
                elementos: [
                    {
                        texto: "Veniam nostrud sint non.",
                        datos: {
                            id: "id_5"
                        },
                    },
                    {
                        texto: "Veniam sit culpa.",
                        datos: {
                            id: "id_6"
                        },
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
            accion: (e) => console.log("acción navegacion lista", e)        
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