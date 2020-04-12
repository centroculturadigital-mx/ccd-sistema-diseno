<script>
  import ListaComponentes from "../ListaComponentes/ListaComponentes";
  import Paginacion from "../../Navegacion/Paginacion/Paginacion";

  export let elementos;
  export let elementosPagina=10;

  export let pagina;
  let paginaSeleccionada;
  
  $: paginaActual = pagina ? pagina : paginaSeleccionada;

  const seleccionar = i => {
    paginaActual = i;
  };


  $: elementoInicial = paginaActual*elementosPagina;

  $: elementosMostrar = elementos.slice(elementoInicial,elementoInicial+elementosPagina);

</script>

<ListaComponentes elementos={elementosMostrar} {elementosPagina} />
<Paginacion
  {elementos}
  {elementosPagina}
  {paginaActual}
  {seleccionar} />
