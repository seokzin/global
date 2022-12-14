import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useRecoilValue, useRecoilState } from 'recoil';

import { getCharacterPerPage, PAGE_SIZE, Character } from '../../api/character';
import { filterState } from '../../atom/filter';
import { characterListState } from '../../atom/characterList';
import { deletedIdxState } from '../../atom/deletedIdx';
import debounce from '../../utils/debounce';
import { Card } from '../../components';

import { Loading } from './List.styled';

const List = () => {
  const filters = useRecoilValue(filterState);
  const deletedIdx = useRecoilValue(deletedIdxState);
  const [filteredList, setFilteredList] = useRecoilState(characterListState);
  const pageQuery = new URL(window.location.href).searchParams.get('page');

  const { data, fetchNextPage, isFetching } = useInfiniteQuery(
    'characters',
    ({ pageParam = pageQuery ? Number(pageQuery) : 1 }) =>
      getCharacterPerPage(pageParam),
    {
      getNextPageParam: (lastPage: Character[], pages: Character[][]) => {
        if (lastPage.length < PAGE_SIZE) {
          return undefined;
        }

        const lastPageParam =
          Number(pages[pages.length - 1][PAGE_SIZE - 1].id) / PAGE_SIZE;
        return lastPageParam + 1;
      },
    }
  );

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      fetchNextPage();
    }, 300);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchNextPage]);

  useEffect(() => {
    const newData: Character[] = data?.pages.at(-1) || [];

    const newFiltered = newData.filter((character) => {
      const isFemale = filters.female.active
        ? character.gender === 'Female'
        : true;
      const isAlive = filters.alive.active ? character.died === '' : true;
      const isNoTvSeries = filters.noTvSeries.active
        ? character.tvSeries.length === 0
        : true;

      return isFemale && isAlive && isNoTvSeries;
    });

    setFilteredList((prev) => [...prev, ...newFiltered]);
  }, [data]);

  const flatRawData = data?.pages.flat() || [];

  useEffect(() => {
    const newFiltered = flatRawData.filter((character) => {
      const isFemale = filters.female.active
        ? character.gender === 'Female'
        : true;
      const isAlive = filters.alive.active ? character.died === '' : true;
      const isNoTvSeries = filters.noTvSeries.active
        ? character.tvSeries.length === 0
        : true;

      return isFemale && isAlive && isNoTvSeries;
    });

    const newRemoved = newFiltered.filter((character) => {
      return !deletedIdx.includes(character.id);
    });

    setFilteredList(newRemoved);
  }, [filters, deletedIdx]);

  return (
    <div>
      {filteredList.map((character: Character) => (
        <Card {...character} key={character.id} />
      ))}

      {isFetching && <Loading>Loading..</Loading>}
    </div>
  );
};

export default List;
