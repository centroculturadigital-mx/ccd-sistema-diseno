<script>
  import HeaderMovilVista from "./stories/header/HeaderMovilVista.svelte";
  export let valor;

  let objetosMenu = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
  
</script>

<main>

  <HeaderMovilVista
    {objetosMenu}
    logoImagenUrl={'/placeholder.texto.jpg'}
    logoTexto="Logo"
    altura="70px"
    sombra
    />

  <h1>npm run {valor}</h1>

</main>
