import { c as create_ssr_component, v as validate_component, n as each, e as escape, a as subscribe, h as add_attribute } from "../../../chunks/index2.js";
import { g as gameStore } from "../../../chunks/GameStore.js";
import { H as HeroCard } from "../../../chunks/HeroCard.js";
import { C as Canvas, B as Background, F as FPS } from "../../../chunks/FPS.js";
const HeroCommand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hero } = $$props;
  let { onClick } = $$props;
  const heroMoves = {
    Warrior: ["Shield Bash", "Battle Cry", "Whirlwind"],
    Thief: ["Sneak Attack", "Smoke Screen", "Shadowstep"],
    Priest: ["Heal", "Divine Shield", "Smite"],
    Monk: ["Meditation", "Purge", "Flying Kick"],
    Knight: ["Taunt", "Shield Slam", "Shield Wall"],
    Archer: ["Multi-Shot", "Poison Arrow", "Sniper Shot"],
    Wizard: ["Fireball", "Frost Nova", "Lightning Strike"],
    Pirate: ["Cannon Shot", "Plunder", "Swashbuckle"],
    Berserker: ["Frenzy", "Bloodlust", "Berserker Rage"],
    Seer: ["Clairvoyance", "Heal", "Visionary Strike"],
    Legionnaire: ["Phalanx", "Legion Strike", "Legionnaire Charge"],
    Scholar: ["Research", "Analyze", "Invention"],
    Paladin: ["Holy Strike", "Holy Aura", "Healing Light"],
    /*'Smite Evil', 'Divine Shield', 'Crusader\'s Charge', 'Aura of Courage', 'Divine Intervention'],*/
    DarkKnight: ["Dark Aura", "Life Drain", "Shadow Bolt"],
    Summoner: ["Summon Elemental", "Summon Swarm", "Elemental Blast"],
    Ninja: ["Smoke Bomb", "Shuriken", "Shadow Clone"],
    Shapeshifter: ["Animal Form", "Elemental Form", "Hybrid Form"],
    Bard: ["Inspiring Song", "Disrupting Song", "Charming Song"],
    Dragoon: ["Jump Attack", "Spear Throw", "Dragon's Breath"],
    Sage: ["Arcane Blast", "Arcane Shield", "Arcane Torrent"],
    Spellbow: ["Arrow Barrage", "Elemental Arrow", "Arcane Arrow"],
    DreadKnight: ["Death's Grasp", "Necrotic Blast", "Dark Ritual"]
  };
  const moveList = ["Move", ...heroMoves[hero.mainClassStr]];
  if ($$props.hero === void 0 && $$bindings.hero && hero !== void 0)
    $$bindings.hero(hero);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div class="container card">${validate_component(HeroCard, "HeroCard").$$render($$result, { hero }, {}, {})}
  <div class="grid grid-cols-2">${each(moveList, (move) => {
    return `<button type="button" class="btn variant-filled m-2">${escape(move)}</button>`;
  })}</div></div>`;
});
const Game_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-cols-4.svelte-1bucg6l{grid-template-columns:repeat(4, minmax(0, 1fr))}.flex.svelte-1bucg6l{display:flex;align-items:center;justify-content:center}.canvas-container.svelte-1bucg6l{max-width:100%}",
  map: null
};
const Game = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gameStore, $$unsubscribe_gameStore;
  $$unsubscribe_gameStore = subscribe(gameStore, (value) => $gameStore = value);
  let attemptedCommand = {
    hero: null,
    command: "",
    targetX: -1,
    targetY: -1
  };
  let clickableMap = false;
  function onClick(hero, command) {
    console.log($gameStore.map);
    console.log(`Hero: ${hero.hero.id} doing ${command.move}`);
    attemptedCommand.hero = hero;
    attemptedCommand.command = command.move;
    if (attemptedCommand.command == "Move") {
      clickableMap = true;
    }
  }
  function attemptMove() {
    if (attemptedCommand.hero !== null && attemptedCommand.command !== "" && attemptedCommand.targetX !== -1 && attemptedCommand.targetY !== -1) {
      console.log(`Attempting to process ${attemptedCommand.command} of ${attemptedCommand.hero.hero.id} at [${attemptedCommand.targetX}, ${attemptedCommand.targetY}]`);
      if (attemptedCommand.command.toLowerCase() === "move") {
        gameStore.update((gameStore2) => {
          const updatedMap = gameStore2.map.map((row, rowIndex) => {
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
          return { ...gameStore2, map: updatedMap };
        });
        console.log("Updated the map");
        console.log($gameStore.map);
      }
      resetattemptedCommand();
      gameStore.update((gameStore2) => {
        const canStart = determineCanStartRound();
        let newRound = gameStore2.round;
        newRound.canStart = canStart;
        console.log(newRound);
        return { ...gameStore2, round: newRound };
      });
    }
  }
  function resetattemptedCommand() {
    attemptedCommand.command = "";
    attemptedCommand.hero = null;
    attemptedCommand.targetX = -1;
    attemptedCommand.targetY = -1;
  }
  function determineCanStartRound() {
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
  function recordClick(x, y) {
    console.log(x, y);
    if (clickableMap) {
      attemptedCommand.targetX = x;
      attemptedCommand.targetY = y;
      attemptMove();
      resetattemptedCommand();
    }
  }
  $$result.css.add(css);
  $$unsubscribe_gameStore();
  return `<div class="grid grid-cols-4 gap-4 svelte-1bucg6l"><div class="col-span-1">${each($gameStore.selectedHeroes.slice(0, 2), (hero) => {
    return `<div>${validate_component(HeroCommand, "HeroCommand").$$render($$result, { hero, onClick }, {}, {})}
      </div>`;
  })}</div>
  ${$gameStore.map ? `<div class="flex justify-center col-span-2 svelte-1bucg6l"><div class="canvas-container svelte-1bucg6l">${$gameStore.round.canStart ? `<div class="flex justify-center mb-4 svelte-1bucg6l"><button type="button" class="btn btn=lg variant-filled justify-center">Start Round</button></div>` : ``}
        ${validate_component(Canvas, "Canvas").$$render($$result, { clicked: recordClick }, {}, {
    default: () => {
      return `${validate_component(Background, "Background").$$render(
        $$result,
        {
          map: $gameStore.map,
          color: "hsl(0, 0%, 10%)"
        },
        {},
        {}
      )}
          ${validate_component(FPS, "FPS").$$render($$result, {}, {}, {})}`;
    }
  })}</div></div>` : ``}
  <div class="col-span-1">${each($gameStore.selectedHeroes.slice(2, 4), (hero) => {
    return `<div>${validate_component(HeroCommand, "HeroCommand").$$render($$result, { hero, onClick }, {}, {})}
      </div>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img id="nature"${add_attribute("src", "./map-tilesets/RPGNatureTileset.png", 0)} alt="nature-spritesheet" style="display: none;">
${validate_component(Game, "Game").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
