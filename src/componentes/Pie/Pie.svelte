<script>
  import Logo from "../Logo/Logo.svelte";
  import Logos from "../Logos/Logos.svelte";
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo.svelte";

  export let fixed;
  export let logos;
  export let logoTexto;
  export let logoImagenUrl;
  export let altura;
  export let copyright;
  
</script>

<style>
  footer {
    background-color: lightgray;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
  }

  .fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
  .logos {
    width: auto;
  }
  .copyright :global(p span) {
    font-size: 0.75rem;
  } 
</style>

<footer style="height:{!!altura ? altura : ''};" class={!!fixed ? 'fixed' : ''}>
  
  <div class="logos">

    {#if Array.isArray(logos)}
      <Logos {logos} />
    {:else if !!logoImagenUrl}
      <Logo {logoTexto} {logoImagenUrl} logoAncho={'30%'} />
    {/if}

  </div>
  <div class="copyright">
    <Parrafo texto={copyright} />
  </div>

</footer>
