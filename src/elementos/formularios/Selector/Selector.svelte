<script>
  import { onMount } from "svelte";
  import Icono from "../../Icono/Icono.svelte";

  export let seleccionado = "Selecciona una opción";
  export let opciones;
  export let estado = null;
  export let nombre;
  export let cambiar;
  export let enfocar;
  export let desenfocar;
  export let vacioPermitido = true;

  export let valor;
  export let deshabilitado;

  $: clases = deshabilitado
    ? "selectorCustom " + "deshabilitado "
    : "selectorCustom " + (estado ? "abierto " : "cerrado ");

  let valorLocal;

  const actualizarValor = (v) => {
    valorLocal = v;

    if (opciones && v) {
      //asegura valor default
      seleccionado = opciones[valorLocal - 1].texto;
    }
  };

  $: actualizarValor(valor);

  const desenfocarAccion = () => {
    //  // if (cambiado) {
    // if (typeof desenfocar == "function") {
    //   desenfocar()
    // }
    // if (typeof cambiar == "function") {
    //   cambiar(valorLocal);
    // }
    // // cambiado = false
    // // }
  };

  const enfocarAccion = () => {
    // cambiado = false
    if (typeof enfocar == "function") {
      enfocar();
    }
    console.log("YA! enfocarAccion");
  };

  const cambiarAccion = () => {
    // cambiado = true

    if (typeof cambiar == "function") {
      setTimeout(() => {
        cambiar(valorLocal);
      });
    }
    console.log("YA! CambiarAccion");
  };
  //

  const abrir = () => {
    if (!deshabilitado) {
      estado = !estado;
    }
  };

  const seleccionar = (opcion, valor) => {
    seleccionado = opcion;
    valorLocal = valor;
    cambiarAccion();
  };

  let listaOpciones;

  const abrirConTecla = (e) => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      abrir();
    }
  };

  // const moverConFlecha = () => {

  //   switch (e.keyCode) {
  //     case 38:
  //       console.log("Arriba");
  //       break;
  //     case 40:
  //       console.log("Abajo");

  //       abrir()
  //       break;
  //   }

  // };

</script>

<div class={clases} on:keyup={abrirConTecla}>
  <!-- <select
    class={clases}
    name={nombre}
    on:focus={() => enfocarAccion()}
    on:focusout={() => desenfocarAccion()}
    on:change={() => cambiarAccion()}
    bind:value={valorLocal}
    disabled={deshabilitado}
  >
    <option value={false} disabled={vacioPermitido ? false : true}>
      {seleccionado}
    </option>

    {#if !deshabilitado && !!opciones}
      {#each opciones as opcion}
        <option
          value={opcion.valor}
          selected={opcion.valor == valorLocal || opcion.texto == valorLocal}
        >
          {opcion.texto}
        </option>
      {/each}
    {/if}
  </select> -->

  <input
    type="text"
    value={seleccionado}
    class="seleccionado"
    name={nombre}
    on:click={abrir}
    on:focus={() => enfocarAccion()}
    on:focusout={() => desenfocarAccion()}
    disabled={vacioPermitido ? false : true}
    readonly
  />
  <!-- on:keydown={moverConFlecha} -->

  <div class="flecha">
    <Icono icono={estado ? "arriba" : "abajo"} />
  </div>

  <div class="listaOpciones {estado ? 'abierto' : 'cerrado'}">
    {#if !deshabilitado && !!opciones}
      {#each opciones as opcion, i}
        <label
          class="opcion"
          on:click={seleccionar(opcion.texto, opcion.valor)}
        >
          <input
            type="radio"
            name="opcion"
            value={opcion.valor}
            on:change={seleccionar(opcion.texto, opcion.valor)}
          />

          <span>{opcion.texto}</span>
        </label>
      {/each}
    {/if}
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .Selector,
  .seleccionado {
    background-color: var(--theme-campos-fondo);
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    border: 1px solid var(--theme-campos-borde);
    border-radius: var(--theme-campos-esquinas);
    padding: calc(var(--theme-campos-espacio) * 2)
      calc(var(--theme-campos-espacio) * 1.5);
    min-height: 2rem;
    width: 100%;
    /* IOS */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 1;
  }

  .Selector:focus,
  .Selector:active {
    border-color: var(--theme-campos-activo);
    outline: 1px solid var(--theme-campos-activo);
  }

  .Selector.error {
    border-color: var(--theme-alertas-error);
  }

  .Selector.ok {
    outline: 1px solid var(--theme-alertas-exito);
  }

  .deshabilitado .seleccionado {
    color: #aaa;
    border-color: #ddd !important;
  }
  .deshabilitado :global(.iconoContenedor svg) {
    fill: #aaa;
  }

  .selectorCustom {
    position: relative;
    margin-top: var(--theme-espaciados-margen);
    margin-bottom: var(--theme-espaciados-margen);
    width: 100%;
  }
  .listaOpciones {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: var(--theme-campos-fondo);
    border: 1px solid var(--theme-campos-borde);
    border-top: 0;
    padding-bottom: calc(var(--theme-campos-espacio) * 2) 0;
    width: 100%;
  }
  .deshabilitado .listaOpciones,
  .cerrado .listaOpciones {
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    overflow: hidden;
  }
  .seleccionado {
    position: relative;
    cursor: pointer;
  }
  .seleccionado:hover {
    opacity: 0.75;
  }
  .abierto .seleccionado {
    border-bottom: 0;
  }
  .listaOpciones.abierto:before {
    content: "";
    padding: 0px 1rem;
    width: 95%;
    border-top: 1px solid var(--theme-campos-borde);
    box-sizing: border-box;
    align-self: center;
  }
  .cerrado .seleccionado:after {
    border-bottom: 0;
  }

  .flecha {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 2.5rem;
    pointer-events: none;
  }
  .flecha :global(.iconoContenedor) {
    width: 1.125rem !important;
    height: 1.125rem !important;
    cursor: pointer;
  }
  .opcion {
    position: relative;
    height: 3rem;
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    pointer-events: none;
    cursor: pointer;
  }
  .opcion span {
    display: flex;
    align-items: center;
    padding: 0 calc(var(--theme-campos-espacio) * 1.5);
    height: 100%;
    width: 100%;
  }
  .opcion:hover {
    color: var(--theme-colores-primario);
  }
  .opcion:last-child {
    padding: 0.25rem 0;
  }
  .opcion input[type="radio"] {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 0;
    z-index: -1;
  }
  .opcion input[type="radio"]:active + span {
    background-color: #000;
  }
  .opcion input[type="radio"]:focus + span,
  .opcion input[type="radio"]:active + span {
    background-color: rgba(200, 200, 200, 0.25);
  }

</style>
