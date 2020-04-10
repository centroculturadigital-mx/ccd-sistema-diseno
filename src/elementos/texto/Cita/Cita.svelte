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
    blockquote {
        font-size: 1rem;
        font-size: larger;
        line-height: 1.5;
        font-style: italic;
        color: #666;
        padding-left: 2rem;
        border-left: .25rem solid #666;
        margin-left: 0;
    }
</style>

<blockquote {...atributos}>
    <Bloque
    {contenido}
    {texto}
    {tamanno}
    {color}
    />
</blockquote>