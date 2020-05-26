import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import BotonPaso from '../../../elementos/botones/BotonPaso/BotonPaso.svelte';

export default { title: 'Elementos/Botones/Paso' }

export const botonPasoDefault = () => ({
    Component: ThemeTester, 
    props: {
        componente: BotonPaso,
        datos: {
        numero: 9,
    }
    },
});

export const botonPasoActivo = () => ({
    Component: ThemeTester, 
    props: {
        componente: BotonPaso,
        datos:{
        numero: 9,
        activo: true
    }
    },
});