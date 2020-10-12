<script>
  import { slide } from "svelte/transition";
  import Avatar from "../Avatar/Avatar";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace";

  import ListaElemento from "../../../elementos/listas/ListaElemento/ListaElemento";
  import Elemento from "./UsuarioAccesoElemento";

  import imagenDefault from "../../../data/recursos/placeholder.png";

  export let imagen = imagenDefault;
  export let nombre = "";
  export let slug = "";
  export let elementos = [];

  let estado = false;

  const mostrar = () => {
    estado = !estado;
  };

  let elementosLista = elementos.map(e => ({
    componente: Elemento,
    data: {
      ...e
    }
  }));

  console.log("DEBUG", elementosLista);
</script>

<style>
  .UsuarioAcceso {
    position: relative;
  }
  .contenido {
    display: flex;
    cursor: pointer;
    transition: var(--theme-transiciones-normal);
  }
  .contenido:hover {
    opacity: 0.75;
  }
  .contenido :global(span) {
    display: flex;
    align-items: center;
    padding: 0 var(--theme-espaciados-padding);
  }
  .menu {
    position: absolute;
    background-color: var(--theme-colores-fondo);
    right: 0px;
    padding: var(--theme-espaciados-padding);
    margin: 0;
    margin-top: 0.25rem;
    list-style-type: none;
    width: auto;
    min-width: 5rem;
  }
</style>

<section class="UsuarioAcceso">

  <div class="contenido" on:click={mostrar}>
    {#if !!nombre}
      <Texto texto={nombre} variante="SECUNDARIO" />
    {/if}
    <Avatar {imagen} nombre={!!nombre ? nombre : 'Avatar'} {slug} />
  </div>

  {#if Array.isArray(elementos) && elementos.length > 0}
    {#if estado}
      <ul class="menu" transition:slide>
        {#each elementosLista as elemento (elemento)}
          <ListaElemento contenido={elemento} />
        {/each}
      </ul>
    {/if}
  {/if}

</section>
