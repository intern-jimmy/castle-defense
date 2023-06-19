import { writable } from 'svelte/store';

// Function to read data from local storage
const readFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('gameData');
    return data ? JSON.parse(data) : null;
  }
  return null;
};

// Function to write data to local storage
const writeToLocalStorage = (data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('gameData', JSON.stringify(data));
  }
};

// Initial data
const initialData = readFromLocalStorage() || {
  id: '',
  playerAddress: [],
  playerName: '',
  heroes: [],
  initialized: false,
  selectedHeroes: [],
  round: 0
};

// Create the writable store
export const gameStore = writable(initialData);

// Subscribe to changes in the store and update local storage
gameStore.subscribe((data) => {
  writeToLocalStorage(data);
});
