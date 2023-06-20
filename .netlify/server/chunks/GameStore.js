import { w as writable } from "./index.js";
const readFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("gameData");
    return data ? JSON.parse(data) : null;
  }
  return null;
};
const writeToLocalStorage = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("gameData", JSON.stringify(data));
  }
};
const initialData = readFromLocalStorage() || {
  id: "",
  playerAddress: [],
  playerName: "",
  heroes: [],
  initialized: false,
  selectedHeroes: [],
  round: 0
};
const gameStore = writable(initialData);
gameStore.subscribe((data) => {
  writeToLocalStorage(data);
});
export {
  gameStore as g
};
