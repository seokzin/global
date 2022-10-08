import { useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getCharacterPerPage, PAGE_SIZE } from '../../api/character';
import { Character } from '../../api/character';
import Card from '../Card';
import { Loading } from './List.styled';

const List = () => {
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

  const flattenData = useCallback(() => {
    if (!data) {
      return [];
    }

    return data.pages.flat();
  }, [data]);

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

  return (
    <div>
      {flattenData().map((character: Character) => (
        <Card {...character} />
      ))}

      {isFetching && <Loading>Loading..</Loading>}
    </div>
  );
};

export default List;
