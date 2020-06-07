<script>
  import Formulario from "../../../formularios/Formulario/Formulario.svelte";

  export let campos = [
    {
      tipo: "texto",
      nombre: "ccd-sd-texto",
      requerido: true,
      ejemplo: "Escribe mensaje",
    //   etiqueta: "Sin caracteres especiales ",
      valorInicial: "",
      validacion: valor => {
        let noPermitido = new RegExp("/"); //solo acepta guion medio y bajo
        return {
          valido: !noPermitido.test(valor),
          error: noPermitido.test(valor)
            ? new Error("No /")
            : null,
          estado: noPermitido.test(valor)
            ? "error"
            : !valor
            ? ""
            : "ok"
        };
      }
    }
  ];
  export let enviar = true;
  export let cambiar;
  export let respuesta;
</script>

<style>
.ChatEntrada {
    padding: var(--theme-espaciados-padding);
    box-sizing: border-box;
}
.ChatEntrada :global(form) {
    flex-direction: row !important;
}
.ChatEntrada :global(input) {
    margin: 0;
}
.ChatEntrada :global(form input) {
    padding: calc( var(--theme-espaciados-padding) * 0.75);
    background-color: lightgray;
    border: none;
    width: 100%;
}
.ChatEntrada :global(form label) {
    padding: 0;
}
.ChatEntrada :global(form input[type="submit"]) {
    padding: calc( var(--theme-espaciados-padding) * 1.65);
    background-color: lightgray !important;
    border: none;
}
</style>

<section class="ChatEntrada">

  <Formulario {campos} {enviar} {cambiar} {respuesta} />

</section>
