const validacion = (valor) => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const test = re.test(String(valor).toLowerCase())
    return {
        valido: test,
        error: ! test ?
            new Error("Por favor introduce un e-mail válido") : null,
        estado: !valor ? "" : ! test ?
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
