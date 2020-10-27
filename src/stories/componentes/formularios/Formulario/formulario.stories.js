import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import FormularioTester from '../../../../componentes/formularios/Formulario/FormularioTester.svelte';
import Formulario from '../../../../componentes/formularios/Formulario/Formulario.svelte';

import campos from "../../../../data/campos/";
import campoFecha from "../../../../data/campos/fecha";
import radio from "../../../../data/campos/radio";
import archivo from "../../../../data/campos/archivo";
import pasos from "../../../../data/pasos";

import casilla from "../../../../data/campos/casilla"
import casillas from "../../../../data/campos/casillas"



export default {
    title: 'Componentes/Formularios/Formulario/Formulario'
}


const cambiar = datos => {

    console.log("cambiaron datos:", datos);

}




export const formularioDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos.slice(0, 3),
        }
    },
});



export const formularioConValores = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...campos[0],
                    valor: "Consectetur proident ut ut dolore"
                },
                {
                    ...campos[1],
                    valor: 13
                },
                {
                    ...campos[2],
                    valor: "Aliquanon"
                },
                {       
                    ...campos[3],
                    valor: 2
                },

            ],
        }
    },
});


export const formularioCompleto = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos,
        }
    },
});

export const formularioValidacion = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos,
        }
    },
});

export const formularioConRespuestaTexto = () => ({
    Component: ThemeTester,
    props: {
        componente: Formulario,
        datos: {
            campos: campos,
            respuesta: "El formulario tiene una respuesta en texto"
        }
    },
});


export const formularioConRespuestaHtml = () => ({
    Component: ThemeTester,
    props: {
        componente: Formulario,
        datos: {
            campos: campos,
            respuesta: `
                <h4>Una respuesta</h4>
                <p>Eu consequat culpa laborum deserunt pariatur non nisi consectetur eiusmod.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oHg5SJYRHA0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button>Boton</button>
            `
        }
    },
});

export const formularioConRespuestaObjeto = () => ({
    Component: ThemeTester,
    props: {
        componente: Formulario,
        datos: {
            campos: campos,
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
            respuesta: new Error("Respuesta con error")
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
            campos: [campoFecha],
        }
    },
});

export const formularioRadios = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [radio],
        }
    },
});

export const formularioArchivos = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...archivo,
                    nombre: 'ccd-sd-archivo-1',
                },
                {
                    ...archivo,
                    nombre: 'ccd-sd-archivo-2',
                },
            ],
        }
    },
});

export const formularioPasos = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos,
            enviar: () => console.log("Finalizado formulario por pasos"),
            config: {
                textos: {
                    enviar: "Confirmar"
                }
            },
        }
    },
});



export const formularioCasillas = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...casilla,
                    valor: true
                },
                {
                    ...casillas,
                    valor: new Array(13).fill(true).map(()=>Math.random()>0.5)
                },
                {
                    ...casillas,
                    nombre: "casillasUnico",
                    etiqueta: "Opción única",
                    indicacion: "Elige solo una",
                    tipo: "casillas",
                    datos: {
                        tipo: "UNICO"
                    },
                    valor: 0
                }
            ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});



export const formularioCamposCambiarPersonalizado = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos.map(c=>({
                ...c,
                cambiar: (datos) => {
                    console.log("cambiar personalizado", c.nombre, datos);                    
                }
            })),
        }
    },
});