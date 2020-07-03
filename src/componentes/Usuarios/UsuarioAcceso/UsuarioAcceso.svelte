<script>
  import Avatar from "../Avatar/Avatar";

  export let imagen = "";
  export let nombre = "";
</script>

<style>
  .UsuarioAcceso {
    /* padding: 0 var(--theme-espaciados-padding); */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;
  }
  .UsuarioAcceso :global(.Avatar) {
    cursor: pointer;
  }
  .UsuarioAcceso :global(.Avatar:hover) {
    opacity: 85%;
  }
</style>

<section class="UsuarioAcceso">
  <Avatar {imagen} {nombre} />
</section>
