<script>
  import HeaderMovil from "./HeaderMovil.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let altura;
  export let color;

  function escuchaEstadoBotonMenuMovil(event) {
    console.log("Ya por fin");
  }
</script>

<HeaderMovil
  {logoTexto}
  {logoImagenUrl}
  {altura}
  {color}
  on:eventoEstadoMenu={escuchaEstadoBotonMenuMovil} />
