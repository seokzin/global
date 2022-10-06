import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { getCharacterPerPage } from '../../api/character';
import Card from './Card';
import { Character } from '../../api/character';
import { listState } from '../../atom/list';

const List = () => {
  const [list, setList] = useRecoilState(listState);

  const [page] = useState(3);
  const { data, isLoading, isError } = useQuery<Character[]>(
    ['characters', page],
    () => getCharacterPerPage(page)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data, setList]);

  return (
    <div>
      {data?.map((character) => (
        <Card key={character.name} {...character} />
      ))}
    </div>
  );
};

export default List;
