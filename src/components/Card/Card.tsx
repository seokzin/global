import { Character } from '../../api/character';
import {
  Layout,
  FlexBox,
  Title,
  GapBox,
  FlexBetweenBox,
  ButtonBox,
} from './Card.styled';
import Button from './../Button/Button';

const Card = (character: Character) => {
  const { name, aliases, titles, books, tvSeries } = character;

  return (
    <Layout>
      <FlexBetweenBox>
        <GapBox>
          <p>
            <Title>name : </Title> {name}
          </p>
          <p>
            <Title>aliases : </Title> {aliases.join(', ')}
          </p>
          <p>
            <Title>title : </Title> {titles.join(', ')}
          </p>

          <FlexBox>
            <p>
              <Title>books : </Title> {books.length}
            </p>
            <p>
              <Title>tvSeries : </Title> {tvSeries.length}
            </p>
          </FlexBox>
        </GapBox>

        <ButtonBox>
          <Button label="삭제" onClick={() => undefined} />
        </ButtonBox>
      </FlexBetweenBox>
    </Layout>
  );
};

export default Card;
