import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ListaElemento from '../../../elementos/listas/ListaElemento/ListaElemento.svelte';

import Tarjeta from "../../../componentes/Tarjetas/Tarjeta/Tarjeta"

export default { title: 'Elementos/Listas/ListaElemento' }

export const ListaElementoTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaElemento,
        datos: {
            texto: "Texto lista contenido",
        }

    },
});
export const ListaElementoComponente = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaElemento,
        datos: {
            contenido: {
                componente: Tarjeta,
                data: {
                    nombre: "Titulo de tarjeta",
                    leyenda: "Lorem ipsum dolor sit amet"
                }
            }
        }

    },
});