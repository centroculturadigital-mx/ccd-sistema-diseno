<script>
  import Boton from "../../../../elementos/botones/Boton/Boton";

  import moment from "moment";

  export let diaActual;

  export let seleccionar = i => {
    diaActual = (i - 1);
  };

  const dias = new Array(366).fill(true).map((e, i) => ({
    nombre: moment("01/01/2020")
      .add(i, "d")
      .format("ddd"),
    numero: moment("01/01/2020")
      .add(i, "d")
      .format("D")
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
    max-width: 20rem;
    /* overflow: hidden; */
    overflow-x: scroll; /*no definitivo*/
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  li {
    padding: calc(var(--theme-espaciados-padding) / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    box-sizing: border-box;
  }
  .NavegacionSemana :global(button) {
    text-transform: capitalize;
    transition: var(--theme-transiciones-normal);
    background-color: transparent;
    color: var(--theme-textos-parrafo-color);
    border: 0;
    padding: calc(var(--theme-espaciados-padding) /2 )  calc(var(--theme-espaciados-padding) / 2);
    box-sizing: border-box;
  }
  .NavegacionSemana :global(button:hover) {
    opacity: 0.5;
    background-color: rgba(120, 120, 120, 0.25);
  }
  .NavegacionSemana :global(button:focus),
  .NavegacionSemana :global(button:active) {
    outline: 0 !important;
    background-color: transparent !important;
  }
  .activo :global(button) {
    font-weight: bold !important;
    background-color: transparent;
    color: var(--theme-colores-primario);
  }
  .evento {
    background-color: var(--theme-colores-primario);
    border-radius: 5rem;
    height: 0.35rem;
    width: 0.35rem;
  }
</style>

<ul class="NavegacionSemana">
  {#each dias as dia, i (dia)}
    <li class={clasesCalcular(diaActual, i)}>
      <Boton
        texto={dia.nombre + '\n' + dia.numero}
        click={() => seleccionar(i)} />
      <div class="evento" />
    </li>
  {/each}
</ul>
