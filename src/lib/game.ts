export default interface Game {
  id: string; // UUID
  playerAddress: Array<string>;
  playerName: string;
  heroes: Array<Hero>;
  initialized : boolean;
  selectedHeroes: Array<Hero>;
  round: {
    number: number,
    started: boolean,
    validStart: boolean, 
    villians: []
  };
  map: {
    background: string;
    x: number;
    y: number;
    occupiedBy: Character | null;
} [][];
}