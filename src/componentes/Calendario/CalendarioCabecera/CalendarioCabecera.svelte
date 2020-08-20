<script>
  import Titulo from "../../../elementos/texto/Titulo/Titulo";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import NavegacionPasos from "../Navegacion/NavegacionPasos/NavegacionPasos";
  import SelectorVista from "../SelectorVista/SelectorVista";

  export let titulo;
  export let anterior = () => console.log("regesa");
  export let siguiente = () => console.log("avanza");
  export let opciones = [];

  const vistaElegir = e => {
    console.log("Vista Seleccionada: ", e);
  };

  $: rango = "Julio 2020";//
</script>

<style>
  .CalendarioCabecera {
    background-color: var(--theme-tarjetas-fondo);
    padding: calc(var(--theme-espaciados-padding) * 3);
    height: 100%;
    max-width: 24rem;
    min-width: 20rem;
    width: 100%;
    box-sizing: border-box;
  }
  .CalendarioCabecera :global(h3) {
    margin: 0;
    margin-bottom: calc(var(--theme-espaciados-margen) * 2);
  }
  .Herramientas {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
</style>

<section class="CalendarioCabecera">

  {#if !!titulo}
    <Titulo texto={titulo} />
  {/if}
  <div class="Herramientas">
    <NavegacionPasos rango={titulo} {anterior} {siguiente} />
    {#if Array.isArray(opciones) && opciones.length > 0}
      <SelectorVista {opciones} cambiar={vistaElegir} />
    {/if}
  </div>
</section>
