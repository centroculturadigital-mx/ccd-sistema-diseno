<script>

    import generadorEtiquetas from "../../../funciones/generadorEtiquetas"

    export let texto;
    export let color;
    export let data;
    
   

    const generarParrafo = (texto,atributos) => {
        
        let html = ''
        
        html += generadorEtiquetas.etiqueta(
            'p',
            texto,
            atributos
        );

        return html

    }


    $: textoRenderear = generarParrafo(
        !! texto ? texto : titulo,
        {
            style: `color: ${color};`,
            ...data
        }
    )


</script>

<style>

    p {
        line-height: 1.5;
        padding-bottom: 1rem;
    }

</style>


{@html textoRenderear }