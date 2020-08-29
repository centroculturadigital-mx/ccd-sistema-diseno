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
    tipo: 'telefono',
    nombre: 'ccd-sd-telefono',
    requerido: true,
    etiqueta: 'Número de telefono',
    valorInicial: '',
    validacion
}
