<script>
    import Imagen from "./Imagen";
    import Diapositivas from "../../../componentes/Ventanas/Diapositivas/Diapositivas";

    export let tamannos;
    export let nombre;
    export let descripcion;
    export let descripcionPosicion;
    export let alt;

    let estado = false;

    const maximizar = () => {
        if(estado == true) {
            estado = false
        }
        estado = !estado;
    };

    const diapositivas = [
        {
            // imagen,
            tamannos,
            nombre,
            descripcion,
            descripcionPosicion,
            alt,
        },
    ];

</script>

<section class="ImagenPrueba">
    <div class="contenedor">
        <Imagen {tamannos} {maximizar} {nombre} {descripcion} />
    </div>

    <Diapositivas {diapositivas} {estado} />
</section>

<style>
.ImagenPrueba {
    width: 100%;
}
.contenedor {
    width: 100%;
}
</style>
