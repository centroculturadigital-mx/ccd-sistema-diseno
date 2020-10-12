<script>
import Enlace from "../../../elementos/enlaces/Enlace/Enlace"
import Icono from "../../../elementos/Icono/Icono"

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
</style>

<div class="UsuarioAccesoElemento">
    <Enlace {enlace} {texto} /> <Icono {icono}/>
</div>