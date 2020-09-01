import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import FormularioTester from '../../../../componentes/formularios/Formulario/FormularioTester.svelte';
import Formulario from '../../../../componentes/formularios/Formulario/Formulario.svelte';

import campos from "../../../../data/campos/";
import pasos from "../../../../data/pasos";

export default {
    title: 'Componentes/Formularios/Formulario/Formulario'
}

let enviarConTiempo = datos => {

    const respuesta = "Enviando..."

    setTimeout(() => {

        console.log("enviar", datos)

    }, 400)
}


const cambiar = datos => {

    console.log("cambiaron datos:", datos);

}




export const formularioDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos.slice(0,3),
            enviar: enviarConTiempo,
        }
    },
});

export const formularioCompleto = () => ({
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

export const formularioConRespuestaTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Formulario,
        datos: {
            campos: campos,
            enviar: enviarConTiempo,
            respuesta: "El formulario tiene una respuesta en texto"
        }
    },
});

export const formularioConRespuestaObjeto = () => ({
    Component: ThemeTester,
    props: {
        componente: Formulario,
        datos: {
            campos: campos,
            enviar: enviarConTiempo,
            respuesta: {
                titulo: "Titulo de respuesta",
                texto: "Texto de respuesta",
            }
        }
    },
});

export const formularioConRespuestaError = () => ({
    Component: ThemeTester,
    props: {
        componente: Formulario,
        datos: {
            campos: campos,
            enviar: enviarConTiempo,
            respuesta: new Error("Respuesta con error")
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

export const formularioCalendario = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [{
                tipo: 'fecha',
                nombre: 'ccd-sd-fecha',
                requerido: true,
                etiqueta: 'Fecha',
                valorInicial: '',            
                validacion: (valor) => {
                    console.log("Validación fecha");
                    return {
                        valido: true,
                        error: null,
                        estado: "ok"
                    }
                
                }
            }],
            enviar: enviarConTiempo
        }
    },
});

export const formularioPasos = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos,
            campos: campos,
            enviar: () => console.log("Finalizar"),
            config: {
                textos: {
                    enviar: "Finalizar"
                }
            }
        }
    },
});