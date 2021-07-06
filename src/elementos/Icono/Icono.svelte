<script>
  import iconos from "./iconos";
  // props
  export let icono;
  export let tamanno = "2rem";
  export let color = "#000";

  $: iconoMostrar = Object.keys(iconos).includes(icono)
    ? iconos[icono]
    : iconos.duda;

  // let TMP_V_1_0 = true;

  // if ( TMP_V_1_0 ) {
  //   iconos.nuevo = nuevo
  // }

  $: iconoMostrar = Object.keys(iconos).includes(icono)  ? iconos[icono] : ojoAbierto;


</script>

{#if icono && Object.keys(iconos).includes(icono)}
  <div
    class="iconoContenedor {icono}"
    style={`fill:${color}; width: ${tamanno}; height: ${tamanno}`}
    on:click
  >
    {@html iconoMostrar}
  </div>
{/if}

<style>
  * {
    box-sizing: border-box;
  }
  .iconoContenedor {
    display: flex;
    align-items: center;
    width: auto;
    color: #000;
    fill: currentColor;
  }
  .iconoContenedor :global(*) {
    fill: inherit;
    height: 100%;
    width: 100%;
  }
  .iconoContenedor :global(img) {
    object-fit: contain;
    height: var(--theme-iconos-primario-tamanno);
  }
</style>
