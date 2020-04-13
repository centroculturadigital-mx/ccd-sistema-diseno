<script>
  import ListaComponentes from "../ListaComponentes/ListaComponentes";
  import Paginacion from "../../Navegacion/Paginacion/Paginacion";

  export let elementos;
  export let elementosPagina=10;

  export let pagina;
  export let seleccionar;
  let paginaSeleccionada=0;

  $: paginaActual = ( pagina===0 || parseInt(pagina) > 0 ) ? pagina : paginaSeleccionada;
  $: console.log("pa",paginaActual);

  const seleccionarPagina = i => {
    pagina = i;
    
    if( typeof seleccionar == "function" ) {
      seleccionar(i)
    }
  };


  $: elementoInicial = paginaActual*elementosPagina;

  $: elementosMostrar = elementos.slice(elementoInicial,elementoInicial+elementosPagina);

</script>

<ListaComponentes elementos={elementosMostrar} {elementosPagina} />
<Paginacion
  elementos={elementosMostrar}
  {elementosPagina}
  pagina={pagina}
  seleccionar={i=>seleccionarPagina(i)}
  />
