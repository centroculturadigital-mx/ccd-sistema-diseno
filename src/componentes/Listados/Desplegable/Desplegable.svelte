<script>
  import { slide } from "svelte/transition";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Icono from "../../../elementos/Icono/Icono";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace";

  export let texto;
  export let enlace;
  export let enlaces = [];
  export let estado = false;

  let icono = "abajo";

  const alternar = () => {
    estado = !estado;
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }
  .Desplegable {
    position: relative;
    background-color: var(--theme-colores-fondo);
    padding: var(--theme-espaciados-padding);
  }
  header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  header:hover {
    opacity: 0.75;
  }
  .Desplegable :global(span) {
    display: flex;
    align-items: center;
  }
  header :global(.iconoContenedor) {
    margin-left: 1rem;
  }
  ul {
    position: absolute;
    background-color: var(--theme-colores-fondo);
    padding: var(--theme-espaciados-padding);
    left: 0;
    margin: 0;
    list-style-type: none;
    width: auto;
    min-width: 100%;
  }
  li {
    padding: calc(var(--theme-espaciados-padding) / 2) 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  li :global(.iconoContenedor) {
    margin-left: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  .enlace :global(a span),
  li :global(a span) {
    color: var(--theme-textos-parrafo-color);
    white-space: nowrap;
  }
  .enlace:hover :global(svg),
  .enlace:hover :global(span),
  li:hover :global(svg),
  li:hover :global(span) {
    fill: var(--theme-textos-enlaces-color);
    color: var(--theme-textos-enlaces-color);
  }
</style>

<div class="Desplegable {!!enlace ? 'enlace' : ''}">
  <header on:click={!enlace ? alternar : null}>
    {#if !!enlace}
      <Enlace {texto} {enlace} blank={true} />
    {:else}
      <Texto {texto} />
    {/if}
    <Icono icono={estado && !enlace ? 'arriba' : enlace ? 'externo' : icono} />
  </header>

  {#if estado}
    <ul transition:slide|local on:click={alternar}>
      {#each enlaces as enlace (enlace)}
        <li>
          <Enlace texto={enlace.texto} enlace={enlace.enlace} />
          <Icono icono={enlace.icono} />
        </li>
      {/each}
    </ul>
  {/if}

</div>
