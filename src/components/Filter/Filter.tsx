import { useRecoilState, useSetRecoilState } from 'recoil';

import { filterState, FilterOption } from '../../atom/filter';
import { deletedIdxState } from '../../atom/deletedIdx';
import { Badge, Button } from '../../components';

import { FlexBox, GapBox } from './Filter.styled';

const Filter = () => {
  const [filters, setFilters] = useRecoilState(filterState);
  const setDeletedIdx = useSetRecoilState(deletedIdxState);

  const onClickFilter = (key: string, value: FilterOption) => {
    setFilters({
      ...filters,
      [key]: {
        ...value,
        active: !value.active,
      },
    });
  };

  const onReset = () => {
    setDeletedIdx(() => []);
  };

  return (
    <FlexBox>
      <GapBox>
        {Object.entries(filters).map(([key, value]) => (
          <Badge
            key={key}
            label={value.label}
            onClick={() => onClickFilter(key, value)}
            active={value.active}
          />
        ))}
      </GapBox>

      <Button label="삭제 초기화" onClick={onReset} />
    </FlexBox>
  );
};

export default Filter;
