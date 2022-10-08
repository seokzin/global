import { atom } from 'recoil';

import { Character } from './../api/character';

export const characterListState = atom<Character[]>({
  key: 'characterListState',
  default: [],
});
