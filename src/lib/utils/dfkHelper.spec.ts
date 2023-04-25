import { describe, expect, it, vi } from 'vitest';

import { getPlayerHeroes, getProfile } from './dfkGraphHelper';
import { fetchData } from './graphHelper';

// Mock the fetchData function
vi.mock("$lib/utils/graphHelper", () => {
  return {
    success: vi.fn(),
    failure: vi.fn(),
  }
  

});


describe("getProfile", () => {
  it("returns the profile when the data is present", async () => {
    const expectedProfile = {
      id: "123",
      name: "John Doe",
    };
    const mockData = { profile: expectedProfile };
    (fetchData as vi.Mock).mockResolvedValue(mockData);

    const profile = await getProfile("123");

    expect(profile).toEqual(expectedProfile);
  });

  it("returns an empty profile when the data is not present", async () => {
    const mockData = { profile: null };
    (fetchData as vi.Mock).mockResolvedValue(mockData);

    const profile = await getProfile("123");

    expect(profile).toEqual({ id: "123", name: "" });
  });
});

describe("getPlayerHeroes", () => {
  it("returns the player's heroes when the data is present", async () => {
    const expectedHeroes = [
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        owner: {
          id: "123",
          name: "John Doe",
        },
        // Other hero properties
      },
      {
        id: "2",
        firstName: "Jane",
        lastName: "Doe",
        owner: {
          id: "123",
          name: "John Doe",
        },
        // Other hero properties
      },
    ];
    const mockData = { heroes: expectedHeroes };
    fetchData.mockResolvedValue(mockData)
    //(fetchData as vi.Mock).mockResolvedValue(mockData);

    const heroes = await getPlayerHeroes("123");

    expect(heroes).toEqual(expectedHeroes);
  });

  it("returns an empty array when the data is not present", async () => {
    const mockData = { heroes: null };
    (fetchData as vi.Mock).mockResolvedValue(mockData);

    const heroes = await getPlayerHeroes("123");

    expect(heroes).toEqual([]);
  });
});
