<script>

    import Bloque from "../../../componentes/Bloque/Bloque.svelte"; 

    export let href;
    export let texto;
    export let contenido;
    export let blank;

    const atributos = {
        href
    }

    $: ((target) => { atributos["target"]=!!target })(blank)

</script>

<a href="..." {...atributos}>
    <Bloque  {contenido} {texto}/>
</a>

<style>
  .enlace {
    color: var(--theme-colores-enlace-oscuro);
    font-family: var(--theme-tipografia-familia-principal);
    size: var(--theme-tipografia-tamannos-sm);
    cursor: pointer;
  }
 
</style>

