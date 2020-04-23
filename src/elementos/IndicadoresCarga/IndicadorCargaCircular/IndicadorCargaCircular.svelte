<script>
  export let colorFondo;
  export let color;
  export let tamanno;
</script>

<style>
  .IndicadorCarga,
  .IndicadorCarga:before,
  .IndicadorCarga:after {
    border-radius: 50%;
  }
  .IndicadorCarga {
    color: rgba(0,0,0,0.5);
    font-size:  0.5rem;
    margin: 2rem;
    position: relative;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 0.1rem;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    background-color: #FFF;
  }
  .IndicadorCarga:before,
  .IndicadorCarga:after {
    position: absolute;
    content: "";
  }
  .IndicadorCarga:before {
    width: 5.2em;
    height: 10.2em;
    background-color:inherit;
    border-radius: 10.2rem 0 0 10.2rem;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.1em 5.1em;
    transform-origin: 5.1em 5.1em;
    -webkit-animation: animaCarga 2s infinite ease 1.5s;
    animation: animaCarga 2s infinite ease 1.5s;
  }
  .IndicadorCarga:after {
    width: 5.2em;
    height: 10.2em;
    /* background: #0dc5c1; */
    background-color: inherit;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    -webkit-transform-origin: 0.1em 5.1em;
    transform-origin: 0.1em 5.1em;
    -webkit-animation: animaCarga 2s infinite ease;
    animation: animaCarga 2s infinite ease;
  }
  .IndicadorCargaCircular {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  @-webkit-keyframes animaCarga {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes animaCarga {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>

<section class="IndicadorCargaCircular" style="background-color: {colorFondo ? colorFondo: ""};">
  <div class="IndicadorCarga" style="color: {color ? color: ""};background-color: {colorFondo ? colorFondo: ""};font-size:{tamanno ? tamanno: ""};"></div>
</section>
