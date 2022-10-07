import { useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { getCharacterPerPage, PAGE_SIZE } from '../../api/character';
import { Character } from '../../api/character';
import Card from '../Card';

const List = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery(
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

  return (
    <>
      {data?.pages.map((page: Character[], index: number) => (
        <div key={index}>
          {page.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      ))}
      <div>
        <p>Is Loading: {isFetching ? 'Yes' : 'No'}</p>
        <p>Is Loading Next Page: {isFetchingNextPage ? 'Yes' : 'No'}</p>
        <p>Has Next Page: {hasNextPage ? 'Yes' : 'No'}</p>
      </div>
    </>
  );
};

export default List;
