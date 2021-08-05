<script>
  import Icono from "../../Icono/Icono";
  import Texto from "../../texto/Texto/Texto";
  import Parrafo from "../../texto/Parrafo/Parrafo";
import { xlink_attr } from "svelte/internal";

  export let imagen;
  export let tamannos;
  export let maximizar;
  export let nombre;
  export let descripcion;
  export let descripcionPosicion;
  export let alt;

  export let estilos = {
    ajuste: "",
    alineacion: "",
    altura: "",
  };

  let cargando = true;

  $: clases = estilos.altura ? "width-auto" : "";

  //
  const cargar = () => {
    cargando = false;
    console.log("ya cargue");
  };
</script>

<div class="imagen">
  {#if !!imagen}
    <img
      on:click
      on:load={cargar}
      class={clases}
      src={imagen}
      {alt}
      style="object-fit:{estilos.ajuste};object-position:{estilos.alineacion};height:{estilos.altura}"
    />
  {:else if !!tamannos && typeof tamannos === "object"}
    {#if cargando}
      <picture on:load={cargar}>
        <!-- tamanno xl -->
        <source media="(min-width:1680px)" srcset="{tamannos.xl.x1} 1x, {tamannos.xl.x2} 2x, {tamannos.xl.x3} 3x" />
        <!-- tamanno lg -->
        <source media="(min-width:1220px)" srcset="{tamannos.lg.x1} 1x, {tamannos.lg.x2} 2x, {tamannos.lg.x3} 3x" />
        <!-- tamanno md -->
        <source media="(min-width:768px)" srcset="{tamannos.md.x1} 1x, {tamannos.md.x2} 2x, {tamannos.md.x3} 3x" />
        <!-- tamanno sm -->
        <source media="(min-width:465px)" srcset="{tamannos.sm.x1} 1x, {tamannos.sm.x2} 2x, {tamannos.sm.x3} 3x" />
        <!-- tamanno xs -->
        <img srcset="{tamannos.xs.x1} 1x, {tamannos.xs.x2} 2x, {tamannos.xs.x3} 3x" {alt} />
      </picture>
    {:else}
      <div class="cargando">
        <img src={tamannos.cargando} {alt} />
      </div>
    {/if}
  {/if}
  {#if nombre || descripcion}
    <div class="descripcion {descripcionPosicion ? "afuera" : ""}">
      <Texto texto={nombre} />
      <Parrafo texto={descripcion} />
    </div>
  {/if}
  {#if maximizar}
    <div class="maximizar" on:click={maximizar}>
      <Icono icono={"maximizar"}/>
    </div>
  {/if}
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .imagen {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  .width-auto {
    width: auto;
  }
  .cargando {
    filter: blur(3px);
  }
  .descripcion {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: calc(var(--theme-espaciados-padding) * 2);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* height: 50%; */
    width: 100%;
    /* gradiente */
    background: transparent;
    background: -moz-linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0.5%,
      rgba(0, 0, 0, 0) 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0.5%,
      rgba(0, 0, 0, 0) 100%
    );
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0.5%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 1;
  }
  .descripcion :global(span) {
    color: #FFF;
    font-weight:700;
    font-size: 0.75rem;
  }
  .descripcion :global(p) {
    margin: 0.5rem 0 0;
  }
  .descripcion :global(p span) {
    font-weight:400;
    font-size: 0.875rem;
  }
  .descripcion.afuera {
    position: relative;
    height: auto;
    width: 100%;
    background: transparent;
    padding: 0.25rem 0;
  }
  .descripcion.afuera :global(span) {
    color: var(--theme-textos-parrafo-color);
  }
  .maximizar {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: calc(var(--theme-espaciados-padding) * 2);
    z-index: 2;
    cursor: pointer;
  }
  .maximizar:hover {
    opacity: 0.75;
  }
  .maximizar :global(.iconoContenedor) {
    height: 1.25rem !important;
    width: 1.25rem !important;
  }
  .maximizar :global(svg) {
    fill: #FFF;
    height: 100%;
  }
  
</style>
