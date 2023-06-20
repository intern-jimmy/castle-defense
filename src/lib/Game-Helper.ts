import { map1 } from '$lib/map/map1';
import { getPlayerHeroes, getProfile } from '$lib/utils/dfkGraphHelper';

import type Game from '$lib/Game';
export default class GameHelper {

  static CreateGame(playerAddress: string, playerName: string, heroes: Array<Hero>) {
    console.log('constructing game');
    const game: Game = {
      id: '',
      playerAddress: [playerAddress],
      playerName: playerName,
      heroes: heroes,
      initialized: true,
      selectedHeroes: [],
      round: {number:0,
              canStart: false,
              started: false,
              villians: []
            }
    };
    return game;
  }

  static async initializeEmpty(): Promise<Game> {
    return this.initializeName('');
  }

  static async initializeName(playerAddress: string): Promise<Game> {
    try {
      const heroes = await getPlayerHeroes(playerAddress);
      const profile = await getProfile(playerAddress);
      

      return this.CreateGame(profile.id, profile.name, heroes);
    } catch (error) {
      console.log(error);
      return this.CreateGame(playerAddress, '', []);
    }
    
  }

  static selectHeroes(game: Game, heroIds: Array<string>): Game {

    if( heroIds.length < 4 || heroIds.length > 4) {
      throw new Error('Please select 4 heroes.')
    }

    for (const id of heroIds) {
      for( const hero of game.heroes){
        if ( hero.id == parseInt(id)) {
          game.selectedHeroes.push(hero);
          break;
        }
      }
    }
    return game
  }

  static createMap(game: Game) {
    game.map = map1
    for( let x = 0; x <  game.map.length; x++) {
      for(let y = 0; y < game.map[x].length; y++) {
        game.map[x][y].occupiedBy = null;
      }
    }
    return game
  }
  
}