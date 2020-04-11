import ListaPaginada from '../../../componentes/Listados/ListaPaginada/ListaPaginada.svelte';

export default {title: 'Componentes/Listado/ListaPaginada'}


export const ListaDefault = () => ({
    Component: ListaPaginada,
    props: {
        elementos: []
    },
});