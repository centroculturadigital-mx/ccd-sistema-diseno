<script>
    import GlobosInformacion from "../GlobosInformacion/GlobosInformacion.svelte";
    import UsuariosLista from "../../Usuarios/UsuariosLista/UsuariosLista";

    import usuario from "../../../data/usuario";

    export let globo;
    // export let globos = [];

    // let globo;

    const mostrarGlobo = (evento, texto) => {
        globo = {
            texto: texto,
            coordenadas: {
                x: evento.screenX,
                y: evento.screenY,
            },
            posicionFlecha: "DERECHA_CENTRO",
        };

    };
    const retirarGlobo = (evento, texto) => {
        globo = {};

    };

    $: usuarioArray = Array(1)
        .fill(true)
        .map(() => ({
            ...usuario,
        })); // debug only

    $: globosPreparados = Array(1)
        .fill(true)
        .map(() => ({
            ...globo,
        }))
    $: estado = globosPreparados.length > 0 ? true : false;
</script>

<section class="GlobosInformacionContexto">

    <GlobosInformacion globos={globosPreparados} {estado}/>

    <UsuariosLista usuarios={usuarioArray} hover={mostrarGlobo} />

</section>

<style>
    .GlobosInformacionContexto {
        position: relative;
        height: 100vh;
        width: 100vw;
    }
</style>
