import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Campo from '../../../../componentes/formularios/Campo/Campo.svelte';
import CampoSelectorPrueba from '../../../../componentes/formularios/Campo/CampoSelectorPrueba.svelte';

export default {
    title: 'Componentes/Formularios/Campo/Campo'
}


// let estado = ""
// let valorValidado = {}

// const validarEntrada = e => {
//     let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo
//     let valor = e.target.value;
//     let validado = !caracteresEspeciales.test(valor);

//     let estado = ""

//     if (validado) {
//         estado = "ok";
//         if (valor == "") {
//             estado = "";
//         }
//     } else {
//         valor = new Error("Este campo no acepta caracteres especiales");
//         estado = "error";
//     }

//     return {
//         estado,
//         valor
//     }

// };

export const campoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            etiqueta: 'Un campo',
            tipo: 'texto',
            ejemplo: 'Un campo default',
        },
    }
});

export const campoConValor = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            etiqueta: 'Un campo con valor',
            tipo: 'texto',
            ejemplo: 'Escribe algo',
            valor: 'Labore sint minim ex duis.',
        },
    }
});

export const campoConError = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            etiqueta: 'Un campo con error',
            tipo: 'texto',
            ejemplo: 'Un campo default',
            valor: "oh :(",
            error: new Error('Error: Labore sint minim ex duis.'),
            estado: "error",
        },
    }
});

// export const campoConValidacion = () => ({
//     Component: Campo,
//     props: {
//         etiqueta: 'Un campo',
//         tipo: 'texto',
//         ejemplo: 'Un campo default',
//         valor: valorValidado.valor,
//         validacion: e => {
//             valorValidado = validarEntrada(e).valor
//             estado = validarEntrada(e).estado            
//         },
//         estado: valorValidado.estado
//     },
// });

export const campoTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            tipo: 'texto',
            etiqueta: 'Un campo texto',
            ejemplo: "...",
        },
    }
});
export const campoTextArea = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            tipo: 'textarea',
            etiqueta: 'Un campo textarea',
            ejemplo: "...",
        },
    }
});
export const campoNumero = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            tipo: 'numero',
            etiqueta: 'Un campo número',
            ejemplo: "0",
        },
    }
});
export const campoSelector = () => ({
    Component: ThemeTester,
    props: {
        componente: CampoSelectorPrueba,
        datos: {
            campo: {
                tipo: 'selector',
                etiqueta: 'Un campo selector',
                ejemplo: "...",
                valor: "hashid-2",
                opciones: [
                    {
                        valor: "hashid-1",
                        texto: "Hola",
                    },
                    {
                        valor: "hashid-2",
                        texto: "Mundo",
                    },
                    {
                        valor: "hashid-3",
                        texto: "Adios",
                    },
                ]
            }
        },
    }
});

export const campoArchivo = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            tipo: 'archivo',
            etiqueta: 'Un campo archivo',
            ejemplo: "...",
        },
    }
});

export const campoCasilla = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            tipo: 'casilla',
            etiqueta: 'Una casilla',
            ejemplo: "...",

            etiqueta: "Un campo tipo casilla",
            indicacion: "Verdadero o falso",
            nombre: "casilla",
            requerido: true,

            valor: true,
            // valorEstatico: "",
            // validacion: "",
            datos: {
                texto: "Una casilla"
            },
            cambiar: datos=>console.log("Campo casilla datos", datos),
  
        },
    }
});