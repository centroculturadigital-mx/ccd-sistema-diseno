<script>
  import Icono from "../../../elementos/Icono/Icono";
  import Imagen from "../../../elementos/media/Imagen/Imagen";
  import Texto from "../../../elementos/texto/Texto/Texto";

  export let reacciones = [];

  let estadoLista = false;

  const listaUsuarios = (i) => {
    estadoLista = !estadoLista;

    console.log("ListaUsuarios", i);
  };
</script>

<style>
  .MensajeReacciones {
    padding: calc(var(--theme-espaciados-padding) / 2);
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
  .UsuariosLista {
    position: absolute;
    top: 2.25rem;
    left: 0;
    padding: var(--theme-espaciados-padding);
    background-color: #000;
    border-radius: 0.25rem;
    box-sizing: border-box;
  }
  .UsuariosLista :global(span) {
    font-size: 0.75rem;
    color: #FFF;
  }
</style>

<ul class="MensajeReacciones">
  {#each reacciones as reaccion, i ('reaccion_' + i)}
    <li on:click|self={listaUsuarios(i)} on:tap={listaUsuarios(i)}>
      <Imagen imagen={reaccion.imagen} />
      <span>
        <Texto texto={reaccion.usuarios.length} />
        <!-- {#if !!estadoLista}
          <div class="UsuariosLista">
            {#each reaccion.usuarios as usuario}
              <Texto texto={usuario.nombre + ", "} />
            {/each}
            <Texto texto={'Reaccionaron'} />
          </div>
        {/if} -->
      </span>
    </li>
  {/each}
</ul>
