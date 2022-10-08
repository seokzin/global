import { useRecoilState } from 'recoil';
import { filterState } from '../../atom/filter';
import { Badge, Button } from '../../components';
import { FlexBox, GapBox } from './Filter.styled';
import type { FilterOption } from './../../atom/filter';

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  const onClickFilter = (key: string, value: FilterOption) => {
    setFilter({
      ...filter,
      [key]: {
        ...value,
        active: !value.active,
      },
    });
  };

  const resetFilter = () => {
    const defaultFilter = Object.keys(filter).reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: {
          ...filter[cur],
          active: false,
        },
      };
    }, {});

    setFilter(defaultFilter);
  };

  return (
    <FlexBox>
      <GapBox>
        {Object.entries(filter).map(([key, value]) => (
          <Badge
            label={value.label}
            onClick={() => onClickFilter(key, value)}
            active={value.active}
          />
        ))}
      </GapBox>

      <Button label="초기화" onClick={resetFilter} />
    </FlexBox>
  );
};

export default Filter;
