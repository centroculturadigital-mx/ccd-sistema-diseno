export default {

    tipo: 'casillas',
    
    etiqueta: 'Casillas: Opcioń múltiple',

    indicacion: "Elige las que quieras",
    
    nombre: "casillas",

    requerido: true,

    valor: true,

    opciones: new Array(13).fill(true).map((o,i)=>({
        id: "OPC"+i,
        texto: "Opción " + (i+1),
        click: () => console.log("Click casilla",i)
    })),
    // valorEstatico: "",
    // validacion: "",
    cambiar: datos=>console.log("Campo casillas datos", datos),

}