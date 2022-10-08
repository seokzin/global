import { atom } from 'recoil';
import { Character } from './../api/character';

export interface FilterOption {
  active: boolean;
  label: string;
  predicate: (character: Character) => boolean;
}

export const filterState = atom({
  key: 'filterState',
  default: {
    alive: {
      active: false,
      label: '# 생존인물만',
      predicate: (character) => character.died === '',
    },
    female: {
      active: false,
      label: '# 여자',
      predicate: (character) => character.gender === 'Female',
    },
    noTvSeries: {
      active: false,
      label: '# TV 시리즈 없음',
      predicate: (character) => character.tvSeries.length === 0,
    },
  } as Record<string, FilterOption>,
});
