<script>
    export let numero
    export let activo
    $: clases = activo ? "activo" : ""
</script>

<style>
  button{
      padding: 2rem;
      border-radius: 50%;
      border-style: none;
      margin-right: 1rem;
  }
  .activo {
 background-color: #000;
 color: #fff;

  }
</style>

<button class={clases} on:click>
    {numero}
</button>