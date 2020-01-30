<script>
  export let texto;
  export let color;
  export let colorBG;
  export let paddingX;
  export let radius;

</script>

<style>
  button {
    transition: 0.5s;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin: 0;
  }
  button:hover {
    box-shadow: 1px 2px 2px #477751;
  }
  img {
    height: 2rem;
    width: auto;
  }
</style>

<button
  style="border-radius:{radius};background-color:{colorBG};color:{color};padding:
  0.5rem {paddingX};"
  on:click>
  {!!texto ? texto : ''}
</button>
