import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import { filterState } from '../atom/filter';
import { characterListState } from '../atom/characterList';
import { Character } from './../api/character';

const useFilter = (data: Character[]) => {
  const filters = useRecoilValue(filterState);
  const [filteredList, setFilteredList] = useRecoilState(characterListState);

  useEffect(() => {
    const filtered = data.filter((character) => {
      const isFemale = filters.female.active
        ? character.gender === 'Female'
        : true;
      const isAlive = filters.alive.active ? character.died === '' : true;
      const isNoTvSeries = filters.noTvSeries.active
        ? character.tvSeries.length === 0
        : true;

      return isFemale && isAlive && isNoTvSeries;
    });

    setFilteredList(filtered);
  }, [data]);

  return filteredList;
};

export default useFilter;
