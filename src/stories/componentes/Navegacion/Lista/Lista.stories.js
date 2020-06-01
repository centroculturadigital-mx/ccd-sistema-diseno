import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Lista from '../../../../componentes/Navegacion/Lista/Lista.svelte';

export default { title: 'Componentes/Navegacion/Lista' } 


export const ListaSimple = () => ({
    Component: ThemeTester,
    props: {
        componente: Lista,
  
    },
});