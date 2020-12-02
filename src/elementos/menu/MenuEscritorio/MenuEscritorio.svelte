<script>
  export let segment;
  export let elementos;
</script>

<style>
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: auto;
  }
  li {
    box-sizing: border-box;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    height: 100%;
    width: auto;
  }
  a {
    text-decoration: none;
    font-size: var(--theme-textos-menu-escritorio-tamanno);
    font-family: var(--theme-textos-menu-escritorio-tipografia);
    color: var(--theme-textos-menu-escritorio-color);
    font-weight: var(--theme-textos-menu-escritorio-peso);
    text-transform: uppercase;
  }
  a:hover {
    color: var(--theme-textos-menu-escritorio-hover);
  }
</style>

{#if Array.isArray(elementos)  && elementos.length > 0}
  <nav class="MenuEscritorio">
    <ul>
      {#each elementos as elemento}
        <li>
          <a
            class:selected={segment === elemento.enlace}
            href={elemento.enlace}>
            {elemento.texto}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
