import { useState } from 'react';
import { useQuery } from 'react-query';
import { getCharacterPerPage } from '../../api/character';
import Card from './Card';
import { Character } from '../../api/character';

const List = () => {
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

  return (
    <div>
      {data?.map((character) => (
        <Card key={character.name} {...character} />
      ))}
    </div>
  );
};

export default List;
