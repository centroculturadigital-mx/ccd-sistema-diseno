const validacion = (valor) => {

    return {
        valido: true,
        error: false ?
            new Error("No cars. espec.") : null,
        estado: true ? "" : caracteresEspeciales.test(valor) ?
        // estado: !valor ? "" : caracteresEspeciales.test(valor) ?
            "error" :  "ok"
    }
    
}

export default {
    tipo: 'contrasenna',
    nombre: 'ccd-sd-contrasenna',
    requerido: true,
    etiqueta: 'Contraseña',
    valorInicial: '',
    validacion
}
