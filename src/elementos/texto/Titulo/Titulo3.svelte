<script>
    export let data
    $:console.log(data)
</script>

<h3 {...data}>
    <slot/>
</h3>