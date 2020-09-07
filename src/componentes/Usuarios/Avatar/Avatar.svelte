<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let imagen;
  export let nombre;
  export let slug;
</script>

<style>
  .Avatar {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    overflow: hidden;
  }
  .Avatar a {
    display: flex;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .Avatar a:hover {
    opacity: 0.75;
  }
</style>

<div class="Avatar">
  <a href={slug ? slug : ""}>
    <Imagen {imagen} alt={nombre} />
  </a>
</div>
