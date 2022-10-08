import { useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilValue, useRecoilState } from 'recoil';
import { getCharacterPerPage, PAGE_SIZE } from '../../api/character';
import { Character } from '../../api/character';
import { filterState } from '../../atom/filter';
import Card from '../Card';
import { Loading } from './List.styled';
import { characterListState } from './../../atom/characterList';

const List = () => {
  const filters = useRecoilValue(filterState);
  const url = new URL(window.location.href);
  const pageQuery = url.searchParams.get('page');

  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    'characters',
    ({ pageParam = pageQuery ? pageQuery : 1 }) =>
      getCharacterPerPage(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < PAGE_SIZE) {
          return undefined;
        }

        const lastPageParam = pages.at(-1).at(-1).id / PAGE_SIZE;

        return lastPageParam + 1;
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

  const flattenData: Character[] = data ? data.pages.flat() : [];
  const [filteredList, setFilteredList] = useRecoilState(characterListState);

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

    setFilteredList(filtered);
  }, [data, filters]);

  return (
    <div>
      {filteredList.map((character: Character) => (
        <Card key={character.id} {...character} />
      ))}

      {isFetching && <Loading>Loading..</Loading>}
    </div>
  );
};

export default List;
