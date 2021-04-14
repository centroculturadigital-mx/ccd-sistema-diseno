<script>
  import Icono from "../../Icono/Icono.svelte";

  export let texto;
  export let icono = "mas";
  export let click = () => console.log("Accion botón ícono");
  export let variante = "NORMAL";
  export let deshabilitado;

  // export let borde = false;
  // export let iconoBotonEstadoUnoUrl;
  // export let iconoBotonEstadoDosUrl;
  // export let estado = false;
  
  export let css = {};

  if (!!variante) {
    switch (variante) {
      case "NORMAL":
        css = {   
          // "color": "var(--theme-colores-primario)",      
          ...css
        };
      break;
      case "REDONDO":
        css = {
          "padding": "1rem",
          "border-radius": "10rem",          
          ...css
        };
        break;
    }
  }

  $: cssString = Object.entries(css).reduce((acc,e)=>acc+(`${e[0]}: ${e[1]};`), "")

  $: classes = variante == "REDONDO" ? "redondo" : "";
  
</script>

<style>
  *,
  * :global() {
    box-sizing: border-box;
  }
  button {
    transition: var(--theme-transiciones-normal);
    color: var(--theme-botones-secundario-color);
    padding: var(--theme-botones-primario-espacio) calc(var(--theme-botones-primario-espacio) * 2);
    background-color: var(--theme-botones-secundario-fondo);
    font-family: var(--theme-botones-primario-familia);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-textos-parrafo-tamanno);
    /* border: 1px solid var(--theme-botones-secundario-color); */
    border: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0;
  }
  button :global(.iconoContenedor svg) {
    transition: var(--theme-transiciones-normal);
    fill: var(--theme-botones-secundario-color);
    height: 100%;
  }
  button:hover {
    color: var(--theme-botones-secundario-hover);
    /* background-color: #D1C8F5; */
  }
  button:hover :global(svg) {
    fill: var(--theme-botones-secundario-hover);
  }
  button:active {
    color: var(--theme-botones-primario-activo);
  }
  button:focus,
  button:visited {
    color: var(--theme-botones-secundario-foco);
    /* background-color: #EDE9FB; */
    border: 1px solid var(--theme-botones-secundario-foco); 
  }
  button:focus :global(svg),
  button:visited :global(svg) {
    fill: var(--theme-botones-secundario-foco);
  }
  button :global(.iconoContenedor) {
    margin: 0 0.5rem;
    padding: 0.25rem;
  }
    
  button:disabled,  
  button:disabled :global(*) {
    color: var(--theme-botones-secundario-inactivo) !important;
    /* stroke: var(--theme-botones-secundario-inactivo) !important; */
    fill: var(--theme-botones-secundario-inactivo) !important;
    cursor: default;
  }
  button:disabled {
    border: 1px solid var(--theme-botones-secundario-inactivo);
  }  
  /*  */
  .redondo :global(.iconoContenedor) {
    height: 1.5rem !important;
    width: 1.5rem !important;
    margin: 0 !important;
  }

</style>

<button on:click={()=>click()} class={classes} style={cssString} disabled={deshabilitado}>

  {#if !!icono}
    <Icono {icono} tamanno={'1rem'} color={css.color} />
  {/if}

  <!-- version iconos dos estados -->
  <!-- {#if !!iconoBotonEstadoUnoUrl}
    <Icono
    icono={!!estado ? iconoBotonEstadoDosUrl : iconoBotonEstadoUnoUrl}
    tamanno={'1rem'}
    color={css.color}
    />
  {:else}{!!texto ? texto : ''}{/if} -->

  {variante != "REDONDO" ? !!texto ? texto : '' : ''}


</button>
