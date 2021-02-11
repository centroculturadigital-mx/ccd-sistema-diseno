<script>
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let texto;
  export let estado;
  export let click;
  export let tipo;//circulo o casilla


  let caja = {
    vacio: 'casillallena',
    lleno: 'casillavacia'
  }
  let radio = {
    vacio: 'circulolleno',
    lleno: 'circulovacio'
  }

  $: clases = `BotonAlternar ${estado ? "encendido" : "apagado"}`;
  
  $: imagen = tipo == "CIRCULO" ? radio : caja ;
  
</script>

<style>                                                                                                                    
  button {
    position: relative;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--theme-espaciados-padding);
    height: auto;
    width: 100%;
    font-weight: bold;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
  }
  button :global(.iconoContenedor) {
    flex-shrink: 0;
  }
  button :global(.circulolleno svg) {
    fill: transparent !important;
  }
  .apagado :global(svg) {
    fill: white !important;
  }
</style>

<!-- <label for={nombre}> -->

<!-- <input type="checkbox" id={nombre} name={nombre} value={valor} on:click={click}/> -->

<button class={clases} on:click|preventDefault={click}>
  
  <Icono icono={estado ? imagen.vacio : imagen.lleno} />

  {#if !!texto}
    <Texto {texto} />
  {/if}

</button>
<!-- </label> -->
