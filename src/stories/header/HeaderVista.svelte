<script>
  import Header from "./Header.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let altura;
  export let colorFondo;
  export let color;
  export let objetosMenu;
  export let sombra;
  export let fixed;
  export let estadoMenu;

  function menu(evento) {

    estadoMenu = evento.detail;    
  
  }
</script>

<Header
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
