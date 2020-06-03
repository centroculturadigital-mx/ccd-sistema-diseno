import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import ListaElemento from '../../../elementos/listas/ListaElemento/ListaElemento.svelte';

export default { title: 'Elementos/Listas/ListaElemento' }


export const ListaSimple = () => ({
    Component: ThemeTester,
    props: {
        componente: ListaElemento,
        datos: {
            texto: "Texto lista elemento",
            contenido: "Contenido lsita elemento ",
            data: {},
        }

    },
});