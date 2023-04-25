<script lang="ts">
  import { SlideToggle } from '@skeletonlabs/skeleton';

  import Game from '$lib/game';
  let playerAddress = '';
  let minimizeProfile = false;
  let game: Game|null = null;

  async function init() {
    console.log(playerAddress)
    game = await Game.initializeName(playerAddress);
    minimizeProfile = true
    // Do something with the initialized game object
  }

</script>


<h1>Welcome to Castle Defender</h1>

<div>
  {#if !minimizeProfile}
  <div style="float: left">
    <label class="label">
      <span>Wallet:</span>
      <input class="input" type="text" placeholder="wallet address" bind:value={playerAddress} />
    </label>
    <button type="button" class="btn variant-filled-surface" on:click={init}>Get Profile</button>
  </div>
  {/if}
  <SlideToggle style="float:right;" on:click={() => {minimizeProfile = !minimizeProfile}}/>
</div>

{#if game}
<div>
  Select your heroes:
  {#each game.heroes as hero}
    <div>
      <div>
        <p>{hero.id}</p>
        <p>{hero.mainClassStr}</p>
        <p>{hero.subClassStr}</p>
        <p>{hero.rarity}</p>
      </div>
    </div>
  {/each}
</div>
{/if}