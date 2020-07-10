<script>
  import Boton from "../../../../elementos/botones/Boton/Boton";

  import moment from "moment";

  export let seleccionar = e => console.log("Mes seleccionado", e);

  const meses = new Array(12).fill(true).map((e, i) => i + 1);

  $: clases = "";
</script>

<style>
  .NavegacionMes {
    background-color: var(--theme-tarjetas-fondo);
    display: flex;
    flex-direction: row;
    list-style-type: none;
    width: 100%;
    /* overflow: hidden; */
    overflow-x: scroll; /*no definitivo*/
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  li {
    box-sizing: border-box;
  }
  .NavegacionMes :global(button) {
    text-transform: capitalize;
    transition: var(--theme-transiciones-normal);
    background-color: transparent;
    color: var(--theme-textos-parrafo-color);
    border: 0;
    padding: var(--theme-espaciados-padding) var(--theme-espaciados-padding);
    box-sizing: border-box;
  }
  .NavegacionMes :global(button:hover) {
    opacity: 0.75;
    background-color: rgba(170, 170, 170, 0.25);
  }
  .Seleccionado :global(button) {
    font-weight: bolder;
  }
</style>

<ul class="NavegacionMes">

  {#each meses as mes, i}
    <li class={clases}>
      <Boton
        texto={moment(`${i + 1}/01/20`).format('MMMM')}
        click={seleccionar} />
    </li>
  {/each}
</ul>
