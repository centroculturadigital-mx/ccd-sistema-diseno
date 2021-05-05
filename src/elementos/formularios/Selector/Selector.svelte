<script>
  import Icono from "../../Icono/Icono.svelte";

  export let ejemplo = "Selecciona una opción";
  export let opciones;
  export let estado = null;
  export let nombre;
  export let cambiar;
  export let enfocar;
  export let desenfocar;
  export let vacioPermitido = true;

  export let valor;
  export let deshabilitado;

  $: clases = "Selector" + (estado ? "abierto"  : "cerrado");

  let valorLocal;

  const actualizarValor = (v) => {
    valorLocal = v;
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
  };

  const cambiarAccion = () => {
    // cambiado = true

    if (typeof cambiar == "function") {
      setTimeout(() => {
        cambiar(valorLocal);
      });
    }
  };
  //

  const enlistar = () => {
    estado = !estado;
  };

  $: console.log("select", estado);
</script>

<div class="selectorCustom">
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
      {ejemplo}
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

  <!-- seccion visible -->
  <div class="seleccionado" 
  name={nombre} 
  on:click={enlistar}>
  
    {ejemplo}

    <div class="flecha">
      <Icono icono={estado ? "arriba" : "abajo"} />
    </div>
  
  </div>

  <!-- lista no visible hasta clicar -->
  {#if estado}
    <section class="listaOpciones">
      {#if !deshabilitado && !!opciones}
        {#each opciones as opcion}
          <div class="opcion">
            <input
              type="radio"
              name="opcion"
              value={opcion.valor}
              id={opcion.valor}
            />

            <label for={opcion.valor}>{opcion.texto}</label>

            <!-- <option
          value={opcion.valor}
          selected={opcion.valor == valorLocal || opcion.texto == valorLocal}
          >
          {opcion.texto}
        </option> -->
          </div>
        {/each}
      {/if}
    </section>
  {/if}
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
    outline: none;
  }

  .Selector.error {
    border-color: var(--theme-alertas-error);
  }

  .Selector.ok {
    outline: 1px solid var(--theme-alertas-exito);
  }

  select:disabled {
    color: #aaa;
    border-color: #ddd !important;
  }

  .selectorCustom {
    position: relative;
    margin-top: var(--theme-espaciados-margen);
    margin-bottom: var(--theme-espaciados-margen);
    width: 100%;
  }
  .listaOpciones {
    position: absolute;
    background-color: var(--theme-campos-fondo);
    border: 1px solid var(--theme-campos-borde);
    border-top: 0;
    padding: calc(var(--theme-campos-espacio) * 2)
      calc(var(--theme-campos-espacio) * 1.5);
    width: 100%;
  }
  .seleccionado {
    position: relative;
    cursor: pointer;
  }
  .seleccionado:hover {
    opacity: 0.75;
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
    font-size: var(--theme-textos-parrafo-tamanno);
    font-family: var(--theme-textos-parrafo-tipografia);
    font-weight: var(--theme-textos-parrafo-peso);
    color: var(--theme-campos-color);
    padding: 0.25rem 0 2.125rem;
    cursor: pointer;
  }
  .opcion:hover {
    color: var(--theme-colores-primario);
  }
  .opcion:last-child {
    padding: 0.25rem 0;
  } 
  .opcion input[type="radio"] {
    display: none;
  }
</style>
