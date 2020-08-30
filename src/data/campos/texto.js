export default {
    tipo: 'texto',
    nombre: 'ccd-sd-texto',
    requerido: true,
    etiqueta: 'Texto: Sin caracteres especiales ',
    valorInicial: '...',
    validacion: (valor) => {
        let caracteresEspeciales = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo        


        return {
            valido: !caracteresEspeciales.test(valor),
            error: caracteresEspeciales.test(valor) ?
                new Error("No cars. espec.") : null,
            estado: caracteresEspeciales.test(valor) ?
                "error" : ! valor ? "" : "ok"
        }
    }
}
