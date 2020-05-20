<script>
  import { fade } from "svelte/transition";
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";
  //   import Imagen from "../../../elementos/botones/Imagen/Imagen.svelte";

  export let id;
  export let nombre;
  export let imagen;
  export let entidad;
  export let eliminar;

  let abrir;
  let menuVisible = false;

  $: abrir = `/${entidad}/${id}`;

  const alternarMenu = () => {
    menuVisible = !menuVisible;
  };


</script>

<style>
  .RegistroTarjeta {
    border: 0.5px solid lightgray;
    background-color: #FFF;
    display: flex;
    flex-direction: row;
    min-height: 4rem;
    padding: 0.5rem;
    align-items: center;
    justify-content: space-between;
  }
  .imagen {
    height: 4rem;
  }
  .menu-lista {
    list-style-type: none;
    margin: 0;
  }
  .RegistroTarjeta div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .RegistroTarjeta :global(h3) {
    padding: 0 1rem;
    margin: 0;
  }
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .menu-acciones {
    position: relative;
  }
  .menu-acciones .menu :global(button) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .menu-lista {
    position: absolute;
    right: -0.35rem;
    top: -0.5rem;
    background-color: white;
    cursor: pointer;
    padding: 1rem 0.25rem 1rem !important;
    display: flex;
    width: auto !important;
  }
  .menu-lista li {
    margin: 0 !important;
  }
  .menu-lista .eliminar {
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
  .menu-lista .eliminar:hover {
    color: gray;
  }
  .menu-lista :global(p) {
    color: #f36957;
    margin: 0;
  }
  .menu-lista .cerrar-acciones :global(button) {
    padding: 0.5rem 0.75rem;
  }
</style>

<section class="RegistroTarjeta">

  <div>
    <div class="imagen">
      <Imagen imagenUrl={imagen} altTexto={nombre} />
    </div>

    <Titulo texto={nombre} nivel={3} />

  </div>
  <nav class="botones">
    <a href={abrir}>
      <Boton texto={'Abrir'} />
    </a>

    <div class="menu-acciones">
      <div class="menu" on:click={alternarMenu}>
        <BotonIcono icono={'mas'} texto={''} />
      </div>

      {#if menuVisible}
        <ul class="menu-lista" transition:fade>
          <li class="eliminar" on:click={eliminar}>
            <Parrafo texto={'Eliminar'} />
          </li>
          <li class="cerrar-acciones" on:click={alternarMenu}>
            <BotonIcono texto={''} icono={'cerrar'} borde={false}/>
          </li>
        </ul>
      {/if}
    </div>
  </nav>

</section>
