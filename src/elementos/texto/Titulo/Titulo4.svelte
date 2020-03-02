<script>
    export let data
    $:console.log(data)
</script>

<h4 {...data}>
    <slot/>
</h4>