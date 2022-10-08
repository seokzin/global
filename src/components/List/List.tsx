import { useCallback, useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { getCharacterPerPage, PAGE_SIZE } from '../../api/character';
import { Character } from '../../api/character';
import { filterState } from '../../atom/filter';
import Card from '../Card';
import { Loading } from './List.styled';

const List = () => {
  const filters = useRecoilValue(filterState);

  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    'characters',
    ({ pageParam = 1 }) => getCharacterPerPage(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < PAGE_SIZE) {
          return undefined;
        }

        return pages.length + 1;
      },
    }
  );

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      fetchNextPage();
    }
  }, [fetchNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const flattenData = data ? data.pages.flat() : [];
  const [filteredList, setFilteredList] = useState(flattenData);

  useEffect(() => {
    const filtered = flattenData.filter((character) => {
      const isFemale = filters.female.active
        ? character.gender === 'Female'
        : true;
      const isAlive = filters.alive.active ? character.died === '' : true;
      const isNoTvSeries = filters.noTvSeries.active
        ? character.tvSeries.length === 0
        : true;

      return isFemale && isAlive && isNoTvSeries;
    });

    console.log(filtered);

    setFilteredList(filtered);
  }, [data, filters]);

  return (
    <div>
      {filteredList.map((character: Character) => (
        <Card {...character} />
      ))}

      {isFetching && <Loading>Loading..</Loading>}
    </div>
  );
};

export default List;
