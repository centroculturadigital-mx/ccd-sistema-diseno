<script>
  import MenuMovil from "./MenuMovil.svelte";

  export let estadoMenu;
  export let objetosMenu;
  export let colorFondo;
  export let color;
  export let alturaObjetoMenu;
  export let sombra;
</script>

<MenuMovil {estadoMenu} {objetosMenu} {colorFondo} {color} {alturaObjetoMenu} {sombra} />
