import ThemeTester from '../ThemeTester/ThemeTester';
import Acordeon from './Acordeon.svelte';

export default { title: 'Componentes/Acordeon' }

export const acordeonDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Acordeon,
        datos: {

        }
    },
});