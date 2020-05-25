import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import TextArea from '../../../elementos/formularios/TextArea/TextArea.svelte';

export default { title: 'Elementos/Formularios/Text Area' }

export const textAreaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: TextArea,
        datos: {},
    }
});
export const textAreaPlaceholder = () => ({
    Component: ThemeTester,
    props: {
        componente: TextArea,
        datos: {
            ejemplo: 'Proident laborum',
        },
    }
});