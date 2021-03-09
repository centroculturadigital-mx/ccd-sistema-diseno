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



import cuestionarioAD from "../../../../data/cuestionarioAD.js"


export default {
    title: 'Componentes/Formularios/Formulario/Formulario'
}


const cambiar = datos => {

    console.log("cambiaron datos:", datos);

}



const noRequeridos = campos.slice(0, 3).map(c => ({
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
                    ...noRequeridos[noRequeridos.length - 1],
                    nombre: "campo-requerido",
                    requerido: true
                },
            ],
        }
    },
});
export const formularioRequeridoTextoPersonalizado = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: campos,
            configuracion: {
                textos: {
                    requerido: "* texto requerido personalizado"
                }
            }

        }
    },
});


export const formularioConValores = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [{
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
            campos: [{
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
            campos: [{
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
            campos: [{
                ...casilla,
                valor: false,
                requerido: false,
                validacion: null
            }, ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});

export const formularioCasillaObligatoria = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [{
                ...casilla,
                valor: false,
                requerido: true,
                validacion: null
            }, ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});

export const formularioCasillaValidacion = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [{
                ...casilla,
                valor: false,
                requerido: true
            }, ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});

export const formularioCasillaEncendida = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [{
                ...casilla,
                valor: true
            }, ],
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
                // {
                //     ...casilla,
                //     valor: true
                // },
                // {
                //     ...casillas,
                //     valor: new Array(13).fill(true).map(() => Math.random() > 0.5)
                // },
                {
                    ...casillas,
                    nombre: "casillasUnico",
                    etiqueta: "Opción única WTF",
                    indicacion: "Elige solo una",
                    tipo: "casillas",
                    datos: {
                        tipo: "UNICO"
                    },
                    valor: 0
                },
                // {
                //     ...casillas,
                //     nombre: "casillasUnicoOtra",
                //     etiqueta: "Opción única: elige otra",
                //     indicacion: "Elige solo una, o agrega tu opción",
                //     tipo: "casillas",
                //     datos: {
                //         tipo: "UNICO_OTRA"
                //     },
                //     valor: 0
                // },
                // {
                //     ...casillas,
                //     nombre: "casillasMultipleOtra",
                //     etiqueta: "Opción múltiple, y/o añade otra",
                //     indicacion: "Elige las opciones, y/o agrega tu opción",
                //     tipo: "casillas",
                //     datos: {
                //         tipo: "MULTIPLE_OTRA"
                //     },
                //     valor: [
                //         ...new Array(13).fill(true).map((o, i) => ({ id: i, valor: Math.random() > 0.5 })),
                //         {
                //             id: 13,
                //             valor: true,
                //             texto: "Hola mundo"
                //         }
                //     ]
                // },
                // {
                //     ...casillas,
                //     nombre: "casillasMultipleMaximo",
                //     etiqueta: "Opción múltiple, cantidad máxima",
                //     indicacion: "Elige máximo 3 opciones",
                //     tipo: "casillas",
                //     datos: {
                //         tipo: "MULTIPLE_MAXIMO",
                //         datos: {
                //             maximo: 3
                //         }
                //     },
                //     valor: [
                //         ...new Array(13).fill(false)
                //     ]
                // }
            ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});


export const formularioCasillasUnico = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [{
                ...casillas,
                nombre: "casillasUnico",
                etiqueta: "Opción única",
                indicacion: "Elige solo una",
                tipo: "casillas",
                datos: {
                    tipo: "UNICO"
                },
                valor: 0,
                cambiar: v => console.log("cambiar", v)
            }, ],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});



export const formularioCasillasMaximo = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            campos: [{
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
            }],
            enviar: datos => console.log("Enviaste formulario", datos),
        }
    },
});



export const formularioPasosCasillas = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos: pasos.map((p, i) => ({
                ...p,
                campos: new Array(Math.ceil(Math.random() * 3)).fill({})
                    .map(() => ({
                        ...casillas,
                        nombre: "casillas_" + i,
                        opciones: casillas.opciones.map((o, j) => ({
                            ...o,
                            texto: Math.random(),
                            id: Math.random() + "_" + i + "_" + j
                        })),
                        valor: new Array(5 + Math.ceil(Math.random() * 3)).fill(true).map(() => Math.random() > 0.5)
                    }))
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
            campos: campos.map(c => ({
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
            campos: campos.map(c => ({
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
            campos: [{
                tipo: 'multicampo',

                etiqueta: "Un campo tipo multicampo",
                indicacion: "...",
                nombre: "multicampo",
                requerido: true,

                // valorEstatico: "",
                // validacion: "",
                datos: {
                    campos: [{
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
                cambiar: datos => console.log("Campo multicampo datos", datos),

            }]
        }
    },
});




export const formularioMultiCampoValores = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            campos: [{
                tipo: 'multicampo',

                etiqueta: "Un campo tipo multicampo",
                indicacion: "...",
                nombre: "multicampo",
                requerido: true,


                datos: {
                    campos: [{
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
                cambiar: datos => console.log("Campo multicampo datos", datos),

            }]
        }
    },
});






export const formularioMultiCampoPreguntaNumericaOpcionOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            campos: [{
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
                cambiar: datos => console.log("Campo multicampo datos", datos),

            }]
        }
    },
});




export const formularioPasosCasillasMultipleOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos: [{
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
                        ...new Array(13).fill(true).map((o, i) => ({ id: i, valor: Math.random() > 0.5 })),
                        {
                            id: 13,
                            valor: true,
                            texto: "Hola mundo"
                        }
                    ]
                }]
            }]
        }
    },
});




export const formularioPasosCasillasUnicaOtra = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            pasos: [{
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
            }]
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

            pasos: [{
                    titulo: "Un paso con multicampo",
                    texto: "...",
                    nombre: "pasocasilla",
                    campos: [{
                        // ...casilla,
                        nombre: "casilla",
                        etiqueta: "Multicampo casillas",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [{
                                    tipo: "casillas",
                                    etiqueta: "Sub-campo casillas 1",
                                    nombre: "multicampo-casillas-1",
                                    datos: {
                                        tipo: "UNICO"
                                    },
                                    opciones: [{
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
                                    opciones: [{
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
                    campos: [{
                        // ...numero,
                        nombre: "numero",
                        etiqueta: "Multicampo numeros",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [{
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


            pasos: [{
                    titulo: "Un paso con multicampo",
                    texto: "...",
                    nombre: "pasocasilla",
                    campos: [{
                        // ...casilla,
                        nombre: "casilla",
                        etiqueta: "Multicampo casillas",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [{
                                    tipo: "casillas",
                                    etiqueta: "Sub-campo casillas 1",
                                    nombre: "multicampo-casillas-1",
                                    datos: {
                                        tipo: "UNICO"
                                    },
                                    valor: 1,
                                    opciones: [{
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
                                    opciones: [{
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
                    campos: [{
                        // ...numero,
                        nombre: "numero",
                        etiqueta: "Multicampo numeros",
                        indicacion: "Llena las opciones",
                        tipo: "multicampo",
                        datos: {
                            campos: [{
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



const sumaValoresObjeto = objeto => typeof objeto == "object" ? Object.values(objeto).reduce((acc, v) => typeof v == "number" ? (acc + v) : acc, 0) : 0

const suma100 = (valor, campo) => {

    const total = sumaValoresObjeto(valor)

    const valido = total == 100

    return {
        estado: valido ? "ok" : (valor ? "error" : ""),
        error: valido ? null : new Error(`Debe sumar 100. Faltan: ${ 100 - total }`),
        valido
    }
}


export const formularioMulticampoSumaTotal = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioMultiCampo,
        datos: {
            // valor: [
            //     "multicampo-casilla-1": ?,
            //     "multicampo-casilla-2": ?,



            campos: [{
                "tipo": "multicampo",
                "nombre": "suma100",
                "instruccion": "Suma 100",
                "datos": {
                    "campos": [{
                            "tipo": "numero",
                            "instruccion": null,
                            "opciones": [],
                            "nombre": "pregunta-0",
                            "etiqueta": "Pregunta 1",
                            "datos": null
                        },
                        {
                            "tipo": "numero",
                            "instruccion": null,
                            "opciones": [],
                            "nombre": "pregunta-1",
                            "etiqueta": "Pregunta 2",
                            "datos": null
                        },
                        {
                            "tipo": "numero",
                            "instruccion": null,
                            "opciones": [],
                            "nombre": "pregunta-2",
                            "etiqueta": "Pregunta 3",
                            "datos": null
                        },
                        {
                            "tipo": "numero",
                            "instruccion": null,
                            "opciones": [],
                            "nombre": "pregunta-3",
                            "etiqueta": "Pregunta 4",
                            "datos": null
                        }
                    ]
                },
                validacion: suma100,
                info: valor => `Total: ${sumaValoresObjeto(valor)}`
            }]
        }
    },
});


export const formularioCuestionarioAD = () => ({
    Component: ThemeTester,
    props: {
        componente: FormularioTester,
        datos: {
            ...cuestionarioAD,
            pasos: cuestionarioAD.pasos.map(p=>({
                ...p,
                campos: p.campos.map(c=>({
                    ...c,
                    validacion: () => ({
                        estado: "ok",
                        error: null,
                        valido: true
                    })
                }))

            }))
        }
    },
});