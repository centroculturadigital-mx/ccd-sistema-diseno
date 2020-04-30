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
    console.log("Alternar Menu", menuVisible);
  };
</script>

<style>
  .RegistroTarjeta {
    border: 0.5px solid lightgray;
    display: flex;
    flex-direction: row;
  }

  .menu-lista {
    list-style-type: none;
    margin: 0;
  }
</style>

<section class="RegistroTarjeta">

  <div class="imagen">
    <Imagen imagenUrl={imagen} altTexto={nombre} />
  </div>

  <Titulo texto={nombre} nivel={3} />

  <nav class="menu-acciones">
    <a href={abrir}>
      <Boton texto={'Abrir'} />
    </a>

    <div class="menu-acciones">
      <div class="menu" on:click={alternarMenu}>
        <BotonIcono icono={'mas'} />
      </div>

      {#if menuVisible}
        <ul class="menu-lista" transition:fade>
          <li class="eliminar" on:click={eliminar}>Eliminar</li>
        </ul>
      {/if}
    </div>
  </nav>

</section>
