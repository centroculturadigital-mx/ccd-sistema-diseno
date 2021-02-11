import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import CasillaTexto from './CasillaTexto';

export default { title: 'Elementos/Formularios/Entrada/CasillaTexto' }

export const casillaTextoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaTexto,
        datos: {
            texto: "Otra",
            nombre: "unCampo",
            valor: null,
            click: () => console.log("Click casillaTexto")
        }
    }
});

export const casillaTextoValor = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaTexto,
        datos: {
            texto: "Otra",
            nombre: "unCampo",
            valor: "Un valor",
            click: () => console.log("Click casillaTexto")
        }
    }
});

export const casillaCirculoTextoValor = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaTexto,
        datos: {
            tipo: "circulo",
            texto: "Otra",
            nombre: "unCampo",
            valor: "Un valor",
            click: () => console.log("Click casillaTexto")
        }
    }
});