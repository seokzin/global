import { atom } from 'recoil';

export interface FilterOption {
  active: boolean;
  label: string;
}

export const filterState = atom<Record<string, FilterOption>>({
  key: 'filterState',
  default: {
    alive: {
      active: false,
      label: '# 생존인물만',
    },
    female: {
      active: false,
      label: '# 여자',
    },
    noTvSeries: {
      active: false,
      label: '# TV 시리즈 없음',
    },
  },
});
