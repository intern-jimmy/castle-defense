 <script lang="ts">
  import {maleFirstNames, femaleFirstNames, lastNames } from '$lib/utils/hero/names';
  export let hero: Hero;
  export let onToggleSelection: Function | null;
  


  const firstName = hero.gender == 1 ? maleFirstNames[hero.firstName] : femaleFirstNames[hero.firstName];
  const lastName = lastNames[hero.lastName];
  const background = hero.background == 0? "desert":
                     hero.background == 2? "forest":
                     hero.background == 4?  "plains" :
                     hero.background == 6? "island":
                     hero.background == 8? "swamp": 
                     hero.background == 10? "mountains" :
                     hero.background == 12? "city": 
                     hero.background == 14? "arctic" : 
                     "unknown";

  const rarity = hero.rarity == 0 ? "common":
                 hero.rarity == 1 ? "uncommon":
                 hero.rarity == 2 ? "rare": 
                 hero.rarity == 3 ? "legendary": 
                 hero.rarity == 4 ? "mythic" : 
                 "unknown" + hero.rarity;
  const element = hero.element == 0 ? "fire":
                  hero.element == 2 ? "water":
                  hero.element == 4 ? "earth": 
                  hero.element == 6 ? "wind": 
                  hero.element == 8 ? "lightning": 
                  hero.element == 10 ? "ice": 
                  hero.element == 12 ? "light": 
                  hero.element == 14 ? "dark": 
                  "unknown" + hero.element;
</script>

<div class="card left-2 right-2 bottom-2">
  <div class="card-front">
    {#if onToggleSelection}
      <div class="checkbox-container float-right p-4">
        <input type="checkbox" value={hero.id} on:click={onToggleSelection} />
      </div>
    {/if}
    <div class="card-content">
      <h4 class="card-title text-center text-7xl">{firstName} {lastName}</h4>
      <div class="flex justify-center items-center">
        <div class="relative">
          <img class="hero-image {background}-background" src="https://heroes.defikingdoms.com/image/{hero.id}" alt="{firstName} {lastName} image" />
        </div>
      </div>
    </div>
    <div class="card-content">
      <div class="grid grid-cols-3 justify-between pt-2">
        <div class="col">
          <div class="class-primary text-center">{hero.mainClassStr} / {hero.subClassStr}</div>
        </div>
        <div class="col flex justify-center items-center">
          <img src="/rarity/rarity-{rarity}.png" class="{rarity}" alt="{rarity} rarity" />
        </div>
        <div class="col flex justify-end items-center">
          Level: {hero.level}
        </div>
      </div>
      <div class="grid grid-cols-3 justify-between">
        <div class="col">
          <span>Health: {hero.hp}</span>
        </div>
        <div class="col">
          <span>Stamina: {hero.stamina}</span>
        </div>
        <div class="col">
          <span>Mana: {hero.mp}</span>
        </div>
      </div>
      <div class="grid grid-cols-2 justify-between">
        <div class="col">
          <span>{hero.id}</span>
        </div>
        <div class="col flex justify-end items-center">
          <img class="element" src="/element/element-{element}.png" alt="{element} element" />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.card {
  border: 3px solid;
  margin: 1em;
  position: relative;
}

.card-title {
  padding-top: .5em;
}

.grid-cols-2 {
  margin-left: 25%;
}
.grid-cols-3 {
  margin-left:10%;
}

.mountains-background {
  background-image: url("/backgrounds/mountains.png");
}
.desert-background {
  background-image: url("/backgrounds/desert.gif");
}
.island-background {
  background-image: url("/backgrounds/island.png");
}
.arctic-background {
  background-image: url("/backgrounds/arctic.png");
}
.city-background {
  background-image: url("/backgrounds/city.gif");
}
.forest-background {
  background-image: url("/backgrounds/forest.gif");
}
.plains-background {
  background-image: url("/backgrounds/plains.png");
}
.swamp-background {
  background-image: url("/backgrounds/swamp.gif");
}

.weapon {
  z-index: -1;
  position: absolute;
}

.paladin-weapon {
  height: 32px;
  left: -82px;
  top: 128px;
  transform: rotate(-20deg);
  width: 100px;
}

.element {
  width: 1.1em;
}

.hero-image{
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top left;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  padding-left: 10%;
  position: relative;
}

input[type=checkbox] {
  background-image: url('/web-assets/checkbox_empty.png');
  transform: scale(2);
}

input[type=checkbox]:checked {
  background-image: url('/web-assets/checkbox_filled.png');
}

.hero-image {
    /* Adjust the width and padding to control the image size and position */
    width: 50%;
    padding-left: 10%;
  }

  .class-primary {
    /* Add any necessary styling to align the text center */
    text-align: center;
  }

</style>