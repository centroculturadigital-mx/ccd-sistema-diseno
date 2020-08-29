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
    tipo: 'archivo',
    nombre: 'ccd-sd-archivo',
    requerido: true,
    etiqueta: 'Sube un archivo',
    valorInicial: '',
    validacion
}
