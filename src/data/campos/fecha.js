import moment from "moment"

export default {
    tipo: 'fecha',
    nombre: 'ccd-sd-fecha',
    requerido: true,
    etiqueta: 'Fecha: Selecciona el 31 de diciembre del 2020',
    valorInicial: '',            
    validacion: (valor) => {
        
        const mismoDia = moment(valor).isSame(moment("12/31/2020"),"month");
        
        return {
            valido: mismoDia,
            error: mismoDia ? false : new Error("No es el día solicitado"),
            estado: ! valor ? "" : mismoDia ? "ok" : "error"
        }
    
    }
}