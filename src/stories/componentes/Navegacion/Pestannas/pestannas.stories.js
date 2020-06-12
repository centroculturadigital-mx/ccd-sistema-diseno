import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Pestannas from '../../../../componentes/Navegacion/Pestannas/Pestannas.svelte';
import PestannasEjemplo from '../../../../componentes/Navegacion/Pestannas/PestannasEjemplo.svelte';

export default { title: 'Componentes/Navegacion/Pestannas' } 

const opciones = ["Estatus", "Estatus", "Estatus"]

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