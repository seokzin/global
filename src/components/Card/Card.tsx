import { Character } from '../../api/character';
import { Layout, FlexBox, Title, GapBox, FlexBetweenBox } from './Card.styled';
import Button from './../Button/Button';

const Card = (character: Character) => {
  const { name, aliases, titles, books, tvSeries } = character;

  return (
    <Layout>
      <FlexBetweenBox>
        <GapBox>
          <h5>
            <Title>name : </Title> {name}
          </h5>
          <h6>
            <Title>aliases : </Title> {aliases.join(', ')}
          </h6>
          <h6>
            <Title>title : </Title> {titles.join(', ')}
          </h6>

          <FlexBox>
            <h6>
              <Title>books : </Title> {books.length}
            </h6>
            <h6>
              <Title>tvSeries : </Title> {tvSeries.length}
            </h6>
          </FlexBox>
        </GapBox>

        <Button label="삭제" onClick={() => undefined} />
      </FlexBetweenBox>
    </Layout>
  );
};

export default Card;
