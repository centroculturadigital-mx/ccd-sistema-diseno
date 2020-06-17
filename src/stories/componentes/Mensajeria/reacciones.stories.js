import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Reacciones from '../../../componentes/Mensajeria/Reacciones/Reacciones.svelte';

// import imagen from '../../../data/recursos/placeholder.png';
// import avatar from '../../../data/recursos/avatar.png';

export default { title: "Componentes/Mensajeria/Reacciones" }

export const chatDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Reacciones,
        datos: {

        }
    }
});