<script>
  import ListaComponentes from "../ListaComponentes/ListaComponentes";
  import Paginacion from "../../Navegacion/Paginacion/Paginacion";

  export let elementos;
  export let elementosPagina = 10;
  $: elementosPaginaNum = parseInt(elementosPagina);

  export let pagina;
  export let seleccionar;
  let paginaSeleccionada = 0;

  $: paginaActual =
    pagina === 0 || parseInt(pagina) > 0
      ? pagina
      : paginaSeleccionada
      ? paginaSeleccionada
      : 0;

  const seleccionarPagina = i => {
    pagina = i;
    paginaSeleccionada = i;

    if (typeof seleccionar == "function") {
      seleccionar(i);
    }
  };

  $: elementoInicial = paginaActual * elementosPaginaNum;

  $: elementosCargados = elementos;
  $: elementosMostrar = elementosCargados.slice(
    elementoInicial,
    elementoInicial + elementosPaginaNum
  );
</script>

<style>
  .ListaPaginada {
    padding: 1rem;
    width: 100%;
  }
</style>

<section class="ListaPaginada">
  <ListaComponentes
    elementos={elementosMostrar}
    elementosPagina={elementosPaginaNum} />
  <Paginacion
    elementos={elementosCargados}
    elementosPagina={elementosPaginaNum}
    {pagina}
    seleccionar={i => seleccionarPagina(i)} />
</section>
