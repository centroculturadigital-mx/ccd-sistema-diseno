<script>
  import Boton from "../../../elementos/botones/Boton/Boton";
  import Titulo from "../../../elementos/texto/Titulo/Titulo";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import NavegacionPasos from "../Navegacion/NavegacionPasos/NavegacionPasos";
  import SelectorVista from "../SelectorVista/SelectorVista";

  export let elementosNombre = "Eventos";
  export let seleccionar;
  export let desenfocar;
  export let enfocar;
  export let seleccionado;
  export let titulo;
  export let vista;
  export let rango;
  export let anterior;
  export let siguiente;
  export let opciones = [];

  const vistaElegir = e => {
    console.log("Vista Seleccionada: ", e);
  };
</script>

<style>
  .CalendarioCabecera {
    background-color: var(--theme-tarjetas-fondo);
    padding: calc(var(--theme-espaciados-padding) * 3);
    height: 100%;
    max-width: initial;
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

  .seleccionado {
    background-color: #000;
    color: #fff;
  }

  button:hover {
    border: 1px solid #000;
  }
</style>

<section class="CalendarioCabecera">
  {#if !!titulo}
    <Titulo texto={titulo} />
  {/if}
  <div class="Herramientas">
    <NavegacionPasos {rango} {anterior} {siguiente} />
    {#if Array.isArray(opciones) && opciones.length > 0}
      <SelectorVista {opciones} cambiar={vistaElegir} />
    {/if}

    {#if typeof seleccionar == 'function'}
      <Boton
        variante={seleccionado ? 'COMPACTO' : 'HUECO_COMPACTO'}
        click={() => seleccionar()}
        texto={`${elementosNombre} del ${vista}`} />
    {/if}
    
  </div>
</section>
