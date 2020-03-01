const generar = (etiqueta,cerrar=false,atributos) => {

    let atributosHtml = ''

    if( typeof atributos == 'object' ) {

        
        Object.keys(atributos).forEach((k,i)=>{
            atributosHtml += `${k}="${atributos[k]}"`
            if( i<atributos.length-1) {
                atributosHtml += `${k}="${atributos[k]}"`
            }
        })
    }

    return `<${ cerrar ? '/' : '' }${etiqueta}${atributosHtml? " " + atributosHtml : ""}>`;
    
}

const abrir = (etiqueta, atributos) => {
    return generar(etiqueta,false,atributos)
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