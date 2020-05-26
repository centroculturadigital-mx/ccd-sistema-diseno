<script> 

    import Bloque from "../../../componentes/Bloque/Bloque.svelte";

    export let texto;
    export let contenido;
    export let data;
   

    $: atributos = typeof data == 'object' ? data : {
        // style: `font-size: ${tamanno}`
    };
    
</script>

<style>
    blockquote {
        font-size: var(--theme-textos-citas-tamanno);
        color: var(--theme-textos-citas-color);
        line-height: 1.5;
        font-style: italic;       
        padding-left: 2rem;
        border-left: .25rem solid #666;
        margin-left: 0;
    }
</style>

<blockquote {...atributos}>
    <Bloque
    {contenido}
    {texto}
   
    />
</blockquote>