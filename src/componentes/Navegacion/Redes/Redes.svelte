<script>
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Icono from "../../../elementos/Icono/Icono";

  export let redes = [];
</script>

<style>
  .Redes {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .textoRotar {
    transform: rotate(-90deg);
    position: absolute;
  }
  .textoRotar :global(p) {
    margin: 0;
  }
  nav {
    padding-left: 1rem;
  }
  li {
    list-style: none;
  }
  a {
      display: block;
  }
  a:hover {
      opacity: 0.75;
  }
</style>

{#if Array.isArray(redes)}
  <section class="Redes">
    <div class="textoRotar">
      <Parrafo texto={'Comparte en:'} />
    </div>

    <nav>
      <ul>
        {#each redes as red, i ('red_' + i)}
          <li>
            <a href={red.enlace} target="_blank">
              <Icono icono={red.icono} />
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </section>
{/if}
