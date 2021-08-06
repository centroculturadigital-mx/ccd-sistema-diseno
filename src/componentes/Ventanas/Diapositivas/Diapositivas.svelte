<script>
    import { fade } from "svelte/transition";
    import Icono from "../../../elementos/Icono/Icono";
    import Modal from "../Modal/Modal.svelte";
    import Carrusel from "../../Carrusel/Carrusel";
    import Texto from "../../../elementos/texto/Texto/Texto";
    import Titulo from "../../../elementos/texto/Titulo/Titulo";
    import Imagen from "../../../elementos/media/Imagen/Imagen";

    export let diapositivas;
    export let fondo;
    export let estado;
    export let cerrar;

    const cerrarDiapositivas = () => {
        estado = !estado;
        if (typeof cerrar == "function") {
            cerrar();
        }
        console.log("Diapositivas cerrar", estado);
    };

    $: elementosPreparados = diapositivas
        ? diapositivas.map((d) => ({
              componente: Imagen,
              data: {
                  //TODO: Cambiar a datos desde Imagen en v1
                  ...d,
              },
          }))
        : [];
</script>

{#if !!estado}
    <section class="Diapositivas" transition:fade|local>
        <div class="capaCerrar" on:click={cerrarDiapositivas} />
        <!-- {#if fondo}
            <div class="fondo" />
        {/if} -->
        <header>
            <div on:click={cerrarDiapositivas}>
                <Icono icono={"cerrar"} />
            </div>
        </header>

        <div class="contenido">
            <Carrusel elementos={elementosPreparados} />
        </div>
    </section>
{/if}

<style>
    * {
        box-sizing: border-box;
    }
    .Diapositivas {
        position: fixed;
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
        position: relative;
        overflow: hidden;
        z-index: 1001;
        /* max-width: 40rem;
        min-width: 30rem; */
        width: 100%;
    }

    .contenido :global(.Carrusel) {
        width: 100% !important;
    }
    /* .fondo {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
    } */
    header {
        position: absolute;
        top: 0;
        right: 0;
        padding: calc(var(--theme-espaciados-padding) * 1);
        height: auto;
        width: auto;
        display: flex;
        justify-content: flex-end;
        z-index: 1001;
    }
    header :global(img) {
        transition: var(--theme-transisiones-normal);
        height: 1.25rem !important  ;
    }
    header :global(img:hover) {
        filter: invert();
    }
    header :global(.cerrar) {
        fill: #aaaaaa !important;
        cursor: pointer;
    }
    header :global(.cerrar:hover) {
        opacity: 0.75;
    }
    .capaCerrar {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 0;
    }
</style>
