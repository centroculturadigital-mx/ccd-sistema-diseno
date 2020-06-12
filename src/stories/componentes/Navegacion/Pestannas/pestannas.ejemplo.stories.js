import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import PestannasEjemplo from '../../../../componentes/Navegacion/Pestannas/PestannasEjemplo.svelte';

export default { title: 'Componentes/Navegacion/PestannasEjemplo' }

const opciones = ["Ejemplo", "Ejemplo", "Ejemplo"]

export const PestanasEjemplo = () => ({
    Component: ThemeTester,
    props: {
        componente: PestannasEjemplo,
        datos: {
            opciones,
        }
    },
});