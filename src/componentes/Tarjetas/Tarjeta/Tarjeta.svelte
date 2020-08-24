<script>
  import Imagen from "../../../elementos/media/Imagen/Imagen.svelte";
  import Titulo from "../../../elementos/texto/Titulo/Titulo.svelte";
  import Boton from "../../../elementos/botones/Boton/Boton.svelte";
  import BotonSecundario from "../../../elementos/botones/BotonSecundario/BotonSecundario.svelte";
  import Parrafo from "../../../elementos/texto/Parrafo/Parrafo.svelte";
  import Enlace from "../../../elementos/enlaces/Enlace/Enlace.svelte";
  import Texto from "../../../elementos/texto/Texto/Texto.svelte";
  import Icono from "../../../elementos/Icono/Icono.svelte";

  export let apariencia = "Vertical"; //"Vertical", "Horizontal", "Chica"
  export let pleca;
  export let enlace;
  export let imagen;
  export let nombre;
  export let nivelTitulo = 3;
  export let subtitulo;
  export let extracto;
  export let sombra;
  export let leyenda;
  export let enlaces = [];
  export let acciones = [];

  $: linkTarget = enlace ? (enlace.externo ? { target: "_blank" } : {}) : {};

  let colorFondoPleca = !!pleca
    ? pleca.colores
      ? pleca.colores.fondo
      : "#fff"
    : "#fff";

  let colorTextoPleca = !!pleca
    ? pleca.colores
      ? pleca.colores.texto
      : "#000"
    : "#000";

  $: aparienciaEstilo =
    apariencia == "Horizontal"
      ? "TarjetaHorizontal"
      : apariencia == "Chica"
      ? "TarjetaChica"
      : "";
</script>

<style>
  .Tarjeta {
    position: relative;
    max-width: 20rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: var(--theme-tarjetas-esquina);
    background-color: var(--theme-tarjetas-fondo);
    color: var(--theme-textos-parrafo-color);
    overflow: hidden;
    box-sizing: border-box;
  }
  .TarjetaHorizontal {
    max-width: 36rem !important;
    display: flex;
    flex-direction: row !important;
    height: 100% !important;
    padding-top: 0;
    padding-bottom: 0;
  }
  .TarjetaChica {
    max-width: initial !important;
    display: flex;
    height: auto !important;
    padding-top: 0;
    padding-bottom: 0;
    align-items: center !important;
  }
  .TarjetaChicaImagen {
    position: absolute;
    top: 0;
    height: 100% !important;
    left: 0;
    z-index: 0;
  }
  .TarjetaChicaContenido {
    min-width: initial !important;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }
  .TarjetaChicaTextos {
    width: 75% !important;
    position: relative;
    z-index: 1;
  }
  .Imagen {
    width: 100%;
    height: 10rem;
  }
  .Contenido {
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    width: 100%;
  }
  .Contenidos {
    width: 100%;
  }
  .Textos {
    background-color: var(--theme-tarjetas-fondo);
    box-sizing: border-box;
    padding: var(--theme-espaciados-padding)
      calc(var(--theme-espaciados-padding) * 2);
    width: 100%;
  }
  .Acciones {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .Acciones :global(button) {
    border: none;
    padding: var(--theme-espaciados-padding);
  }
  .Acciones :global(button:hover) {
    border: none;
  }
  .Acciones :global(a) {
    border: none;
    padding: var(--theme-espaciados-padding);
    background-color: var(--theme-botones-secundario-fondo);
    color: var(--theme-botones-secundario-color);
  }
  .Acciones :global(a span) {
    font-size: calc(var(--theme-textos-enlaces-tamanno) / 1.125);
  }
  .Acciones :global(a:hover) {
    border: none;
  }
  .sombra {
    box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.1);
  }
  .Subtitulo :global(h4) {
    margin: var(--theme-espaciados-margen) 0;
  }
  .Leyenda {
    margin: 0.5rem 0;
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-tamannos-sm);
  }
  .Leyenda :global(span) {
    color: var(--theme-textos-parrafo-color);
    font-weight: var(--theme-textos-parrafo-peso);
    font-size: var(--theme-tamannos-sm);
  }
  .Enlaces {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
  .Enlaces :global(a span) {
    padding: calc(var(--theme-espaciados-padding) / 2);
    padding-left: 0;
    font-size: var(--theme-tamannos-sm);
    font-weight: 700;
    color: var(--theme-textos-enlaces-color);
    height: auto;
  }
  hr {
    border-color: var(--theme-bordes-neutro);
    border-style: solid;
    border-width: thin;
    opacity: 0.25;
  }
  footer {
    width: 100%;
    padding: 0 1rem 0.5rem 1rem;
    box-sizing: border-box;
  }
  .enlazado {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
  }
  .Titulo :global(h3) {
    margin: var(--theme-espaciados-margen) 0;
  }
  .Extracto :global(p) {
    margin: var(--theme-espaciados-margen) 0;
    height: auto;
    margin-bottom: 0;
  }
  .Pleca {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 2rem;
    left: 0;
    padding: calc(var(--theme-espaciados-padding) / 2)
      var(--theme-espaciados-padding);
    max-width: 66%;
    box-sizing: border-box;
    color: #000;
    fill: currentColor;
  }
  .Pleca :global(.iconoContenedor > *) {
    height: 1.5rem !important;
    width: 0.75rem;
    margin-left: 0.5rem;
    fill: inherit;
  }
  .Pleca :global(span) {
    white-space: pre-wrap;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 5%;
    font-weight: normal;
    line-height: 1.5;
    width: 100%;
  }
  .Pleca .Textos {
    background-color: transparent;
    display: block;
    padding: 0;
    margin: 0;
  }
  .Pleca .Textos :global(span) {
    width: auto;
    display: block;
    margin-bottom: 0.5rem;
  }
  .Pleca .Textos :global(span:last-child) {
    margin-bottom: 0;
  }
  .Cabecera {
    display: flex;
    flex-direction: column;
    position: relative;
    height: initial;
    width: 100%;
    box-sizing: border-box;
  }
  .noImagen {
    position: initial !important;
  }
</style>

<article class="{aparienciaEstilo} Tarjeta {!!sombra ? ' sombra' : ''}">
  <div class="{aparienciaEstilo} Contenido">

    <div class="Cabecera">
      {#if !!imagen}
        <div
          class="{aparienciaEstilo} Imagen {apariencia == 'Chica' ? 'TarjetaChicaImagen' : ''}">

          {#if !!enlace}
            <a
              class="{aparienciaEstilo} enlazado"
              {...linkTarget}
              href={enlace}>
              <Imagen {imagen} alt={nombre} ajuste="cover" />
            </a>
          {:else}
            <Imagen {imagen} alt={nombre} ajuste="cover" />
          {/if}
        </div>
      {/if}

      {#if typeof pleca == 'object'}
        <div class="Pleca {!imagen ? "noImagen" : ""}" style={`background-color: ${colorFondoPleca}`}>
          {#if !!pleca.texto}
            <Texto
              texto={pleca.texto}
              variante="COMPACTO"
              css={{ color: colorTextoPleca }} />
          {/if}
          {#if Array.isArray(pleca.textos)}
            <ul class="Textos">
              {#each pleca.textos as texto}
                <Texto
                  {texto}
                  variante="COMPACTO"
                  css={{ color: colorTextoPleca }} />
              {/each}
            </ul>
          {/if}
          {#if !!pleca.icono}
            <Icono icono={pleca.icono} color={colorTextoPleca} />
          {/if}
        </div>
      {/if}

    </div>

    <section
      class={apariencia == 'Chica' ? 'TarjetaChicaContenido' : 'Contenidos'}>
      <div class="Textos {apariencia == 'Chica' ? 'TarjetaChicaTextos' : ''}">
        {#if !!leyenda}
          <div class="Leyenda">
            <Parrafo texto={leyenda} nivel={5} />
          </div>
        {/if}
        {#if !!enlace}
          <a class="{aparienciaEstilo} enlazado" {...linkTarget} href={enlace}>
            {#if !!nombre}
              <div class="Titulo">
                <Titulo texto={nombre} nivel={nivelTitulo} />
              </div>
            {/if}
            {#if !!subtitulo}
              <div class="Subtitulo">
                <Titulo texto={subtitulo} nivel={4} />
              </div>
            {/if}
          </a>
        {:else}
          {#if !!nombre}
            <div class="Titulo">
              <Titulo texto={nombre} nivel={nivelTitulo} />
            </div>
          {/if}
          {#if !!subtitulo}
            <div class="Subtitulo">
              <Titulo texto={subtitulo} nivel={4} />
            </div>
          {/if}
        {/if}

        {#if Array.isArray(enlaces) && enlaces.length > 0}
          <section>
            <hr />
            <div class="Enlaces">
              {#each enlaces as enlace, i ('enlace_' + i)}
                <Enlace enlace={enlace.enlace} texto={enlace.texto} />
              {/each}
            </div>
          </section>
        {/if}

        {#if !!extracto}
          {#if !!enlace}
            <a
              class="{aparienciaEstilo} enlazado"
              {...linkTarget}
              href={enlace}>
              <div class="Extracto">
                <Parrafo texto={extracto} />
              </div>
            </a>
          {:else}
            <div class="Extracto">
              <Parrafo texto={extracto} />
            </div>
          {/if}
        {/if}

      </div>
      <!-- footer horizontal-->
      {#if apariencia == 'Horizontal' || apariencia == 'Chica'}
        {#if Array.isArray(acciones) && acciones.length > 0}
          <footer class={aparienciaEstilo}>
            <div class="Acciones">
              {#each acciones as accion (accion)}
                {#if accion.enlace}
                  <Enlace enlace={accion.enlace} texto={accion.texto} />
                {/if}
                {#if typeof accion.accion == 'function'}
                  <BotonSecundario
                    click={accion.accion}
                    radius="15px"
                    texto={accion.texto} />
                {/if}
              {/each}
            </div>
          </footer>
        {/if}
      {/if}
    </section>
  </div>
  <!-- footer vertical (unico duplicado) -->
  {#if apariencia == 'Vertical' || !apariencia}
    {#if Array.isArray(acciones) && acciones.length > 0}
      <footer>
        <hr />
        <div class="Acciones">
          {#each acciones as accion (accion)}
            {#if accion.enlace}
              <Enlace enlace={accion.enlace} texto={accion.texto} />
            {/if}
            {#if typeof accion.accion == 'function'}
              <BotonSecundario
                click={accion.accion}
                radius="15px"
                texto={accion.texto} />
            {/if}
          {/each}
        </div>
      </footer>
    {/if}
  {/if}

</article>
