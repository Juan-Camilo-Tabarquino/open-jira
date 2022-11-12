import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const UseEntryStore = () => {

  const { entries } = useSelector((state:RootState) => state.entries);

  return {
    entries,
  }
}
