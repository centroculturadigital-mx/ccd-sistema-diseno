import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Reacciones from '../../../componentes/Mensajeria/Reacciones/Reacciones.svelte';

export default { title: "Componentes/Mensajeria/Reacciones" }

import reacciones from '../../../data/reacciones';


export const reaccionesDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Reacciones,
        datos: {
            reacciones
        }
    }
});