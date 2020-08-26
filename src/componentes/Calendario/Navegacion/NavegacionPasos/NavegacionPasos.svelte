<script>
  import Boton from "../../../../elementos/botones/Boton/Boton";
  import BotonIcono from "../../../../elementos/botones/BotonIcono/BotonIcono";
  import Texto from "../../../../elementos/texto/Texto/Texto";

  export let rango;
  export let anterior = () => console.log("regresa");
  export let siguiente = () => console.log("avanza");
</script>

<style>
  .Navegacion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  .Navegacion :global(button) {
    padding: calc(var(--theme-botones-primario-espacio) * 1.25)
      calc(var(--theme-botones-primario-espacio) * 2);
    padding-left: 0;
  }
  .Navegacion :global(button:first-child) {
    /* padding-right: calc(var(--theme-botones-primario-espacio) * 2); */
    padding-right: 0;
    flex-shrink: 0;
    background-color: transparent;
    color: var(--theme-textos-parrafo-color);
    border: 0;
    box-sizing: border-box;
  }
  .Navegacion :global(span) {
    min-width: 6rem;
    text-align: center;
  }
</style>

<div class="Navegacion">
  <BotonIcono icono={'izquierda'} borde={false} click={anterior} />
  <Texto texto={rango} />
  <BotonIcono icono={'derecha'} borde={false} click={siguiente} />
</div>
