export default {
    tipo: 'casilla',
    etiqueta: 'Una casilla',
    ejemplo: "...",

    etiqueta: "Un campo tipo casilla",
    indicacion: "Verdadero o falso",
    nombre: "casilla",
    requerido: true,

    valor: true,
    // valorEstatico: "",
    // validacion: "",
    datos: {
        texto: "Una casilla"
    },
    cambiar: datos=>console.log("Campo casilla datos", datos),

}