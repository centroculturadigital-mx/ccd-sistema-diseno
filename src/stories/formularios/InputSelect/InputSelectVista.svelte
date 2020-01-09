<script>
import InputSelect from './InputSelect.svelte';

export let textoPlaceholder;
export let textoLabel;
export let opciones;
export let multiple;
</script>

<InputSelect {textoPlaceholder} {textoLabel} {opciones} />