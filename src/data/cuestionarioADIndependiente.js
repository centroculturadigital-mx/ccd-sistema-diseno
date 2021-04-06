export default {
    "pasos": [
      {
        "id": "604bfdf41a085c001963d51e",
        "nombre": "Identificación",
        "campos": [
          {
            "tipo": "texto",
            "datos": null,
            "instruccion": "Si no la recuerdas, consúltala <a href=\"https://www.gob.mx/curp/\" target=\"_blank\">aquí.</a>",
            "opciones": [],
            "nombre": "question-604bfdf21a085c001963d4f5",
            "etiqueta": "1. ¿Cuál es tu CURP?",
            "requerido": true
          },
          {
            "tipo": "texto",
            "datos": null,
            "instruccion": "Si no lo recuerdas, consúltala <a href=\"https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx\" target=\"_blank\">aquí.</a>",
            "opciones": [],
            "nombre": "question-604bfdf21a085c001963d4f6",
            "etiqueta": "2. ¿Cuál es tu código postal?",
            "requerido": true
          }
        ]
      },
      {
        "id": "604bfdf41a085c001963d51f",
        "nombre": "Demográficos",
        "campos": [
          {
            "tipo": "numero",
            "datos": null,
            "instruccion": null,
            "opciones": [],
            "maximo": 10000,
            "nombre": "question-604bfdf21a085c001963d4f7",
            "etiqueta": "1. ¿Qué edad tienes?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "UNICO"
            },
            "instruccion": "Selecciona una opción",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d452",
                "valor": "604bfdf21a085c001963d452",
                "texto": "Mujer"
              },
              {
                "id": "604bfdf21a085c001963d453",
                "valor": "604bfdf21a085c001963d453",
                "texto": "Hombre"
              },
              {
                "id": "604bfdf21a085c001963d454",
                "valor": "604bfdf21a085c001963d454",
                "texto": "No binario"
              },
              {
                "id": "604bfdf21a085c001963d455",
                "valor": "604bfdf21a085c001963d455",
                "texto": "Prefiero no decirlo"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4fb",
            "etiqueta": "2. ¿Con qué género te identificas?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE"
            },
            "instruccion": "Selecciona todas las opciones que apliquen",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d456",
                "valor": "604bfdf21a085c001963d456",
                "texto": "Educación"
              },
              {
                "id": "604bfdf21a085c001963d457",
                "valor": "604bfdf21a085c001963d457",
                "texto": "Artes y humanidades"
              },
              {
                "id": "604bfdf21a085c001963d458",
                "valor": "604bfdf21a085c001963d458",
                "texto": "Ciencias sociales, administración, negocios y derecho"
              },
              {
                "id": "604bfdf21a085c001963d459",
                "valor": "604bfdf21a085c001963d459",
                "texto": "Ciencias naturales"
              },
              {
                "id": "604bfdf21a085c001963d45a",
                "valor": "604bfdf21a085c001963d45a",
                "texto": "Ciencias exactas, computación, informática y ciencia de datos"
              },
              {
                "id": "604bfdf21a085c001963d45b",
                "valor": "604bfdf21a085c001963d45b",
                "texto": "Ingeniería, manufactura y construcción"
              },
              {
                "id": "604bfdf21a085c001963d45c",
                "valor": "604bfdf21a085c001963d45c",
                "texto": "Agronomía y veterinaria"
              },
              {
                "id": "604bfdf21a085c001963d45d",
                "valor": "604bfdf21a085c001963d45d",
                "texto": "Salud"
              },
              {
                "id": "604bfdf21a085c001963d45e",
                "valor": "604bfdf21a085c001963d45e",
                "texto": "Servicios"
              },
              {
                "id": "604bfdf21a085c001963d45f",
                "valor": "604bfdf21a085c001963d45f",
                "texto": "Ninguna"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4fd",
            "etiqueta": "3. ¿Cuál es tu área de formación?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "UNICO"
            },
            "instruccion": "Selecciona una opción",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d460",
                "valor": "604bfdf21a085c001963d460",
                "texto": "Menos de un año"
              },
              {
                "id": "604bfdf21a085c001963d461",
                "valor": "604bfdf21a085c001963d461",
                "texto": "Entre 1 y 5 años"
              },
              {
                "id": "604bfdf21a085c001963d462",
                "valor": "604bfdf21a085c001963d462",
                "texto": "Entre 6 y 10 años"
              },
              {
                "id": "604bfdf21a085c001963d463",
                "valor": "604bfdf21a085c001963d463",
                "texto": "Entre 11 y 15 años"
              },
              {
                "id": "604bfdf21a085c001963d464",
                "valor": "604bfdf21a085c001963d464",
                "texto": "Entre 16 y 20 años"
              },
              {
                "id": "604bfdf21a085c001963d465",
                "valor": "604bfdf21a085c001963d465",
                "texto": "Más de 20 años"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4fe",
            "etiqueta": "4. ¿Cuántos años tienes de experiencia en el sector cultural-creativo?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE"
            },
            "instruccion": "Selecciona todas las opciones que apliquen",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d466",
                "valor": "604bfdf21a085c001963d466",
                "texto": "Seguro médico"
              },
              {
                "id": "604bfdf21a085c001963d467",
                "valor": "604bfdf21a085c001963d467",
                "texto": "Seguro de vida "
              },
              {
                "id": "604bfdf21a085c001963d468",
                "valor": "604bfdf21a085c001963d468",
                "texto": "Fondo de ahorro "
              },
              {
                "id": "604bfdf21a085c001963d469",
                "valor": "604bfdf21a085c001963d469",
                "texto": "Cuenta de inversiones "
              },
              {
                "id": "604bfdf21a085c001963d46a",
                "valor": "604bfdf21a085c001963d46a",
                "texto": "AFOREs"
              },
              {
                "id": "604bfdf21a085c001963d46b",
                "valor": "604bfdf21a085c001963d46b",
                "texto": "Ninguno"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4ff",
            "etiqueta": "5. ¿Con cuáles de los siguientes servicios cuentas?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE_OTRA"
            },
            "instruccion": "Selecciona todas las opciones que apliquen.",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d46c",
                "valor": "604bfdf21a085c001963d46c",
                "texto": "Ninguna"
              },
              {
                "id": "604bfdf21a085c001963d46d",
                "valor": "604bfdf21a085c001963d46d",
                "texto": "Náhuatl"
              },
              {
                "id": "604bfdf21a085c001963d46e",
                "valor": "604bfdf21a085c001963d46e",
                "texto": "Maya"
              },
              {
                "id": "604bfdf21a085c001963d46f",
                "valor": "604bfdf21a085c001963d46f",
                "texto": "Tseltal"
              },
              {
                "id": "604bfdf21a085c001963d470",
                "valor": "604bfdf21a085c001963d470",
                "texto": "Mixteco"
              },
              {
                "id": "604bfdf21a085c001963d471",
                "valor": "604bfdf21a085c001963d471",
                "texto": "Tsotsil"
              },
              {
                "id": "604bfdf21a085c001963d472",
                "valor": "604bfdf21a085c001963d472",
                "texto": "Zapoteco"
              },
              {
                "id": "604bfdf21a085c001963d473",
                "valor": "604bfdf21a085c001963d473",
                "texto": "Otomí"
              },
              {
                "id": "604bfdf21a085c001963d474",
                "valor": "604bfdf21a085c001963d474",
                "texto": "Totonaco"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d500",
            "etiqueta": "6. ¿Hablas alguna de las siguientes lenguas indígenas?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE_OTRA"
            },
            "instruccion": "Selecciona todas las opciones que apliquen.",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d475",
                "valor": "604bfdf21a085c001963d475",
                "texto": "No"
              },
              {
                "id": "604bfdf21a085c001963d476",
                "valor": "604bfdf21a085c001963d476",
                "texto": "Auditiva"
              },
              {
                "id": "604bfdf21a085c001963d477",
                "valor": "604bfdf21a085c001963d477",
                "texto": "Visual "
              },
              {
                "id": "604bfdf21a085c001963d478",
                "valor": "604bfdf21a085c001963d478",
                "texto": "Motriz"
              },
              {
                "id": "604bfdf21a085c001963d479",
                "valor": "604bfdf21a085c001963d479",
                "texto": "Intelectual"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d502",
            "etiqueta": "7. ¿Vives con alguna discapacidad?",
            "requerido": true
          }
        ]
      },
      {
        "id": "604bfdf41a085c001963d520",
        "nombre": "Práctica profesional y proyectos",
        "campos": [
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "UNICO"
            },
            "instruccion": "Estos proyectos pueden ser gestionados por ti, o pueden ser parte de un colectivo, o para otras organizaciones públicas y/o privadas",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d47a",
                "valor": "604bfdf21a085c001963d47a",
                "texto": "Entre 1 y 4 proyectos"
              },
              {
                "id": "604bfdf21a085c001963d47b",
                "valor": "604bfdf21a085c001963d47b",
                "texto": "Entre 5 y 9 proyectos"
              },
              {
                "id": "604bfdf21a085c001963d47c",
                "valor": "604bfdf21a085c001963d47c",
                "texto": "Entre 10 y 19 proyectos"
              },
              {
                "id": "604bfdf21a085c001963d47d",
                "valor": "604bfdf21a085c001963d47d",
                "texto": "Entre 20 y 29 proyectos"
              },
              {
                "id": "604bfdf21a085c001963d47e",
                "valor": "604bfdf21a085c001963d47e",
                "texto": "Más de 30 proyectos"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d501",
            "etiqueta": "1. ¿En cuántos proyectos participaste en 2019?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "UNICO"
            },
            "instruccion": null,
            "opciones": [
              {
                "id": "604bfdf21a085c001963d47f",
                "valor": "604bfdf21a085c001963d47f",
                "texto": "Hasta 1 mes"
              },
              {
                "id": "604bfdf21a085c001963d480",
                "valor": "604bfdf21a085c001963d480",
                "texto": "Hasta 2 meses"
              },
              {
                "id": "604bfdf21a085c001963d481",
                "valor": "604bfdf21a085c001963d481",
                "texto": "Hasta 3 meses"
              },
              {
                "id": "604bfdf21a085c001963d482",
                "valor": "604bfdf21a085c001963d482",
                "texto": "Hasta 6 meses"
              },
              {
                "id": "604bfdf21a085c001963d483",
                "valor": "604bfdf21a085c001963d483",
                "texto": "Hasta 1 año"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d503",
            "etiqueta": "2. ¿Cuál es la duración promedio de los proyectos en los que participaste durante 2019?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "UNICO"
            },
            "instruccion": null,
            "opciones": [
              {
                "id": "604bfdf21a085c001963d484",
                "valor": "604bfdf21a085c001963d484",
                "texto": "Sólo yo"
              },
              {
                "id": "604bfdf21a085c001963d485",
                "valor": "604bfdf21a085c001963d485",
                "texto": "2 a 6 personas"
              },
              {
                "id": "604bfdf21a085c001963d486",
                "valor": "604bfdf21a085c001963d486",
                "texto": "6 a 12 personas"
              },
              {
                "id": "604bfdf21a085c001963d487",
                "valor": "604bfdf21a085c001963d487",
                "texto": "12 a 20 personas"
              },
              {
                "id": "604bfdf21a085c001963d488",
                "valor": "604bfdf21a085c001963d488",
                "texto": "20 a 40 personas"
              },
              {
                "id": "604bfdf21a085c001963d489",
                "valor": "604bfdf21a085c001963d489",
                "texto": "más de 40 personas"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d504",
            "etiqueta": "3. Con respecto al proyecto más grande de 2019 en el que trabajaste, ¿cuántas personas conformaban el equipo en el que colaboraste?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE"
            },
            "instruccion": null,
            "opciones": [
              {
                "id": "604bfdf21a085c001963d48a",
                "valor": "604bfdf21a085c001963d48a",
                "texto": "Fondos personales"
              },
              {
                "id": "604bfdf21a085c001963d48b",
                "valor": "604bfdf21a085c001963d48b",
                "texto": "Pago por adelantado del cliente"
              },
              {
                "id": "604bfdf21a085c001963d48c",
                "valor": "604bfdf21a085c001963d48c",
                "texto": "Microcréditos"
              },
              {
                "id": "604bfdf21a085c001963d48d",
                "valor": "604bfdf21a085c001963d48d",
                "texto": "Micromecenazgo (Crowdfunding)"
              },
              {
                "id": "604bfdf21a085c001963d48e",
                "valor": "604bfdf21a085c001963d48e",
                "texto": "Préstamos personales"
              },
              {
                "id": "604bfdf21a085c001963d48f",
                "valor": "604bfdf21a085c001963d48f",
                "texto": "Préstamos bancarios"
              },
              {
                "id": "604bfdf21a085c001963d490",
                "valor": "604bfdf21a085c001963d490",
                "texto": "Inversionistas privados "
              },
              {
                "id": "604bfdf21a085c001963d491",
                "valor": "604bfdf21a085c001963d491",
                "texto": "Apoyos/becas gubernamentales"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d505",
            "etiqueta": "4. ¿Cómo se financian los proyectos en los que participas?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "UNICO"
            },
            "instruccion": null,
            "opciones": [
              {
                "id": "604bfdf21a085c001963d492",
                "valor": "604bfdf21a085c001963d492",
                "texto": "Tu primera ocupación y la principal fuente de ingresos"
              },
              {
                "id": "604bfdf21a085c001963d493",
                "valor": "604bfdf21a085c001963d493",
                "texto": "Una segunda ocupación, no es la principal fuente de ingresos"
              },
              {
                "id": "604bfdf21a085c001963d494",
                "valor": "604bfdf21a085c001963d494",
                "texto": "Un pasatiempo, del cual no depende tu economía personal"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d506",
            "etiqueta": "5. Tu labor en el sector cultural-creativo es...",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "UNICO"
            },
            "instruccion": null,
            "opciones": [
              {
                "id": "604bfdf21a085c001963d495",
                "valor": "604bfdf21a085c001963d495",
                "texto": "No genero ingresos"
              },
              {
                "id": "604bfdf21a085c001963d496",
                "valor": "604bfdf21a085c001963d496",
                "texto": "Menos de 5,000 pesos"
              },
              {
                "id": "604bfdf21a085c001963d497",
                "valor": "604bfdf21a085c001963d497",
                "texto": "Más de $5,000 y hasta $10,000"
              },
              {
                "id": "604bfdf21a085c001963d498",
                "valor": "604bfdf21a085c001963d498",
                "texto": "Más de 10,000 y hasta $15,000"
              },
              {
                "id": "604bfdf21a085c001963d499",
                "valor": "604bfdf21a085c001963d499",
                "texto": "Más de $15,000 y hasta $20,000"
              },
              {
                "id": "604bfdf21a085c001963d49a",
                "valor": "604bfdf21a085c001963d49a",
                "texto": "Más de $20,000 y hasta $25,000"
              },
              {
                "id": "604bfdf21a085c001963d49b",
                "valor": "604bfdf21a085c001963d49b",
                "texto": "Más de $25,000 y hasta $30,000"
              },
              {
                "id": "604bfdf21a085c001963d49c",
                "valor": "604bfdf21a085c001963d49c",
                "texto": "Más de $30,000 y hasta $35,000"
              },
              {
                "id": "604bfdf21a085c001963d49d",
                "valor": "604bfdf21a085c001963d49d",
                "texto": "Más de $35,000 y hasta $40,000"
              },
              {
                "id": "604bfdf21a085c001963d49e",
                "valor": "604bfdf21a085c001963d49e",
                "texto": "Más de $40,000"
              },
              {
                "id": "604bfdf21a085c001963d49f",
                "valor": "604bfdf21a085c001963d49f",
                "texto": "Prefiero no decirlo"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d507",
            "etiqueta": "6. Aproximadamente tus ingresos mensuales correspondientes a tu actividad principal en el sector cultural-creativo rondan los…",
            "requerido": true
          },
          {
            "tipo": "multicampo",
            "datos": {
              "campos": [
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4d1",
                      "valor": "604bfdf21a085c001963d4d1",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4d2",
                      "valor": "604bfdf21a085c001963d4d2",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4d3",
                      "valor": "604bfdf21a085c001963d4d3",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4d4",
                      "valor": "604bfdf21a085c001963d4d4",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d512",
                  "etiqueta": "Clientes particulares (personas físicas)"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4d9",
                      "valor": "604bfdf21a085c001963d4d9",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4da",
                      "valor": "604bfdf21a085c001963d4da",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4db",
                      "valor": "604bfdf21a085c001963d4db",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4dc",
                      "valor": "604bfdf21a085c001963d4dc",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d514",
                  "etiqueta": "Emisoras públicas y privadas"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4dd",
                      "valor": "604bfdf21a085c001963d4dd",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4de",
                      "valor": "604bfdf21a085c001963d4de",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4df",
                      "valor": "604bfdf21a085c001963d4df",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4e0",
                      "valor": "604bfdf21a085c001963d4e0",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d515",
                  "etiqueta": "Servicios de difusión en línea (streaming) "
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4d5",
                      "valor": "604bfdf21a085c001963d4d5",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4d6",
                      "valor": "604bfdf21a085c001963d4d6",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4d7",
                      "valor": "604bfdf21a085c001963d4d7",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4d8",
                      "valor": "604bfdf21a085c001963d4d8",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d516",
                  "etiqueta": "Empresas (incluyendo agencias de publicidad)"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4e1",
                      "valor": "604bfdf21a085c001963d4e1",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4e2",
                      "valor": "604bfdf21a085c001963d4e2",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4e3",
                      "valor": "604bfdf21a085c001963d4e3",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4e4",
                      "valor": "604bfdf21a085c001963d4e4",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d517",
                  "etiqueta": "Servicios de comercio en línea (e-commerce)"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4e5",
                      "valor": "604bfdf21a085c001963d4e5",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4e6",
                      "valor": "604bfdf21a085c001963d4e6",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4e7",
                      "valor": "604bfdf21a085c001963d4e7",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4e8",
                      "valor": "604bfdf21a085c001963d4e8",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d518",
                  "etiqueta": "Organizaciones benéficas"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4e9",
                      "valor": "604bfdf21a085c001963d4e9",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ea",
                      "valor": "604bfdf21a085c001963d4ea",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4eb",
                      "valor": "604bfdf21a085c001963d4eb",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ec",
                      "valor": "604bfdf21a085c001963d4ec",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d519",
                  "etiqueta": "Universidades y centros de investigación"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4ed",
                      "valor": "604bfdf21a085c001963d4ed",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ee",
                      "valor": "604bfdf21a085c001963d4ee",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ef",
                      "valor": "604bfdf21a085c001963d4ef",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4f0",
                      "valor": "604bfdf21a085c001963d4f0",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d51a",
                  "etiqueta": "Organizaciones culturales y artísticas (galerías, museos, festivales, entre otros)"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4f1",
                      "valor": "604bfdf21a085c001963d4f1",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4f2",
                      "valor": "604bfdf21a085c001963d4f2",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4f3",
                      "valor": "604bfdf21a085c001963d4f3",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4f4",
                      "valor": "604bfdf21a085c001963d4f4",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d51b",
                  "etiqueta": "Otras organizaciones del sector público (ayuntamientos, departamentos de gobierno, entre otros) "
                }
              ]
            },
            "nombre": "question-604bfdf41a085c001963d51d",
            "etiqueta": "7. ¿Podrías indicar qué tan importante es cada uno de los siguientes clientes para tu práctica profesional?",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE_MAXIMO",
              "datos": {
                "maximo": 3
              }
            },
            "instruccion": "Selecciona las más importantes. Máximo 3",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d4a0",
                "valor": "604bfdf21a085c001963d4a0",
                "texto": "Planificación y gestión "
              },
              {
                "id": "604bfdf21a085c001963d4a1",
                "valor": "604bfdf21a085c001963d4a1",
                "texto": "Producción"
              },
              {
                "id": "604bfdf21a085c001963d4a2",
                "valor": "604bfdf21a085c001963d4a2",
                "texto": "Distribución y ventas"
              },
              {
                "id": "604bfdf21a085c001963d4a3",
                "valor": "604bfdf21a085c001963d4a3",
                "texto": "Comunicación, marketing y publicidad "
              },
              {
                "id": "604bfdf21a085c001963d4a4",
                "valor": "604bfdf21a085c001963d4a4",
                "texto": "Uso de herramientas digitales "
              },
              {
                "id": "604bfdf21a085c001963d4a5",
                "valor": "604bfdf21a085c001963d4a5",
                "texto": "Solución de problemas "
              },
              {
                "id": "604bfdf21a085c001963d4a6",
                "valor": "604bfdf21a085c001963d4a6",
                "texto": "Habilidades creativas"
              },
              {
                "id": "604bfdf21a085c001963d4a7",
                "valor": "604bfdf21a085c001963d4a7",
                "texto": "Metodologías colaborativas"
              },
              {
                "id": "604bfdf21a085c001963d4a8",
                "valor": "604bfdf21a085c001963d4a8",
                "texto": "Contabilidad, administración y asuntos legales"
              }
            ],
            "nombre": "question-604bfdf41a085c001963d508",
            "etiqueta": "8. ¿Qué tipo de habilidades crees que podrían reforzar tu práctica profesional? ",
            "requerido": true
          }
        ]
      },
      {
        "id": "604bfdf51a085c001963d521",
        "nombre": "Innovación y Ecosistema",
        "campos": [
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE"
            },
            "instruccion": "Selecciona todas las que apliquen",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d429",
                "valor": "604bfdf21a085c001963d429",
                "texto": "Herramientas de trabajo en nube (Drives, Dropbox, etc.)"
              },
              {
                "id": "604bfdf21a085c001963d42a",
                "valor": "604bfdf21a085c001963d42a",
                "texto": "Plataformas de gestión y planeación de trabajo y/o colaboración (Asana, Monday, Trello, Slack, Github, etc.) "
              },
              {
                "id": "604bfdf21a085c001963d42b",
                "valor": "604bfdf21a085c001963d42b",
                "texto": "SEO (optimización para motores de búsqueda) "
              },
              {
                "id": "604bfdf21a085c001963d42c",
                "valor": "604bfdf21a085c001963d42c",
                "texto": "SEM (marketing y promoción en buscadores)"
              },
              {
                "id": "604bfdf21a085c001963d42d",
                "valor": "604bfdf21a085c001963d42d",
                "texto": "Campañas por correo electrónico (Mailchimp, Benchmark)"
              },
              {
                "id": "604bfdf21a085c001963d42e",
                "valor": "604bfdf21a085c001963d42e",
                "texto": "Analíticas de datos (Google Analytics, SEMrush, etc.)"
              },
              {
                "id": "604bfdf21a085c001963d42f",
                "valor": "604bfdf21a085c001963d42f",
                "texto": "Herramientas de Big Data (Talkwalker, QuBole, MongoDB, Apache Cassandra, etc.)"
              },
              {
                "id": "604bfdf21a085c001963d430",
                "valor": "604bfdf21a085c001963d430",
                "texto": "Comercio electrónico con plugin de pago en tu página (PayPal, Apple Pay, Amazon Pay, Mercado Pago, etc.)"
              },
              {
                "id": "604bfdf21a085c001963d431",
                "valor": "604bfdf21a085c001963d431",
                "texto": "Market places (Shopify, Kichink, Amazon, Mercado Libre, Facebook, etc.)"
              },
              {
                "id": "604bfdf21a085c001963d432",
                "valor": "604bfdf21a085c001963d432",
                "texto": "Fondeo colectivo (Kickstarter, Patreon, Ko-fi, Indiegogo, GoFundMe, etc.)"
              },
              {
                "id": "604bfdf21a085c001963d433",
                "valor": "604bfdf21a085c001963d433",
                "texto": "Gestores de contenidos (CMS) (Wordpress, Joomla, etc.)"
              },
              {
                "id": "604bfdf21a085c001963d434",
                "valor": "604bfdf21a085c001963d434",
                "texto": "Plataformas de gestión interna (CRM, ERP, LMS, etc.) "
              },
              {
                "id": "604bfdf21a085c001963d435",
                "valor": "604bfdf21a085c001963d435",
                "texto": "Streaming por internet (YouTube, Facebook, Instagram, Spotify, iTunes, Amazon, Vimeo, Tidal, Twitch, etc.)"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4f8",
            "etiqueta": "1. ¿Cuáles de los siguientes servicios o herramientas digitales utilizas para tu actividad profesional? ",
            "requerido": true
          },
          {
            "tipo": "multicampo",
            "datos": {
              "campos": [
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4a9",
                      "valor": "604bfdf21a085c001963d4a9",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4aa",
                      "valor": "604bfdf21a085c001963d4aa",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ab",
                      "valor": "604bfdf21a085c001963d4ab",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ac",
                      "valor": "604bfdf21a085c001963d4ac",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d509",
                  "etiqueta": "Otrxs trabajadorxs por honorarios con lxs que colaboras en proyectos"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4ad",
                      "valor": "604bfdf21a085c001963d4ad",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ae",
                      "valor": "604bfdf21a085c001963d4ae",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4af",
                      "valor": "604bfdf21a085c001963d4af",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4b0",
                      "valor": "604bfdf21a085c001963d4b0",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d50a",
                  "etiqueta": "Otras empresas e iniciativas que son competencia"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4b1",
                      "valor": "604bfdf21a085c001963d4b1",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4b2",
                      "valor": "604bfdf21a085c001963d4b2",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4b3",
                      "valor": "604bfdf21a085c001963d4b3",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4b4",
                      "valor": "604bfdf21a085c001963d4b4",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d50b",
                  "etiqueta": "Universidades, laboratorios de I+D y centros de investigación "
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4b5",
                      "valor": "604bfdf21a085c001963d4b5",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4b6",
                      "valor": "604bfdf21a085c001963d4b6",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4b7",
                      "valor": "604bfdf21a085c001963d4b7",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4b8",
                      "valor": "604bfdf21a085c001963d4b8",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d50c",
                  "etiqueta": "Encuentros creativos, conferencias y ferias comerciales"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4b9",
                      "valor": "604bfdf21a085c001963d4b9",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ba",
                      "valor": "604bfdf21a085c001963d4ba",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4bb",
                      "valor": "604bfdf21a085c001963d4bb",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4bc",
                      "valor": "604bfdf21a085c001963d4bc",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d50d",
                  "etiqueta": "Exposiciones y festivales artísticos y culturales"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4bd",
                      "valor": "604bfdf21a085c001963d4bd",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4be",
                      "valor": "604bfdf21a085c001963d4be",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4bf",
                      "valor": "604bfdf21a085c001963d4bf",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4c0",
                      "valor": "604bfdf21a085c001963d4c0",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d50e",
                  "etiqueta": "Publicaciones técnicas y académicas"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4c1",
                      "valor": "604bfdf21a085c001963d4c1",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4c2",
                      "valor": "604bfdf21a085c001963d4c2",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4c3",
                      "valor": "604bfdf21a085c001963d4c3",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4c4",
                      "valor": "604bfdf21a085c001963d4c4",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d50f",
                  "etiqueta": "Cursos, talleres, y webinars"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4c5",
                      "valor": "604bfdf21a085c001963d4c5",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4c6",
                      "valor": "604bfdf21a085c001963d4c6",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4c7",
                      "valor": "604bfdf21a085c001963d4c7",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4c8",
                      "valor": "604bfdf21a085c001963d4c8",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d510",
                  "etiqueta": "Clientes, consumidorxs y usuarixs"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4c9",
                      "valor": "604bfdf21a085c001963d4c9",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ca",
                      "valor": "604bfdf21a085c001963d4ca",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4cb",
                      "valor": "604bfdf21a085c001963d4cb",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4cc",
                      "valor": "604bfdf21a085c001963d4cc",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d511",
                  "etiqueta": "Foros, blogs y comunidades en línea"
                },
                {
                  "tipo": "casillas",
                  "datos": {
                    "tipo": "UNICO"
                  },
                  "instruccion": null,
                  "opciones": [
                    {
                      "id": "604bfdf21a085c001963d4cd",
                      "valor": "604bfdf21a085c001963d4cd",
                      "texto": "Nada"
                    },
                    {
                      "id": "604bfdf21a085c001963d4ce",
                      "valor": "604bfdf21a085c001963d4ce",
                      "texto": "Poco"
                    },
                    {
                      "id": "604bfdf21a085c001963d4cf",
                      "valor": "604bfdf21a085c001963d4cf",
                      "texto": "Algo"
                    },
                    {
                      "id": "604bfdf21a085c001963d4d0",
                      "valor": "604bfdf21a085c001963d4d0",
                      "texto": "Mucho"
                    }
                  ],
                  "nombre": "subquestion-604bfdf41a085c001963d513",
                  "etiqueta": "Redes sociales"
                }
              ]
            },
            "nombre": "question-604bfdf41a085c001963d51c",
            "etiqueta": "2. En la tarea de buscar nuevas ideas para tu práctica, ¿qué tan importantes han sido (...)? ",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE"
            },
            "instruccion": "Selecciona todas las que apliquen",
            "opciones": [
              {
                "id": "604bfdf21a085c001963d436",
                "valor": "604bfdf21a085c001963d436",
                "texto": "Registré derechos de autor "
              },
              {
                "id": "604bfdf21a085c001963d437",
                "valor": "604bfdf21a085c001963d437",
                "texto": "Solicité una patente"
              },
              {
                "id": "604bfdf21a085c001963d438",
                "valor": "604bfdf21a085c001963d438",
                "texto": "Registré un dibujo industrial "
              },
              {
                "id": "604bfdf21a085c001963d439",
                "valor": "604bfdf21a085c001963d439",
                "texto": "Registré una marca"
              },
              {
                "id": "604bfdf21a085c001963d43a",
                "valor": "604bfdf21a085c001963d43a",
                "texto": "Utilicé licencias abiertas y/o libres (Creative Commons, MPL, GNU, etc)"
              },
              {
                "id": "604bfdf21a085c001963d43b",
                "valor": "604bfdf21a085c001963d43b",
                "texto": "Ninguno"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4f9",
            "etiqueta": "3. Durante el año 2019, ¿recurriste a algún tipo de licenciamiento, registro de autor o propiedad intelectual para tu obra? ",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE"
            },
            "instruccion": null,
            "opciones": [
              {
                "id": "604bfdf21a085c001963d43c",
                "valor": "604bfdf21a085c001963d43c",
                "texto": "Lanzaste productos nuevos o con mejoras significativas"
              },
              {
                "id": "604bfdf21a085c001963d43d",
                "valor": "604bfdf21a085c001963d43d",
                "texto": "Lanzaste servicios nuevos o con mejoras significativas (incluyendo nuevos tipos de proyectos)"
              },
              {
                "id": "604bfdf21a085c001963d43e",
                "valor": "604bfdf21a085c001963d43e",
                "texto": "Lanzaste software nuevo o con mejoras significativas (incluyendo el de uso interno)"
              },
              {
                "id": "604bfdf21a085c001963d43f",
                "valor": "604bfdf21a085c001963d43f",
                "texto": "Mejoraste las formas de producción y suministro de productos y servicios (incluyendo la implementación de nuevas técnicas de administración)"
              },
              {
                "id": "604bfdf21a085c001963d440",
                "valor": "604bfdf21a085c001963d440",
                "texto": "Implementaste estrategias de negocio nuevas o con mejoras significativas (incluyendo nuevos modelos de negocio)"
              },
              {
                "id": "604bfdf21a085c001963d441",
                "valor": "604bfdf21a085c001963d441",
                "texto": "Te capacitaste en alguna nueva herramienta/habilidad"
              },
              {
                "id": "604bfdf21a085c001963d442",
                "valor": "604bfdf21a085c001963d442",
                "texto": "Utilizaste contenidos con derechos de autor/licenciados de terceros que no habías utilizado anteriormente"
              },
              {
                "id": "604bfdf21a085c001963d443",
                "valor": "604bfdf21a085c001963d443",
                "texto": "Utilizaste software abierto y/o libre"
              },
              {
                "id": "604bfdf21a085c001963d444",
                "valor": "604bfdf21a085c001963d444",
                "texto": "Produjiste material elegible para solicitar derechos de autor"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4fa",
            "etiqueta": "4. Durante el año 2019, ¿incursionaste en alguna de las siguientes actividades? Selecciona todas las que apliquen",
            "requerido": true
          },
          {
            "tipo": "casillas",
            "datos": {
              "tipo": "MULTIPLE_MAXIMO",
              "datos": {
                "maximo": 3
              }
            },
            "instruccion": null,
            "opciones": [
              {
                "id": "604bfdf21a085c001963d445",
                "valor": "604bfdf21a085c001963d445",
                "texto": "Dificultad para acceder a financiamiento externo"
              },
              {
                "id": "604bfdf21a085c001963d446",
                "valor": "604bfdf21a085c001963d446",
                "texto": "Falta de habilidades y capacidades actualizadas"
              },
              {
                "id": "604bfdf21a085c001963d447",
                "valor": "604bfdf21a085c001963d447",
                "texto": "Poco aprovechamiento de las tecnologías digitales"
              },
              {
                "id": "604bfdf21a085c001963d448",
                "valor": "604bfdf21a085c001963d448",
                "texto": "Mala cultura de gestión de proyectos "
              },
              {
                "id": "604bfdf21a085c001963d449",
                "valor": "604bfdf21a085c001963d449",
                "texto": "Excesiva competencia en mercados"
              },
              {
                "id": "604bfdf21a085c001963d44a",
                "valor": "604bfdf21a085c001963d44a",
                "texto": "Falta de poder de negociación con los clientxs o proveedorxs"
              },
              {
                "id": "604bfdf21a085c001963d44b",
                "valor": "604bfdf21a085c001963d44b",
                "texto": "Vulneración de la propiedad intelectual (incluyendo derechos de autor)"
              },
              {
                "id": "604bfdf21a085c001963d44c",
                "valor": "604bfdf21a085c001963d44c",
                "texto": "Reglamentación y/o legislación estricta"
              },
              {
                "id": "604bfdf21a085c001963d44d",
                "valor": "604bfdf21a085c001963d44d",
                "texto": "Impuestos altos y/o limitantes del régimen fiscal"
              },
              {
                "id": "604bfdf21a085c001963d44e",
                "valor": "604bfdf21a085c001963d44e",
                "texto": "Baja demanda de los productos o servicios"
              },
              {
                "id": "604bfdf21a085c001963d44f",
                "valor": "604bfdf21a085c001963d44f",
                "texto": "Inseguridad"
              },
              {
                "id": "604bfdf21a085c001963d450",
                "valor": "604bfdf21a085c001963d450",
                "texto": "Corrupción "
              },
              {
                "id": "604bfdf21a085c001963d451",
                "valor": "604bfdf21a085c001963d451",
                "texto": "Clima económico actual"
              }
            ],
            "nombre": "question-604bfdf21a085c001963d4fc",
            "etiqueta": "5. En tu opinión, ¿cuáles son los 3 principales factores que obstaculizan el desarrollo de tu campo profesional? ",
            "requerido": true
          }
        ]
      }
    ],
    "campos": []
}