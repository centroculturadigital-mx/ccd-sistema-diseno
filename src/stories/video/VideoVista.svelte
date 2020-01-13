<script>
  import Video from "./Video.svelte";

  export let videoUrls;
  export let autoplay;
  export let loop;
  export let controls;
  export let altura;
</script>

<Video {videoUrls} {autoplay} {loop} {controls} {altura}/>
