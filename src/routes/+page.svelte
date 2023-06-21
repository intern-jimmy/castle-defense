<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { SlideToggle } from '@skeletonlabs/skeleton';
  import HeroCard from '$lib/ui/HeroCard.svelte';

  import type Game from '$lib/Game';
  import GameHelper from '$lib/Game-Helper';
  import { gameStore } from '../stores/GameStore';
  import { connectToWallet } from '$lib/utils/wallet';

  onMount(() => {
    const game = $gameStore;
    game.selectedHeroes = []
    game.id = null;
    gameStore.set(game)
  })


  let playerAddress = '';
  let minimizeProfile = false;
  let error = false;
  let errorMessage = '';
  
  let selectedHeroes: Array<string> = [];

  function toggleHeroSelection(heroId: string) {
    const index = selectedHeroes.indexOf(heroId);
    if(index === -1) {
      selectedHeroes.push(heroId);
    } else {
      selectedHeroes.splice(index, 1);
    }
  }

  async function init() {
    gameStore.set(await GameHelper.initializeName(playerAddress));
    minimizeProfile = true
  }

  async function connect() {
    playerAddress = await connectToWallet();
    init();
  }

  function setSelected() {
    console.log(selectedHeroes)
    try {
      gameStore.set( GameHelper.selectHeroes($gameStore, selectedHeroes));
      gameStore.set( GameHelper.createMap($gameStore));

      goto("/game")
    }
    catch(ex: Error | any) {
      error = true;
      errorMessage = ex.toString();
      window.scrollTo({ top:0 })
    }
    
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

{#if $gameStore.playerAddress.length === 0}
  <button type="button" class="btn variant-filled-primary" on:click={() => connect()}>Connect Wallet</button>
{/if}

{#if error}
    <aside class="alert variant-ghost error">
        <!-- Icon -->
        <div>(icon)</div>
        <!-- Message -->
        <div class="alert-message">
            <h3 class="h3">Error:</h3>
            <p>{errorMessage}</p>
        </div>
        <!-- Actions -->
        <div class="alert-actions">(buttons)</div>
    </aside>
{/if}

{#if $gameStore.playerAddress.length > 0}
  <div>
    <p>Select 4 heroes for yout party:</p>
  </div>
  <div class="grid grid-cols-3 gap-4">
    {#each $gameStore.heroes as hero}
      <HeroCard {hero} onToggleSelection={() => toggleHeroSelection(hero.id)}/>
    {/each}
  </div>
  <div class="flex justify-center">
    <button type="button" class="btn btn-xl bg-green-400 w-full ml-12 mr-12" on:click={() => setSelected()}>Start Game</button>
  </div>
{/if}
 