import { useRecoilState } from 'recoil';
import { filterState } from '../../atom/filter';
import { Badge, Button } from '../../components';
import { FlexBox, GapBox } from './Filter.styled';
import type { FilterOption } from './../../atom/filter';
import { useEffect, useState } from 'react';

const Filter = () => {
  const [filters, setFilters] = useRecoilState(filterState);
  const [canReset, setCanReset] = useState(false);

  const onClickFilter = (key: string, value: FilterOption) => {
    setFilters({
      ...filters,
      [key]: {
        ...value,
        active: !value.active,
      },
    });
  };

  const resetFilters = () => {
    const defaultFilter = Object.keys(filters).reduce((acc, cur) => {
      return {
        ...acc,
        [cur]: {
          ...filters[cur],
          active: false,
        },
      };
    }, {});

    setFilters(() => defaultFilter);
  };

  useEffect(() => {
    const state = Object.values(filters).reduce((acc, cur) => {
      if (cur.active) {
        acc = true;
      }
      return acc;
    }, false);

    setCanReset(state);
  }, [filters]);

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

      <Button label="초기화" onClick={resetFilters} disable={!canReset} />
    </FlexBox>
  );
};

export default Filter;
