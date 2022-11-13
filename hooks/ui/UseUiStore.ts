import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onSetOpen, RootState, setIsAddingEntry, setIsDragging } from "../../store";

export const UseUiStore = () => {

  const { isOpen, isAdding, isDragging } = useSelector((state:RootState) => state.ui);

  const dispatch = useDispatch();

  const startOpenSideBar = ( action: boolean ) => {
    dispatch(onSetOpen(action))
  }

  const startAddingEntry = ( action: boolean ) => {
    dispatch(setIsAddingEntry(action))
  }

  const toogleIsDragging = ( action: boolean ) => {
    dispatch(setIsDragging(action))
  }

  return {
    isOpen,
    isAdding,
    isDragging,
    startOpenSideBar,
    startAddingEntry,
    toogleIsDragging,
  }
}
