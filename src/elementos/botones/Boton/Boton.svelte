<script>

  import { getContext } from "svelte";

  // let { theme } = getContext('theme')

  // $: console.log({$theme});

  export let texto = "Botón";
  export let click;
  export let deshabilitado;
  export let css = {};
  export let variante;


  if (!!variante) {
    switch (variante) {
      case "NORMAL":
        break;
      case "SECUNDARIO":
      case "HUECO":
        css = {
          "background": "transparent",
          "border": "1px solid var(--theme-colores-primario)",          
          "color": "var(--theme-colores-primario)",      
          ...css
        };
        break;
      case "HUECO_COMPACTO":
        css = {
          "background": "none",
          "padding": "0.25rem 1rem",
          "color": "black",
          "font-size": "0.75",          
          ...css
        };
        break;
      case "HUECO_COMPACTO":
        css = {
          "background": "none",
          "padding": "0.25rem 1rem",
          "color": "black",
          "font-size": "0.75",          
          ...css
        };
        break;
      case "COMPACTO":
        css = {
          "padding": "0.25rem 1rem",
          "font-size": "0.75",          
          ...css
        };
        break;
      
    }
  }


  $: cssString = Object.entries(css).reduce((acc,e)=>acc+(`${e[0]}: ${e[1]};`), "")

  $: clases = `Boton${variante ? ` ${variante.toLowerCase()}` : ``}`

</script>

<style>
  * {
    box-sizing: border-box;
  }
  button {
    transition: var(--theme-transiciones-normal);
    background-color: var(--theme-botones-primario-fondo);
    color: var(--theme-botones-primario-color);
    padding: calc(var(--theme-botones-primario-espacio) * 2) calc(var(--theme-botones-primario-espacio) * 4);
    font-family: var(--theme-botones-primario-familia);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-textos-parrafo-tamanno);
    border-radius: var(--theme-botones-primario-esquinas);
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    border: none;
    cursor: pointer;
    margin: 0;
  }
  button:hover {
    background-color: var(--theme-botones-primario-hover);
  }
  button:active {
    background-color: var(--theme-botones-primario-activo);
  }
  button:focus,
  button:visited { 
    background-color: var(--theme-botones-primario-foco);
  }
  button:disabled {
    background-color: var(--theme-botones-primario-inactivo);
    box-shadow: initial;
    cursor: default;
  }
  /* boton secundario */
  .secundario {
    box-shadow: initial;
  }
  .secundario:hover {
    border: 1px solid var(--theme-botones-primario-hover) !important;
    color: var(--theme-botones-primario-hover) !important;
  }
  .secundario:active {
    border: 1px solid var(--theme-botones-primario-activo) !important;
    color: var(--theme-botones-primario-activo) !important;
  } 
  .secundario:focus,
  .secundario:visited { 
    border: 1px solid var(--theme-botones-primario-foco) !important;
    color: var(--theme-botones-primario-foco) !important;
  }
  .secundario:disabled {
    border: 1px solid var(--theme-botones-primario-inactivo) !important;
    color: var(--theme-botones-primario-inactivo) !important;
    cursor: default;
  }

  button.secundario {
    border-color: #aaa;
    color: #666 !important; 
  }

  button.secundario:hover {
    border-color: #555;
    color: #000 !important; 
  }

</style>

<button class={clases} on:click={click} disabled={deshabilitado} style={cssString}>
  {!!texto ? texto : ''}
</button>
