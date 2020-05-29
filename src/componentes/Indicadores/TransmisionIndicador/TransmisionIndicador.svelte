<script>
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";

  export let eventos;
</script>

<style>
  .TransmisionIndicador {
    height: auto;
    width: 9rem;
    box-sizing: border-box;
    padding: var(--theme-espaciados-padding);
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    padding: var(--theme-espaciados-padding);
    border-bottom: 2px solid gray;
    position: relative;
  }
  li:before {
  content:'';
  position:absolute;
  right:0%; 
  left:0;
  height: 70%;
  border-right: 2px solid gray;
}
  .EstadoIndicador {
    display: flex;
    justify-content: space-between;
  }
  .EstadoIndicador :global(p) {
    flex-shrink: 0;
    margin: calc(var(--theme-espaciados-margin) / 2) 0;
  }
  .Led {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .Led span {
    border-radius: 50%;
    height: 0.75rem;
    width: 0.75rem;
    background-color: var(--theme-alertas-error);
  }
  .TransmisionEnCurso :global(h5) {
    margin: 0;
  }
</style>

{#if Array.isArray(eventos)}
  <section class="TransmisionIndicador">
    <ul>
      {#each eventos as evento}
        <li class="TransmisionEnCurso">
          <div class="EstadoIndicador">
            <Parrafo texto={'En Vivo'} />
            <div class="Led">
              <span />
            </div>
          </div>
          <Titulo texto={'Nombre de evento'} nivel={5} />

          <Enlace
            href={`evento/${evento.partes.tipo}/${evento.partes.nombre}`}
            texto={'Ir ->'} />
        </li>
      {/each}
    </ul>
  </section>
{/if}
