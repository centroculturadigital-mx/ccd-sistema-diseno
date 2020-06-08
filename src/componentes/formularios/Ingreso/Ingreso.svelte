<script>
  import Formulario from "../Formulario/Formulario.svelte";

  export let campos = [];
  export let enviar;
</script>

{#if !! campos}
<section class="Ingresa">
  <Formulario {campos} {enviar} />
</section>
{/if}