<script>
  import HeaderMovilVista from "./stories/header/HeaderMovilVista.svelte";
  export let valor;

  let menuItems = ["Item 1", "Item 1", "Item 1", "Item 1", "Item 1", "Item 1"];
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>

  <HeaderMovilVista
    objetosMenu={menuItems}
    logoImagenUrl={'/placeholder.texto.jpg'}
    logoTexto="Logo"
    altura="70px"
    sombra
    />

  <h1>npm run {valor}</h1>

</main>
