<script>

    import escapeHtml from "escape-html"
    import { etiquetaNombreGenerar, etiquetaAbrir, etiquetaCerrar } from "../../../funciones/generarEtiqueta"
    import generarEtiqueta from "../../../funciones/generarEtiqueta"

    export let estilos;
    export let texto;

    let html = '';

    $: generarTexto(estilos,texto)
    
    const generarTexto = (estilos,texto) => {
        
        if(Array.isArray(estilos)){
            estilos.forEach(e=>{
                html += generarEtiqueta.abrir(generarEtiqueta.nombreGenerar(e));
            })
        }

        html += escapeHtml(texto)

        if(Array.isArray(estilos)){
            estilos.forEach(e=>{
                html += generarEtiqueta.cerrar(generarEtiqueta.nombreGenerar(e));
            })
        }
        
    }


</script>

{@html html }

