<script>
  import Avatar from "../Avatar/Avatar";
  import Texto from "../../../elementos/texto/Texto/Texto";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace";

  export let imagen = "";
  export let nombre = "";
  export let menu = [];
</script>

<style>
  .UsuarioAcceso {
    /* padding: 0 var(--theme-espaciados-padding); */
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr;
  }

  :global(.UsuarioAcceso > span) {
    
    display: flex;
    align-items: center;
  }

  .UsuarioAcceso :global(.Avatar) {
    cursor: pointer;
  }
  .UsuarioAcceso :global(.Avatar:hover) {
    opacity: 85%;
  }

  .UsuarioAcceso .menu {
    display: none;
  }
</style>

<section class="UsuarioAcceso">
  <Texto texto={nombre} variante="SECUNDARIO"/>
  <Avatar {imagen} {nombre} />

{#if Array.isArray(menu) && menu.length>0}

  <ul class="menu">
    {#each menu as elemento (elemento)}
      <li>
        <Enlace {...elemento}/>
      </li>
    {/each}
  </ul>

{/if}


</section>