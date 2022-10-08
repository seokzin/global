import { useRecoilState } from 'recoil';
import { filterState } from '../../atom/filter';
import { Badge, Button } from '../../components';
import { FlexBox, GapBox } from './Filter.styled';
import type { FilterOption } from './../../atom/filter';

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const onClick = (key: string, value: FilterOption) => {
    setFilter({ ...filter, [key]: value });
  };

  return (
    <FlexBox>
      <GapBox>
        {Object.entries(filter).map(([key, value]) => (
          <Badge
            label={value.label}
            onClick={() => onClick(key, value)}
            active={value.active}
          />
        ))}
      </GapBox>

      <Button label="필터 초기화" onClick={() => setFilter({})} />
    </FlexBox>
  );
};

export default Filter;
