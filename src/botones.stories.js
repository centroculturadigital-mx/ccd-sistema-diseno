import BotonView from './stories/botones/BotonView.svelte';

export default { title: 'Botones' }

// BotonView
export const botonDefault = () => ({
    Component: BotonView,
    props: {
        texto: 'Saber más',
        radius: 3,
        color: '#FFF',
        colorbG: '#282828',
        paddingX: 1,
    },
});
export const botonExpandido = () => ({
    Component: BotonView,
    props: {
        texto: 'Enviar',
        radius: 3,
        color: '#FFF',
        colorbG: '#282828',
        paddingX: 4,
    },
});
