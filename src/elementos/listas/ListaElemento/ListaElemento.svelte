<script>
    import Bloque from "../../../componentes/Bloque/Bloque.svelte";

    export let texto;
    export let contenido;
    export let data;

    $: atributos = typeof data == 'object' ? data : {};
    
</script>

<style>
li {
    list-style-type: none;
}
</style>

<li {...atributos}>
    <Bloque {contenido} {texto}/>
</li> 