<script>
  import HeaderVista from "./componentes/header/HeaderVista.svelte";
  import BienvenidaVista from "./componentes/bienvenida/BienvenidaVista.svelte";

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
	posicionTexto="left"
    colorOverlay="red"
    overlay />
  <h1>npm run {valor}</h1>

</main>
