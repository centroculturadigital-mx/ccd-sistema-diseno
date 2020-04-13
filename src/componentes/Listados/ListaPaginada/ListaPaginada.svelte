<script>
  import ListaComponentes from "../ListaComponentes/ListaComponentes";
  import Paginacion from "../../Navegacion/Paginacion/Paginacion";

  export let elementos;
  export let elementosPagina=10;
  $: elementosPaginaNum = parseInt(elementosPagina);
  

  export let pagina;
  export let seleccionar;
  let paginaSeleccionada=0;

  $: paginaActual = ( pagina===0 || parseInt(pagina) > 0 ) ? pagina : paginaSeleccionada ? paginaSeleccionada : 0;
  $: console.log("pa",paginaActual);

  const seleccionarPagina = i => {
    pagina = i;
    
    if( typeof seleccionar == "function" ) {
      seleccionar(i)
    }
  };


  $: elementoInicial = paginaActual*elementosPaginaNum;

  $: elementosMostrar = elementos.slice(elementoInicial,elementoInicial+elementosPaginaNum);
  $: console.log(elementoInicial,elementosPaginaNum, elementosMostrar.length);
  

</script>

<ListaComponentes elementos={elementosMostrar} elementosPagina={elementosPaginaNum} />
<Paginacion
  {elementos}
  elementosPagina={elementosPaginaNum}
  pagina={pagina}
  seleccionar={i=>seleccionarPagina(i)}
  />
