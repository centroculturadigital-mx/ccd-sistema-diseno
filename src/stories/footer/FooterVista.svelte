<script>
  import Header from "./Footer.svelte";

  export let sombra;
  export let fixed;


  function menu(evento) {

    estadoMenu = evento.detail;    
  
  }
</script>

<Footer

  {sombra}
  {fixed}/>
