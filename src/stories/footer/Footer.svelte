<script>
  import LogoVista from "../logo/LogoVista.svelte";
  import BotonMenuMovilVista from "../botones/BotonMenuMovil/BotonMenuMovilVista.svelte";
  import MenuEscritorioVista from "../menu/MenuEscritorio/MenuEscritorioVista.svelte";
  import MenuMovilVista from "../menu/MenuMovil/MenuMovilVista.svelte";

  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let color;
  export let sombra;
  export let fixed;
  export let estadoMenu;

  //  Responsivo
  let responsivo;
  let breakpoint = 720;
</script>