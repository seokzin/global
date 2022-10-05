import { useQuery } from 'react-query';
import { getCharacterPerPage } from '../../api/character';

interface Character {
  name: string;
  aliases: string;
  title: string;
  books: string;
  tvSeries: string;
}

const List = () => {
  const { data, isLoading, isError } = useQuery<Character>('character', () =>
    getCharacterPerPage(1)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return <div>List</div>;
};

export default List;
