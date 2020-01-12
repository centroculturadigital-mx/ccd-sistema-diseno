<script>
  import HeaderMovil from "./HeaderMovil.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let altura;
  export let color;
  export let objetosMenu;
  export let sombra;
  export let fixed;

  function escuchaEstadoBotonMenuMovil(event) {
    console.log("Ya por fin");
  }
</script>

<HeaderMovil
  {objetosMenu}
  {logoTexto}
  {logoImagenUrl}
  {altura}
  {color}
  {sombra}
  {fixed}
  on:eventoEstadoMenu={escuchaEstadoBotonMenuMovil} />
