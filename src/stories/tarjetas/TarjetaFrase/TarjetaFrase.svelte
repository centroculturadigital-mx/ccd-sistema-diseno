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
        position: relative;
        width: 16rem;
        height: 12rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.25rem;
        background-color: rgb(202, 202, 202);
        color: #FFF
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
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>

<article style="justify-content:{posicionTexto};">
    <h1 style="color:{color}">
        {textoFrase}
    </h1>
    <p style="font-style:{fontStyle}">
        {textoAutor}
    </p>
    <div class="fondo" style="background-color:{colorFondo}">
        <img src={imagenUrl} alt="imagen" />
    </div>
</article>
