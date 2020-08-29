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
    tipo: 'fecha',
    nombre: 'ccd-sd-fecha',
    requerido: true,
    etiqueta: 'Fecha',
    valorInicial: '',
    validacion
}
