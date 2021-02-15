import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import CasillaTextoNumero from './CasillaTextoNumero';

export default { title: 'Elementos/Formularios/Entrada/CasillaTextoNumero' }

export const casillaTextoNumeroDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaTextoNumero,
        datos: {
            tipo: "MULTIPLE",
            nombre: "unCampo",
            valor: null,
            click: () => console.log("Click casillaTextoNumero"),
            cambiar: valor => console.log("cambiar", valor)
        }
    }
});

export const casillaTextoNumeroValor = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaTextoNumero,
        datos: {
            tipo: "MULTIPLE",
            nombre: "unCampo",
            valor: {
                texto: "Lorem ipsum",
                numero: 66,
            },
            click: () => console.log("Click casillaTextoNumero"),
            cambiar: valor => console.log("cambiar", valor)
        }
    }
});
export const casillaCirculoTextoNumeroValor = () => ({
    Component: ThemeTester,
    props: {
        componente: CasillaTextoNumero,
        datos: {
            nombre: "unCampo",
            valor: {
                texto: "Lorem ipsum",
                numero: 66,
            },
            tipo: "UNICO",
            click: () => console.log("Click casillaTextoNumero"),
            cambiar: valor => console.log("cambiar", valor)
        }
    }
});