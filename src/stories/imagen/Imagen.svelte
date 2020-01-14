<script>
export let imagenUrl;
export let alt;
export let ajuste;
</script>

<style>
img {
    height: 100%;
    object-fit: cover;
}
</style>

<img src={imagenUrl} alt={alt} style="object-fit:{ajuste}">