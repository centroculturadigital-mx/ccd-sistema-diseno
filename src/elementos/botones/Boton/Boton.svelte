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
          "background": "none",
          "color": "black",          
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
  button {
    background-color: var(--theme-botones-primario-fondo);
    color: var(--theme-botones-primario-color);
    padding: calc(var(--theme-botones-primario-espacio) * 2)
    calc(var(--theme-botones-primario-espacio) * 4);
    font-family: var(--theme-botones-primario-familia);
    border-radius: var(--theme-botones-primario-esquinas);
    border: 1px solid var(--theme-botones-primario-borde);
    cursor: pointer;
    margin: 0;
    transition: 0.5s;
  }
  button:hover {
    background-color: var(--theme-botones-primario-hover);
    border-color: var(--theme-botones-primario-hover);
    color: var(--theme-botones-primario-color);
  }
  button:focus,
  button:visited,
  button:active { 
    background-color: var(--theme-botones-primario-activo);
    border-color:  var(--theme-botones-primario-activo);
    color: var(--theme-botones-primario-claro);
  }

  button:disabled {
    background-color: var(--theme-botones-primario-inactivo);
    border-color: var(--theme-botones-primario-inactivo);
    color: var(--theme-botones-primario-claro);
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
