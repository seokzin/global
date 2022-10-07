import { Character } from '../../api/character';

interface CardProps {
  character: Required<
    Pick<
      Partial<Character>,
      'name' | 'aliases' | 'titles' | 'books' | 'tvSeries'
    >
  >;
}

const Card = (character: CardProps) => {
  const { name, aliases, titles, books, tvSeries } = character;

  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h6>{aliases.join(', ')}</h6>
        <h6>{titles.join(', ')}</h6>
        <p>
          {books.length} books, {tvSeries.length} tv series
        </p>
      </div>
    </div>
  );
};

export default Card;
