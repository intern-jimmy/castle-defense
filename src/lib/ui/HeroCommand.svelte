<script lang="ts">
  import HeroCard from "./HeroCard.svelte";
  export let hero: Hero;
  export let onClick: Function;

  // get the commands for the hero class
  const heroMoves = {
  Warrior: ['Shield Bash', 'Battle Cry', 'Whirlwind'],
  Thief: ['Sneak Attack', 'Smoke Screen', 'Shadowstep'],
  Priest: ['Heal', 'Divine Shield', 'Smite'],
  Monk: ['Meditation', 'Purge', 'Flying Kick'],
  Knight: ['Taunt', 'Shield Slam', 'Shield Wall'],
  Archer: ['Multi-Shot', 'Poison Arrow', 'Sniper Shot'],
  Wizard: ['Fireball', 'Frost Nova', 'Lightning Strike'],
  Pirate: ['Cannon Shot', 'Plunder', 'Swashbuckle'],
  Berserker: ['Frenzy', 'Bloodlust', 'Berserker Rage'],
  Seer: ['Clairvoyance', 'Heal', 'Visionary Strike'],
  Legionnaire: ['Phalanx', 'Legion Strike', 'Legionnaire Charge'],
  Scholar: ['Research', 'Analyze', 'Invention'],
  Paladin: ['Holy Strike', 'Holy Aura', 'Healing Light'], /*'Smite Evil', 'Divine Shield', 'Crusader\'s Charge', 'Aura of Courage', 'Divine Intervention'],*/
  DarkKnight: ['Dark Aura', 'Life Drain', 'Shadow Bolt'],
  Summoner: ['Summon Elemental', 'Summon Swarm', 'Elemental Blast'],
  Ninja: ['Smoke Bomb', 'Shuriken', 'Shadow Clone'],
  Shapeshifter: ['Animal Form', 'Elemental Form', 'Hybrid Form'],
  Bard: ['Inspiring Song', 'Disrupting Song', 'Charming Song'],
  Dragoon: ['Jump Attack', 'Spear Throw', 'Dragon\'s Breath'],
  Sage: ['Arcane Blast', 'Arcane Shield', 'Arcane Torrent'],
  Spellbow: ['Arrow Barrage', 'Elemental Arrow', 'Arcane Arrow'],
  DreadKnight: ['Death\'s Grasp', 'Necrotic Blast', 'Dark Ritual']
};
const moveList = ["Move", ...heroMoves[hero.mainClassStr]];
</script>

<div class="container card" >
  <HeroCard {hero} />
  <div class="grid grid-cols-2">
    {#each moveList as move}
      <button type="button" class="btn variant-filled m-2" on:click={() => onClick({hero}, {move})}>{move}</button>
    {/each}
  </div>
</div>

