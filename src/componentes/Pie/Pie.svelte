<script> 
  import Logo from "../Logo/Logo.svelte"; 
  import Logos from "../Logos/Logos.svelte";
  import Parrafo from "../../elementos/texto/Parrafo/Parrafo.svelte";

  export let fixed;
  export let logos;
  export let nombre;
  export let logotipo;
  export let altura;
  export let copyright;
  
</script>

<style>
  footer {
    background-color: var(--theme-pies-fondo);    
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
    color: var(--theme-pies-texto);
    font-family: var(--theme-botones-primario-familia);
  } 
</style>

<footer style="height:{!!altura ? altura : ''};" class={!!fixed ? 'fixed' : ''}>
  
  <div class="logos">

    {#if Array.isArray(logos)}
      <Logos {logos} />
    {:else if !!logotipo}
       <Logo {nombre} {logotipo} estilos={{ancho: '30%'}} />
    {/if}

  </div>
  <div class="copyright">
    <Parrafo texto={copyright} />
  </div>

</footer>
