const extractoTexto = (texto, limite, textoFinal) => {
    if (!texto || !limite) return;
    var content = texto;
    content = content.trim();
    content = content.split(' ').slice(0, limite);
    content = content.join(' ') + (textoFinal ? textoFinal : '');
    //
    return content;
};

export default extractoTexto;