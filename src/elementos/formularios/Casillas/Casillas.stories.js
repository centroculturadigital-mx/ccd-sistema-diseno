import ThemeTester from '../../../componentes/ThemeTester/ThemeTester.svelte';
import Casillas from './Casillas';

export default { title: 'Elementos/Formularios/Entrada/Casillas' }





const opciones = new Array(13).fill(true).map((o, i) => ({
    id: "OPC" + i,
    texto: "Opción " + (i + 1),
    click: () => console.log("Click casilla", i),
}))


export const casillasDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            nombre: "unCampo",
            opciones,
            cambiar: valor => console.log("cambiar", valor),

        }
    }
});

export const casillasValor = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones,
            nombre: "unCampo",
            valor: opciones.map(o => Math.random() > 0.5),
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
            valor: null,
            nombre: "unCampo",
            cambiar: valor => console.log("cambiar", valor),
            tipo: "UNICO"
        }
    }
});


export const casillasUnicoOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones,
            valor: {
                texto: "Hola mundo"
            },
            nombre: "unCampo",
            cambiar: valor => console.log("cambiar", valor),
            tipo: "UNICO_OTRA"
        }
    }
});

export const casillasUnicoOtraNumeroElegido = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones,
            valor: {
                id: 2
            },
            nombre: "unCampo",
            cambiar: valor => console.log("cambiar", valor),
            tipo: "UNICO_OTRA"
        }
    }
});




export const casillasMultipleOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones,
            valor: [
                ...opciones.map((o, i) => ({ id: i, valor: Math.random() > 0.5 })),
                {
                    id: opciones.length,
                    valor: true,
                    texto: "Hola mundo"
                }
            ],
            nombre: "unCampo",
            cambiar: valor => console.log("cambiar", valor),
            tipo: "MULTIPLE_OTRA"
        }
    }
});

export const casillasMultipleMaximo = () => ({
    Component: ThemeTester,
    props: {
        componente: Casillas,
        datos: {
            opciones: opciones.slice(0,4),
            valor: opciones.slice(0,4).map((o, i) => (Math.random() > 0.5 )),
            maximo: 3,
            nombre: "unCampo",
            cambiar: valor => console.log("cambiar", valor),
            tipo: "MULTIPLE_MAXIMO"
        }
    }
});