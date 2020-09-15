import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte'
import Colapsable from "../../../elementos/Colapsable/Colapsable"
import NavegacionLista from "../../../componentes/Navegacion/NavegacionLista/NavegacionLista"

export default { title: 'Elementos/Colapsable ' }

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
        elementos: [{
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
                elementos: [{
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
                        elementos: [{
                            texto: "Lorem sit culpa.",
                            activo: true,
                            datos: {
                                id: "id_8"
                            },
                        }, ]
                    },
                ]
            },
        ]
    },
]

export const colapsableDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Colapsable,
        datos: {

        }
    }
});

export const colapsableConLista = () => ({
    Component: ThemeTester,
    props: {
        componente: Colapsable,
        datos: {
            componente: NavegacionLista,
            datos: {
                elementos,
            }
        }
    }
});
export const colapsableConTitulo = () => ({
    Component: ThemeTester,
    props: {
        componente: Colapsable,
        datos: {
            componente: NavegacionLista,
            datos: {
                elementos,
            },
            titulo: "Titulo para colapsable"
        }
    }
});