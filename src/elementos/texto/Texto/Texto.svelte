<script>

    import escapeHtml from "escape-html";
    import { etiquetaNombreGenerar, etiquetaAbrir, etiquetaCerrar } from "../../../funciones/generadorEtiquetas";
    import generadorEtiquetas from "../../../funciones/generadorEtiquetas";

    export let estilos;
    export let texto;
    export let tamanno;

    let html = '';

    $: generarTexto(estilos,texto);
    
    const generarTexto = (estilos,texto) => {
        
        if(Array.isArray(estilos)){
            estilos.forEach(e=>{
                html += generadorEtiquetas.abrir(generadorEtiquetas.nombreGenerar(e),{
                    "style": `font-size: ${tamanno}`
                });
            })
        }

        html += escapeHtml(texto)
        // html += texto

        if(Array.isArray(estilos)){
            estilos.forEach(e=>{
                html += generadorEtiquetas.cerrar(generadorEtiquetas.nombreGenerar(e));
            })
        }
        
    }


</script>

{@html html }

