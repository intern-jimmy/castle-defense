<script lang="ts">
  import MapTile from "./MapTile.svelte";

  export let background: string;
  export let onClick: Function;
  export let rowIndex: number;
  export let cellIndex: number;
  export let character: Hero|null;

</script>

<div class="container">
  <button type="button" on:click={()=> onClick(rowIndex, cellIndex)} class="background">
    <MapTile background={background} {character}/>
  </button>
</div>
