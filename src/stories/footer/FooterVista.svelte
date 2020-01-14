<script>
  import Footer from "./Footer.svelte";

  export let sombra;
  export let fixed;
  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let color;
  export let estadoMenu;


  function menu(evento) {

    estadoMenu = evento.detail;    
  
  }
</script>

<Footer
 on:eventoBotonMenu={menu} 
  {objetosMenu}
  {estadoMenu}
  {logoTexto}
  {logoImagenUrl}
  {altura}
  {colorFondo}
  {color}
  {sombra}
  {fixed}/>
