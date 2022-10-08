import { useSetRecoilState } from 'recoil';

import { Button } from '../../components';
import { characterListState } from './../../atom/characterList';
import { deletedIdxState } from '../../atom/deletedIdx';
import type { Character } from '../../api/character';

import {
  Layout,
  FlexBox,
  Title,
  GapBox,
  FlexBetweenBox,
  ButtonBox,
} from './Card.styled';

const Card = (character: Character) => {
  const setFilteredList = useSetRecoilState(characterListState);
  const setDeletedIdx = useSetRecoilState(deletedIdxState);
  const { id, name, gender, aliases, titles, books, tvSeries } = character;

  const handleRemove = () => {
    setFilteredList((prev) => prev.filter((item) => item.id !== id));
    setDeletedIdx((prev) => [...prev, id]);
  };

  return (
    <Layout>
      <FlexBetweenBox>
        <GapBox>
          <p>
            <Title>name : </Title> {name} {gender === 'Female' ? '♀' : '♂'}
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
          <Button label="삭제" onClick={handleRemove} />
        </ButtonBox>
      </FlexBetweenBox>
    </Layout>
  );
};

export default Card;
