import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Entry } from '../../interfaces/entry';

const entries: Entry[] = [ 
    {
        _id: '12121212',
        description: 'Pendiente',
        createdAt: Date.now()-10000,
        status:'pending',
    },
    {
        _id: '242424242',
        description: 'En progreso',
        createdAt: Date.now()-100,
        status:'in-progress',
    },
    {
        _id: '253534545',
        description: 'Finalizada',
        createdAt: Date.now()-100000,
        status:'finished',
    },
]

export const entriesSlice = createSlice({
      name: 'entries',
      initialState:{
        entries,
      },
      reducers:{
           addEntry: (state, action: PayloadAction<Entry>) =>{
              state.entries = [...state.entries, action.payload]
            },
       }
})

export const { addEntry } = entriesSlice.actions