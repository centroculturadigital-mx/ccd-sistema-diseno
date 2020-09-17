export default {
    tipo: 'casilla',
    nombre: 'ccd-sd-casilla',
    requerido: true,
    etiqueta: 'Casilla: Muestra si esta activada ',
    valorEstatico: 'video',
    validacion: (valor) => {
        // let resultado = new RegExp("[!@#$%^&*()+={};':|,.<>/?]"); //solo acepta guion medio y bajo        


        console.log("DEBUG casilla", valor);

        return {
            //     valido: !resultado.test(valor),
            //     error: resultado.test(valor) ?
            //         new Error("No cars. espec.") : null,
            //     estado: resultado.test(valor) ?
            //         "error" : !valor ? "" : "ok"
        }
    }
}