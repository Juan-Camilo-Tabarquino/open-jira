import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
      name: 'ui',
      initialState:{
         isOpen: false,
         isAdding: false,
         isDragging: false,
      },
      reducers:{
            onSetOpen: (state, action: PayloadAction<boolean>) =>{
              state.isOpen = action.payload;
            },
            setIsAddingEntry: (state, action: PayloadAction<boolean>) => {
              state.isAdding = action.payload;
            },
            setIsDragging: (state, action: PayloadAction<boolean>) => {
              state.isDragging = action.payload;
            },
       }
})

export const { onSetOpen, setIsAddingEntry, setIsDragging } = uiSlice.actions