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
  
  let estadoMenu=false;

  const menuAlternar = () => {

    estadoMenu =! estadoMenu    
    
  }
</script>

<HeaderVista
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
  {fixed}/>
