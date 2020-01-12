<script>
  import MenuMovil from "./MenuMovil.svelte";

  export let estadoMenu;
  export let objetosMenu;
  export let colorFondo;
  export let alturaObjetoMenu;


</script>

<MenuMovil
  {estadoMenu}
  {objetosMenu}
  {colorFondo} 
  {alturaObjetoMenu}
  />
