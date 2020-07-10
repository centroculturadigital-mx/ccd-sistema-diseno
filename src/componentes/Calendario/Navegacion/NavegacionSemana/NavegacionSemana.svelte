<script>
  import Boton from "../../../../elementos/botones/Boton/Boton";

  import moment from "moment";

  export let diaActual = 0;
  export let seleccionar = i => {
    diaActual = i;
  };

  const dias = new Array(365).fill(true).map((e, i) => ({
      nombre: moment().add(i++,"d").format("ddd"),
      numero: moment().add(i-1,"d").format("D"),

  }));


  const clasesCalcular = (dia, i) => (dia == i ? "activo" : "");

</script>

<style>
  .NavegacionSemana {
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
  .NavegacionSemana :global(button) {
    text-transform: capitalize;
    transition: var(--theme-transiciones-normal);
    background-color: transparent;
    color: var(--theme-textos-parrafo-color);
    border: 0;
    padding: var(--theme-espaciados-padding) var(--theme-espaciados-padding);
    box-sizing: border-box;
  }
  .NavegacionSemana :global(button:hover) {
    opacity: 0.75;
    background-color: rgba(170, 170, 170, 0.25);
  }
  .activo :global(button) {
    font-weight: bold !important;
    background-color: transparent;
  }
</style>

<ul class="NavegacionSemana">
  {#each dias as dia, i (dia)}
    <li class={clasesCalcular(diaActual, i)}>
      <Boton texto={dia.nombre + "\n" +dia.numero} click={() => seleccionar(i)} />
    </li>
  {/each}
</ul>
