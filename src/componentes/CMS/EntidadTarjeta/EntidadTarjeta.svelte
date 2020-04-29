<script>
  import Icono from "../../../elementos/Icono/Icono.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonIcono from "../../../elementos/botones/BotonIcono/BotonIcono.svelte";

  export let icono;
  export let titulo;
  export let registrosNumero;
  export let abrir;
  export let crear;
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
}
.EntidadTarjeta :global(h3) {
    text-align: center;
}
.EntidadTarjeta :global(p) {
    text-align: center;
    color: #b1b1b1;
}
.botones .abrir :global(button) {
    padding: 1rem 3rem;
    background-color: gray;
}
.botones {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.botones .crear :global(button) {
    padding: 1rem 3rem;
    background-color: gray;
}
.botones .abrir :global(button:hover) {
    opacity: 0.85;
}
.botones .crear :global(button:hover) {
    opacity: 0.85;
}
</style>

<section class="EntidadTarjeta">

  {#if !!icono || icono != null}
  <div class="avatar">
    <Icono {icono} />
  </div>
  {/if}
  <Titulo texto={titulo} nivel={3} />

  {#if !!registrosNumero || registrosNumero != null}
    <Parrafo texto={registrosNumero + ' registros'} />
  {/if}
  <hr />

  <section class="botones">
    <div class="abrir">
      <Boton texto={'Abrir'} />
    </div>
    <div class="crear">
      <BotonIcono texto={'Crear nuevo'} />
    </div>
  </section>

</section>
