export default {
    tipo: 'numero',
    nombre: 'ccd-sd-numero',
    etiqueta: 'Introduce un número entre 10 y 20',
    valorInicial: '...',
    validacion: (valor) => {

        if (!typeof valor == "number" || valor === "") {
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

        if ( valor >= 10 && valor <= 20 ) {
            return {
                valido: true,
                estado: "ok"
            }
        }

        return {
            valido: false,
            estado: "error",
            error: new Error("Por favor introduce un número entre 10 y 20")
        }
    }
}
