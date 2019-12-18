import BotonView from './stories/botones/BotonView.svelte';

export default { title: 'Botones' }

// BotonView
export const BotonTexto = () => ({
    Component: BotonView,
    props: {
        buttonText: 'Agenda digital de cultura',
        rounded: 3,
    },
});
export const BotonEmoji = () => ({
    Component: BotonView,
    props: {
        buttonText: '😀 😎 👍 💯',
        rounded: 3,
    },
});
