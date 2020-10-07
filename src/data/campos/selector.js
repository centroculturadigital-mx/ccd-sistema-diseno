export default {
    tipo: 'selector',
    nombre: 'ccd-sd-selector',
    requerido: true,
    etiqueta: 'Un selector',
    validacion: (valor) => {
        return true
    },
    valor: 2,
    opciones: [{
            valor: 1,
            texto: "Hola",
        },
        {
            valor: 2,
            texto: "Mundo",
        },
    ]
}
