import BotonView from './stories/botones/BotonView.svelte';
import InputTextoView from './stories/formularios/InputTextoView.svelte';

export default { title: 'Mis Componentes' }

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

// input texto
export const InputTextoDefault = () => ({
    Component:InputTextoView,
    props: {
        textoLabel: 'Valida: ',
        textoValidado: 'Agenda cultura digital',
    },
})
