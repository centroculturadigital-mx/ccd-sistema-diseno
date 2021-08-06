<script>
    import Imagen from "./Imagen";
    import Diapositivas from "../../../componentes/Ventanas/Diapositivas/Diapositivas";

    // export let imagen = "https://fakeimg.pl/f0f0ff/?text=Prueba";
    export let tamannos;
    export let nombre;
    export let descripcion;
    export let descripcionPosicion;
    export let alt;
    // export let maximizar;

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

    $: console.log("ImagenPrueba", estado);
</script>

<section class="ImagenPrueba">
    <div class="contenedor">
        <Imagen {tamannos} {maximizar} {nombre} {descripcion} />
    </div>

    <Diapositivas {diapositivas} {estado} />
</section>
