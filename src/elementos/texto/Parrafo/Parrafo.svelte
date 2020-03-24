<script>

    import Bloque from "../../../componentes/Bloque/Bloque.svelte";

    export let texto;
    export let contenido;
    export let data;
    export let tamanno;
    export let color;

    $: atributos = typeof data == 'object' ? data : {
        // style: `font-size: ${tamanno}`
    };
    
</script>

<style>
    p {
        font-size: 1rem;
    }
</style>

<p {...atributos}>
    <Bloque
    {contenido}
    {texto}
    {tamanno}
    {color}
    />
</p>