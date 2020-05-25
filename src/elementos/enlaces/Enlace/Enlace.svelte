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

<style>
button {
    color: red;
}
</style>
<a href="..." {...atributos}>
    <Bloque {contenido} {texto}/>
</a>