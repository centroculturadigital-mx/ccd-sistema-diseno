import BotonPaso from '../../../elementos/botones/BotonPaso/BotonPaso.svelte';

export default { title: 'Elementos/Botones/Paso' }

export const botonPasoDefault = () => ({
    Component: BotonPaso,
    props: {
        numero: 9,
    },
});

export const botonPasoActivo = () => ({
    Component: BotonPaso,
    props: {
        numero: 9,
        activo: true
    },
});