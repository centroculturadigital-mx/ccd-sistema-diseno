<script>
  import TextArea from "./TextArea.svelte";

  export let textoPlaceholder;
  export let textoLabel;  
</script>

<TextArea {textoLabel} {textoPlaceholder} />
