<script>

    import Bloque from "../../../componentes/Bloque/Bloque";

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
    {#if !! contenido}
        {#if Array.isArray(contenido)}
            <Bloque elementos={contenido}/>
        {:else}
            {@html contenido}
        {/if}
    {:else}
        {texto}
    {/if}
</a>