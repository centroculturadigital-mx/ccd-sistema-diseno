<script>
  export let segment;
  export let objetosMenu;
  export let color;
</script>

<style>
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    width: auto;
  }
  li {
    box-sizing: border-box;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    height: 100%;
    width: auto;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    opacity: 0.75;
  }
</style>

<ul>

  {#each objetosMenu as objeto}
    <li>
      <a
        class:selected={segment === objeto.ruta}
        href={objeto.ruta}
        style="color:{color}">
        {objeto.label}
      </a>
    </li>
  {/each}

</ul>
