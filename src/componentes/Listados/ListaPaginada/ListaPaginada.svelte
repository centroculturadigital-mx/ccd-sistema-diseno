<script>
  import ListaComponentes from "../ListaComponentes/ListaComponentes";
  import Paginacion from "../../Navegacion/Paginacion/Paginacion";

  export let elementos;
  export let elementosPagina;

  let pagina = 0;

  const seleccionar = i => {
    
    pagina = i;

  };


  $: elementoInicial = pagina*elementosPagina;

  $: elementosMostrar = elementos.slice(elementoInicial,elementoInicial+elementosPagina);

</script>

<ListaComponentes elementos={elementosMostrar} {elementosPagina} />
<Paginacion
  {elementos}
  {elementosPagina}
  {pagina}
  {seleccionar} />
