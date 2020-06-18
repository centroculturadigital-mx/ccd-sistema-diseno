<script>
  import Icono from "../../../elementos/Icono/Icono";
  import Imagen from "../../../elementos/media/Imagen/Imagen";

  export let reacciones = [];

</script>

<ul>
  {#each reacciones as reaccion, i ('reaccion_' + i)}
    <li>
      <Imagen/><span>{reacciones.usuarios.length}<span>
    </li>
  {/each}
</ul>
