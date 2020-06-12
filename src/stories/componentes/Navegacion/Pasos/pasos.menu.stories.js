import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import PasosMenu from '../../../../componentes/Navegacion/PasosMenu/PasosMenu.svelte';

export default { title: 'Componentes/Navegacion/PasosMenu' } 

export const pasosMenuDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: PasosMenu,
        datos: {
        pasos: 3,
        activo: 2,
        accion: i => console.log("pasos",i)
    }
    },
});
