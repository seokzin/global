import { useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilValue, useRecoilState } from 'recoil';

import { getCharacterPerPage, PAGE_SIZE, Character } from '../../api/character';
import { filterState } from '../../atom/filter';
import { characterListState } from '../../atom/characterList';
import { Card } from '../../components';

import { Loading } from './List.styled';

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

  const debounce = useCallback((func: () => void, delay: number) => {
    let timer: NodeJS.Timeout;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      fetchNextPage();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [debounce, fetchNextPage]);

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
