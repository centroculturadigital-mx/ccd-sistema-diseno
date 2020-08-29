export default {
    tipo: 'textarea',
    nombre: 'ccd-sd-textarea',
    requerido: true,
    etiqueta: 'Área de texto: Menor a 10 caracteres',
    valorInicial: '...',
    validacion: (valor) => {

        if (!valor) return {
            valido: true,
            estado: ""
        }

        if (valor.length < 10) return {
            valido: true,
            estado: "ok"
        }

        return {
            valido: false,
            error: new Error("Mayor a 10 caracteres"),
            estado: "error"
        }

    }
}
