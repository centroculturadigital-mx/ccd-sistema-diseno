<script>
  import HeaderMovil from "./HeaderMovil.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let altura;
  export let color;
  export let objetosMenu;
  export let sombra;
  export let fixed;
  export let estadoMenu;

  function activaMenu(evento) {
    estadoMenu = evento.detail;
    console.log(estadoMenu);
    
  }
</script>

<HeaderMovil
  on:eventoBotonMenu={activaMenu} 
  {objetosMenu}
  {estadoMenu}
  {logoTexto}
  {logoImagenUrl}
  {altura}
  {color}
  {sombra}
  {fixed}/>
