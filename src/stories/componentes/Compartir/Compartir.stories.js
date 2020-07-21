import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Compartir from '../../../componentes/Compartir/Compartir.svelte';

export default { title: 'Componentes/Compartir' }


export const CompartirDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Compartir,
        datos: {}
    },
});