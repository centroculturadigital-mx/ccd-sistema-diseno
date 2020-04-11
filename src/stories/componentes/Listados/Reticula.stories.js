import Reticula from '../../../componentes/Listados/Reticula/Reticula.svelte';

export default {title: 'Componentes/Listado/Reticula'}


export const ReticulaDefault = () => ({
    Component: Reticula,
    props: {
        elementos: []
    },
});