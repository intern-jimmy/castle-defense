<script lang="ts">
  import { gameStore } from "../../stores/GameStore";
	import { onMount } from "svelte";
  import Game from '$lib/ui/Game.svelte'
	

  onMount(() => {
  })

</script>
<img id="nature" src={'./map-tilesets/RPGNatureTileset.png'}  alt="nature-spritesheet" style="display: none;" />
<Game />
