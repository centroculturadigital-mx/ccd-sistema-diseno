<script>
  import TextArea from "./TextArea.svelte";

  export let texto;
  export let radius;
  export let textoPlaceHolder;   
</script>

<TextArea {radius} {textoPlaceHolder} {texto}/>
