<script>
    import Carrusel from "../../Carrusel/Carrusel";
    import Texto from "../../../elementos/texto/Texto/Texto";
    import Titulo from "../../../elementos/texto/Titulo/Titulo";
    import Imagen from "../../../elementos/media/Imagen/Imagen";

    export let diapositivas;
    export let fondo;

    $: elementosPreparados = diapositivas ? diapositivas.map((d) => ({
        componente: Imagen,
        data: {//TODO: Cambiar a datos desde Imagen en v1
            ...d,
        },
    })) : [];

    $: console.log("Diapositivas", diapositivas, elementosPreparados);
</script>

<section class="Diapositivas">
    <!-- {#if fondo}
        <div class="fondo" />
    {/if} -->

    <div class="contenido">
        <Carrusel elementos={elementosPreparados} />
    </div>
</section>

<style>
    * {
        box-sizing: border-box;
    }
    .Diapositivas {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
    }
    .contenido {
        max-width: 40rem;
        min-width: 30rem;
    }
    .contenido :global(.Carrusel) {
        width: 100% !important;
    }
    .fondo {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
    }
</style>
