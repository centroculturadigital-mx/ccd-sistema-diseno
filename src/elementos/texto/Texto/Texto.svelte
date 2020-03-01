<script>

    import escapeHtml from "escape-html"
    import { etiquetaNombreGenerar, etiquetaAbrir, etiquetaCerrar } from "../../../funciones/etiquetaGenerar"
    import etiquetaGenerar from "../../../funciones/etiquetaGenerar"

    export let estilos;
    export let texto;

    let html = '';

    $: generarTexto(estilos,texto)
    
    const generarTexto = (estilos,texto) => {
        
        if(Array.isArray(estilos)){
            estilos.forEach(e=>{
                html += etiquetaGenerar.abrir(etiquetaGenerar.nombreGenerar(e));
            })
        }

        html += escapeHtml(texto)

        if(Array.isArray(estilos)){
            estilos.forEach(e=>{
                html += etiquetaGenerar.cerrar(etiquetaGenerar.nombreGenerar(e));
            })
        }
        
    }


</script>

{@html html }

