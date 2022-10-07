import { atom } from 'recoil';

export const filterState = atom({
  key: 'filterState',
  default: {
    alive: false,
    female: false,
    noTvSeries: false,
  },
});
