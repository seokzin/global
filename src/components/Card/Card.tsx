import { Character } from '../../api/character';

const Card = (character: Character) => {
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
