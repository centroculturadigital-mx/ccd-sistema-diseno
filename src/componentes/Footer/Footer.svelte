<script>
  import Logo from "../Logo/Logo.svelte";
  import BotonMenu from "../../elementos/botones/BotonMenu/BotonMenu.svelte";
  import MenuEscritorio from "../../elementos/menu/MenuEscritorio/MenuEscritorio.svelte";
  import MenuMovil from "../../elementos/menu/MenuMovil/MenuMovil.svelte";


  export let sombra;
  export let fixed;
  export let logoTexto;
  export let logoImagenUrl;
  export let objetosMenu;
  export let altura;
  export let colorFondo;
  export let color;
  export let estadoMenu;
  export let logosPleca;


  //  Responsivo
  let responsivo;
  let breakpoint = 720;
</script>

<style>
  footer {
    position: relative;
  }
  footer div:nth-child(1) {
    box-sizing: border-box;
    padding: 0 0.5rem;
    display: flex;
    justify-content: right;
    height: 100%;
    width: 100%;
  }
  .fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
</style>

<svelte:window bind:innerWidth={responsivo} />

<footer
  style="background-color:{colorFondo};height:{altura};{!!sombra ? 'box-shadow:0 -1px 2px rgba(0,0,0,0.5)' : ''}"
  class={!!fixed ? 'fixed' : ''}>
  <div>
    <Logo {logosPleca}{logoTexto} {logoImagenUrl}  ancho={'auto'} />

  </div>
  <div class="copyright">
    
  </div>

</footer>
