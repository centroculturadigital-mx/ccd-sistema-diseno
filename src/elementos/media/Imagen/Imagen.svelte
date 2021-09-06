<script>
  import Icono from "../../Icono/Icono";
  import Texto from "../../texto/Texto/Texto";
  import Parrafo from "../../texto/Parrafo/Parrafo";

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

  $: clases = estilos.altura ? "width-auto" : "";

  let cargar = false;
  let imagenElemento;
  let contenedor;

  const cargando = (e) => {
    cargar = true;
  };
</script>

<div class="imagen" bind:this={contenedor}>
  {#if !!imagen}
    <img
      on:click
      class={clases}
      src={imagen}
      {alt}
      style="object-fit:{estilos.ajuste};object-position:{estilos.alineacion};height:{estilos.altura}"
    />
  {:else if !!tamannos && typeof tamannos === "object"}
    {#if !cargar}
      <div class="cargando">
        <img src={tamannos.cargando} {alt} />
      </div>
    {/if}
    <picture class={cargar ? "lista" : "espera"} bind:this={imagenElemento}>
      <source
        media="(min-width:1680px)"
        srcset="{tamannos.xl.x1} 1x, {tamannos.xl.x2} 2x, {tamannos.xl.x3} 3x"
      />
      <source
        media="(min-width:1220px)"
        srcset="{tamannos.lg.x1} 1x, {tamannos.lg.x2} 2x, {tamannos.lg.x3} 3x"
      />
      <source
        media="(min-width:768px)"
        srcset="{tamannos.md.x1} 1x, {tamannos.md.x2} 2x, {tamannos.md.x3} 3x"
      />
      <source
        media="(min-width:465px)"
        srcset="{tamannos.sm.x1} 1x, {tamannos.sm.x2} 2x, {tamannos.sm.x3} 3x"
      />
      <img
        srcset="{tamannos.xs.x1} 1x, {tamannos.xs.x2} 2x, {tamannos.xs.x3} 3x"
        {alt}
        on:load={cargando}
      />
    </picture>
  {/if}

  {#if cargar}
    {#if nombre || descripcion}
      <div class="descripcion {descripcionPosicion ? 'afuera' : ''}">
        <Texto texto={nombre} />
        <Parrafo texto={descripcion} />
      </div>
    {/if}
    {#if maximizar}
      <div class="maximizar" on:click={maximizar}>
        <Icono icono={"maximizar"} />
      </div>
    {/if}
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
  picture {
    position: relative;
    z-index: 1;
  }
  picture img {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  .width-auto {
    width: auto;
  }
  .espera {
    visibility: hidden;
  }
  .lista {
    visibility: visible;
  }
  .cargando {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    filter: blur(10px);
    z-index: 2;
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
    color: #fff;
    font-weight: 700;
    font-size: 0.75rem;
  }
  .descripcion :global(p) {
    margin: 0.5rem 0 0;
  }
  .descripcion :global(p span) {
    font-weight: 400;
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
    fill: #fff;
    height: 100%;
  }
</style>
