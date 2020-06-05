<script>
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";

  export let tipo = "alerta"; //"tipos: alerta  o confirmacion"
  export let titulo = "";
  export let texto = "";
  export let confirmar = () => {
    console.log("Confirmado");
  };
  export let cancelar = () => {
    console.log("Cancelado");
  };
  // Acción
</script>

<style>
.Dialogo {
    background-color: var(--theme-colores-fondo);
    padding: calc(var(--theme-espaciados-padding) * 3 );
}
</style>

<section class="Dialogo">
  <Titulo texto={titulo} nivel={4} />
  <Parrafo {texto} />
  {#if tipo == 'alerta'}
    <Boton texto={'Entendido'} click={confirmar} />
  {:else if tipo == 'confirmacion'}
    <BotonSecundario texto={'Cancelar'} click={cancelar} borde={false} />
    <Boton texto={'Confirmar'} click={confirmar} />
  {/if}

</section>
