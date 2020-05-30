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
    margin: 0.25rem 0;
   /* height: 3rem;*/ 
  } 
  .EntidadTarjeta :global(h2) {
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .EntidadTarjeta :global(p) {
    text-align: center;
    color: #b1b1b1;
    margin-top: 0.2rem;
  }
  .botones {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .botones a {
    text-decoration: none;
    flex-shrink: 0;
  }
  hr {
    border: 0.5px solid lightgray;
  }
  .crear :global(.iconoContenedor img) {
    height: var(--theme-tamannos-md);
  }
</style>

<section class="EntidadTarjeta">

  {#if !!icono || icono != null}
    <div class="avatar">
      <Icono {icono} />
    </div>
  {/if}
  {#if !!nombre || nombre != null}
    <Titulo texto={nombre} nivel={2} />
  {/if}

  {#if !!cantidad || cantidad != null}
  <Parrafo texto={cantidad + " registros"} /> 
  {/if}

  {#if cantidad || nombre || icono}
    <hr/>
  {/if}
  <section class="botones">
    <a href={abrir} class="abrir">
      <Boton texto={'Ver lista'} />
    </a>
    &nbsp;
    <a href={crear} class="crear">
      <BotonIcono icono={'mas'} texto={'Crear nuevo'} />
    </a>
  </section>

</section>
