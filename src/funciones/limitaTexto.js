const extractoTexto = (texto, limite, textoFinal) => {
    if (!texto || !limite) return;
    let contenido = texto;
    contenido = contenido.trim();
    contenido = contenido.split(' ').slice(0, limite);
    contenido = contenido.join(' ') + (textoFinal ? textoFinal : '');
    //
    return contenido;
};

export default extractoTexto;