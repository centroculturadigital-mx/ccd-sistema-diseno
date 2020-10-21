<script>
  import { slide } from "svelte/transition";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Icono from "../../../elementos/Icono/Icono";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace";

  export let texto;
  export let icono = "abajo";
  export let enlaces = [];

  let estado = false;

  const mostrar = () => {
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
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  li :global(span) {
      color: var(--theme-textos-parrafo-color);
  }
  li:hover :global(svg),
  li:hover :global(span) {
      fill: var(--theme-textos-enlaces-color);
      color: var(--theme-textos-enlaces-color);
  }
</style>

<div class="Desplegable">
  <header on:click={mostrar}>
    <Texto {texto} />
    <Icono icono={estado ? "arriba" : icono} />
  </header>

  {#if estado}
    <ul transition:slide|local>
      {#each enlaces as enlace (enlace.id)}
        <li>
          <Enlace texto={enlace.texto} enlace={enlace.enlace} />
          <Icono icono={enlace.icono} />
        </li>
      {/each}
    </ul>
  {/if}

</div>
