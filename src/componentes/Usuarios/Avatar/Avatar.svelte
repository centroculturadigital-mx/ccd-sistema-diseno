<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let imagen;
  export let nombre;
</script>

<style>
.Avatar {
    border-radius: 5rem;
    height: 1.75rem;
    width: 1.75rem;
    overflow: hidden;
}
</style>

<div class="Avatar">
  <Imagen {imagen} alt={nombre} />
</div>
