<script>
  import HeaderVista from "./HeaderVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let colorFondoMovil;
  export let color;
  export let sombra;
  export let fixed;
  export let estadoMenu;
  export let iconoBotonEstadoUnoUrl = "menu.svg";
  export let iconoBotonEstadoDosUrl = "cerrar.svg";
  export let iconoBotonAltura;
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
  {logoImagenUrl}
  {altura}
  {colorFondo}
  {colorFondoMovil}
  {color}
  {sombra}
  {fixed} />
