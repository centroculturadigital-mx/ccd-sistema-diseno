<script>
  import Icono from "../../Icono/Icono.svelte";

  export let texto;
  export let icono = "mas";
  export let click = () => console.log("Accion botón ícono");
  export let variante = "PLANO";
  export let deshabilitado;

  export let css = {};

  if (!!variante) {
    switch (variante) {
      case "PLANO":
        css = {
          ...css,
        };
        break;
      case "PRIMARIO":
        css = {
          padding: "0.5rem",
          ...css,
        };
        break;
      case "SECUNDARIO":
        css = {
          padding: "0.5rem",
          ...css,
        };
        break;
      case "REDONDO":
        css = {
          padding: "0.5rem",
          "border-radius": "10rem",
          ...css,
        };
        break;
    }
  }

  $: cssString = Object.entries(css).reduce(
    (acc, e) => acc + `${e[0]}: ${e[1]};`,
    ""
  );

  $: classes =
    variante == "REDONDO"
      ? "redondo"
      : variante == "PRIMARIO"
      ? "primario"
      : variante == "SECUNDARIO"
      ? "secundario"
      : "plano";

</script>

<button
  on:click={() => click()}
  class={classes}
  style={cssString}
  disabled={deshabilitado}
>
  {#if !!icono}
    <Icono {icono} tamanno={"1rem"} color={css.color} />
  {/if}

  {!!texto ? texto : ""}
</button>

<style>
  * {
    box-sizing: border-box;
  }
  button {
    transition: var(--theme-transiciones-normal);
    color: var(--theme-botones-secundario-color);
    padding: calc(var(--theme-botones-primario-espacio) / 4)
      calc(var(--theme-botones-primario-espacio) / 2);
    background-color: var(--theme-botones-secundario-fondo);
    font-family: var(--theme-botones-primario-familia);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-textos-parrafo-tamanno);
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    margin: 0;
  }
  button :global(.iconoContenedor) {
    margin-left: 0 !important;
    padding: 0.25rem;
  }
  button :global(.iconoContenedor svg) {
    transition: var(--theme-transiciones-normal);
    fill: var(--theme-botones-secundario-color);
    height: 100%;
  }
  button:hover {
    color: var(--theme-botones-secundario-hover);
    background-color: #f5edff;
  }
  button:hover :global(svg) {
    fill: var(--theme-botones-secundario-hover);
  }
  button:active {
    background-color: #f5edff;
    border: 1px solid var(--theme-botones-secundario-activo);
    color: var(--theme-botones-secundario-activo);
  }
  button:active :global(svg) {
    fill: var(--theme-botones-secundario-activo);
  }
  button:focus {
    background-color: #f5edff;
    border: 1px solid var(--theme-botones-secundario-activo);
    color: var(--theme-botones-primario-foco);
  }
  button:focus :global(svg) {
    fill: var(--theme-botones-secundario-foco);
  }
  button:visited {
    color: var(--theme-botones-secundario-visitado);
    background-color: transparent;
  }
  button:visited :global(svg) {
    fill: var(--theme-botones-secundario-visitado);
  }

  button :global(.iconoContenedor) {
    margin: 0 0.5rem;
    padding: 0.25rem;
  }

  button:disabled,
  button:disabled :global(*) {
    color: var(--theme-botones-secundario-inactivo) !important;
    fill: var(--theme-botones-secundario-inactivo) !important;
    cursor: default;
    pointer-events: none;
  }
  button:disabled:hover {
    background-color: transparent;
  }
  /*  */
  .primario {
    color: var(--theme-botones-primario-color) !important;
    background-color: var(--theme-botones-primario-fondo);
    padding: calc(var(--theme-botones-primario-espacio) / 4);
    border: none;
  }
  .primario :global(div) {
    margin: 0;
  }
  .primario :global(svg) { 
    fill: var(--theme-botones-primario-color) !important;
  }
  .primario:hover {
    background-color: var(--theme-botones-primario-hover);
  }
  .primario:active {
    background-color: var(--theme-botones-primario-activo);
    border: 0;
  }
  .primario:focus {
    background-color: var(--theme-botones-primario-foco);
    border: 0;
  }
  .primario:visited {
    background-color: var(--theme-botones-primario-visitado);
  }
  .primario:disabled,
  .primario:disabled :global(*) {
    background-color: var(--theme-botones-primario-inactivo) !important;
    color: var(--theme-botones-primario-color) !important;
    fill: var(--theme-botones-primario-color) !important;
    cursor: default;
    pointer-events: none;
  }
  button:disabled {
    border: 1px solid var(--theme-botones-secundario-inactivo);
  }  
  /*  */
  .secundario {
    color: var(--theme-botones-secundario-color) !important;
    padding: calc(var(--theme-botones-secundario-espacio) / 4);
    border: 1px solid var(--theme-botones-secundario-color);
  }
  .secundario :global(div) {
    margin: 0;
  }
  .secundario :global(svg) { 
    fill: var(--theme-botones-secundario-color) !important;
  }
  .secundario:hover {
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-hover) !important;
    fill: var(--theme-botones-secundario-hover) !important;
    border:1px solid var(--theme-botones-secundario-hover);
  }
  .secundario:active {
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-activo) !important;
    fill: var(--theme-botones-secundario-activo) !important;
    border:1px solid var(--theme-botones-secundario-activo);
  }
  .secundario:focus {
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-foco) !important;
    fill: var(--theme-botones-secundario-foco) !important;
    border:1px solid var(--theme-botones-secundario-foco);
  }
  .secundario:visited {
    color: var(--theme-botones-secundario-visitado) !important;
    fill: var(--theme-botones-secundario-visitado) !important;
    border:1px solid var(--theme-botones-primario-visitado);
  }
  .secundario:disabled {
    color: var(--theme-botones-secundario-color) !important;
    fill: var(--theme-botones-secundario-color) !important;
    border:1px solid var(--theme-botones-secundario-inactivo) !important;
    cursor: default;
    pointer-events: none;
  }
  .redondo {
    border-radius: calc(var(--theme-botones-primario-esquinas) / 2);
  }
  .redondo :global(.iconoContenedor) {
    height: 1.25rem !important;
    width: 1.25rem !important;
    margin: 0 !important;
  }
  .redondo:disabled {
    border:1px solid var(--theme-botones-secundario-inactivo) !important;
  }
</style>
 
