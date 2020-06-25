const generar = (etiqueta, cerrar = false, atributos) => {

    let atributosHtml = ''

    if (typeof atributos == 'object') {

        Object.keys(atributos).forEach((k, i) => {
            atributosHtml += `${k}="${atributos[k]}"`
            if (i < atributos.length - 1) {
                atributosHtml += `${k}="${atributos[k]}"`
            }
        })
    }

    return `<${ cerrar ? '/' : '' }${etiqueta}${atributosHtml? " " + atributosHtml : ""}>`;

}

const etiqueta = (etiqueta, texto, atributos) => {


    let html = abrir(
        etiqueta,
        atributos
    );

    html += texto;

    html += cerrar(
        etiqueta
    );

    return html;

}

const abrir = (etiqueta, atributos) => {
    return generar(etiqueta, false, atributos)
}


const cerrar = (etiqueta) => {
    return generar(etiqueta, true)
}

const nombreGenerar = clave => {
    let etiquetaNombre;

    switch (clave) {
        case "bold":
        case "strong":
            etiquetaNombre = 'strong';
            break;
        case "small":
            etiquetaNombre = 'small';
            break;
        case "italic":
        case "em":
            etiquetaNombre = 'em';
            break;
        case "strikethrough":
        case "delete":
            etiquetaNombre = 'del';
            break;
        case "underline":
            etiquetaNombre = 'u';
            break;
    }

    return etiquetaNombre
}

export default {
    abrir,
    cerrar,
    etiqueta,
    nombreGenerar
}