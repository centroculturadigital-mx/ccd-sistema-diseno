import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Pestannas from '../../../componentes/Navegacion/Pestannas/Pestannas.svelte';

export default { title: 'Componentes/Navegacion/Pestannas' }

const opciones = [{
        nombre: "Categoria 1"
    },
    {
        nombre: "Categoria 2"
    },
    {
        nombre: "Categoria 3"
    },
]

export const PestanasMenuDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Pestannas,
        datos: {
            opciones,
            accion: i => console.log("PESTANNAS:::", i)
        }
    },
});