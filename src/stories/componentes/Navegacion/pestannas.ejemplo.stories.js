import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import PestannasEjemplo from '../../../componentes/Navegacion/Pestannas/PestannasEjemplo.svelte';

export default { title: 'Componentes/Navegacion/PestannasEjemplo' }

const opciones = ["Pestaña 1", "Pestaña 2", "Pestaña 3"]

export const PestanasEjemplo = () => ({
    Component: ThemeTester,
    props: {
        componente: PestannasEjemplo,
        datos: {
            opciones,
        }
    },
});