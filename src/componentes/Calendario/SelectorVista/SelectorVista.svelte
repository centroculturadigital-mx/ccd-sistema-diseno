<script>
import Selector from '../../../elementos/formularios/Selector/Selector';

export let opciones;
export let cambiar ;

</script>

<style>
.Vista :global(.Selector) {
    border-radius: var(--theme-tamannos-xs);
    padding: 0.5rem;
    margin: 0;
}
</style>

<div class="Vista">
  <Selector
    {opciones}
    {cambiar}
    ejemplo={'Filtro vista'}
    vacioPermitido={false} />
</div>
