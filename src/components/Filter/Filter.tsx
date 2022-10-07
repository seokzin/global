import { useRecoilState } from 'recoil';
import { filterState } from '../../atom/filter';
import Badge from '../Badge';

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div>
      {Object.entries(filter).map(([key, value]) => (
        <Badge
          label={key}
          onClick={() => setFilter({ ...filter, [key]: value })}
        />
      ))}
    </div>
  );
};

export default Filter;
