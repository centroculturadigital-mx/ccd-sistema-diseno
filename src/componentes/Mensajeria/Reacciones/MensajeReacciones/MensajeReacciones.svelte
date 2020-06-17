<script>
  import Icono from "../../../../elementos/Icono/Icono";

  export let reacciones = [];
</script>

<ul>
  {#each reacciones as reaccion, i ('reaccion_' + i)}
    <li>
      <span><Icono/>&nbsp;{reacciones.usuarios.length}<span>
    </li>
  {/each}
</ul>
