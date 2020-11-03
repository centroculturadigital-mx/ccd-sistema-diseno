<script>

  import Boton from "../Boton/Boton"

  export let enlace = "#";
  export let externo = false;
  export let texto = "Botón";
  export let click;
  export let deshabilitado;
  export let css = {};
  export let variante;


  $: target = externo ? { target: "_blank" } : {}

</script>

<style>
  a {
    display: block;
    padding: 0;
    margin: 0;
  }


  a.BotonEnlace :global([disabled]),
  a.BotonEnlace :global([disabled] *) {
    color: #bbb !important;
  }
</style>

<a class="BotonEnlace" href={enlace} {...target}>
  <Boton  
    {texto}
    {click}
    {deshabilitado}
    {css}
    {variante}
  />
</a>