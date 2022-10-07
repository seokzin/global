import { atom } from 'recoil';

export const filterState = atom({
  key: 'filterState',
  default: {
    alive: {
      state: false,
      label: 'Alive',
      predicate: (character) => character.alive,
    },
    female: {
      state: false,
      label: 'Female',
      predicate: (character) => character.gender === 'Female',
    },
    noTvSeries: {
      state: false,
      label: 'No TvSeries',
      predicate: (character) => character.tvSeries.length === 0,
    },
  },
});
