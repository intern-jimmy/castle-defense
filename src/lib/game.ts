import { getPlayerHeroes, getProfile } from '$lib/utils/dfkGraphHelper';

export default class Game {
  playerAddress: string;
  playerName: string;
  heroes: Array<Hero>;

  constructor(playerAddress: string, playerName: string, heroes: Array<Hero>) {
    console.log('constructing game');
    this.playerAddress = playerAddress;
    this.playerName = playerName;
    this.heroes = heroes;
  }

  static async initializeEmpty(): Promise<Game> {
    return Game.initializeName('');
  }

  static async initializeName(playerAddress: string): Promise<Game> {
    try {
      const heroes = await getPlayerHeroes(playerAddress);
      const profile = await getProfile(playerAddress);
      

      return new Game(profile.id, profile.name, heroes);
    } catch (error) {
      console.log(error);
      return new Game(playerAddress, '', []);
    }
    
  }
}