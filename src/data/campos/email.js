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
    tipo: 'email',
    nombre: 'ccd-sd-email',
    requerido: true,
    etiqueta: 'E-mail',
    valorInicial: '',
    validacion
}
