import { useSelector, useDispatch } from 'react-redux';
import { Entry } from '../../interfaces';
import { addEntry, RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';

export const UseEntryStore = () => {

  const { entries } = useSelector((state:RootState) => state.entries);

  const dispatch = useDispatch();

  const startAddNewEntry = (description: string) => {

    const entry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch(addEntry(entry))

  }

  return {
    entries,
    startAddNewEntry,
  }
}
