import PasosMenu from '../../../componentes/Navegacion/PasosMenu/PasosMenu.svelte';

export default { title: 'Componentes/Navegacion/PasosMenu' }

export const pasosMenuDefault = () => ({
    Component: PasosMenu,
    props: {
        pasos: 3,
        activo: 2,
        accion: i => console.log("pasos",i)
    },
});
