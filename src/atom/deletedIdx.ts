import { atom } from 'recoil';

export const deletedIdxState = atom<string[]>({
  key: 'deletedIdxState',
  default: [],
});
