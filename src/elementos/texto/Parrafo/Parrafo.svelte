<script>

    import Bloque from "../../../componentes/Bloque/Bloque";

    export let texto;
    export let contenido;
    export let data;

    $: atributos = typeof data == 'object' ? data : {};

</script>

<p {...atributos}>
    {#if !! contenido}
        <Bloque elementos={contenido}/>
    {:else}
       {#if !! texto}
            {texto}
        {/if}
    {/if}
</p>