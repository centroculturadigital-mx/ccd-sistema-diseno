import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import PestannasCcd from '../../../componentes/Navegacion/Pestannas/PestannasCcd.svelte';

export default { title: 'Componentes/Navegacion/PestannasCcd' }

const opciones = ["Ejemplo", "Ejemplo", "Ejemplo"]

export const PestanasCcd = () => ({
    Component: ThemeTester,
    props: {
        componente: PestannasCcd,
        datos: {
            opciones,
        }
    },
});