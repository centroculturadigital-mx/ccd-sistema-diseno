<script>

import Enlace from "../../../elementos/enlaces/Enlace/Enlace"
import Icono from "../../../elementos/Icono/Icono"
import Boton from '../../../elementos/botones/Boton/Boton';

export let accion;
export let enlace;
export let texto;
export let icono;

</script>

<style>
div {
    padding: calc(var(--theme-espaciados-padding) / 2);
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
div :global(span) {
    padding: 0 var(--theme-espaciados-padding);
    box-sizing: border-box;
}
div :global(.iconoContenedor) {
    height: 1.25rem !important;
    width: 1.25rem !important;
}
div :global(svg) {
    fill: var(--theme-textos-enlaces-color) !important;
    stroke: var(--theme-textos-enlaces-color) !important;
}

.UsuarioAccesoElemento :global(button) {
    padding: 0 !important;
    border: none !important;
}
</style>

<div class="UsuarioAccesoElemento">
    {#if accion}
        <Boton {texto} click={accion} variante="HUECO" /> <Icono {icono}/>
    {:else}
        <Enlace {enlace} {texto} /> <Icono {icono}/>
    {/if}
</div>