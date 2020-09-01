<script>
  // import Boton from "../../../../elementos/botones/Boton/Boton";
  import Icono from "../../../../elementos/Icono/Icono";
  import Texto from "../../../../elementos/texto/Texto/Texto";

  export let rango;
  export let anterior = () => console.log("regresa");
  export let siguiente = () => console.log("avanza");
</script>

<style>
  .NavegacionPasos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .NavegacionPasos :global(button) {
    padding: calc(var(--theme-botones-primario-espacio) * 1.25)
      calc(var(--theme-botones-primario-espacio) * 2);
    padding-left: 0;
  }
  .NavegacionPasos :global(.iconoContenedor:hover) {
    outline: 1px solid red;
  }
  .NavegacionPasos :global(button:first-child) {
    /* padding-right: calc(var(--theme-botones-primario-espacio) * 2); */
    padding-right: 0;
    flex-shrink: 0;
    background-color: transparent;
    color: var(--theme-textos-parrafo-color);
    border: 0;
    box-sizing: border-box;
  }
  .NavegacionPasos :global(span) {
    min-width: 6rem;
    text-align: center;
  }
</style>

<div class="NavegacionPasos">
  <Icono icono={'izquierda'} borde={false} on:click={()=>anterior()} />
  <Texto texto={rango} />
  <Icono icono={'derecha'} borde={false} on:click={()=>siguiente()} />
</div>
