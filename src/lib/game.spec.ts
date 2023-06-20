import Game from '$lib/game1';
import { getPlayerHeroes, getProfile } from '$lib/utils/dfkGraphHelper';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';


vi.mock('$lib/utils/graphHelper', () => ({
  getProfile: vi.fn(),
  getPlayerHeroes: vi.fn()
}));

describe('Game', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('initializeEmpty', () => {
    it('should return a Game instance with empty name and heroes', async () => {
      const game = await Game.initializeEmpty();
      expect(game.playerName).toEqual('');
      expect(game.heroes).toEqual([]);
    });
  });

  describe('initializeName', () => {
    const playerAddress = '0x123';

    beforeEach(() => {
      getProfile.mockResolvedValue({ id: playerAddress, name: 'John Doe' });
      getPlayerHeroes.mockResolvedValue([{ id: 'hero1', name: 'Hero 1' }, { id: 'hero2', name: 'Hero 2' }]);
    });

    it('should call getProfile and getPlayerHeroes with the correct arguments', async () => {
      await Game.initializeName(playerAddress);
      expect(getProfile).toHaveBeenCalledWith(playerAddress);
      expect(getPlayerHeroes).toHaveBeenCalledWith(playerAddress);
    });

    it('should return a Game instance with the correct properties', async () => {
      const game = await Game.initializeName(playerAddress);
      expect(game.playerAddress).toEqual(playerAddress);
      expect(game.playerName).toEqual('John Doe');
      expect(game.heroes).toEqual([{ id: 'hero1', name: 'Hero 1' }, { id: 'hero2', name: 'Hero 2' }]);
    });

    it('should return a Game instance with empty name and heroes if getProfile or getPlayerHeroes fails', async () => {
      getProfile.mockRejectedValue(new Error('Failed to get profile'));
      getPlayerHeroes.mockRejectedValue(new Error('Failed to get player heroes'));

      const game = await Game.initializeName(playerAddress);
      expect(game.playerAddress).toEqual(playerAddress)
      expect(game.playerName).toEqual('');
      expect(game.heroes).toEqual([]);
    });
  });
});
