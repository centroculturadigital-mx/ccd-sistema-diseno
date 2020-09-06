<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let imagen;
  export let nombre;
</script>

<style>
.Avatar {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    overflow: hidden;
}
</style>

<div class="Avatar">
  <Imagen {imagen} alt={nombre} />
</div>
