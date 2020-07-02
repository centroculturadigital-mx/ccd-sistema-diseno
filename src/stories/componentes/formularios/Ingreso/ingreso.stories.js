import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import Ingreso from '../../../../componentes/formularios/Ingreso/Ingreso.svelte';

const enviar = () => console.log("Ingreso enviado");

export default { title: 'Componentes/Formularios/Ingreso' }

let campos = [{
        tipo: 'texto',
        nombre: 'ccd-sd-texto',
        requerido: true,
        etiqueta: 'Correo electrónico',
        valorInicial: '',
        ejemplo: 'correo@gmail.com',
        validacion: (valor) => {

            let soloCorreo = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            console.log("Valor", valor, soloCorreo.test(valor));

            return {
                valido: soloCorreo.test(valor),
                error: !soloCorreo.test(valor) ?
                    new Error("No es un correo electrónico") : null,
                estado: !soloCorreo.test(valor) ?
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
    },
]

export const ingresoDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: Ingreso,
        datos: {
            campos: campos,
            enviar: enviar,
        }
    },
});