<script>
  import Icono from "../../../elementos/Icono/Icono";
  import Imagen from "../../../elementos/media/Imagen/Imagen";
  import Texto from "../../../elementos/texto/Texto/Texto";

  export let reacciones = [];

  // let estadoLista = false;

  // const listaUsuarios = i => {
  //   estadoLista = !estadoLista;
  // };

</script>

<style>
  .MensajeReacciones {
    padding: calc(var(--theme-espaciados-padding) / 2) 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
  li {
    background-color: var(--theme-tarjetas-fondo);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 1rem;
    padding: calc(var(--theme-espaciados-padding) / 2);
    min-width: 3.5rem;
    box-sizing: border-box;
    margin-right: var(--theme-espaciados-margen);
    cursor: pointer;
    position: relative;
  }
  li:hover {
    opacity: 0.75;
  }
  .MensajeReacciones li :global(img) {
    border-radius: 5rem;
    height: 1.5rem;
    width: 1.5rem;
  }
</style>

<ul class="MensajeReacciones">
  {#each reacciones as reaccion (reaccion)}
      <li>
      <!-- <li on:click={listaUsuarios(i)} on:tap={listaUsuarios(i)}> -->
        <Imagen imagen={reaccion.imagen} />
        <span>
          <Texto texto={reaccion.usuarios} />
        </span>
      </li>
  {/each}
</ul>
