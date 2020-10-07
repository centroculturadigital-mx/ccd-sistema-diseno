<script>
  import ListaComponentes from "../../Listados/ListaComponentes/ListaComponentes";
  import Avatar from "../Avatar/Avatar";
  import Icono from "../../../elementos/Icono/Icono";

  export let apariencia = "Horizontal";
  export let usuarios;

  $: avatares = usuarios.map(u => ({
    componente: Avatar,
    data: {
      ...u,
      mostrarNombre: true
    }
  }));


  $: clases = "UsuariosLista " + (apariencia == "vertical" ? "vertical" : "horizontal")
</script>


<style>
.UsuariosLista {
    scroll-behavior: smooth;
    position: relative;
    display: flex;
    justify-content: flex-end;
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
.UsuariosLista.vertical {
  overflow-y: auto;
  /* overflow-x: visible !important; */
  width: auto;
  max-height: 100%;
  min-width: 4rem;
}

.UsuariosLista.vertical:hover {
  min-width: 12rem;
}
.vertical :global(ul) { 
    flex-direction: column !important;
}

:global( .ListaComponentes li) {
  width: 10rem !important;
  display: flex;
  justify-content: flex-end;
}

:global( .Avatar img) {
  width: 2rem !important;
}
:global( .Avatar .nombre) {
  left: -7rem;
  top: .25rem !important;
}


</style>

<section class={clases}>

  <ListaComponentes elementos={avatares} />

</section>
