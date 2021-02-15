import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Casilla from './Casilla';

export default { title: 'Elementos/Formularios/Entrada/Casilla' }

export const casillaDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Casilla,
        datos: {
            tipo: "MULTIPLE",
            texto: "Aute in minim.",
            nombre: "unCampo",
            valor: "",
            cambiar: () => console.log("Cambiar casilla")
        }
    }
});
export const casillaCirculo = () => ({
    Component: ThemeTester,
    props: {
        componente: Casilla,
        datos: {
            tipo: "UNICO",
            texto: "Aute in minim.",
            nombre: "unCampo",
            valor: "",
            cambiar: () => console.log("Cambiar casilla")
        }
    }
});
export const casillaCirculoOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: Casilla,
        datos: {
            tipo: "UNICO",
            texto: "Aute in minim.",
            nombre: "unCampo",
            valor: "",
            cambiar: () => console.log("Cambiar casilla")
        }
    }
});