import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import NavegacionLista from '../../../../componentes/Navegacion/NavegacionLista/NavegacionLista.svelte';

export default { title: 'Elementos/Listas/NavegacionLista' }

let elementos = [{
        enlace: "http://hola.com",
        texto: "Hola"
    },
    {
        enlace: "http://mundo.com",
        texto: "Mundo"
    },
    {
        enlace: "http://madre.com",
        texto: "Madre",
        elementos: [{
                enlace: "http://hija1.com",
                texto: "Hija 1"
            },
            {
                enlace: "http://hija2.com",
                texto: "Hija 2",
                elementos: [{
                        enlace: "http://nieta1.com",
                        texto: "Nieta 1"
                    },
                    {
                        enlace: "http://nieta2.com",
                        texto: "Nieta 2"
                    },
                ]
            },
        ]
    },
]

export const ListaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: NavegacionLista,
        datos: {
            elementos: elementos
        }
    },
});