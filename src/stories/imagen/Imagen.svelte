<script>
export let imagenUrl;
export let altTexto;
export let ajuste;
export let altura;
</script>

<style>
img {
    height: 100%;
    object-fit: cover;
}
</style>

<img src={imagenUrl} alt={altTexto} style="object-fit:{ajuste};height:{altura}">