<script lang="ts">
  import { gameStore } from "../../stores/GameStore";
  import HeroCommand from "$lib/ui/HeroCommand.svelte";
  import Canvas from "$lib/canvas/Canvas.svelte";
  import Background from "$lib/canvas/Background.svelte";
  import FPS from "$lib/canvas/FPS.svelte";
  import RoundManager from "$lib/RoundManager";
  

  let attemptedCommand: {hero: Hero|null; command: string; targetX: number; targetY: number; } = {hero: null, command: '', targetX: -1, targetY: -1};
  let clickableMap = false;
  function onClick(hero: Hero, command: string) {
    console.log($gameStore.map);
    console.log(`Hero: ${hero.hero.id} doing ${command.move}`)
    attemptedCommand.hero = hero;
    attemptedCommand.command = command.move; 
    
    if (attemptedCommand.command == "Move") {
      clickableMap = true;
    }
  }

  function attemptMove() {
  if (
    attemptedCommand.hero !== null &&
    attemptedCommand.command !== '' &&
    attemptedCommand.targetX !== -1 &&
    attemptedCommand.targetY !== -1
  ) {
    console.log(`Attempting to process ${attemptedCommand.command} of ${attemptedCommand.hero.hero.id} at [${attemptedCommand.targetX}, ${attemptedCommand.targetY}]`);
    if (attemptedCommand.command.toLowerCase() === 'move') {
      gameStore.update((gameStore) => {
        const updatedMap = gameStore.map.map((row, rowIndex) => {
          return row.map((tile, colIndex) => {
            const updatedTile = { ...tile };
            if (rowIndex === attemptedCommand.targetY && colIndex === attemptedCommand.targetX) {
              updatedTile.occupiedBy = attemptedCommand.hero.hero;
            } else if (tile.occupiedBy === attemptedCommand.hero.hero) {
              updatedTile.occupiedBy = null;
            }
            return updatedTile;
          });
        });

        return { ...gameStore, map: updatedMap };
      });
      console.log('Updated the map');
      console.log($gameStore.map);
    }
    resetattemptedCommand();
    gameStore.update((gameStore) => {
      const canStart = determineCanStartRound();
      let newRound = gameStore.round;
      newRound.canStart = canStart;
      console.log(newRound);
      return {...gameStore, round: newRound}
    }); 
  }
}

  function resetattemptedCommand() {
    attemptedCommand.command = '';
    attemptedCommand.hero = null;
    attemptedCommand.targetX = -1;
    attemptedCommand.targetY = -1;
  }

  function determineCanStartRound(): boolean {
    // Check if all selected heroes are placed on the map
    for (const hero of $gameStore.selectedHeroes) {
      let isPlaced = false;
      for (const row of $gameStore.map) {
        for (const tile of row) {
          if (tile.occupiedBy === hero) {
            isPlaced = true;
            break;
          }
        }
        if (isPlaced) {
          break;
        }
      }
      if (!isPlaced) {
        return false;
      }
    }

    return true;
  }

  function recordClick(x: number, y: number) {
    console.log(x, y)
    if(clickableMap) {
      attemptedCommand.targetX = x;
      attemptedCommand.targetY = y;
      attemptMove();
      resetattemptedCommand();
    }
  }

  function startRound() {
    console.log("starting round");
    gameStore.update((gameStore) => {
      gameStore.round.validStart = true;
      return gameStore;
    })
    let round = new RoundManager($gameStore);
    round.startRound();
  }
  
</script>

<div class="grid grid-cols-4 gap-4">
  <div class="col-span-1">
    {#each $gameStore.selectedHeroes.slice(0, 2) as hero}
      <div>
        <HeroCommand {hero} {onClick} />
      </div>
    {/each}
  </div>
  {#if $gameStore.map}
    <div class="flex justify-center col-span-2">
      <div class="canvas-container">
        {#if $gameStore.round.canStart}
          <div class="flex justify-center mb-4">
            <button type="button" class="btn btn-xl bg-green-500 w-full  justify-center" on:click={startRound}>Start Round</button>
          </div>
        {/if}
        <Canvas clicked={recordClick}>
          <Background map={$gameStore.map} color="hsl(0, 0%, 10%)" />
          <FPS />
        </Canvas>
      </div>
    </div>
  {/if}
  <div class="col-span-1">
    {#each $gameStore.selectedHeroes.slice(2, 4) as hero}
      <div>
        <HeroCommand {hero} {onClick} />
      </div>
    {/each}
  </div>
</div>



<style>
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .canvas-container {
    max-width: 100%;
  }
</style>