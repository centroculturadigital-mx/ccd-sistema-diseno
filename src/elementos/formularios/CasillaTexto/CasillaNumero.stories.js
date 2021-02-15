import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import CasillaNumero from './CasillaNumero';

export default { title: 'Elementos/Formularios/Entrada/CasillaNumero' }

export const casillaNumeroDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaNumero,
        datos: {
            tipo: "MULTIPLE",
            texto: "Opción",
            nombre: "unCampo",
            valor: null,
            click: () => console.log("Click casillaNumero"),
            cambiar: valor => console.log("cambiar", valor)
        }
    }
});

export const casillaNumeroValor = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaNumero,
        datos: {
            tipo: "MULTIPLE",
            texto: "Opción",
            nombre: "unCampo",
            valor: {
                numero: 66,
            },
            click: () => console.log("Click casillaNumero"),
            cambiar: valor => console.log("cambiar", valor)
        }
    }
});

export const casillaCirculoNumeroValor = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaNumero,
        datos: {
            tipo: "UNICO",
            texto: "Opción",
            nombre: "unCampo",
            valor: {
                numero: 66,
            },
            click: () => console.log("Click casillaNumero"),
            cambiar: valor => console.log("cambiar", valor)
        }
    }
});