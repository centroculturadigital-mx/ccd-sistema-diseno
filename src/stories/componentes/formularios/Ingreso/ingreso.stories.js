import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Ingreso from '../../../../componentes/formularios/Ingreso/Ingreso.svelte';

const enviar = () => console.log("Ingreso enviado");
let respuesta = false;

export default {
    title: 'Componentes/Formularios/Ingreso'
}

let campos = [{
        tipo: 'email',
        nombre: 'ccd-sd-texto',
        requerido: true,
        etiqueta: 'Correo electrónico',
        valorInicial: '',
        ejemplo: 'correo@gmail.com',
        validacion: (valor) => {
            let soloCorreo = new RegExp("/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/"); //solo acepta guion medio y bajo

            return {
                valido: soloCorreo.test(valor),
                error: soloCorreo.test(valor) ?
                    new Error("No cars. espec.") : null,
                estado: soloCorreo.test(valor) ?
                    "error" : !valor ? "" : "ok"
            }
        }
    },
    {
        tipo: 'contrasenna',
        nombre: 'ccd-sd-contrasenna',
        requerido: true,
        etiqueta: 'Correo electrónico',
        valorInicial: '',
        ejemplo: '***********',
        validacion: (valor) => {
            let valorMax = 7;
            let validacion;

            if (valor > valorMax) {
                validacion = valor
            }
            return {
                valido: validacion,
                error: validacion ? new Error("No cars. espec.") : null,
                estado: validacion ?
                    "error" : !valor ? "" : "ok"
            }
        }
    },
]

export const ingresoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Ingreso,
        datos: {
            campos: campos,
            enviar: enviar,
            respuesta
        }
    },
});