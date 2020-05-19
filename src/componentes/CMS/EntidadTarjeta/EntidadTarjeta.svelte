<script>
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";

  export let icono;
  export let nombre;
  export let cantidad;
  export let clave;

  $: abrir = `/${clave}`;

  $: crear = `/${clave}/nuevo`;
</script>

<style>
  .EntidadTarjeta {
    padding: 2rem;
    max-width: 20rem;
    border: 1px solid lightgray;
  }
  .avatar :global(.iconoContenedor) {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  .EntidadTarjeta :global(h3) {
    text-align: center;
  }
  .EntidadTarjeta :global(p) {
    text-align: center;
    color: #b1b1b1;
  }
  .botones {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .botones a {
    text-decoration: none;
  }
   .botones :global(button) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  /*.botones .abrir :global(button) {
    opacity: 0.85;
    background-color: #f36957;
    display: flex;
  }
  .botones .abrir :global(button:hover) {
    opacity: 0.85;
    background-color: gray;
  } */
  .botones .crear :global(button) {
    color: #f36957;
    background-color: transparent;
    display: flex;
  }
  .botones .crear :global(button:hover) {
    opacity: 0.85;
    color: gray;
  }
  .botones .crear :global(button .iconoContenedor) {
    padding: 0 0.5rem;
  }
  hr {
    border: 0.5px solid lightgray;
  }
</style>

<section class="EntidadTarjeta">

  {#if !!icono || icono != null}
    <div class="avatar">
      <Icono {icono} />
    </div>
  {/if}
  {#if !!nombre || nombre != null}
    <Titulo texto={nombre} nivel={3} />
  {/if}

  {#if !!cantidad || cantidad != null}
  <Parrafo texto={cantidad + " registros"} /> 
  {/if}

  {#if cantidad || nombre || icono}
    <hr/>
  {/if}
  <section class="botones">
    <a href={abrir} class="abrir">
      <Boton texto={'Abrir'} />
    </a>
    <a href={crear} class="crear">
      <BotonIcono icono={'mas'} texto={'Crear nuevo'} />
    </a>
  </section>

</section>
