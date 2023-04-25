<script lang="ts">
  import Game from '$lib/game';
  let playerAddress = '';

  async function init() {
    console.log(playerAddress)
    const game = await Game.initializeName(playerAddress);
    
    // Do something with the initialized game object
  }

</script>


<h1>Welcome to Castle Defender</h1>
<label>Wallet: </label> <input bind:value={playerAddress}>
<button on:click={init}>Get Profile</button>