import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, entriesSlice } from './';

export const store = configureStore({
    reducer:{
        ui: uiSlice.reducer,
        entries: entriesSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;