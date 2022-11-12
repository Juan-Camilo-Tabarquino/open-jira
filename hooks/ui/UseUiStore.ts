import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onSetOpen, RootState } from "../../store";

export const UseUiStore = () => {

  const { isOpen } = useSelector((state:RootState) => state.ui);

  const dispatch = useDispatch();

  const startOpenSideBar = ( action: boolean ) => {
    dispatch(onSetOpen(action))
  }

  return {
    isOpen,
    startOpenSideBar,
  }
}
