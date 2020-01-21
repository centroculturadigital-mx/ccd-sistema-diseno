<script>
  import Logo from "../Logo/Logo.svelte";
  import BotonMenu from "../../elementos/botones/BotonMenu/BotonMenu.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";
  import MenuMovil from "../../elementos/menu/MenuMovil/MenuMovil.svelte";

  export let sombra;
  export let fixed;
  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let color;
  export let estadoMenu;
  export let logosPleca;


  function menu(evento) {

    estadoMenu = evento.detail;    
  
  }
</script>

<Footer

  {objetosMenu}
  {estadoMenu}
  {logoTexto}
  {logoImagenUrl}
  {altura}
  {colorFondo}
  {color}
  {sombra}
  {fixed}
  {logosPleca}/>
