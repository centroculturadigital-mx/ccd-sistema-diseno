<script>
  import HeaderVista from "./HeaderVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let altura;
  export let colorFondo;
  export let colorFondoMovil;
  export let color;
  export let objetosMenu;
  export let sombra;
  export let fixed;
  export let estadoMenu;
  export let iconoBotonEstadoUnoUrl;
  export let iconoBotonEstadoDosUrl;
  export let iconoBotonAltura;
  export let segment;

  let estadoMenu = false;

  const menuAlternar = () => {
    estadoMenu = !estadoMenu;
  };
</script>

<HeaderVista
  {segment}
  {objetosMenu}
  {estadoMenu}
  {logoTexto}
  {logoImagenUrl}
  {altura}
  {colorFondo}
  {colorFondoMovil}
  {iconoBotonEstadoUnoUrl}
  {iconoBotonEstadoDosUrl}
  {iconoBotonAltura}
  {color}
  {sombra}
  {fixed} />
