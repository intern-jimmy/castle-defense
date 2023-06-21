//import { gameStore } from "../../stores/GameStore";
import type Game from "./game";

interface Character {
  // Define the properties of a character
}

class RoundManager {
  game: Game;
  threatLevels: Map<Character, number>;
  gameLoopInterval: NodeJS.Timeout | null;

  constructor(game: Game) {
    this.game = game;
    this.threatLevels = new Map();
    this.gameLoopInterval = null;
  }

  startRound() {
    if (!this.game.round.validStart) {
      console.log('Invalid start for the round');
      return;
    }

    this.game.round.started = true;

    const numberOfVillains = this.getVillains();
    for (let i = 0; i < numberOfVillains; i++) {
      
      this.attackCastle(villain);
    }

    this.gameLoopInterval = setInterval(() => this.gameLoop(), 1000); // Adjust the interval as needed
  }

  stopRound() {
    clearInterval(this.gameLoopInterval);
    this.gameLoopInterval = null;
  }

  gameLoop() {
    for (const hero of this.game.selectedHeroes) {
      const villainInRange = this.findVillainInRange(hero);
      if (villainInRange) {
        this.handleHeroAttack(hero, villainInRange);
      }
    }

    for (const villain of this.game.round.villains) {
      const closestThreat = this.findClosestThreat(villain);
      if (closestThreat) {
        this.moveVillainTowards(villain, closestThreat);
      }
    }

    // Check for game end conditions and handle accordingly
    // ...

    // Check for round end conditions and handle accordingly
    // ...
  }

  attackCastle(villain: Character) {
    // Logic to attack the castle
    // Increase the threat level for the villain
    const threatLevel = this.threatLevels.get(villain) || 0;
    this.threatLevels.set(villain, threatLevel + 1);
  }

  handleHeroAttack(hero: Hero, villain: Character) {
    // Logic to handle hero attacking villain
    // Increase the threat level for the hero
    const threatLevel = this.threatLevels.get(hero) || 0;
    this.threatLevels.set(hero, threatLevel + 1);
  }

  findVillainInRange(hero: Hero): Character | undefined {
    // Logic to find a villain in range of the hero
    // You can use the hero's stats and position to determine range
    // Return the villain if found, or undefined if no villain is in range
  }

  findClosestThreat(villain: Character): Character | undefined {
    let closestThreat: Character | undefined;
    let closestDistance = Infinity;

    for (const [threat, _] of this.threatLevels) {
      const distance = calculateDistance(villain.position, threat.position);
      if (distance < closestDistance) {
        closestThreat = threat;
        closestDistance = distance;
      }
    }

    return closestThreat;
  }

  moveVillainTowards(villain: Character, target: Character) {
    // Logic to move the villain towards the target
    // Adjust the villain's position based on movement speed and direction
  }

  getVillains(): Array<Character> {
    const villains: Array<Character> = [];
    const numRounds = this.game.round.number;
    const numHeroes = this.game.selectedHeroes.length;
    const heroLevels = this.game.selectedHeroes.reduce((total, hero) => total + hero.level, 0);

    const numVillains = 10 + Math.floor((numRounds * heroLevels) / numHeroes);
    for (let i = 0; i < numVillains; i++) {
      villains.push(createVillain());
    return villains;
  }

  function createVillain(): Character {
    // Logic to create a new villain character
    // Return the created villain
  }
}

export default RoundManager;
