<script>
  import Texto from "../../texto/Texto/Texto.svelte";

  export let elementos = [];
  export let actual = 0;
</script>

<style>
  nav {
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
  }
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-width: 80rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    cursor: pointer;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 3);
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    flex-shrink: 0;
  }
  li:hover {
    opacity: 0.75;
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
  .actual {
    border-bottom: 3px solid var(--theme-pestannas-borde-hover);
  }
</style>

<nav>
  <ul>
    {#each elementos as elemento, i ('elemento_local_' + i)}
      <li on:click={elemento.accion(i)} class={i == actual ? 'actual' : ''}>
        <Texto texto={elemento.texto} />
      </li>
    {/each}
  </ul>
</nav>
