import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
      name: 'ui',
      initialState:{
         isOpen: false,
      },
      reducers:{
            onSetOpen: (state, action: PayloadAction<boolean>) =>{
              state.isOpen = action.payload;
            },
       }
})

export const { onSetOpen } = uiSlice.actions