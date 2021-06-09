<script>
  import ListaComponentes from "../../Listados/ListaComponentes/ListaComponentes";
  import Avatar from "../Avatar/Avatar";

  export let apariencia = "HORIZONTAL";
  export let usuarios;

  $: avatares = usuarios.map((u) => ({
    componente: Avatar,
    data: {
      ...u,
      mostrarNombre: true,
    },
  }));

  $: clases =
    "UsuariosLista " + (apariencia == "VERTICAL" ? "vertical" : "horizontal");

</script>

<section class={clases}>
  <ListaComponentes elementos={avatares} />
</section>

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
    height: auto;
  }
  .horizontal :global(ul) {
    flex-direction: row;
  }
  .UsuariosLista.vertical {
    width: auto;
    max-height: 100%;
    min-width: 4rem;
  }

  .vertical :global(ul) {
    flex-direction: column !important;
  }

  :global(.ListaComponentes li) {
    /* width: 10rem !important; */
    display: flex;
    justify-content: flex-end;
  }

  :global(.Avatar img) {
    width: 2rem !important;
  }
  :global(.Avatar .nombre) {
    left: -7rem;
    top: 0.25rem !important;
  }

</style>
