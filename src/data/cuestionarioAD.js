export default {
  "pasos": [
    {
      "id": "6010a6c4cf990f001907172d",
      "nombre": "Identificación de la empresa",
      "campos": [
        {
          "tipo": "texto",
          "instruccion": "Si no lo recuerdas, consúltalo <a href=\"https://www.sat.gob.mx/aplicacion/29073/verifica-si-estas-registrado-en-el-rfc\" target=\"_blank\">aquí.</a>",
          "opciones": [],
          "nombre": "question-6010a6c3cf990f00190716e4",
          "etiqueta": "1. ¿Cuál es el RFC de la empresa?",
          "requerido": true,
          "datos": null,
          "valor": "tefr851112488",
          "valorInicial": "tefr851112488"
        },
        {
          "tipo": "texto",
          "instruccion": "Si no lo recuerdas, consúltalo <a href=\"https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx\" target=\"_blank\">aquí.</a>",
          "opciones": [],
          "nombre": "question-6010a6c3cf990f00190716e5",
          "etiqueta": "2. ¿Cuál es el código postal - de la dirección fiscal - de la empresa?",
          "requerido": true,
          "datos": null,
          "valor": "12312",
          "valorInicial": "12312"
        }
      ]
    },
    {
      "id": "6010a6c4cf990f001907172e",
      "nombre": "Identificación del representante de la empresa ",
      "campos": [
        {
          "tipo": "numero",
          "instruccion": "",
          "opciones": [],
          "maximo": 10000,
          "nombre": "question-6010a6c3cf990f00190716e6",
          "etiqueta": "1. ¿Qué edad tienes?",
          "requerido": true,
          "datos": null,
          "valor": 33,
          "valorInicial": 33
        },
        {
          "tipo": "casillas",
          "instruccion": "Selecciona una opción",
          "opciones": [
            {
              "id": "6010a6c2cf990f00190715e2",
              "valor": "6010a6c2cf990f00190715e2",
              "texto": "Mujer"
            },
            {
              "id": "6010a6c2cf990f00190715e3",
              "valor": "6010a6c2cf990f00190715e3",
              "texto": "Hombre"
            },
            {
              "id": "6010a6c2cf990f00190715e4",
              "valor": "6010a6c2cf990f00190715e4",
              "texto": "No binario"
            },
            {
              "id": "6010a6c2cf990f00190715e5",
              "valor": "6010a6c2cf990f00190715e5",
              "texto": "Prefiero no decirlo"
            }
          ],
          "valor": 0,
          "datos": {
            "tipo": "UNICO"
          },
          "nombre": "question-6010a6c3cf990f00190716f8",
          "etiqueta": "2. ¿Con qué género te identificas?",
          "requerido": true,
          "valorInicial": 0
        }
      ]
    },
    {
      "id": "6010a6c4cf990f001907172f",
      "nombre": "Composición de la empresa",
      "campos": [
        {
          "tipo": "casillas",
          "instruccion": "",
          "opciones": [
            {
              "id": "6010a6c2cf990f00190716c2",
              "valor": "6010a6c2cf990f00190716c2",
              "texto": "Comenzó con un startup o emprendimiento"
            },
            {
              "id": "6010a6c2cf990f00190716c3",
              "valor": "6010a6c2cf990f00190716c3",
              "texto": "Fue una idea de un grupo de universitarios"
            },
            {
              "id": "6010a6c2cf990f00190716c4",
              "valor": "6010a6c2cf990f00190716c4",
              "texto": "Surgió de otra empresa aún en funcionamiento "
            },
            {
              "id": "6010a6c2cf990f00190716c5",
              "valor": "6010a6c2cf990f00190716c5",
              "texto": "Surgió de otra empresa cerrada"
            },
            {
              "id": "6010a6c2cf990f00190716c6",
              "valor": "6010a6c2cf990f00190716c6",
              "texto": "Nació de una investigación universitaria"
            },
            {
              "id": "6010a6c2cf990f00190716c7",
              "valor": "6010a6c2cf990f00190716c7",
              "texto": "Fue el resultado de una adquisición, fusión o sociedad de capital de riesgo"
            }
          ],
          "valor": {
            "id": 0
          },
          "datos": {
            "tipo": "UNICO_OTRA"
          },
          "nombre": "question-6010a6c3cf990f0019071721",
          "etiqueta": "1. ¿Cuál fue la razón de origen de la empresa? ",
          "requerido": true,
          "valorInicial": {
            "id": 0
          }
        },
        {
          "tipo": "casillas",
          "instruccion": "",
          "opciones": [
            {
              "id": "6010a6c2cf990f00190716c8",
              "valor": "6010a6c2cf990f00190716c8",
              "texto": "Sociedades Mercantiles - (S.A., S.A de C.V., S. de R.L., S. en C.S., S. en C. por A., S.A.P.I., S.N.C o S.A.B.)"
            },
            {
              "id": "6010a6c2cf990f00190716c9",
              "valor": "6010a6c2cf990f00190716c9",
              "texto": "Sociedad Cooperativa (S.C.)"
            },
            {
              "id": "6010a6c2cf990f00190716ca",
              "valor": "6010a6c2cf990f00190716ca",
              "texto": "Sociedad por Acciones Simplificada (S.A.S.)"
            },
            {
              "id": "6010a6c2cf990f00190716cb",
              "valor": "6010a6c2cf990f00190716cb",
              "texto": "Sociedad Civil (S.C.)"
            },
            {
              "id": "6010a6c2cf990f00190716cc",
              "valor": "6010a6c2cf990f00190716cc",
              "texto": "Empresa del Estado (paraestatales)"
            },
            {
              "id": "6010a6c2cf990f00190716cd",
              "valor": "6010a6c2cf990f00190716cd",
              "texto": "Empresa pública-privada"
            },
            {
              "id": "6010a6c2cf990f00190716ce",
              "valor": "6010a6c2cf990f00190716ce",
              "texto": "Empresa extranjera (con sucursal o agencia en México)"
            }
          ],
          "valor": 1,
          "datos": {
            "tipo": "UNICO"
          },
          "nombre": "question-6010a6c3cf990f0019071722",
          "etiqueta": "2. ¿Qué especie de persona moral es la empresa?",
          "requerido": true,
          "valorInicial": 1
        },
        {
          "tipo": "numero",
          "instruccion": "",
          "opciones": [],
          "maximo": 10000,
          "nombre": "question-6010a6c3cf990f00190716e7",
          "etiqueta": "3. ¿En qué año se creó y/o fundó la empresa?",
          "requerido": true,
          "datos": null,
          "valor": 1999,
          "valorInicial": 1999
        },
        {
          "tipo": "casillas",
          "instruccion": "*Utilidades = total de ingresos de la empresa menos (-) los gastos fijos y corrientes: renta, nómina, etc.",
          "opciones": [
            {
              "id": "6010a6c2cf990f00190716cf",
              "valor": "6010a6c2cf990f00190716cf",
              "texto": "Hasta $50 mil"
            },
            {
              "id": "6010a6c2cf990f00190716d0",
              "valor": "6010a6c2cf990f00190716d0",
              "texto": "Más de $50 mil y hasta $100 mil"
            },
            {
              "id": "6010a6c2cf990f00190716d1",
              "valor": "6010a6c2cf990f00190716d1",
              "texto": "Más de $100 mil y hasta $500 mil"
            },
            {
              "id": "6010a6c2cf990f00190716d2",
              "valor": "6010a6c2cf990f00190716d2",
              "texto": "Más de $500 mil y hasta $1 millón"
            },
            {
              "id": "6010a6c2cf990f00190716d3",
              "valor": "6010a6c2cf990f00190716d3",
              "texto": "Más de $1 millón y hasta $5 millones"
            },
            {
              "id": "6010a6c2cf990f00190716d4",
              "valor": "6010a6c2cf990f00190716d4",
              "texto": "Más de $5 millones y hasta $10 millones"
            },
            {
              "id": "6010a6c2cf990f00190716d5",
              "valor": "6010a6c2cf990f00190716d5",
              "texto": "Más de $10 millones y hasta $50 millones"
            },
            {
              "id": "6010a6c2cf990f00190716d6",
              "valor": "6010a6c2cf990f00190716d6",
              "texto": "Más de $50 millones"
            },
            {
              "id": "6010a6c2cf990f00190716d7",
              "valor": "6010a6c2cf990f00190716d7",
              "texto": "Prefiero no decirlo "
            }
          ],
          "valor": 2,
          "datos": {
            "tipo": "UNICO"
          },
          "nombre": "question-6010a6c3cf990f0019071723",
          "etiqueta": "4. ¿Cuál fue el volumen de utilidades* (antes de impuestos) que tuvo la empresa durante el año fiscal 2019? ",
          "requerido": true,
          "valorInicial": 2
        },
        {
          "tipo": "casillas",
          "instruccion": "",
          "opciones": [
            {
              "id": "6010a6c2cf990f00190716d8",
              "valor": "6010a6c2cf990f00190716d8",
              "texto": "entre 1 y 4 proyectos "
            },
            {
              "id": "6010a6c2cf990f00190716d9",
              "valor": "6010a6c2cf990f00190716d9",
              "texto": "entre 5 y 9 proyectos "
            },
            {
              "id": "6010a6c2cf990f00190716da",
              "valor": "6010a6c2cf990f00190716da",
              "texto": "entre 10 y 19 proyectos "
            },
            {
              "id": "6010a6c2cf990f00190716db",
              "valor": "6010a6c2cf990f00190716db",
              "texto": "entre 20 y 29 proyectos "
            },
            {
              "id": "6010a6c2cf990f00190716dc",
              "valor": "6010a6c2cf990f00190716dc",
              "texto": "entre 30 y 40 proyectos"
            },
            {
              "id": "6010a6c2cf990f00190716dd",
              "valor": "6010a6c2cf990f00190716dd",
              "texto": "más de 40 proyectos"
            }
          ],
          "valor": 3,
          "datos": {
            "tipo": "UNICO"
          },
          "nombre": "question-6010a6c3cf990f0019071724",
          "etiqueta": "5. ¿Cuántos proyectos operó la empresa en 2019? ",
          "requerido": true,
          "valorInicial": 3
        },
        {
          "tipo": "multicampo",
          "datos": {
            "campos": [
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716e8",
                "etiqueta": "Número de empleados hombres de nómina",
                "datos": null,
                "valor": 11
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716e9",
                "etiqueta": "Número de empleadas mujeres de nómina",
                "datos": null,
                "valor": 22
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716ea",
                "etiqueta": "Número de empleadxs con género no binario de nómina",
                "datos": null,
                "valor": 33
              }
            ]
          },
          "nombre": "question-6010a6c4cf990f0019071726",
          "etiqueta": "6. ¿Cuántxs empleadxs de nómina (sin contar a lxs trabajadorxs por honorarios) en promedio, tuvo la empresa en el año fiscal 2019? ",
          "requerido": true,
          "valor": {
            "subquestion-6010a6c3cf990f00190716e8": 11,
            "subquestion-6010a6c3cf990f00190716e9": 22,
            "subquestion-6010a6c3cf990f00190716ea": 33
          },
          "valorInicial": {
            "subquestion-6010a6c3cf990f00190716e8": 11,
            "subquestion-6010a6c3cf990f00190716e9": 22,
            "subquestion-6010a6c3cf990f00190716ea": 33
          }
        },
        {
          "tipo": "multicampo",
          "datos": {
            "campos": [
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716eb",
                "etiqueta": "Número de trabajadores hombres por honorarios",
                "datos": null,
                "valor": 11
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716ec",
                "etiqueta": "Número de trabajadoras mujeres por honorarios",
                "datos": null,
                "valor": 22
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716ed",
                "etiqueta": "Número de trabajadorxs con género no binario por honorarios",
                "datos": null,
                "valor": 33
              }
            ]
          },
          "nombre": "question-6010a6c4cf990f0019071727",
          "etiqueta": "7. ¿Cuántxs trabajadorxs por honorarios tuvo la empresa en el año fiscal 2019? ",
          "requerido": true,
          "valor": {
            "subquestion-6010a6c3cf990f00190716eb": 11,
            "subquestion-6010a6c3cf990f00190716ec": 22,
            "subquestion-6010a6c3cf990f00190716ed": 33
          },
          "valorInicial": {
            "subquestion-6010a6c3cf990f00190716eb": 11,
            "subquestion-6010a6c3cf990f00190716ec": 22,
            "subquestion-6010a6c3cf990f00190716ed": 33
          }
        },
        {
          "tipo": "multicampo",
          "datos": {
            "campos": [
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716ee",
                "etiqueta": "Ciencia e ingenierías, incluyendo informática",
                "datos": null,
                "valor": 11
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716ef",
                "etiqueta": "Artes y diseño",
                "datos": null,
                "valor": 22
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f0",
                "etiqueta": "Administración de empresas y negocios",
                "datos": null,
                "valor": 44
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f1",
                "etiqueta": "Ciencias sociales y humanidades",
                "datos": null,
                "valor": 55
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f2",
                "etiqueta": "No tienen estudios",
                "datos": null,
                "valor": 66
              },
              {
                "tipo": "texto-numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f3",
                "etiqueta": "Otro",
                "datos": null,
                "valor": {
                  "texto": "abcdef",
                  "numero": 77
                }
              }
            ]
          },
          "nombre": "question-6010a6c4cf990f0019071728",
          "etiqueta": "8. ¿Cuántxs trabajadorxs por honorarios tuvo la empresa en el año fiscal 2019? ",
          "requerido": true,
          "valor": {
            "subquestion-6010a6c3cf990f00190716ee": 11,
            "subquestion-6010a6c3cf990f00190716ef": 22,
            "subquestion-6010a6c3cf990f00190716f0": 44,
            "subquestion-6010a6c3cf990f00190716f1": 55,
            "subquestion-6010a6c3cf990f00190716f2": 66,
            "subquestion-6010a6c3cf990f00190716f3": {
              "texto": "abcdef",
              "numero": 77
            }
          },
          "valorInicial": {
            "subquestion-6010a6c3cf990f00190716ee": 11,
            "subquestion-6010a6c3cf990f00190716ef": 22,
            "subquestion-6010a6c3cf990f00190716f0": 44,
            "subquestion-6010a6c3cf990f00190716f1": 55,
            "subquestion-6010a6c3cf990f00190716f2": 66,
            "subquestion-6010a6c3cf990f00190716f3": {
              "texto": "abcdef",
              "numero": 77
            }
          }
        },
        {
          "tipo": "casillas",
          "instruccion": "",
          "opciones": [
            {
              "id": "6010a6c2cf990f00190716de",
              "valor": "6010a6c2cf990f00190716de",
              "texto": "0%"
            },
            {
              "id": "6010a6c2cf990f00190716df",
              "valor": "6010a6c2cf990f00190716df",
              "texto": "10%"
            },
            {
              "id": "6010a6c2cf990f00190716e0",
              "valor": "6010a6c2cf990f00190716e0",
              "texto": "25%"
            },
            {
              "id": "6010a6c2cf990f00190716e1",
              "valor": "6010a6c2cf990f00190716e1",
              "texto": "50%"
            },
            {
              "id": "6010a6c2cf990f00190716e2",
              "valor": "6010a6c2cf990f00190716e2",
              "texto": "75%"
            },
            {
              "id": "6010a6c2cf990f00190716e3",
              "valor": "6010a6c2cf990f00190716e3",
              "texto": "100%"
            }
          ],
          "valor": 5,
          "datos": {
            "tipo": "UNICO"
          },
          "nombre": "question-6010a6c4cf990f0019071725",
          "etiqueta": "9. Pensando en puestos de toma de decisiones en la empresa, aproximadamente ¿cuántos de estos están ocupados por mujeres?",
          "requerido": true,
          "valorInicial": 5
        },
        {
          "tipo": "multicampo",
          "datos": {
            "campos": [
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f4",
                "etiqueta": "Gastos en trabajadorxs de nómina",
                "datos": null,
                "valor": 25
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f5",
                "etiqueta": "Gastos en trabajadorxs  por honorarios",
                "datos": null,
                "valor": 25
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f6",
                "etiqueta": "Gastos en tecnologías de la información (IT) (incluye hardware, licencias de software, tercerizaciones, nube, software, capacitaciones, entre otros)",
                "datos": null,
                "valor": 25
              },
              {
                "tipo": "numero",
                "instruccion": null,
                "opciones": [],
                "nombre": "subquestion-6010a6c3cf990f00190716f7",
                "etiqueta": "Gastos en renta de oficina y/o espacios de trabajo (incluyendo pago de servicios como luz, agua, internet, etc.)",
                "datos": null,
                "valor": 25
              }
            ]
          },
          "nombre": "question-6010a6c4cf990f0019071729",
          "etiqueta": "10. Respecto a los gastos totales de la empresa en 2019, en promedio ¿qué porcentaje fue para (…)? ",
          "requerido": true,
          "valor": {
            "subquestion-6010a6c3cf990f00190716f4": 25,
            "subquestion-6010a6c3cf990f00190716f5": 25,
            "subquestion-6010a6c3cf990f00190716f6": 25,
            "subquestion-6010a6c3cf990f00190716f7": 25
          },
          "valorInicial": {
            "subquestion-6010a6c3cf990f00190716f4": 25,
            "subquestion-6010a6c3cf990f00190716f5": 25,
            "subquestion-6010a6c3cf990f00190716f6": 25,
            "subquestion-6010a6c3cf990f00190716f7": 25
          }
        }
      ]
    },
    {
      "id": "6010a6c4cf990f0019071730",
      "nombre": "Mercados y tecnología",
      "campos": [
        {
          "tipo": "casillas",
          "instruccion": "Selecciona hasta los 3 estados más importantes",
          "opciones": [
            {
              "id": "6010a6c2cf990f00190715e6",
              "valor": "6010a6c2cf990f00190715e6",
              "texto": "Aguascalientes"
            },
            {
              "id": "6010a6c2cf990f00190715e7",
              "valor": "6010a6c2cf990f00190715e7",
              "texto": "Baja California"
            },
            {
              "id": "6010a6c2cf990f00190715e8",
              "valor": "6010a6c2cf990f00190715e8",
              "texto": "Baja California Sur"
            },
            {
              "id": "6010a6c2cf990f00190715e9",
              "valor": "6010a6c2cf990f00190715e9",
              "texto": "Campeche"
            },
            {
              "id": "6010a6c2cf990f00190715ea",
              "valor": "6010a6c2cf990f00190715ea",
              "texto": "Chihuahua"
            },
            {
              "id": "6010a6c2cf990f00190715eb",
              "valor": "6010a6c2cf990f00190715eb",
              "texto": "Chiapas"
            },
            {
              "id": "6010a6c2cf990f00190715ec",
              "valor": "6010a6c2cf990f00190715ec",
              "texto": "Ciudad de Mexico"
            },
            {
              "id": "6010a6c2cf990f00190715ed",
              "valor": "6010a6c2cf990f00190715ed",
              "texto": "Coahuila"
            },
            {
              "id": "6010a6c2cf990f00190715ee",
              "valor": "6010a6c2cf990f00190715ee",
              "texto": "Colima"
            },
            {
              "id": "6010a6c2cf990f00190715ef",
              "valor": "6010a6c2cf990f00190715ef",
              "texto": "Durango"
            },
            {
              "id": "6010a6c2cf990f00190715f0",
              "valor": "6010a6c2cf990f00190715f0",
              "texto": "Guanajuato"
            },
            {
              "id": "6010a6c2cf990f00190715f1",
              "valor": "6010a6c2cf990f00190715f1",
              "texto": "Guerrero"
            },
            {
              "id": "6010a6c2cf990f00190715f2",
              "valor": "6010a6c2cf990f00190715f2",
              "texto": "Hidalgo"
            },
            {
              "id": "6010a6c2cf990f00190715f3",
              "valor": "6010a6c2cf990f00190715f3",
              "texto": "Jalisco"
            },
            {
              "id": "6010a6c2cf990f00190715f4",
              "valor": "6010a6c2cf990f00190715f4",
              "texto": "Estado de México"
            },
            {
              "id": "6010a6c2cf990f00190715f5",
              "valor": "6010a6c2cf990f00190715f5",
              "texto": "Michoacán"
            },
            {
              "id": "6010a6c2cf990f00190715f6",
              "valor": "6010a6c2cf990f00190715f6",
              "texto": "Morelos"
            },
            {
              "id": "6010a6c2cf990f00190715f7",
              "valor": "6010a6c2cf990f00190715f7",
              "texto": "Nayarit"
            },
            {
              "id": "6010a6c2cf990f00190715f8",
              "valor": "6010a6c2cf990f00190715f8",
              "texto": "Nuevo León"
            },
            {
              "id": "6010a6c2cf990f00190715f9",
              "valor": "6010a6c2cf990f00190715f9",
              "texto": "Oaxaca"
            },
            {
              "id": "6010a6c2cf990f00190715fa",
              "valor": "6010a6c2cf990f00190715fa",
              "texto": "Puebla"
            },
            {
              "id": "6010a6c2cf990f00190715fb",
              "valor": "6010a6c2cf990f00190715fb",
              "texto": "Querétaro"
            },
            {
              "id": "6010a6c2cf990f00190715fc",
              "valor": "6010a6c2cf990f00190715fc",
              "texto": "Quintana Roo"
            },
            {
              "id": "6010a6c2cf990f00190715fd",
              "valor": "6010a6c2cf990f00190715fd",
              "texto": "San Luis Potosí"
            },
            {
              "id": "6010a6c2cf990f00190715fe",
              "valor": "6010a6c2cf990f00190715fe",
              "texto": "Sinaloa"
            },
            {
              "id": "6010a6c2cf990f00190715ff",
              "valor": "6010a6c2cf990f00190715ff",
              "texto": "Sonora"
            },
            {
              "id": "6010a6c2cf990f0019071600",
              "valor": "6010a6c2cf990f0019071600",
              "texto": "Tabasco"
            },
            {
              "id": "6010a6c2cf990f0019071601",
              "valor": "6010a6c2cf990f0019071601",
              "texto": "Tamaulipas"
            },
            {
              "id": "6010a6c2cf990f0019071602",
              "valor": "6010a6c2cf990f0019071602",
              "texto": "Tlaxcala"
            },
            {
              "id": "6010a6c2cf990f0019071603",
              "valor": "6010a6c2cf990f0019071603",
              "texto": "Veracruz"
            },
            {
              "id": "6010a6c2cf990f0019071604",
              "valor": "6010a6c2cf990f0019071604",
              "texto": "Yucatán"
            },
            {
              "id": "6010a6c2cf990f0019071605",
              "valor": "6010a6c2cf990f0019071605",
              "texto": "Zacatecas "
            }
          ],
          "datos": {
            "tipo": "MULTIPLE_MAXIMO",
            "datos": {
              "maximo": 3
            }
          },
          "nombre": "question-6010a6c3cf990f00190716f9",
          "etiqueta": "1. ¿Cuáles de los siguientes estados del país son una fuente de ingresos para la empresa? ",
          "requerido": true,
          "valor": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ],
          "valorInicial": [
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ]
        },
        {
          "tipo": "casillas",
          "instruccion": "Selecciona hasta los 3 países más importantes",
          "opciones": [
            {
              "id": "6010a6c2cf990f0019071606",
              "valor": "6010a6c2cf990f0019071606",
              "texto": "Ninguno"
            },
            {
              "id": "6010a6c2cf990f0019071607",
              "valor": "6010a6c2cf990f0019071607",
              "texto": "Estados Unidos de América"
            },
            {
              "id": "6010a6c2cf990f0019071608",
              "valor": "6010a6c2cf990f0019071608",
              "texto": "Canadá"
            },
            {
              "id": "6010a6c2cf990f0019071609",
              "valor": "6010a6c2cf990f0019071609",
              "texto": "España"
            },
            {
              "id": "6010a6c2cf990f001907160a",
              "valor": "6010a6c2cf990f001907160a",
              "texto": "Reino Unido"
            },
            {
              "id": "6010a6c2cf990f001907160b",
              "valor": "6010a6c2cf990f001907160b",
              "texto": "Francia"
            },
            {
              "id": "6010a6c2cf990f001907160c",
              "valor": "6010a6c2cf990f001907160c",
              "texto": "Alemania"
            },
            {
              "id": "6010a6c2cf990f001907160d",
              "valor": "6010a6c2cf990f001907160d",
              "texto": "India"
            },
            {
              "id": "6010a6c2cf990f001907160e",
              "valor": "6010a6c2cf990f001907160e",
              "texto": "Colombia"
            },
            {
              "id": "6010a6c2cf990f001907160f",
              "valor": "6010a6c2cf990f001907160f",
              "texto": "Chile"
            },
            {
              "id": "6010a6c2cf990f0019071610",
              "valor": "6010a6c2cf990f0019071610",
              "texto": "Brazil"
            }
          ],
          "datos": {
            "tipo": "MULTIPLE_OTRA"
          },
          "nombre": "question-6010a6c3cf990f00190716fa",
          "etiqueta": "2. ¿Cuáles de los siguientes países del mundo son una fuente de ingresos para la empresa? ",
          "requerido": true,
          "valor": [
            {
              "id": 0,
              "valor": true
            },
            {
              "id": 1,
              "valor": true
            },
            {
              "id": 2,
              "valor": true
            },
            {
              "id": 3,
              "valor": false
            },
            {
              "id": 4,
              "valor": false
            },
            {
              "id": 5,
              "valor": false
            },
            {
              "id": 6,
              "valor": false
            },
            {
              "id": 7,
              "valor": false
            },
            {
              "id": 8,
              "valor": false
            },
            {
              "id": 9,
              "valor": false
            },
            {
              "id": 10,
              "valor": false
            },
            {
              "id": 11,
              "valor": true,
              "texto": "abnc"
            }
          ],
          "valorInicial": [
            {
              "id": 0,
              "valor": true
            },
            {
              "id": 1,
              "valor": true
            },
            {
              "id": 2,
              "valor": true
            },
            {
              "id": 3,
              "valor": false
            },
            {
              "id": 4,
              "valor": false
            },
            {
              "id": 5,
              "valor": false
            },
            {
              "id": 6,
              "valor": false
            },
            {
              "id": 7,
              "valor": false
            },
            {
              "id": 8,
              "valor": false
            },
            {
              "id": 9,
              "valor": false
            },
            {
              "id": 10,
              "valor": false
            },
            {
              "id": 11,
              "valor": true,
              "texto": "abnc"
            }
          ]
        },
        {
          "tipo": "multicampo",
          "datos": {
            "campos": [
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907163a",
                    "valor": "6010a6c2cf990f001907163a",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907163b",
                    "valor": "6010a6c2cf990f001907163b",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f001907163c",
                    "valor": "6010a6c2cf990f001907163c",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f001907163d",
                    "valor": "6010a6c2cf990f001907163d",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f00190716ff",
                "etiqueta": "Ingresos por publicidad",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907164e",
                    "valor": "6010a6c2cf990f001907164e",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907164f",
                    "valor": "6010a6c2cf990f001907164f",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071650",
                    "valor": "6010a6c2cf990f0019071650",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071651",
                    "valor": "6010a6c2cf990f0019071651",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071704",
                "etiqueta": "Regalías provenientes de contenido protegido por derecho de autor",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071652",
                    "valor": "6010a6c2cf990f0019071652",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071653",
                    "valor": "6010a6c2cf990f0019071653",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071654",
                    "valor": "6010a6c2cf990f0019071654",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071655",
                    "valor": "6010a6c2cf990f0019071655",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071705",
                "etiqueta": "Licencias de tecnología (otorgar la licencia de tus creaciones o productos a otros) ",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071656",
                    "valor": "6010a6c2cf990f0019071656",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071657",
                    "valor": "6010a6c2cf990f0019071657",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071658",
                    "valor": "6010a6c2cf990f0019071658",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071659",
                    "valor": "6010a6c2cf990f0019071659",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071706",
                "etiqueta": "Servicios provistos  en línea",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 3
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907165a",
                    "valor": "6010a6c2cf990f001907165a",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907165b",
                    "valor": "6010a6c2cf990f001907165b",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f001907165c",
                    "valor": "6010a6c2cf990f001907165c",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f001907165d",
                    "valor": "6010a6c2cf990f001907165d",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071707",
                "etiqueta": "Productos vendidos en línea",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907165e",
                    "valor": "6010a6c2cf990f001907165e",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907165f",
                    "valor": "6010a6c2cf990f001907165f",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071660",
                    "valor": "6010a6c2cf990f0019071660",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071661",
                    "valor": "6010a6c2cf990f0019071661",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071708",
                "etiqueta": "Servicios provistos sin conexión (implican reunirse con el cliente en persona o in situ)",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071662",
                    "valor": "6010a6c2cf990f0019071662",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071663",
                    "valor": "6010a6c2cf990f0019071663",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071664",
                    "valor": "6010a6c2cf990f0019071664",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071665",
                    "valor": "6010a6c2cf990f0019071665",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071709",
                "etiqueta": "Productos vendidos en un establecimiento ",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071666",
                    "valor": "6010a6c2cf990f0019071666",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071667",
                    "valor": "6010a6c2cf990f0019071667",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071668",
                    "valor": "6010a6c2cf990f0019071668",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071669",
                    "valor": "6010a6c2cf990f0019071669",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907170a",
                "etiqueta": "Donaciones y filantropía",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 3
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907166a",
                    "valor": "6010a6c2cf990f001907166a",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907166b",
                    "valor": "6010a6c2cf990f001907166b",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f001907166c",
                    "valor": "6010a6c2cf990f001907166c",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f001907166d",
                    "valor": "6010a6c2cf990f001907166d",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907170b",
                "etiqueta": "Subvenciones y apoyos públicos o privados ",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907166e",
                    "valor": "6010a6c2cf990f001907166e",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907166f",
                    "valor": "6010a6c2cf990f001907166f",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071670",
                    "valor": "6010a6c2cf990f0019071670",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071671",
                    "valor": "6010a6c2cf990f0019071671",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907170c",
                "etiqueta": "Fondos públicos (donde el Gobierno puede ser socio comercial de la obra e.j FOPROCINE)",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              }
            ]
          },
          "nombre": "question-6010a6c4cf990f001907172a",
          "etiqueta": "3. ¿Qué tan importante es cada uno de los siguientes tipos de ingresos para la empresa? ",
          "requerido": true,
          "valor": {
            "subquestion-6010a6c3cf990f00190716ff": 0,
            "subquestion-6010a6c3cf990f0019071704": 1,
            "subquestion-6010a6c3cf990f0019071705": 2,
            "subquestion-6010a6c3cf990f0019071706": 3,
            "subquestion-6010a6c3cf990f0019071707": 0,
            "subquestion-6010a6c3cf990f0019071708": 1,
            "subquestion-6010a6c3cf990f0019071709": 2,
            "subquestion-6010a6c3cf990f001907170a": 3,
            "subquestion-6010a6c3cf990f001907170b": 0,
            "subquestion-6010a6c3cf990f001907170c": 1
          },
          "valorInicial": {
            "subquestion-6010a6c3cf990f00190716ff": 0,
            "subquestion-6010a6c3cf990f0019071704": 1,
            "subquestion-6010a6c3cf990f0019071705": 2,
            "subquestion-6010a6c3cf990f0019071706": 3,
            "subquestion-6010a6c3cf990f0019071707": 0,
            "subquestion-6010a6c3cf990f0019071708": 1,
            "subquestion-6010a6c3cf990f0019071709": 2,
            "subquestion-6010a6c3cf990f001907170a": 3,
            "subquestion-6010a6c3cf990f001907170b": 0,
            "subquestion-6010a6c3cf990f001907170c": 1
          }
        },
        {
          "tipo": "multicampo",
          "datos": {
            "campos": [
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071672",
                    "valor": "6010a6c2cf990f0019071672",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071673",
                    "valor": "6010a6c2cf990f0019071673",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071674",
                    "valor": "6010a6c2cf990f0019071674",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071675",
                    "valor": "6010a6c2cf990f0019071675",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907170d",
                "etiqueta": "Clientes particulares (personas físicas)",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071676",
                    "valor": "6010a6c2cf990f0019071676",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071677",
                    "valor": "6010a6c2cf990f0019071677",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071678",
                    "valor": "6010a6c2cf990f0019071678",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071679",
                    "valor": "6010a6c2cf990f0019071679",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907170e",
                "etiqueta": "Empresas (incluyendo agencias de publicidad)",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 3
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907167a",
                    "valor": "6010a6c2cf990f001907167a",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907167b",
                    "valor": "6010a6c2cf990f001907167b",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f001907167c",
                    "valor": "6010a6c2cf990f001907167c",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f001907167d",
                    "valor": "6010a6c2cf990f001907167d",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907170f",
                "etiqueta": "Emisoras públicas y privadas",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907167e",
                    "valor": "6010a6c2cf990f001907167e",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907167f",
                    "valor": "6010a6c2cf990f001907167f",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071680",
                    "valor": "6010a6c2cf990f0019071680",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071681",
                    "valor": "6010a6c2cf990f0019071681",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071710",
                "etiqueta": "Servicios de difusión en línea (streaming) ",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071682",
                    "valor": "6010a6c2cf990f0019071682",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071683",
                    "valor": "6010a6c2cf990f0019071683",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071684",
                    "valor": "6010a6c2cf990f0019071684",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071685",
                    "valor": "6010a6c2cf990f0019071685",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071711",
                "etiqueta": "Servicios de comercio en línea (e-commerce)",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071686",
                    "valor": "6010a6c2cf990f0019071686",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071687",
                    "valor": "6010a6c2cf990f0019071687",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071688",
                    "valor": "6010a6c2cf990f0019071688",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071689",
                    "valor": "6010a6c2cf990f0019071689",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071712",
                "etiqueta": "Organizaciones benéficas",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 3
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907168a",
                    "valor": "6010a6c2cf990f001907168a",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907168b",
                    "valor": "6010a6c2cf990f001907168b",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f001907168c",
                    "valor": "6010a6c2cf990f001907168c",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f001907168d",
                    "valor": "6010a6c2cf990f001907168d",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071713",
                "etiqueta": "Universidades y centros de investigación",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907168e",
                    "valor": "6010a6c2cf990f001907168e",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907168f",
                    "valor": "6010a6c2cf990f001907168f",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071690",
                    "valor": "6010a6c2cf990f0019071690",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071691",
                    "valor": "6010a6c2cf990f0019071691",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071714",
                "etiqueta": "Organizaciones culturales y artísticas (galerías, museos, festivales, entre otros)",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071692",
                    "valor": "6010a6c2cf990f0019071692",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071693",
                    "valor": "6010a6c2cf990f0019071693",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071694",
                    "valor": "6010a6c2cf990f0019071694",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071695",
                    "valor": "6010a6c2cf990f0019071695",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071715",
                "etiqueta": "Otras organizaciones del sector público (ayuntamientos, departamentos de gobierno, entre otros) ",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              }
            ]
          },
          "nombre": "question-6010a6c4cf990f001907172b",
          "etiqueta": "4. ¿Qué tan importante es cada uno de los siguientes clientes o consumidores para la empresa? ",
          "requerido": true,
          "valor": {
            "subquestion-6010a6c3cf990f001907170d": 2,
            "subquestion-6010a6c3cf990f001907170e": 3,
            "subquestion-6010a6c3cf990f001907170f": 0,
            "subquestion-6010a6c3cf990f0019071710": 1,
            "subquestion-6010a6c3cf990f0019071711": 2,
            "subquestion-6010a6c3cf990f0019071712": 3,
            "subquestion-6010a6c3cf990f0019071713": 0,
            "subquestion-6010a6c3cf990f0019071714": 1,
            "subquestion-6010a6c3cf990f0019071715": 2
          },
          "valorInicial": {
            "subquestion-6010a6c3cf990f001907170d": 2,
            "subquestion-6010a6c3cf990f001907170e": 3,
            "subquestion-6010a6c3cf990f001907170f": 0,
            "subquestion-6010a6c3cf990f0019071710": 1,
            "subquestion-6010a6c3cf990f0019071711": 2,
            "subquestion-6010a6c3cf990f0019071712": 3,
            "subquestion-6010a6c3cf990f0019071713": 0,
            "subquestion-6010a6c3cf990f0019071714": 1,
            "subquestion-6010a6c3cf990f0019071715": 2
          }
        }
      ]
    },
    {
      "id": "6010a6c4cf990f0019071731",
      "nombre": "Innovación y ecosistema",
      "campos": [
        {
          "tipo": "casillas",
          "instruccion": "Selecciona todas las que apliquen",
          "opciones": [
            {
              "id": "6010a6c2cf990f0019071611",
              "valor": "6010a6c2cf990f0019071611",
              "texto": "Herramientas de trabajo en nube (Drives, Dropbox, etc)"
            },
            {
              "id": "6010a6c2cf990f0019071612",
              "valor": "6010a6c2cf990f0019071612",
              "texto": "Plataformas de gestión y planeación de trabajo y/o colaboración (Asana, Monday, Trello, Slack, Github, etc.) "
            },
            {
              "id": "6010a6c2cf990f0019071613",
              "valor": "6010a6c2cf990f0019071613",
              "texto": "SEO (optimización para motores de búsqueda) "
            },
            {
              "id": "6010a6c2cf990f0019071614",
              "valor": "6010a6c2cf990f0019071614",
              "texto": "SEM (marketing y promoción en buscadores)"
            },
            {
              "id": "6010a6c2cf990f0019071615",
              "valor": "6010a6c2cf990f0019071615",
              "texto": "Campañas por correo electrónico (Mailchimp, Benchmark)"
            },
            {
              "id": "6010a6c2cf990f0019071616",
              "valor": "6010a6c2cf990f0019071616",
              "texto": "Analíticas de datos (Google Analytics, SEMrush, etc.)"
            },
            {
              "id": "6010a6c2cf990f0019071617",
              "valor": "6010a6c2cf990f0019071617",
              "texto": "Herramientas de Big Data (Talkwalker, QuBole, MongoDB, Apache Cassandra, etc.)"
            },
            {
              "id": "6010a6c2cf990f0019071618",
              "valor": "6010a6c2cf990f0019071618",
              "texto": "Comercio electrónico con plugin de pago en tu página (PayPal, Apple Pay, Amazon Pay, Mercado Pago, etc.)"
            },
            {
              "id": "6010a6c2cf990f0019071619",
              "valor": "6010a6c2cf990f0019071619",
              "texto": "Market places (Shopify, Kichink, Amazon, Mercado Libre, Facebook, etc.)"
            },
            {
              "id": "6010a6c2cf990f001907161a",
              "valor": "6010a6c2cf990f001907161a",
              "texto": "Fondeo colectivo (Kickstarter, Patreon, Ko-fi, Indiegogo, GoFundMe, etc.)"
            },
            {
              "id": "6010a6c2cf990f001907161b",
              "valor": "6010a6c2cf990f001907161b",
              "texto": "Gestores de contenidos (CMS) (Wordpress, Joomla, etc.)"
            },
            {
              "id": "6010a6c2cf990f001907161c",
              "valor": "6010a6c2cf990f001907161c",
              "texto": "Plataformas de gestión interna (CRM, ERP, LMS, etc.) "
            },
            {
              "id": "6010a6c2cf990f001907161d",
              "valor": "6010a6c2cf990f001907161d",
              "texto": "Streaming por internet (YouTube, Facebook, Instagram, Spotify, iTunes, Amazon, Vimeo, Tidal, Twitch, etc.)"
            }
          ],
          "nombre": "question-6010a6c3cf990f00190716fb",
          "etiqueta": "1. ¿Cuáles de los siguientes servicios o herramientas digitales utilizas para tu actividad profesional? ",
          "requerido": true,
          "datos": null,
          "valor": [
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true
          ],
          "valorInicial": [
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true
          ]
        },
        {
          "tipo": "multicampo",
          "datos": {
            "campos": [
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f0019071696",
                    "valor": "6010a6c2cf990f0019071696",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f0019071697",
                    "valor": "6010a6c2cf990f0019071697",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f0019071698",
                    "valor": "6010a6c2cf990f0019071698",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f0019071699",
                    "valor": "6010a6c2cf990f0019071699",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071716",
                "etiqueta": "Lxs empleadxs de nómina de la empresa",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907169a",
                    "valor": "6010a6c2cf990f001907169a",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907169b",
                    "valor": "6010a6c2cf990f001907169b",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f001907169c",
                    "valor": "6010a6c2cf990f001907169c",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f001907169d",
                    "valor": "6010a6c2cf990f001907169d",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071717",
                "etiqueta": "Lxs trabajadorxs por honorarios con los que colaboras",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f001907169e",
                    "valor": "6010a6c2cf990f001907169e",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f001907169f",
                    "valor": "6010a6c2cf990f001907169f",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a0",
                    "valor": "6010a6c2cf990f00190716a0",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a1",
                    "valor": "6010a6c2cf990f00190716a1",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071718",
                "etiqueta": "Otras empresas e iniciativas que son competencia",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716a2",
                    "valor": "6010a6c2cf990f00190716a2",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a3",
                    "valor": "6010a6c2cf990f00190716a3",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a4",
                    "valor": "6010a6c2cf990f00190716a4",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a5",
                    "valor": "6010a6c2cf990f00190716a5",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071719",
                "etiqueta": "Universidades, laboratorios de I+D y centros de investigación ",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 3
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716a6",
                    "valor": "6010a6c2cf990f00190716a6",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a7",
                    "valor": "6010a6c2cf990f00190716a7",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a8",
                    "valor": "6010a6c2cf990f00190716a8",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716a9",
                    "valor": "6010a6c2cf990f00190716a9",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907171a",
                "etiqueta": "Encuentros creativos, conferencias y ferias comerciales",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716aa",
                    "valor": "6010a6c2cf990f00190716aa",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716ab",
                    "valor": "6010a6c2cf990f00190716ab",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716ac",
                    "valor": "6010a6c2cf990f00190716ac",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716ad",
                    "valor": "6010a6c2cf990f00190716ad",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907171b",
                "etiqueta": "Exposiciones y festivales artísticos y culturales",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716ae",
                    "valor": "6010a6c2cf990f00190716ae",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716af",
                    "valor": "6010a6c2cf990f00190716af",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b0",
                    "valor": "6010a6c2cf990f00190716b0",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b1",
                    "valor": "6010a6c2cf990f00190716b1",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907171c",
                "etiqueta": "Publicaciones técnicas y académicas",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716b2",
                    "valor": "6010a6c2cf990f00190716b2",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b3",
                    "valor": "6010a6c2cf990f00190716b3",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b4",
                    "valor": "6010a6c2cf990f00190716b4",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b5",
                    "valor": "6010a6c2cf990f00190716b5",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907171d",
                "etiqueta": "Cursos, talleres, y webinars",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 3
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716b6",
                    "valor": "6010a6c2cf990f00190716b6",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b7",
                    "valor": "6010a6c2cf990f00190716b7",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b8",
                    "valor": "6010a6c2cf990f00190716b8",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716b9",
                    "valor": "6010a6c2cf990f00190716b9",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907171e",
                "etiqueta": "Clientes, consumidorxs y usuarixs",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 0
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716ba",
                    "valor": "6010a6c2cf990f00190716ba",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716bb",
                    "valor": "6010a6c2cf990f00190716bb",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716bc",
                    "valor": "6010a6c2cf990f00190716bc",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716bd",
                    "valor": "6010a6c2cf990f00190716bd",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f001907171f",
                "etiqueta": "Foros, blogs y comunidades en línea",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 1
              },
              {
                "tipo": "casillas",
                "instruccion": null,
                "opciones": [
                  {
                    "id": "6010a6c2cf990f00190716be",
                    "valor": "6010a6c2cf990f00190716be",
                    "texto": "Nada"
                  },
                  {
                    "id": "6010a6c2cf990f00190716bf",
                    "valor": "6010a6c2cf990f00190716bf",
                    "texto": "Poco"
                  },
                  {
                    "id": "6010a6c2cf990f00190716c0",
                    "valor": "6010a6c2cf990f00190716c0",
                    "texto": "Algo"
                  },
                  {
                    "id": "6010a6c2cf990f00190716c1",
                    "valor": "6010a6c2cf990f00190716c1",
                    "texto": "Mucho"
                  }
                ],
                "nombre": "subquestion-6010a6c3cf990f0019071720",
                "etiqueta": "Redes sociales",
                "datos": {
                  "tipo": "UNICO"
                },
                "valor": 2
              }
            ]
          },
          "nombre": "question-6010a6c4cf990f001907172c",
          "etiqueta": "2. En la tarea de buscar nuevas ideas para la empresa, ¿qué tan importantes han sido(...)? ",
          "requerido": true,
          "valor": {
            "subquestion-6010a6c3cf990f0019071716": 0,
            "subquestion-6010a6c3cf990f0019071717": 1,
            "subquestion-6010a6c3cf990f0019071718": 2,
            "subquestion-6010a6c3cf990f0019071719": 3,
            "subquestion-6010a6c3cf990f001907171a": 0,
            "subquestion-6010a6c3cf990f001907171b": 1,
            "subquestion-6010a6c3cf990f001907171c": 2,
            "subquestion-6010a6c3cf990f001907171d": 3,
            "subquestion-6010a6c3cf990f001907171e": 0,
            "subquestion-6010a6c3cf990f001907171f": 1,
            "subquestion-6010a6c3cf990f0019071720": 2
          },
          "valorInicial": {
            "subquestion-6010a6c3cf990f0019071716": 0,
            "subquestion-6010a6c3cf990f0019071717": 1,
            "subquestion-6010a6c3cf990f0019071718": 2,
            "subquestion-6010a6c3cf990f0019071719": 3,
            "subquestion-6010a6c3cf990f001907171a": 0,
            "subquestion-6010a6c3cf990f001907171b": 1,
            "subquestion-6010a6c3cf990f001907171c": 2,
            "subquestion-6010a6c3cf990f001907171d": 3,
            "subquestion-6010a6c3cf990f001907171e": 0,
            "subquestion-6010a6c3cf990f001907171f": 1,
            "subquestion-6010a6c3cf990f0019071720": 2
          }
        },
        {
          "tipo": "casillas",
          "instruccion": "Selecciona todas las que apliquen",
          "opciones": [
            {
              "id": "6010a6c2cf990f001907161e",
              "valor": "6010a6c2cf990f001907161e",
              "texto": "Registró derechos de autor de obra"
            },
            {
              "id": "6010a6c2cf990f001907161f",
              "valor": "6010a6c2cf990f001907161f",
              "texto": "Solicitó una patente"
            },
            {
              "id": "6010a6c2cf990f0019071620",
              "valor": "6010a6c2cf990f0019071620",
              "texto": "Registró un dibujo industrial "
            },
            {
              "id": "6010a6c2cf990f0019071621",
              "valor": "6010a6c2cf990f0019071621",
              "texto": "Registró una marca"
            },
            {
              "id": "6010a6c2cf990f0019071622",
              "valor": "6010a6c2cf990f0019071622",
              "texto": "Utilizó licencias abiertas y/o libres (Creative Commons, MPL, GNU, etc)"
            },
            {
              "id": "6010a6c2cf990f0019071623",
              "valor": "6010a6c2cf990f0019071623",
              "texto": "Ninguno"
            }
          ],
          "nombre": "question-6010a6c3cf990f00190716fc",
          "etiqueta": "3. Durante el año 2019, ¿la empresa recurrió a algún tipo de licenciamiento, registro de autor o propiedad intelectual para tu obra? ",
          "requerido": true,
          "datos": null,
          "valor": [
            true,
            false,
            true,
            false,
            true,
            false
          ],
          "valorInicial": [
            true,
            false,
            true,
            false,
            true,
            false
          ]
        },
        {
          "tipo": "casillas",
          "instruccion": "Selecciona todas las que apliquen",
          "opciones": [
            {
              "id": "6010a6c2cf990f0019071624",
              "valor": "6010a6c2cf990f0019071624",
              "texto": "Lanzó productos nuevos o con mejoras significativas"
            },
            {
              "id": "6010a6c2cf990f0019071625",
              "valor": "6010a6c2cf990f0019071625",
              "texto": "Lanzó servicios nuevos o con mejoras significativas (incluyendo nuevos tipos de proyectos)"
            },
            {
              "id": "6010a6c2cf990f0019071626",
              "valor": "6010a6c2cf990f0019071626",
              "texto": "Lanzó software nuevo o con mejoras significativas (incluyendo el de uso interno)"
            },
            {
              "id": "6010a6c2cf990f0019071627",
              "valor": "6010a6c2cf990f0019071627",
              "texto": "Mejoró las formas de producción y suministro de productos y servicios (incluyendo la implementación de nuevas técnicas de administración)"
            },
            {
              "id": "6010a6c2cf990f0019071628",
              "valor": "6010a6c2cf990f0019071628",
              "texto": "Implementó estrategias de negocio nuevas o con mejoras significativas (incluyendo nuevos modelos de negocio)"
            },
            {
              "id": "6010a6c2cf990f0019071629",
              "valor": "6010a6c2cf990f0019071629",
              "texto": "Ofreció capacitación al personal "
            },
            {
              "id": "6010a6c2cf990f001907162a",
              "valor": "6010a6c2cf990f001907162a",
              "texto": "Utilizó contenidos con derechos de autor/licenciados de terceros que no había utilizado anteriormente"
            },
            {
              "id": "6010a6c2cf990f001907162b",
              "valor": "6010a6c2cf990f001907162b",
              "texto": "Utilizó software abierto y/o libre"
            },
            {
              "id": "6010a6c2cf990f001907162c",
              "valor": "6010a6c2cf990f001907162c",
              "texto": "Produjo material elegible para solicitar derechos de autor"
            }
          ],
          "nombre": "question-6010a6c3cf990f00190716fd",
          "etiqueta": "4. Durante el año 2019, ¿la empresa incursionó en alguna de las siguientes actividades? ",
          "requerido": true,
          "datos": null,
          "valor": [
            true,
            false,
            false,
            true,
            false,
            false,
            true,
            false,
            false
          ],
          "valorInicial": [
            true,
            false,
            false,
            true,
            false,
            false,
            true,
            false,
            false
          ]
        },
        {
          "tipo": "casillas",
          "instruccion": "",
          "opciones": [
            {
              "id": "6010a6c2cf990f001907162d",
              "valor": "6010a6c2cf990f001907162d",
              "texto": "Dificultad para acceder a financiamiento externo "
            },
            {
              "id": "6010a6c2cf990f001907162e",
              "valor": "6010a6c2cf990f001907162e",
              "texto": "Falta de capital humano adecuado"
            },
            {
              "id": "6010a6c2cf990f001907162f",
              "valor": "6010a6c2cf990f001907162f",
              "texto": "Poco aprovechamiento de las tecnologías digitales"
            },
            {
              "id": "6010a6c2cf990f0019071630",
              "valor": "6010a6c2cf990f0019071630",
              "texto": "Mala cultura de gestión"
            },
            {
              "id": "6010a6c2cf990f0019071631",
              "valor": "6010a6c2cf990f0019071631",
              "texto": "Excesiva competencia en mercados"
            },
            {
              "id": "6010a6c2cf990f0019071632",
              "valor": "6010a6c2cf990f0019071632",
              "texto": "Falta de poder de negociación con los clientxs o proveedorxs"
            },
            {
              "id": "6010a6c2cf990f0019071633",
              "valor": "6010a6c2cf990f0019071633",
              "texto": "Vulneración de la propiedad intelectual (incluyendo derechos de autor)"
            },
            {
              "id": "6010a6c2cf990f0019071634",
              "valor": "6010a6c2cf990f0019071634",
              "texto": "Reglamentación y/o legislación estricta"
            },
            {
              "id": "6010a6c2cf990f0019071635",
              "valor": "6010a6c2cf990f0019071635",
              "texto": "Impuestos altos y/o limitantes del régimen fiscal"
            },
            {
              "id": "6010a6c2cf990f0019071636",
              "valor": "6010a6c2cf990f0019071636",
              "texto": "Baja demanda de los productos o servicios"
            },
            {
              "id": "6010a6c2cf990f0019071637",
              "valor": "6010a6c2cf990f0019071637",
              "texto": "Inseguridad"
            },
            {
              "id": "6010a6c2cf990f0019071638",
              "valor": "6010a6c2cf990f0019071638",
              "texto": "Corrupción "
            },
            {
              "id": "6010a6c2cf990f0019071639",
              "valor": "6010a6c2cf990f0019071639",
              "texto": "Clima económico actual "
            }
          ],
          "datos": {
            "tipo": "MULTIPLE_MAXIMO",
            "datos": {
              "maximo": 3
            }
          },
          "nombre": "question-6010a6c3cf990f00190716fe",
          "etiqueta": "5. En tu opinión, ¿cuáles son los 3 principales factores que obstaculizan el desarrollo de la empresa? ",
          "requerido": true,
          "valor": [
            true,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false
          ],
          "valorInicial": [
            true,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            true,
            false,
            false,
            false,
            false
          ]
        }
      ]
    }
  ],
  "campos": []
}