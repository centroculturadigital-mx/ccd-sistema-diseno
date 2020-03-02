<script>

    import Bloque from "../../../componentes/Bloque/Bloque";

    export let texto;
    export let contenido;
    export let data;

    $: atributos = typeof data == 'object' ? data : {};
    
</script>

<blockquote {...atributos}>
    {#if !! contenido}
        <Bloque {contenido}/>
    {:else}
       {#if !! texto}
            {texto}
        {/if}
    {/if}
</blockquote>