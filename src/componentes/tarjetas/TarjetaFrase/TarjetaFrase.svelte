<script>

export let imagenUrl;
export let textoFrase;
export let textoAutor;
export let posicionTexto;
export let color;
export let fontStyle;
export let colorFondo;

</script>

<style>
    article {
        box-sizing: border-box;
        position: relative;
        width: 16rem;
        height: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.5rem;
        background-color: rgb(202, 202, 202);
        color: #FFF
    }
    .contenedor-texto {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 2;
    }
    h1 {
        top: 0;
        margin: 0;
    }

    .fondo {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        border-radius: 0.5rem;
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>

<article style="justify-content:{posicionTexto};">
    <div class="contenedor-texto">
        <h1 style="color:{color}">
            {textoFrase}
        </h1>
        <p style="font-style:{fontStyle}">
            {textoAutor}
        </p>
    </div>
    <div class="fondo" style="background-color:{colorFondo}">
        {#if !!imagenUrl}
            <img src={imagenUrl} alt="imagen" />
        {/if}
    </div>
</article>

