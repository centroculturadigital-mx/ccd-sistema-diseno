<script>
  export let texto;
  export let radius;
</script>

<style>
 textarea {
    border: 1px solid gray;
    border-radius: 0.25rem;
  }
</style>

<textarea
  name="comentarios"
  id="texto"
  cols="30"
  rows="10"
  style="border-radius:{radius}px;">
  {texto}
</textarea>
