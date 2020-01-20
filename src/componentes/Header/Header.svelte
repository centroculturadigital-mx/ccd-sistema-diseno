<script>
  import HeaderVista from "./HeaderVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let logoAncho;
  export let altura;
  export let colorFondo;
  export let colorFondoMovil;
  export let color;
  export let objetosMenu;
  export let sombra;
  export let fixed;
  export let segment;

  let estadoMenu = false;

  const menuAlternar = () => {
    estadoMenu = !estadoMenu;
  };
</script>

<HeaderVista
  {segment}
  {menuAlternar}
  {objetosMenu}
  {estadoMenu}
  {logoTexto}
  {logoAncho}
  {logoImagenUrl}
  {altura}
  {colorFondo}
  {colorFondoMovil}
  {color}
  {sombra}
  {fixed} />
