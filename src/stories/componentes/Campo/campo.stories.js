import Campo from '../../../componentes/Campo/Campo.svelte';

export default {
    title: 'Componentes/Campo/Campo'
}


// let status = ""
// let valorValidado = {}

// const validarEntrada = e => {
//     let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo
//     let valor = e.target.value;
//     let validado = !caracteresEspeciales.test(valor);

//     let status = ""

//     if (validado) {
//         status = "ok";
//         if (valor == "") {
//             status = "";
//         }
//     } else {
//         valor = new Error("Este campo no acepta caracteres especiales");
//         status = "error";
//     }

//     return {
//         status,
//         valor
//     }

// };

export const campoDefault = () => ({
    Component: Campo,
    props: {
        etiqueta: 'Un campo',
        tipo: 'text',
        placeholder: 'Un campo default',
    },
});

export const campoConValor = () => ({
    Component: Campo,
    props: {
        etiqueta: 'Un campo con valor',
        tipo: 'text',
        placeholder: 'Escribe algo',
        valor: 'Labore sint minim ex duis.',
    },
});

export const campoConError = () => ({
    Component: Campo,
    props: {
        etiqueta: 'Un campo con error',
        tipo: 'text',
        placeholder: 'Un campo default',
        valor: "oh :(",
        error: new Error('Error: Labore sint minim ex duis.'),
        status: "error",
    },
});

// export const campoConValidacion = () => ({
//     Component: Campo,
//     props: {
//         etiqueta: 'Un campo',
//         tipo: 'text',
//         placeholder: 'Un campo default',
//         valor: valorValidado.valor,
//         validacion: e => {
//             valorValidado = validarEntrada(e).valor
//             status = validarEntrada(e).status            
//         },
//         status: valorValidado.status
//     },
// });

export const campoTexto = () => ({
    Component: Campo,
    props: {
        tipo: 'text',
        etiqueta: 'Un campo texto',
        placeholder: "...",
    },
});
export const campoTextArea = () => ({
    Component: Campo,
    props: {
        tipo: 'textarea',
        etiqueta: 'Un campo textarea',
        placeholder: "...",
    },
});
export const campoNumero = () => ({
    Component: Campo,
    props: {
        tipo: 'numero',
        etiqueta: 'Un campo número',
        placeholder: "0",
    },
});
export const campoArchivo = () => ({
    Component: Campo,
    props: {
        tipo: 'archivo',
        etiqueta: 'Un campo archivo',
        placeholder: "...",
    },
});