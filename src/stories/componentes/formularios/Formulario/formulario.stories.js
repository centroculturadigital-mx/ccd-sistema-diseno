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

import numero from "../../../../data/campos/numero.js"



export default {
    title: 'Componentes/Formularios/Formulario/Formulario'
}


const cambiar = datos => {

    console.log("cambiaron datos:", datos);

}



const noRequeridos = campos.slice(0, 3).map(c=>({
    ...c,
    requerido: false
}))

export const formularioDefault = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos.slice(0, 3),
        }
    },
});




export const formularioNoRequeridos = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: noRequeridos,
        }
    },
});


export const formularioRequeridoMixto = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                ...noRequeridos,
                {
                    ...noRequeridos[noRequeridos.length-1],
                    nombre: "campo-requerido",
                    requerido: true
                },
            ],
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



export const formularioConDatos = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            datos: {
                [campos[0].nombre]: "Consectetur proident ut ut dolore",
                [campos[1].nombre]: 13,
                [campos[2].nombre]: "Aliquanon",
                [campos[3].nombre]: 2,
            },
            campos: [
                {
                    ...campos[0],
                    requerido: true
                },
                {
                    ...campos[1],
                    requerido: true
                },
                {
                    ...campos[2],
                    requerido: true
                },
                {       
                    ...campos[3],
                    requerido: true
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
                    valor: false,
                    requerido: false,
                    validacion: null
                },                
            ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});

export const formularioCasillaObligatoria = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...casilla,
                    valor: false,
                    requerido: true,
                    validacion: null
                },                
            ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});

export const formularioCasillaValidacion = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...casilla,
                    valor: false,
                    requerido: true                },                
            ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});

export const formularioCasillaEncendida = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...casilla,
                    valor: true                 
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


export const formularioCasillasMaximo = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [
                {
                    ...casillas,
                    nombre: "casillasMultiple",
                    etiqueta: "Opción múltiple, máximo 3",
                    indicacion: "Elige máximo 3 opciones",
                    tipo: "casillas",
                    datos: {
                        tipo: "MULTIPLE_MAXIMO",
                        datos: {
                          maximo: 3
                        }
                    },
                    valor: [
                        ...new Array(13).fill(false),                        
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
        
                
                    datos: {
                        campos: [
                            {
                                tipo: "texto",
                                etiqueta: "Texto",
                                nombre: "multicampo-1",
                                ejemplo: "multicampo-1",
                                valor: "hola mundo",
                                
                            },
                            {
                                tipo: "numero",
                                etiqueta: "Número",
                                nombre: "multicampo-2",
                                ejemplo: "multicampo-2",
                                valor: 666,
                                
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




export const formularioPasosCasillasMultipleOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos: [
                {
                    titulo: "Un paso con casillas",
                    texto: "...",
                    nombre: "pasoCasillas",
                    campos: [{
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
                    }]
                }
            ]
        }
    },
});




export const formularioPasosCasillasUnicaOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos: [
                {
                    titulo: "Un paso con casillas",
                    texto: "...",
                    nombre: "pasoCasillas",
                    campos: [{
                        ...casillas,
                        nombre: "casillasUnicoOtra",
                        etiqueta: "Opción única: elige otra",
                        indicacion: "Elige solo una, o agrega tu opción",
                        tipo: "casillas",
                        datos: {
                            tipo: "UNICO_OTRA"
                        },
                        valor: 0
                    }]
                }
            ]
        }
    },
});




export const formularioPasosMulticampo = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            // valor: [
            //     "multicampo-casilla-1": ?,
            //     "multicampo-casilla-2": ?,
           
            datos: {
                "multicampo-casillas-1": 1,
                "multicampo-casillas-2": 2,
                "multicampo-numero-1": 1,
                "multicampo-numero-2": 2,
            },
            
            pasos: [
                {
                    titulo: "Un paso con multicampo",
                    texto: "...",
                    nombre: "pasocasilla",
                    campos: [
                        {
                        // ...casilla,
                        nombre: "casilla",
                        etiqueta: "Multicampo casillas",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [
                                {
                                    tipo: "casillas",
                                    etiqueta: "Sub-campo casillas 1",
                                    nombre: "multicampo-casillas-1",
                                    datos: {
                                        tipo: "UNICO"
                                    },
                                    opciones: [
                                        {
                                            id: 1,
                                            texto: "Opción 1"
                                        },
                                        {
                                            id: 2,
                                            texto: "Opción 2"
                                        },
                                    ]
                                },
                                {
                                    tipo: "casillas",
                                    etiqueta: "Sub-campo casillas 2",
                                    nombre: "multicampo-casillas-2",
                                    datos: {
                                        tipo: "UNICO"
                                    },
                                    opciones: [
                                        {
                                            id: 1,
                                            texto: "Opción 1"
                                        },

                                        {
                                            id: 2,
                                            texto: "Opción 1"
                                        },

                                        {
                                            id: 3,
                                            texto: "Opción 1"
                                        },
                                    ]
                                },
                            ],
                            // texto: "Una casilla"
                        },
                    }]
                },
                {
                    titulo: "Un paso con multicampo",
                    texto: "...",
                    nombre: "pasoNumero",
                    campos: [
                        {
                        // ...numero,
                        nombre: "numero",
                        etiqueta: "Multicampo numeros",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [
                                {
                                    tipo: "numero",
                                    etiqueta: "Sub-campo número 1",
                                    nombre: "multicampo-numero-1",
                                    ejemplo: "666",
                                },
                                {
                                    tipo: "numero",
                                    etiqueta: "Sub-campo número 2",
                                    nombre: "multicampo-numero-2",
                                    ejemplo: "666",
                                },
                            ],
                            // texto: "Una casilla"
                        },
                    }]
                }
            ]
        }
    },
});




                


export const formularioPasosMulticampoValoresEnCampos = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            // valor: [
            //     "multicampo-casilla-1": ?,
            //     "multicampo-casilla-2": ?,
           

            pasos: [
                {
                    titulo: "Un paso con multicampo",
                    texto: "...",
                    nombre: "pasocasilla",
                    campos: [
                        {
                        // ...casilla,
                        nombre: "casilla",
                        etiqueta: "Multicampo casillas",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [
                                {
                                    tipo: "casillas",
                                    etiqueta: "Sub-campo casillas 1",
                                    nombre: "multicampo-casillas-1",
                                    datos: {
                                        tipo: "UNICO"
                                    },
                                    valor: 1,
                                    opciones: [
                                        {
                                            id: 1,
                                            texto: "Opción 1"
                                        },
                                        {
                                            id: 2,
                                            texto: "Opción 2"
                                        },
                                    ]
                                },
                                {
                                    tipo: "casillas",
                                    etiqueta: "Sub-campo casillas 2",
                                    nombre: "multicampo-casillas-2",
                                    datos: {
                                        tipo: "UNICO"
                                    },
                                    valor: 2,
                                    opciones: [
                                        {
                                            id: 1,
                                            texto: "Opción 1"
                                        },

                                        {
                                            id: 2,
                                            texto: "Opción 1"
                                        },

                                        {
                                            id: 3,
                                            texto: "Opción 1"
                                        },
                                    ]
                                },
                            ],
                            // texto: "Una casilla"
                        },
                        // valor: 666
                    }]
                },
                {
                    titulo: "Un paso con multicampo",
                    texto: "...",
                    nombre: "pasoNumero",
                    campos: [
                        {
                        // ...numero,
                        nombre: "numero",
                        etiqueta: "Multicampo numeros",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [
                                {
                                    tipo: "numero",
                                    etiqueta: "Sub-campo número 1",
                                    nombre: "multicampo-numero-1",
                                    ejemplo: "666",
                                    valor: 13
                                },
                                {
                                    tipo: "numero",
                                    etiqueta: "Sub-campo número 2",
                                    nombre: "multicampo-numero-2",
                                    ejemplo: "666",
                                    valor: 69
                                },
                            ],
                            // texto: "Una casilla"
                        },
                        // valor: 666
                    }]
                }
            ]
        }
    },
});




                






export const formularioWtf = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            "pasos": [
              {
                "id": "6019e9ccbdd691001939f6c3",
                "nombre": "Identificación",
                "campos": [
                  {
                    "tipo": "texto",
                    "instruccion": "Si no la recuerdas, consúltala <a href=\"https://www.gob.mx/curp/\" target=\"_blank\">aquí.</a>",
                    "opciones": [],
                    "nombre": "question-6019e9cbbdd691001939f69b",
                    "etiqueta": "1. ¿Cuál es tu CURP?",
                    "requerido": true
                  },
                  {
                    "tipo": "texto",
                    "instruccion": "Si no lo recuerdas, consúltala <a href=\"https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx\" target=\"_blank\">aquí.</a>",
                    "opciones": [],
                    "nombre": "question-6019e9cbbdd691001939f69c",
                    "etiqueta": "2. ¿Cuál es tu código postal?",
                    "requerido": true
                  }
                ]
              },
              {
                "id": "6019e9ccbdd691001939f6c4",
                "nombre": "Demográficos",
                "campos": [
                  {
                    "tipo": "numero",
                    "instruccion": null,
                    "opciones": [],
                    "maximo": 10000,
                    "nombre": "question-6019e9cbbdd691001939f69a",
                    "etiqueta": "1. ¿Qué edad tienes?",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona una opción",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f5f7",
                        "valor": "6019e9cbbdd691001939f5f7",
                        "texto": "Mujer"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f8",
                        "valor": "6019e9cbbdd691001939f5f8",
                        "texto": "Hombre"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f9",
                        "valor": "6019e9cbbdd691001939f5f9",
                        "texto": "No binario"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5fa",
                        "valor": "6019e9cbbdd691001939f5fa",
                        "texto": "Prefiero no decirlo"
                      }
                    ],
                    "datos": {
                      "tipo": "UNICO"
                    },
                    "nombre": "question-6019e9cbbdd691001939f6a0",
                    "etiqueta": "2. ¿Con qué género te identificas?",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona todas las opciones que apliquen",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f5fb",
                        "valor": "6019e9cbbdd691001939f5fb",
                        "texto": "Educación"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5fc",
                        "valor": "6019e9cbbdd691001939f5fc",
                        "texto": "Artes y humanidades"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5fd",
                        "valor": "6019e9cbbdd691001939f5fd",
                        "texto": "Ciencias sociales, administración, negocios y derecho"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5fe",
                        "valor": "6019e9cbbdd691001939f5fe",
                        "texto": "Ciencias naturales"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5ff",
                        "valor": "6019e9cbbdd691001939f5ff",
                        "texto": "Ciencias exactas, computación, informática y ciencia de datos"
                      },
                      {
                        "id": "6019e9cbbdd691001939f600",
                        "valor": "6019e9cbbdd691001939f600",
                        "texto": "Ingeniería, manufactura y construcción"
                      },
                      {
                        "id": "6019e9cbbdd691001939f601",
                        "valor": "6019e9cbbdd691001939f601",
                        "texto": "Agronomía y veterinaria"
                      },
                      {
                        "id": "6019e9cbbdd691001939f602",
                        "valor": "6019e9cbbdd691001939f602",
                        "texto": "Salud"
                      },
                      {
                        "id": "6019e9cbbdd691001939f603",
                        "valor": "6019e9cbbdd691001939f603",
                        "texto": "Servicios"
                      },
                      {
                        "id": "6019e9cbbdd691001939f604",
                        "valor": "6019e9cbbdd691001939f604",
                        "texto": "Ninguna"
                      }
                    ],
                    "nombre": "question-6019e9cbbdd691001939f6a2",
                    "etiqueta": "3. ¿Cuál es tu área de formación?",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona una opción",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f605",
                        "valor": "6019e9cbbdd691001939f605",
                        "texto": "Menos de un año"
                      },
                      {
                        "id": "6019e9cbbdd691001939f606",
                        "valor": "6019e9cbbdd691001939f606",
                        "texto": "Entre 1 y 5 años"
                      },
                      {
                        "id": "6019e9cbbdd691001939f607",
                        "valor": "6019e9cbbdd691001939f607",
                        "texto": "Entre 6 y 10 años"
                      },
                      {
                        "id": "6019e9cbbdd691001939f608",
                        "valor": "6019e9cbbdd691001939f608",
                        "texto": "Entre 11 y 15 años"
                      },
                      {
                        "id": "6019e9cbbdd691001939f609",
                        "valor": "6019e9cbbdd691001939f609",
                        "texto": "Entre 16 y 20 años"
                      },
                      {
                        "id": "6019e9cbbdd691001939f60a",
                        "valor": "6019e9cbbdd691001939f60a",
                        "texto": "Más de 20 años"
                      }
                    ],
                    "datos": {
                      "tipo": "UNICO"
                    },
                    "nombre": "question-6019e9cbbdd691001939f6a3",
                    "etiqueta": "4. ¿Cuántos años tienes de experiencia en el sector cultural-creativo?",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona todas las opciones que apliquen",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f60b",
                        "valor": "6019e9cbbdd691001939f60b",
                        "texto": "Seguro médico"
                      },
                      {
                        "id": "6019e9cbbdd691001939f60c",
                        "valor": "6019e9cbbdd691001939f60c",
                        "texto": "Seguro de vida "
                      },
                      {
                        "id": "6019e9cbbdd691001939f60d",
                        "valor": "6019e9cbbdd691001939f60d",
                        "texto": "Fondo de ahorro "
                      },
                      {
                        "id": "6019e9cbbdd691001939f60e",
                        "valor": "6019e9cbbdd691001939f60e",
                        "texto": "Cuenta de inversiones "
                      },
                      {
                        "id": "6019e9cbbdd691001939f60f",
                        "valor": "6019e9cbbdd691001939f60f",
                        "texto": "AFOREs"
                      },
                      {
                        "id": "6019e9cbbdd691001939f610",
                        "valor": "6019e9cbbdd691001939f610",
                        "texto": "Ninguno"
                      }
                    ],
                    "nombre": "question-6019e9cbbdd691001939f6a4",
                    "etiqueta": "5. ¿Con cuáles de los siguientes servicios cuentas?",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona todas las opciones que apliquen.",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f611",
                        "valor": "6019e9cbbdd691001939f611",
                        "texto": "Ninguna"
                      },
                      {
                        "id": "6019e9cbbdd691001939f612",
                        "valor": "6019e9cbbdd691001939f612",
                        "texto": "Náhuatl"
                      },
                      {
                        "id": "6019e9cbbdd691001939f613",
                        "valor": "6019e9cbbdd691001939f613",
                        "texto": "Maya"
                      },
                      {
                        "id": "6019e9cbbdd691001939f614",
                        "valor": "6019e9cbbdd691001939f614",
                        "texto": "Tseltal"
                      },
                      {
                        "id": "6019e9cbbdd691001939f615",
                        "valor": "6019e9cbbdd691001939f615",
                        "texto": "Mixteco"
                      },
                      {
                        "id": "6019e9cbbdd691001939f616",
                        "valor": "6019e9cbbdd691001939f616",
                        "texto": "Tsotsil"
                      },
                      {
                        "id": "6019e9cbbdd691001939f617",
                        "valor": "6019e9cbbdd691001939f617",
                        "texto": "Zapoteco"
                      },
                      {
                        "id": "6019e9cbbdd691001939f618",
                        "valor": "6019e9cbbdd691001939f618",
                        "texto": "Otomí"
                      },
                      {
                        "id": "6019e9cbbdd691001939f619",
                        "valor": "6019e9cbbdd691001939f619",
                        "texto": "Totonaco"
                      }
                    ],
                    "datos": {
                      "tipo": "MULTIPLE_OTRA"
                    },
                    "nombre": "question-6019e9cbbdd691001939f6a6",
                    "etiqueta": "6. ¿Hablas alguna de las siguientes lenguas indígenas?",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona todas las opciones que apliquen.",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f61a",
                        "valor": "6019e9cbbdd691001939f61a",
                        "texto": "No"
                      },
                      {
                        "id": "6019e9cbbdd691001939f61b",
                        "valor": "6019e9cbbdd691001939f61b",
                        "texto": "Auditiva"
                      },
                      {
                        "id": "6019e9cbbdd691001939f61c",
                        "valor": "6019e9cbbdd691001939f61c",
                        "texto": "Visual "
                      },
                      {
                        "id": "6019e9cbbdd691001939f61d",
                        "valor": "6019e9cbbdd691001939f61d",
                        "texto": "Motriz"
                      },
                      {
                        "id": "6019e9cbbdd691001939f61e",
                        "valor": "6019e9cbbdd691001939f61e",
                        "texto": "Intelectual"
                      }
                    ],
                    "datos": {
                      "tipo": "MULTIPLE_OTRA"
                    },
                    "nombre": "question-6019e9cbbdd691001939f6a5",
                    "etiqueta": "7. ¿Vives con alguna discapacidad?",
                    "requerido": true
                  }
                ]
              },
              {
                "id": "6019e9ccbdd691001939f6c5",
                "nombre": "Práctica profesional y proyectos",
                "campos": [
                  
                  {
                    "tipo": "multicampo",
                    "instruccion": "...",
                    "datos": {
                      "campos": [
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f67a",
                              "valor": "6019e9cbbdd691001939f67a",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f67b",
                              "valor": "6019e9cbbdd691001939f67b",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f67c",
                              "valor": "6019e9cbbdd691001939f67c",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f67d",
                              "valor": "6019e9cbbdd691001939f67d",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b8",
                          "etiqueta": "Empresas (incluyendo agencias de publicidad)",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f676",
                              "valor": "6019e9cbbdd691001939f676",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f677",
                              "valor": "6019e9cbbdd691001939f677",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f678",
                              "valor": "6019e9cbbdd691001939f678",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f679",
                              "valor": "6019e9cbbdd691001939f679",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b9",
                          "etiqueta": "Clientes particulares (personas físicas)",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f67e",
                              "valor": "6019e9cbbdd691001939f67e",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f67f",
                              "valor": "6019e9cbbdd691001939f67f",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f680",
                              "valor": "6019e9cbbdd691001939f680",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f681",
                              "valor": "6019e9cbbdd691001939f681",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6ba",
                          "etiqueta": "Emisoras públicas y privadas",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f682",
                              "valor": "6019e9cbbdd691001939f682",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f683",
                              "valor": "6019e9cbbdd691001939f683",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f684",
                              "valor": "6019e9cbbdd691001939f684",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f685",
                              "valor": "6019e9cbbdd691001939f685",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6bb",
                          "etiqueta": "Servicios de difusión en línea (streaming) ",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f686",
                              "valor": "6019e9cbbdd691001939f686",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f687",
                              "valor": "6019e9cbbdd691001939f687",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f688",
                              "valor": "6019e9cbbdd691001939f688",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f689",
                              "valor": "6019e9cbbdd691001939f689",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6bc",
                          "etiqueta": "Servicios de comercio en línea (e-commerce)",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f68a",
                              "valor": "6019e9cbbdd691001939f68a",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f68b",
                              "valor": "6019e9cbbdd691001939f68b",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f68c",
                              "valor": "6019e9cbbdd691001939f68c",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f68d",
                              "valor": "6019e9cbbdd691001939f68d",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6bd",
                          "etiqueta": "Organizaciones benéficas",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f68e",
                              "valor": "6019e9cbbdd691001939f68e",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f68f",
                              "valor": "6019e9cbbdd691001939f68f",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f690",
                              "valor": "6019e9cbbdd691001939f690",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f691",
                              "valor": "6019e9cbbdd691001939f691",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6be",
                          "etiqueta": "Universidades y centros de investigación",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f692",
                              "valor": "6019e9cbbdd691001939f692",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f693",
                              "valor": "6019e9cbbdd691001939f693",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f694",
                              "valor": "6019e9cbbdd691001939f694",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f695",
                              "valor": "6019e9cbbdd691001939f695",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6bf",
                          "etiqueta": "Organizaciones culturales y artísticas (galerías, museos, festivales, entre otros)",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f696",
                              "valor": "6019e9cbbdd691001939f696",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f697",
                              "valor": "6019e9cbbdd691001939f697",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f698",
                              "valor": "6019e9cbbdd691001939f698",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f699",
                              "valor": "6019e9cbbdd691001939f699",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6c0",
                          "etiqueta": "Otras organizaciones del sector público (ayuntamientos, departamentos de gobierno, entre otros) ",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        }
                      ]
                    },
                    "nombre": "question-6019e9ccbdd691001939f6c2",
                    "etiqueta": "7. ¿Podrías indicar qué tan importante es cada uno de los siguientes clientes para tu práctica profesional?",
                    "requerido": true
                  },
                  
                ]
              },
              {
                "id": "6019e9ccbdd691001939f6c6",
                "nombre": "Innovación y Ecosistema",
                "campos": [
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona todas las que apliquen",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f5ce",
                        "valor": "6019e9cbbdd691001939f5ce",
                        "texto": "Herramientas de trabajo en nube (Drives, Dropbox, etc.)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5cf",
                        "valor": "6019e9cbbdd691001939f5cf",
                        "texto": "Plataformas de gestión y planeación de trabajo y/o colaboración (Asana, Monday, Trello, Slack, Github, etc.) "
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d0",
                        "valor": "6019e9cbbdd691001939f5d0",
                        "texto": "SEO (optimización para motores de búsqueda) "
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d1",
                        "valor": "6019e9cbbdd691001939f5d1",
                        "texto": "SEM (marketing y promoción en buscadores)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d2",
                        "valor": "6019e9cbbdd691001939f5d2",
                        "texto": "Campañas por correo electrónico (Mailchimp, Benchmark)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d3",
                        "valor": "6019e9cbbdd691001939f5d3",
                        "texto": "Analíticas de datos (Google Analytics, SEMrush, etc.)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d4",
                        "valor": "6019e9cbbdd691001939f5d4",
                        "texto": "Herramientas de Big Data (Talkwalker, QuBole, MongoDB, Apache Cassandra, etc.)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d5",
                        "valor": "6019e9cbbdd691001939f5d5",
                        "texto": "Comercio electrónico con plugin de pago en tu página (PayPal, Apple Pay, Amazon Pay, Mercado Pago, etc.)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d6",
                        "valor": "6019e9cbbdd691001939f5d6",
                        "texto": "Market places (Shopify, Kichink, Amazon, Mercado Libre, Facebook, etc.)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d7",
                        "valor": "6019e9cbbdd691001939f5d7",
                        "texto": "Fondeo colectivo (Kickstarter, Patreon, Ko-fi, Indiegogo, GoFundMe, etc.)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d8",
                        "valor": "6019e9cbbdd691001939f5d8",
                        "texto": "Gestores de contenidos (CMS) (Wordpress, Joomla, etc.)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5d9",
                        "valor": "6019e9cbbdd691001939f5d9",
                        "texto": "Plataformas de gestión interna (CRM, ERP, LMS, etc.) "
                      },
                      {
                        "id": "6019e9cbbdd691001939f5da",
                        "valor": "6019e9cbbdd691001939f5da",
                        "texto": "Streaming por internet (YouTube, Facebook, Instagram, Spotify, iTunes, Amazon, Vimeo, Tidal, Twitch, etc.)"
                      }
                    ],
                    "nombre": "question-6019e9cbbdd691001939f69d",
                    "etiqueta": "1. ¿Cuáles de los siguientes servicios o herramientas digitales utilizas para tu actividad profesional? ",
                    "requerido": true
                  },
                  {
                    "tipo": "multicampo",
                    "instruccion": "...",
                    "datos": {
                      "campos": [
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f64e",
                              "valor": "6019e9cbbdd691001939f64e",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f64f",
                              "valor": "6019e9cbbdd691001939f64f",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f650",
                              "valor": "6019e9cbbdd691001939f650",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f651",
                              "valor": "6019e9cbbdd691001939f651",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6ae",
                          "etiqueta": "Otrxs trabajadorxs por honorarios con lxs que colaboras en proyectos",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f652",
                              "valor": "6019e9cbbdd691001939f652",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f653",
                              "valor": "6019e9cbbdd691001939f653",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f654",
                              "valor": "6019e9cbbdd691001939f654",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f655",
                              "valor": "6019e9cbbdd691001939f655",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6af",
                          "etiqueta": "Otras empresas e iniciativas que son competencia",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f656",
                              "valor": "6019e9cbbdd691001939f656",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f657",
                              "valor": "6019e9cbbdd691001939f657",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f658",
                              "valor": "6019e9cbbdd691001939f658",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f659",
                              "valor": "6019e9cbbdd691001939f659",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b0",
                          "etiqueta": "Universidades, laboratorios de I+D y centros de investigación ",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f65a",
                              "valor": "6019e9cbbdd691001939f65a",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f65b",
                              "valor": "6019e9cbbdd691001939f65b",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f65c",
                              "valor": "6019e9cbbdd691001939f65c",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f65d",
                              "valor": "6019e9cbbdd691001939f65d",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b1",
                          "etiqueta": "Encuentros creativos, conferencias y ferias comerciales",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f65e",
                              "valor": "6019e9cbbdd691001939f65e",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f65f",
                              "valor": "6019e9cbbdd691001939f65f",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f660",
                              "valor": "6019e9cbbdd691001939f660",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f661",
                              "valor": "6019e9cbbdd691001939f661",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b2",
                          "etiqueta": "Exposiciones y festivales artísticos y culturales",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f662",
                              "valor": "6019e9cbbdd691001939f662",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f663",
                              "valor": "6019e9cbbdd691001939f663",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f664",
                              "valor": "6019e9cbbdd691001939f664",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f665",
                              "valor": "6019e9cbbdd691001939f665",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b3",
                          "etiqueta": "Publicaciones técnicas y académicas",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f666",
                              "valor": "6019e9cbbdd691001939f666",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f667",
                              "valor": "6019e9cbbdd691001939f667",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f668",
                              "valor": "6019e9cbbdd691001939f668",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f669",
                              "valor": "6019e9cbbdd691001939f669",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b4",
                          "etiqueta": "Cursos, talleres, y webinars",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f66e",
                              "valor": "6019e9cbbdd691001939f66e",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f66f",
                              "valor": "6019e9cbbdd691001939f66f",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f670",
                              "valor": "6019e9cbbdd691001939f670",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f671",
                              "valor": "6019e9cbbdd691001939f671",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b5",
                          "etiqueta": "Foros, blogs y comunidades en línea",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f672",
                              "valor": "6019e9cbbdd691001939f672",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f673",
                              "valor": "6019e9cbbdd691001939f673",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f674",
                              "valor": "6019e9cbbdd691001939f674",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f675",
                              "valor": "6019e9cbbdd691001939f675",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b6",
                          "etiqueta": "Redes sociales",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        },
                        {
                          "tipo": "casillas",
                          "instruccion": null,
                          "opciones": [
                            {
                              "id": "6019e9cbbdd691001939f66a",
                              "valor": "6019e9cbbdd691001939f66a",
                              "texto": "Nada"
                            },
                            {
                              "id": "6019e9cbbdd691001939f66b",
                              "valor": "6019e9cbbdd691001939f66b",
                              "texto": "Poco"
                            },
                            {
                              "id": "6019e9cbbdd691001939f66c",
                              "valor": "6019e9cbbdd691001939f66c",
                              "texto": "Algo"
                            },
                            {
                              "id": "6019e9cbbdd691001939f66d",
                              "valor": "6019e9cbbdd691001939f66d",
                              "texto": "Mucho"
                            }
                          ],
                          "nombre": "subquestion-6019e9cbbdd691001939f6b7",
                          "etiqueta": "Clientes, consumidorxs y usuarixs",
                          "datos": {
                            "tipo": "UNICO"
                          }
                        }
                      ]
                    },
                    "nombre": "question-6019e9ccbdd691001939f6c1",
                    "etiqueta": "2. En la tarea de buscar nuevas ideas para tu práctica, ¿qué tan importantes han sido (...)? ",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": "Selecciona todas las que apliquen",
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f5db",
                        "valor": "6019e9cbbdd691001939f5db",
                        "texto": "Registré derechos de autor "
                      },
                      {
                        "id": "6019e9cbbdd691001939f5dc",
                        "valor": "6019e9cbbdd691001939f5dc",
                        "texto": "Solicité una patente"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5dd",
                        "valor": "6019e9cbbdd691001939f5dd",
                        "texto": "Registré un dibujo industrial "
                      },
                      {
                        "id": "6019e9cbbdd691001939f5de",
                        "valor": "6019e9cbbdd691001939f5de",
                        "texto": "Registré una marca"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5df",
                        "valor": "6019e9cbbdd691001939f5df",
                        "texto": "Utilicé licencias abiertas y/o libres (Creative Commons, MPL, GNU, etc)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e0",
                        "valor": "6019e9cbbdd691001939f5e0",
                        "texto": "Ninguno"
                      }
                    ],
                    "nombre": "question-6019e9cbbdd691001939f69e",
                    "etiqueta": "3. Durante el año 2019, ¿recurriste a algún tipo de licenciamiento, registro de autor o propiedad intelectual para tu obra? ",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": null,
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f5e1",
                        "valor": "6019e9cbbdd691001939f5e1",
                        "texto": "Lanzaste productos nuevos o con mejoras significativas"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e2",
                        "valor": "6019e9cbbdd691001939f5e2",
                        "texto": "Lanzaste servicios nuevos o con mejoras significativas (incluyendo nuevos tipos de proyectos)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e3",
                        "valor": "6019e9cbbdd691001939f5e3",
                        "texto": "Lanzaste software nuevo o con mejoras significativas (incluyendo el de uso interno)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e4",
                        "valor": "6019e9cbbdd691001939f5e4",
                        "texto": "Mejoraste las formas de producción y suministro de productos y servicios (incluyendo la implementación de nuevas técnicas de administración)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e5",
                        "valor": "6019e9cbbdd691001939f5e5",
                        "texto": "Implementaste estrategias de negocio nuevas o con mejoras significativas (incluyendo nuevos modelos de negocio)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e6",
                        "valor": "6019e9cbbdd691001939f5e6",
                        "texto": "Te capacitaste en alguna nueva herramienta/habilidad"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e7",
                        "valor": "6019e9cbbdd691001939f5e7",
                        "texto": "Utilizaste contenidos con derechos de autor/licenciados de terceros que no habías utilizado anteriormente"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e8",
                        "valor": "6019e9cbbdd691001939f5e8",
                        "texto": "Utilizaste software abierto y/o libre"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5e9",
                        "valor": "6019e9cbbdd691001939f5e9",
                        "texto": "Produjiste material elegible para solicitar derechos de autor"
                      }
                    ],
                    "nombre": "question-6019e9cbbdd691001939f69f",
                    "etiqueta": "4. Durante el año 2019, ¿incursionaste en alguna de las siguientes actividades? Selecciona todas las que apliquen",
                    "requerido": true
                  },
                  {
                    "tipo": "casillas",
                    "instruccion": null,
                    "opciones": [
                      {
                        "id": "6019e9cbbdd691001939f5ea",
                        "valor": "6019e9cbbdd691001939f5ea",
                        "texto": "Dificultad para acceder a financiamiento externo"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5eb",
                        "valor": "6019e9cbbdd691001939f5eb",
                        "texto": "Falta de habilidades y capacidades actualizadas"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5ec",
                        "valor": "6019e9cbbdd691001939f5ec",
                        "texto": "Poco aprovechamiento de las tecnologías digitales"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5ed",
                        "valor": "6019e9cbbdd691001939f5ed",
                        "texto": "Mala cultura de gestión de proyectos "
                      },
                      {
                        "id": "6019e9cbbdd691001939f5ee",
                        "valor": "6019e9cbbdd691001939f5ee",
                        "texto": "Excesiva competencia en mercados"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5ef",
                        "valor": "6019e9cbbdd691001939f5ef",
                        "texto": "Falta de poder de negociación con los clientxs o proveedorxs"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f0",
                        "valor": "6019e9cbbdd691001939f5f0",
                        "texto": "Vulneración de la propiedad intelectual (incluyendo derechos de autor)"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f1",
                        "valor": "6019e9cbbdd691001939f5f1",
                        "texto": "Reglamentación y/o legislación estricta"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f2",
                        "valor": "6019e9cbbdd691001939f5f2",
                        "texto": "Impuestos altos y/o limitantes del régimen fiscal"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f3",
                        "valor": "6019e9cbbdd691001939f5f3",
                        "texto": "Baja demanda de los productos o servicios"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f4",
                        "valor": "6019e9cbbdd691001939f5f4",
                        "texto": "Inseguridad"
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f5",
                        "valor": "6019e9cbbdd691001939f5f5",
                        "texto": "Corrupción "
                      },
                      {
                        "id": "6019e9cbbdd691001939f5f6",
                        "valor": "6019e9cbbdd691001939f5f6",
                        "texto": "Clima económico actual"
                      }
                    ],
                    "nombre": "question-6019e9cbbdd691001939f6a1",
                    "etiqueta": "5. En tu opinión, ¿cuáles son los 3 principales factores que obstaculizan el desarrollo de tu campo profesional? ",
                    "requerido": true
                  }
                ]
              }
            ],
            "campos": []
        }
    },
});




                



