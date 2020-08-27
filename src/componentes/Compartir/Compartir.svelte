<script>
import { fade } from "svelte/transition";
  import BotonIcono from "../../elementos/botones/BotonIcono/BotonIcono";

  export let url = "";
  export let titulo = "Texto a compartir";
  export let usuario = "CCDmx";
  export let compartir;

  $: facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&t=${encodeURI(
    titulo
  ).replace("#", "%23")}`;
  $: twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURI(
    titulo
  ).replace("#", "%23")}&url=${url}&via=${usuario}`;

  const compartirRedes = (e, { red, url }) => {
    let ventana = window.open(url, "_blank");

    if (typeof compartir == "function") {
      compartir({ red, url });
    }

    e.preventDefault();
    // ga.track("comparte-redes", { ...datos });
    ventana.focus();
  };

  let estado = false;

  const mostrar = () => {
    estado = !estado;
  };
</script>

<style>
  .Compartir {
    position: relative;
    background-color: transparent;
    padding: var(--theme-espaciados-padding);
    display: flex;
    justify-content: center;
    height: auto;
    width: initial;
    box-sizing: border-box;
  }
  .Compartir :global(button) {
    margin: 0 var(--theme-espaciados-margen);
    padding: calc(var(--theme-espaciados-padding) / 1.25);
    border-radius: 0.25rem;
    color: #fff;
    border: 0 !important;
  }
  .Compartir :global(button:hover) {
    border: 0;
    color: #fff;
  }
  .Compartir :global(button .iconoContenedor) {
    order: -1;
    margin: 0 calc(var(--theme-espaciados-margen) / 2);
  }
  .Compartir :global(button .iconoContenedor svg) {
    fill: #fff;
  }
  .botones {
    background-color: var(--theme-colores-fondo);
    display: flex;
    position: absolute;
    padding: 1rem;
    box-sizing: border-box;
    top: -4rem;
  }
  .boton :global(button) {
    background-color: var(--theme-colores-secundario1);
    padding: calc(var(--theme-espaciados-padding) * 2)
      calc(var(--theme-espaciados-padding) * 3);
    border-radius: 50px;
  }
</style>

<section class="Compartir">

  <div class="boton">
    <BotonIcono icono={'compartir'} texto={'Compartir'} click={mostrar} />
  </div>

  <!-- menu contextual -->
  {#if !!estado}
    <section class="botones" transition:fade>
      <BotonIcono
        icono={'twitter'}
        texto={'Twitter'}
        click={e => compartirRedes(e, { red: 'twitter', url: twitterUrl })}
        css={{ 'background-color': '#1DA1F2' }} />
      <BotonIcono
        icono={'facebook'}
        texto={'Facebook'}
        click={e => compartirRedes(e, { red: 'facebook', url: facebookUrl })}
        css={{ 'background-color': '#1877F2' }} />
    </section>
  {/if}
  <!--  -->
</section>
