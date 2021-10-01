<script>
  import Icono from "../../../elementos/Icono/Icono";
  import Boton from "../../../elementos/botones/Boton/Boton";
  import Texto from "../../../elementos/texto/Texto/Texto";

  const revisarNumero = (n) => parseInt(n) === 0 || parseInt(n) > 0;

  export let elementos;
  export let elementosPagina = 10;
  export let cargarResultados;

  $: elementosMostrar = revisarNumero(elementos)
    ? elementos
    : Array.isArray(elementos)
    ? elementos.length
    : null;

  $: mostrar = revisarNumero(elementosMostrar);

  $: numPaginas = Math.ceil(elementosMostrar / elementosPagina);

  let desplegados = elementosPagina
  let valorProgreso = 0
  let pagina = 1

  const calculaProgreso = () => {

    if (desplegados < elementosMostrar) {
      // funcion externa
      if (typeof cargarResultados === "function") {
        cargarResultados();
      }
      // calcula número elementos mostrados
      if (pagina === (numPaginas - 1)) {
        desplegados = Math.floor(elementosMostrar)
      } else {
        desplegados = Math.floor(desplegados + elementosPagina)
      }
      // calcula porcentaje
      valorProgreso = Math.floor((desplegados / elementosMostrar) * 100);

      pagina++

    } else {
      console.log("No hay más elementos por desplegar");
    }
    
  };
  
  const calculaValorDefault = () => {
    valorProgreso = Math.ceil((desplegados / elementos) * 100)
    return valorProgreso
  }
  calculaValorDefault();

</script>

{#if mostrar}
  <div class="Paginacion">
    <div class="carga">
      <div class="cargarResultados">
        <Boton
          variante="SECUNDARIO"
          texto={"Cargar más resultados"}
          click={calculaProgreso}
        />
      </div>
      <progress class="progreso" max="100" value={valorProgreso}>
        {valorProgreso + "%"}
      </progress>
      <div class="valores">
        <Texto
          texto={desplegados + " de " + elementosMostrar}
          variante={"AUXILIAR"}
        />
      </div>
    </div>
  </div>
{/if}

<style>
  * {
    box-sizing: border-box;
  }
  .Paginacion {
    position: relative;
    width: 100%;
  }
  .carga {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .cargarResultados {
    margin-bottom: 2rem;
  }
  progress {
    overflow: hidden;
    min-width: 20rem;
  }
  progress[value] {
    background-color: var(--theme-fondos-fondos1);
    height: 1rem;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 5rem;
  }
  progress[value]::-webkit-progress-bar {
    background-color: var(--theme-colores-primario);
    border-radius: 2px;
    -webkit-appearance: none;
    appearance: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }
  .valores {
    margin-top: 1rem;
  }
  .valores :global(span em) {
    color: #cccccc;
    font-style: initial !important;
  }
</style>
