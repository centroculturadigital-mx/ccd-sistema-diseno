const generar = (etiqueta,cerrar=false) => {
    return `<${ cerrar ? '/' : '' }${etiqueta}>`;
    
}

const abrir = (etiqueta) => {
    return generar(etiqueta)
}


const cerrar = (etiqueta) => {
    return generar(etiqueta,true)
}

const nombreGenerar = clave=>{
    let etiquetaNombre;
    
    switch(clave) {
        case "bold":
            etiquetaNombre = 'strong';
            break;
        case "italic":
            etiquetaNombre = 'em';
            break;
    }

    return etiquetaNombre
}

export default {
    abrir,
    cerrar,
    nombreGenerar
}