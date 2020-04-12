<script>
  import ListaComponentes from "../ListaComponentes/ListaComponentes";
  import Paginacion from "../../Navegacion/Paginacion/Paginacion";

  export let elementos;
  export let elementosPagina=10;

  export let pagina;
  export let seleccionar;
  let paginaSeleccionada=0;

  $: paginaActual = pagina ? pagina : paginaSeleccionada;

  const seleccionarPagina = i => {
    paginaSeleccionada = i;
    
    if( typeof seleccionar == "function" ) {
      seleccionar(i)
    }
  };


  $: elementoInicial = paginaActual*elementosPagina;

  $: elementosMostrar = elementos.slice(elementoInicial,elementoInicial+elementosPagina);

</script>

<ListaComponentes elementos={elementosMostrar} {elementosPagina} />
<Paginacion
  {elementos}
  {elementosPagina}
  pagina={paginaActual}
  seleccionar={i=>seleccionarPagina(i)}
  />
