import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Casilla from './Casilla';

export default { title: 'Elementos/Formularios/Entrada/Casilla' }

export const casillaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Casilla,
        datos: {
            texto: "Aute in minim.",
            valor: "AUINMIN",
            click: () => console.log("Click casilla")
        }
    }
});