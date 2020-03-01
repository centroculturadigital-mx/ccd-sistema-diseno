<script>

    import escapeHtml from "escape-html"

    export let estilos;
    export let texto;

    let html = '';

    $: generarTexto(estilos,texto)
    
    const generarTexto = (estilos,texto) => {
        
        if(Array.isArray(estilos)){
            estilos.forEach(e=>etiquetaEstilosAbrir(e))
        }

        html += escapeHtml(texto)

        if(Array.isArray(estilos)){
            estilos.forEach(e=>etiquetaEstilosCerrar(e))
        }
        
    }


    const etiquetaEstilosAbrir = (estilo,cerrar=false) => {
        etiquetaEstilosGenerar(estilo)
    }


    const etiquetaEstilosCerrar = (estilo,cerrar=false) => {
        etiquetaEstilosGenerar(estilo,true)
    }


    const etiquetaEstilosGenerar = (estilo,cerrar=false) => {

        estilos.forEach(e=>{
            switch(e) {
                case "bold":
                    html += `<${ cerrar ? '/' : '' }strong>`;
                case "italic":
                    html += `<${ cerrar ? '/' : '' }em>`;
            }
        })

    }

</script>

{@html html }

