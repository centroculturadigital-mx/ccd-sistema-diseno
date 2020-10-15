import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Casillas from './Casillas';

export default { title: 'Elementos/Formularios/Entrada/Casillas' }

export const casillasDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones: new Array(13).fill(true).map((o,i)=>({
                id: "OPC"+i,
                texto: "Opción " + (i+1),
                click: () => console.log("Click casilla",i)
            }))
        }
    }
});



const opciones = new Array(13).fill(true).map((o,i)=>({
    id: "OPC"+i,
    texto: "Opción " + (i+1),
    click: () => console.log("Click casilla",i),
}))

export const casillasValor = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones,
            valor: opciones.map(o=>Math.random()>0.5),
            cambiar: valor => console.log("cambiar", valor)
        }
    }
});

export const casillasUnico = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones,
            valor: opciones.map(o=>false),
            cambiar: valor => console.log("cambiar", valor),
            tipo: "UNICO"
        }
    }
});
