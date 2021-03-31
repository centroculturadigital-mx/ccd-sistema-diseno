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
<<<<<<< HEAD
        case "HUECO":
        case "SECUNDARIO":
=======
      case "SECUNDARIO":
      case "HUECO":
>>>>>>> ejemplo aplicacion estilos para pseudo-clases en variantes
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
<<<<<<< HEAD
      case "ENLACE":
        css = {
          "background": "transparent",
          "border": "0px",          
          "color": "var(--theme-colores-primario)",           
          "text-decoration": "underline",           
=======
      case "HUECO_COMPACTO":
        css = {
          "background": "none",
          "padding": "0.25rem 1rem",
          "color": "black",
          "font-size": "0.75",          
>>>>>>> ejemplo aplicacion estilos para pseudo-clases en variantes
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

<<<<<<< HEAD
  $: classes = variante == 'SECUNDARIO' ? 'secundario' : variante == 'ENLACE' ? "enlace" : "primario";
=======
  $: clases = `Boton${variante ? ` ${variante.toLowerCase()}` : ``}`

>>>>>>> ejemplo aplicacion estilos para pseudo-clases en variantes
</script>

<style>
  * {
    box-sizing: border-box;
  }
  button {
    transition: var(--theme-transiciones-normal);
    color: var(--theme-botones-primario-color);
    background-color: var(--theme-botones-primario-fondo);
    padding: calc(var(--theme-botones-primario-espacio) / 2) var(--theme-botones-primario-espacio);
    font-family: var(--theme-botones-primario-familia);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-textos-parrafo-tamanno);
    border-radius: calc(var(--theme-botones-primario-esquinas) / 2 );
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
  button:focus { 
    background-color: var(--theme-botones-primario-foco);
  }
  button:visited { 
    background-color: var(--theme-botones-primario-visitado);
  }
  button:disabled {
    background-color: var(--theme-botones-primario-inactivo);
    box-shadow: initial;
    cursor: initial;
  }
  /* boton secundario */
  .secundario:hover {
    border: 1px solid var(--theme-botones-primario-hover) !important;
    color: var(--theme-botones-primario-hover) !important;
  }
  .secundario:active {
    border: 1px solid var(--theme-botones-primario-activo) !important;
    color: var(--theme-botones-primario-activo) !important;
  } 
  .secundario:focus { 
    border: 1px solid var(--theme-botones-primario-foco) !important;
    color: var(--theme-botones-primario-foco) !important;
  }
  .secundario:visited  { 
    border: 1px solid var(--theme-botones-primario-visitado) !important;
    color: var(--theme-botones-primario-visitado) !important;
  }
  .secundario:disabled {
    border: 1px solid var(--theme-botones-primario-inactivo) !important;
    color: var(--theme-botones-primario-inactivo) !important;
    cursor: initial;
  }
  /* boton enlace */
  .enlace:hover {
    color: var(--theme-botones-primario-hover) !important;
  }
  .enlace:active {
    color: var(--theme-botones-primario-activo) !important;
  } 
  .enlace:focus { 
    color: var(--theme-botones-primario-foco) !important;
  }
  .enlace:visited  { 
    text-decoration: none;
    color: var(--theme-botones-primario-visitado) !important;
  }
  .enlace:disabled {
    color: var(--theme-botones-primario-inactivo) !important;
    text-decoration: none;
    cursor: initial;
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

<<<<<<< HEAD
<button class={classes} on:click={click} disabled={deshabilitado} style={cssString}>
=======
<button class={clases} on:click={click} disabled={deshabilitado} style={cssString}>
>>>>>>> ejemplo aplicacion estilos para pseudo-clases en variantes
  {!!texto ? texto : ''}
</button>
