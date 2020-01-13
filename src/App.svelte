<script>
  import HeaderVista from "./stories/header/HeaderVista.svelte";
  import BienvenidaVista from "./stories/bienvenida/BienvenidaVista.svelte";

  let videos = [
    "/video.placeholder.mp4",
    "/video.placeholder.ogv",
    "/video.placeholder.webm"
  ];

  export let valor;

  let objetosMenu = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6"
  ];
</script>

<main>

  <HeaderVista
    {objetosMenu}
    logoImagenUrl={'/placeholder.texto.jpg'}
    logoTexto="Logo"
    altura="70px"
    colorFondo="whitesmoke"
    color="black"
    sombra
    fixed />

  <BienvenidaVista
    videoUrls={videos}
    textoTitulo="Construye el futuro con nosotros"
    colorOverlay="red"
    overlay />
  <h1>npm run {valor}</h1>

</main>
