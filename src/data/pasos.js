export default [{
        titulo: "Título paso 1",
        textoPaso: "Fecha",
        campos: [{
            tipo: "fecha",
            nombre: 'Calendario',
            requerido: true,
            etiqueta: '',
            ejemplo: '',
            valorInicial: '',
            seleccionar: {
                dia: fecha => console.log("dia", fecha),
                semana: fecha => console.log("semana", fecha),
                mes: fecha => console.log("mes", fecha),
                anno: fecha => console.log("año", fecha),
            },
            validacion: (valor) => {
                console.log("Validación fecha", valor);
            }
        }],

    },
    {
        titulo: "Título paso 2",
        textoPaso: "Información",
        campos: [{
                tipo: 'texto',
                nombre: 'nombre',
                requerido: true,
                etiqueta: 'Nombre completo',
                ejemplo: '',
                valorInicial: '',
                validacion: (valor) => {
                    let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]");

                    return {
                        valido: !caracteresEspeciales.test(valor),
                        error: caracteresEspeciales.test(valor) ?
                            new Error("No caracteres especiales") : null,
                        estado: caracteresEspeciales.test(valor) ?
                            "error" : !valor ? "" : "ok"
                    }
                }
            }, {
                tipo: 'texto',
                nombre: 'name',
                requerido: true,
                etiqueta: '¿De que institución o AC viene?',
                ejemplo: '',
                valorInicial: '',
                validacion: (valor) => {
                    let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]");

                    return {
                        valido: !caracteresEspeciales.test(valor),
                        error: caracteresEspeciales.test(valor) ?
                            new Error("No caracteres especiales") : null,
                        estado: caracteresEspeciales.test(valor) ?
                            "error" : !valor ? "" : "ok"
                    }
                }
            },
            {
                tipo: 'email',
                nombre: 'correo',
                requerido: true,
                etiqueta: 'Correo electrónico',
                ejemplo: '',
                valorInicial: '',
                validacion: (valor) => {
                    let caracteresEspeciales = new RegExp("[!#$%^&*()+={};':|,<>/?]"); //solo acepta guion medio y bajo

                    return {
                        valido: !caracteresEspeciales.test(valor),
                        error: caracteresEspeciales.test(valor) ?
                            new Error("No cars. espec.") : null,
                        estado: caracteresEspeciales.test(valor) ?
                            "error" : !valor ? "" : "ok"
                    }
                }
            }
        ],

    },
    {
        titulo: "Título paso 3",
        textoPaso: "Asistentes",
        campos: [{
                tipo: "numero",
                nombre: 'ninnos',
                requerido: false,
                etiqueta: 'Niños (18 -)',
                ejemplo: '0',
                valorInicial: 0,
                minimo: 0,
                maximo: 100,
                validacion: (valor) => console.log("Validación fecha", valor)
            },
            {
                tipo: "numero",
                nombre: 'adultos',
                requerido: false,
                etiqueta: 'Adultos (18 +)',
                ejemplo: '0',
                valorInicial: 0,
                minimo: 0,
                maximo: 100,
                validacion: (valor) => console.log("Validación fecha", valor)
            },
            {
                tipo: "numero",
                nombre: 'mayores',
                requerido: false,
                etiqueta: 'Adultos mayores (60 +)',
                ejemplo: '0',
                valorInicial: 0,
                minimo: 0,
                maximo: 100,
                validacion: (valor) => console.log("Validación fecha", valor)
            },
            {
                tipo: "numero",
                nombre: 'discapacidad',
                requerido: false,
                etiqueta: 'Personas con discapacidad',
                ejemplo: '0',
                valorInicial: 0,
                minimo: 0,
                maximo: 100,
                validacion: (valor) => console.log("Validación fecha", valor)
            },
            {
                tipo: "numero",
                nombre: 'discapacidad',
                requerido: false,
                etiqueta: '¿Necesitas sillas de ruedas?',
                ejemplo: '0',
                valorInicial: 0,
                minimo: 0,
                maximo: 100,
                validacion: (valor) => console.log("Validación fecha", valor)
            },
        ],

    },
    {
        titulo: "Título paso confirmacion",
        textoPaso: "Confirma",
        texto: "Si lo necesitas, revisa que la información esté correcta"
    }

]