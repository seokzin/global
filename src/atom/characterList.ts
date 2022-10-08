import { atom } from 'recoil';

import { Character } from './../api/character';

export const characterListState = atom({
  key: 'characterListState',
  default: [] as Character[],
});
