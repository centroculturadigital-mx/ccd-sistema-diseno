<script>
  import Formulario from "../Formulario/Formulario.svelte";

  export let campos = [];
  export let enviar;
  export let respuesta = "Respuesta generica";
</script>

{#if !! campos}
<section class="Ingresa">
  <Formulario {campos} {enviar} {respuesta} />
</section>
{/if}