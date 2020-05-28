<script>
  import CabeceraVista from "./CabeceraVista.svelte";

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

<CabeceraVista
  {segment}
  {menuAlternar}
  {estadoMenu}
  {altura}
  {objetosMenu}
  {logoTexto}
  {logoImagenUrl}
  {logos}
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
