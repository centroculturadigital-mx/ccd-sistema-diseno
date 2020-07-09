<script>
import Boton from '../../../elementos/botones/Boton/Boton';
import BotonIcono from '../../../elementos/botones/BotonIcono/BotonIcono';

export let rangoVista;
export let rangoAccion = () => console.log("regesa");
export let anterior = () => console.log("regesa");
export let siguiente = () => console.log("avanza");


</script>

<style>
.Navegacion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}
.Navegacion :global(button) {
    padding: calc(var(--theme-botones-primario-espacio) * 1.25) calc(var(--theme-botones-primario-espacio) * 2);
    padding-left: 0;
}
.Navegacion :global(button:nth-child(2)) {
    padding-right: calc(var(--theme-botones-primario-espacio) * 2);
    flex-shrink: 0;
    box-sizing: border-box;
    background-color: transparent;
    color: var(--theme-textos-parrafo-color);
    border: 0;
}
</style>

<div class="Navegacion">
  <BotonIcono icono={'Izquierda'} borde={false} click={anterior} />
  <Boton texto={rangoVista} click={rangoAccion}/>
  <BotonIcono icono={'derecha'} borde={false} click={siguiente} />
</div>
