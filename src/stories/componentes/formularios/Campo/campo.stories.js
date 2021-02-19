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
            info: 'Ea mollit reprehenderit do sunt.',
            instruccion: "Puedes hacer <em>algo</em> con <a href=#>este campo</a>",
            ejemplo: 'Un campo default',
        },
    }
});
export const campoObligatorio = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            etiqueta: 'Un campo con etiqueta larga',
            requerido: true,
            tipo: 'texto',
            info: 'Ad veniam do sit dolor dolore qui duis voluptate amet sunt dolore est cillum Lorem.',
            instruccion: "Puedes hacer <em>algo</em> con <a href=#>este campo</a>",
            ejemplo: 'Un campo default',
        },
    }
});
export const campoObligatorioTextoPersonalizado = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            etiqueta: 'Un campo con etiqueta larga',
            requerido: true,
            configuracion: {
                textos: {
                    requerido: "*Si soy requerido"
                }
            },
            tipo: 'texto',
            info: 'Ad veniam do sit dolor dolore qui duis voluptate amet sunt dolore est cillum Lorem.',
            instruccion: "Puedes hacer <em>algo</em> con <a href=#>este campo</a>",
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
            info: 'Veniam duis deserunt in dolore fugiat.',
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
            info: 'Aute laborum fugiat voluptate nulla quis consequat reprehenderit aute nostrud magna.',
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
//         info: 'Non in ullamco pariatur exercitation nostrud adipisicing est cupidatat sit Lorem officia.',
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
            info: 'Voluptate enim dolor sint voluptate excepteur.',
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
            info: 'Aute amet consectetur esse ullamco culpa quis tempor labore mollit eiusmod.',
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
            info: 'Sunt nulla ipsum consequat duis consequat culpa anim esse nulla.',
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
                info: 'Consectetur occaecat consectetur minim commodo sit id ex incididunt magna consequat.',
                etiqueta: 'Un campo selector',
                ejemplo: "...",
                valor: "hashid-2",
                opciones: [{
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
            info: 'Laborum proident est est ullamco reprehenderit nisi laborum sit pariatur Lorem.',
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
            info: 'Exercitation excepteur reprehenderit cupidatat eu esse reprehenderit cupidatat id aute labore sunt minim officia do.',
            etiqueta: 'Una casilla',
            ejemplo: "...",

            etiqueta: "Un campo tipo casilla",
            instruccion: "Verdadero o falso",
            nombre: "casilla",
            requerido: true,

            valor: true,
            // valorEstatico: "",
            // validacion: "",
            datos: {
                texto: "Una casilla"
            },
            cambiar: datos => console.log("Campo casilla datos", datos),

        },
    }
});


export const campoMultiCampo = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            tipo: 'multicampo',
            info: 'Et aliquip est anim sint.',

            etiqueta: "Un campo tipo multicampo",
            instruccion: "...",
            nombre: "multicampo",
            requerido: true,

            // valor: true,
            // valorEstatico: "",
            // validacion: "",
            datos: {
                campos: [{
                        tipo: "texto",
                        info: "Eu exercitation culpa pariatur eu sit ex sit voluptate proident sunt id ipsum adipisicing aute.",
                        etiqueta: "Sub-campo 1",
                        nombre: "multicampo-1",
                        ejemplo: "multicampo-1"
                    },
                    {
                        tipo: "numero",
                        info: "Ullamco et elit aliqua dolor aliquip ipsum.",
                        etiqueta: "Sub-campo 2",
                        nombre: "multicampo-2",
                        ejemplo: "multicampo-2"
                    }
                ],
                // texto: "Una casilla"
            },
            cambiar: datos => console.log("Campo multicampo datos", datos),

        },
    }
});




export const campoTextoNumero = () => ({
    Component: ThemeTester,
    props: {
        componente: Campo,
        datos: {
            tipo: 'texto-numero',
            info: 'Culpa reprehenderit Lorem nostrud do ut laborum nostrud excepteur amet amet pariatur ea.',

            etiqueta: "Un campo tipo texto-numero",
            instruccion: "...",
            nombre: "texto-numero",
            requerido: true,

            // valor: true,
            // valorEstatico: "",
            // validacion: "",
            datos: {

            },
            cambiar: datos => console.log("Campo texto-numero datos", datos),

        },
    }
});