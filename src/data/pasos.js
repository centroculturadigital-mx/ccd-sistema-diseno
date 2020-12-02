import campoEmail from "../data/campos/email"
import campoFecha from "../data/campos/fecha"

export default [{
        titulo: "Título primer paso",
        texto: "Por favor introduce una fecha",
        nombre: "Paso uno",
        campos: [
            campoFecha,
            {
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
            campoEmail
        ],
    },
    {
        titulo: "Título segundo paso",
        texto: "Información",
        nombre: "paso dos",
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
            campoEmail,

            {
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
            campoEmail

        ],

    },
    {
        titulo: "Título tercer paso",
        texto: "Asistentes",
        nombre: "Paso tres",
        campos: [{
                tipo: "numero",
                nombre: 'ninnos',
                requerido: false,
                etiqueta: 'Introduce un número',
                ejemplo: '0',
                valorInicial: 0,
                minimo: 0,
                maximo: 100,
                validacion: (valor) => {


                    if (typeof valor == "number" ) {
                        return {
                            valido: true,
                            estado: "ok",
                        }
                    }

                    if (!typeof valor == "number" ) {
                        return {
                            valido: false,
                            estado: "error",
                            error: new Error("Números, por favor")
                        }
                    }
            
                    if (!valor) {
                        return {
                            valido: true,
                            estado: ""
                        }
                    }
            
                    return {
                        valido: false,
                        estado: "error",
                        error: new Error("Por favor introduce un número")
                    }
                }
            }
        ],

    },
    {
        titulo: "Título paso confirmacion",
        nombre: "Confirma",
        texto: "Si lo necesitas, revisa que la información esté correcta"
    }

]