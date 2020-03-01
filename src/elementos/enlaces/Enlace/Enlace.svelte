<script>
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
        {@html contenido}
    {:else}
        {texto}
    {/if}
</a>