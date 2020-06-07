import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import FormularioTester from '../../../../componentes/formularios/Formulario/FormularioTester.svelte';

export default {
    title: 'Componentes/Formularios/Formulario/Formulario'
}

let enviarConTiempo = e => {

    respuesta = "Enviando..."

    setTimeout(() => {

        if (error) {
            respuesta = new Error(error)
        } else {
            respuesta = "El formulario se ha enviado con éxito"
        }

    }, 400)
}


const cambiar = datos => {

    console.log("cambiaron datos:", datos);

}


let campos = [

    {
        tipo: 'texto',
        nombre: 'ccd-sd-texto',
        requerido: true,
        etiqueta: 'Sin caracteres especiales ',
        valorInicial: '...',
        validacion: (valor) => {
            let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo

            return {
                valido: !caracteresEspeciales.test(valor),
                error: caracteresEspeciales.test(valor) ?
                    new Error("No cars. espec.") : null,
                estado: caracteresEspeciales.test(valor) ?
                    "error" : !valor ? "" : "ok"
            }
        }
    },
    {
        tipo: 'numero',
        nombre: 'ccd-sd-numero',
        etiqueta: 'El numero de la bestia ',
        valorInicial: '...',
        validacion: (valor) => {

            if (!typeof valor == "number" || valor === "") {
                return {
                    valido: false,
                    estado: "error",
                    error: new Error("Números, por favor")
                }
            }

            if (!valor) return {
                valido: true,
                estado: ""
            }

            if (parseInt(valor) === 666) return {
                valido: true,
                estado: "ok"
            }

            return {
                valido: false,
                estado: "error",
                error: new Error("Anim sint aliquip voluptate culpa excepteur aliquip.")
            }
        }
    },
    {
        tipo: 'textarea',
        nombre: 'ccd-sd-textarea',
        requerido: true,
        etiqueta: 'Menor a 10 caracteres ',
        valorInicial: '...',
        validacion: (valor) => {

            if (!valor) return {
                valido: true,
                estado: ""
            }

            if (valor.length < 10) return {
                valido: true,
                estado: "ok"
            }

            return {
                valido: false,
                error: new Error("Mayor a 10 caracteres"),
                estado: "error"
            }

        }
    },
    {
        tipo: 'selector',
        nombre: 'ccd-sd-selector',
        requerido: true,
        etiqueta: 'Un selector',
        validacion: (valor) => true,
        valor: 2,
        opciones: [{
                valor: 1,
                texto: "Hola",
            },
            {
                valor: 2,
                texto: "Mundo",
            },
        ]
    },
]


export const formularioDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos,
            enviar: enviarConTiempo,
        }
    },
});

export const formularioValidacion = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos,
            enviar: enviarConTiempo,
        }
    },
});

export const formularioError = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos,
            enviar: enviarConTiempo,
            error: "Formulario con error"
        }
    },
});

export const formularioNoEnviar = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos,
            error: "Formulario con error",
            cambiar
        }
    },
});