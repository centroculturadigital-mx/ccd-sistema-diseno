export default {
    tipo: 'radio',
    nombre: 'ccd-sd-radio',
    requerido: true,
    etiqueta: 'Radio: Muestra si esta activado',
    valorEstatico: 'Audio',
    validacion: (valor) => {
        // let resultado = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo        


        console.log("DEBUG radio", valor);

        return {
            //     valido: !resultado.test(valor),
            //     error: resultado.test(valor) ?
            //         new Error("No cars. espec.") : null,
            //     estado: resultado.test(valor) ?
            //         "error" : !valor ? "" : "ok"
        }
    }
}