<script>
  import ListaComponentes from "../../Listados/ListaComponentes/ListaComponentes";
  import Avatar from "../Avatar/Avatar";
  import Icono from "../../../elementos/Icono/Icono";

  export let apariencia = "Horizontal";
  export let usuarios;

  $: avatares = usuarios.map(u => ({
    componente: Avatar,
    data: {
      ...u
    }
  }));

  $: console.log({ avatares });
</script>


<style>
.UsuariosLista {
    scroll-behavior: smooth;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
.UsuariosLista :global(ul) {
    flex-wrap: nowrap;
}
.horizontal {
    overflow-x: auto;
    height: auto; 
}
.horizontal :global(ul) {
    flex-direction: row;
}
.vertical {
    overflow-y: auto;
    width: auto;
    max-height: 100%;
}
.vertical :global(ul) { 
    flex-direction: column;
}
</style>

<section class="UsuariosLista {apariencia == "Vertical" ? "vertical" : "horizontal"}">

  <ListaComponentes elementos={avatares} />

</section>
