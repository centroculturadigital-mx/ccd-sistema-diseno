import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Redes from '../../../../componentes/Navegacion/Redes/Redes.svelte';

export default { title: 'Componentes/Navegacion/Redes' } 


export const RedesComparte = () => ({
    Component: ThemeTester,
    props: {
        componente: Redes,
       
    },
});