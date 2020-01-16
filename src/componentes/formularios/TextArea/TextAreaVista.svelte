<script>
  import TextArea from "./TextArea.svelte";

  export let textoPlaceholder;
  export let textoLabel;
  export let ancho;
  export let altura; 
</script>

<TextArea {textoLabel} {textoPlaceholder} {ancho} {altura} />
