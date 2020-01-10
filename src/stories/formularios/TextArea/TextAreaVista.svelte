<script>
  import TextArea from "./TextArea.svelte";

  export let texto;
  export let textoPlaceHolder;   
</script>

<TextArea {textoPlaceHolder} {texto}/>
