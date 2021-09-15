<script>
    
    export let clicar
    export let contenido
    export let css = ""

    const clicarAccion = () => {
        if( typeof clicar == "function" ) {
            clicar()
        }
    }


</script>


<div class="Marcador" style={css} on:click={clicarAccion}>
    <span>{contenido}</span>
</div>

<style>

    .Marcador {
        position: absolute;
        display: grid;
        place-items: center;
        padding: 0;
        margin: 0;
        z-index: 1;
    }
    .Marcador span {
        pointer-events: all;
        position: relative;
        display: flex;
        justify-content: center;
        padding: calc(var(--theme-espaciados-padding) / 4)
        calc(var(--theme-espaciados-padding) / 1.25);
        background-color: var(--theme-colores-primario);
        color: #fff;
        font-family: var(--theme-textos-parrafo-tipografia);
        font-size: calc(var(--theme-textos-parrafo-tamanno) - 0.25rem);
        font-weight: 600;
        margin-top: -1.75rem;
        margin-left: -.35rem;
        cursor: pointer;
    }
    
    .Marcador span:hover {
        /* font-size: calc(var(--theme-textos-parrafo-tamanno) - 0.2rem); */
        opacity: 0.75;

    }
    .Marcador span::before {
        content: "";
        position: absolute;
        top: 100%;
        width: 0;
        height: 0;
        border-left: 0.25rem solid transparent;
        border-right: 0.25rem solid transparent;
        border-top: 0.25rem solid var(--theme-colores-primario);
    }

</style>