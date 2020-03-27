<script>
  import HeaderVista from "./HeaderVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let logos;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let colorFondoMovil;
  export let color;
  export let sombra;
  export let fixed;
  export let iconoBotonEstadoUnoUrl;
  export let iconoBotonEstadoDosUrl;
  export let iconoBotonAltura;
  export let alturaMenuMovil;
  export let objetosMenuExtra;
  export let objetosAlineacion;
  export let segment;
  export let estadoMenu = false;

  const menuAlternar = () => {
    estadoMenu = !estadoMenu;
  };
</script>

<HeaderVista
  {segment}
  {menuAlternar}
  {estadoMenu}
  {altura}
  {objetosMenu}
  {logoTexto}
  {logoImagenUrl}
  {logos}
  {iconoBotonEstadoUnoUrl}
  {iconoBotonEstadoDosUrl}
  {iconoBotonAltura}
  {colorFondo}
  {colorFondoMovil}
  {color}
  {sombra}
  {fixed} 
  {alturaMenuMovil}
  {objetosMenuExtra}
  {objetosAlineacion}
/>
