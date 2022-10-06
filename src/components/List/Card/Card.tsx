import { Character } from '../../../api/character';

const Card = ({ name, aliases, titles, books, tvSeries }: Character) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{aliases}</p>
      <p>{titles}</p>
      <p>{books}</p>
      <p>{tvSeries}</p>
    </div>
  );
};

export default Card;
