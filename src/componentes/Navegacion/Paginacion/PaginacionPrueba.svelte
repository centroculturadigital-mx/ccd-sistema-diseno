<script>
  import Paginacion from "./Paginacion";


  export let elementos;
  export let elementosPagina = 10;
  export let pagina;
  export let seleccionar;

</script>

  <div class="Paginacion">
    <Paginacion
        {elementos}
        {elementosPagina}
        {pagina}
        {seleccionar}    
    />      
  </div>

<style>
  .Paginacion {
    position: relative;
    width: 20rem;
    border: 2px solid red;
  }
</style>
