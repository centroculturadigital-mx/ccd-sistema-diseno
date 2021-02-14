import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Casilla from './Casilla';

export default { title: 'Elementos/Formularios/Entrada/Casilla' }

export const casillaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Casilla,
        datos: {
            texto: "Aute in minim.",
            nombre: "unCampo",
            valor: "",
            click: () => console.log("Click casilla")
        }
    }
});
export const casillaCirculo = () => ({
    Component: ThemeTester,
    props: {
        componente: Casilla,
        datos: {
            tipo: "CIRCULO",
            texto: "Aute in minim.",
            nombre: "unCampo",
            valor: "",
            click: () => console.log("Click casilla")
        }
    }
});