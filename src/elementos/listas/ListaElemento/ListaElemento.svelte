<script>
    import Bloque from "../../../componentes/Bloque/Bloque.svelte";
    
    export let texto;
    export let contenido;
    export let data;
    $: atributos = typeof data == 'object' ? data : {};
    
</script>

<li {...atributos}>
    <Bloque {contenido} {texto}/>
</li> 