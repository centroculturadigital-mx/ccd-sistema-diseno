export default {
    tipo: 'casilla',
    etiqueta: 'Una casilla',
    ejemplo: "...",

    etiqueta: "Un campo tipo casilla",
    indicacion: "Verdadero o falso",
    nombre: "ccd-sd-casilla",
    requerido: true,

    valor: true,
    // valorEstatico: "",
    
    validacion: valor => {
        return {
            valido: valor == true,
            estado: valor == true  ? "ok" : "error",
            error: valor == false  ? new Error("Es necesario aceptar") : null,                            
        }
    },

    datos: {
        texto: "Una casilla"
    },
    cambiar: datos=>console.log("Campo casilla datos", datos),

}