import ThemeTester from '../../../../componentes/ThemeTester/ThemeTester.svelte';
import FormularioTester from '../../../../componentes/formularios/Formulario/FormularioTester.svelte';
import FormularioMultiCampo from '../../../../componentes/formularios/Formulario/FormularioMultiCampo.svelte';
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
                    requerido: true,
                    valor: "Consectetur proident ut ut dolore"
                },
                {
                    ...campos[1],
                    requerido: true,
                    valor: 13
                },
                {
                    ...campos[2],
                    requerido: true,
                    valor: "Aliquanon"
                },
                {       
                    ...campos[3],
                    requerido: true,
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



export const formularioCasilla = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...casilla,
                    requerido: true                    
                },
                
            ],
            enviar: datos => console.log("Enviaste formulario", datos),
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
                },
                {
                    ...casillas,
                    nombre: "casillasUnicoOtra",
                    etiqueta: "Opción única: elige otra",
                    indicacion: "Elige solo una, o agrega tu opción",
                    tipo: "casillas",
                    datos: {
                        tipo: "UNICO_OTRA"
                    },
                    valor: 0
                },
                {
                    ...casillas,
                    nombre: "casillasMultipleOtra",
                    etiqueta: "Opción múltiple, y/o añade otra",
                    indicacion: "Elige las opciones, y/o agrega tu opción",
                    tipo: "casillas",
                    datos: {
                        tipo: "MULTIPLE_OTRA"
                    },
                    valor: [
                        ...new Array(13).fill(true).map((o,i)=>({ id: i, valor: Math.random()>0.5 })),
                        {
                            id: 13,
                            valor: true,
                            texto: "Hola mundo"
                        }
                    ]
                }
            ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});


export const formularioPasosCasillas = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos: pasos.map((p,i)=>({
                ...p,
                campos: new Array( Math.ceil(Math.random()*3 )).fill({})
                .map(()=>(
                    {
                        ...casillas,
                        nombre: "casillas_"+i,
                        opciones: casillas.opciones.map((o,j)=>({
                            ...o,
                            texto: Math.random(),
                            id: Math.random()+"_"+i+"_"+j
                        })),
                        valor: new Array(5+Math.ceil(Math.random()*3)).fill(true).map(()=>Math.random()>0.5)
                    })
                )
            })),
            enviar: () => console.log("Finalizado formulario por pasos"),
            config: {
                textos: {
                    enviar: "Confirmar"
                }
            },
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


export const formularioCamposDeshabilitados = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos.map(c=>({
                ...c,
                deshabilitado: true
            })),
        }
    },
});



export const formularioMultiCampo = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            campos: [
                {
                    tipo: 'multicampo',
        
                    etiqueta: "Un campo tipo multicampo",
                    indicacion: "...",
                    nombre: "multicampo",
                    requerido: true,
        
                    // valorEstatico: "",
                    // validacion: "",
                    datos: {
                        campos: [
                            {
                                tipo: "texto",
                                etiqueta: "Sub-campo 1",
                                nombre: "multicampo-1",
                                ejemplo: "multicampo-1"
                            },
                            {
                                tipo: "numero",
                                etiqueta: "Sub-campo 2",
                                nombre: "multicampo-2",
                                ejemplo: "multicampo-2"
                            }
                        ],
                        // texto: "Una casilla"
                    },
                    cambiar: datos=>console.log("Campo multicampo datos", datos),
          
                }
            ]
        }
    },
});
export const formularioMultiCampoValores = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            campos: [
                {
                    tipo: 'multicampo',
        
                    etiqueta: "Un campo tipo multicampo",
                    indicacion: "...",
                    nombre: "multicampo",
                    requerido: true,
        
                    valor: {
                        "multicampo-1": 123,
                        "multicampo-2": 456,
                    },
                    // valorEstatico: "",
                    // validacion: "",
                    datos: {
                        campos: [
                            {
                                tipo: "texto",
                                etiqueta: "Sub-campo 1",
                                nombre: "multicampo-1",
                                ejemplo: "multicampo-1"
                            },
                            {
                                tipo: "numero",
                                etiqueta: "Sub-campo 2",
                                nombre: "multicampo-2",
                                ejemplo: "multicampo-2"
                            }
                        ],
                        // texto: "Una casilla"
                    },
                    cambiar: datos=>console.log("Campo multicampo datos", datos),
          
                }
            ]
        }
    },
});






export const formularioMultiCampoPreguntaNumericaOpcionOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            campos: [
                {
                    tipo: 'multicampo',
        
                    etiqueta: "Un campo tipo multicampo",
                    indicacion: "...",
                    nombre: "multicampo",
                    requerido: true,
        
                    valor: {
                        "multicampo-1": 123,
                        "multicampo-2": 456,
                    },
                    // valorEstatico: "",
                    // validacion: "",
                    datos: {
                        campos: [
                            
                            {
                                tipo: "numero",
                                etiqueta: "Sub-campo 1",
                                nombre: "multicampo-1",
                                ejemplo: "multicampo-1"
                            },
                            {
                                tipo: "numero",
                                etiqueta: "Sub-campo 2",
                                nombre: "multicampo-2",
                                ejemplo: "multicampo-2"
                            },
                            {
                                tipo: "texto-numero",
                                etiqueta: "Sub-campo 3",
                                nombre: "multicampo-3",
                                ejemplo: "multicampo-3"
                            },
                        ],
                        // texto: "Una casilla"
                    },
                    cambiar: datos=>console.log("Campo multicampo datos", datos),
          
                }
            ]
        }
    },
});

