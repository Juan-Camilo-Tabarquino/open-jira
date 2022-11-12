import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
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
           increment: (state) =>{
              state.entries = []
            },
       }
})

export const { increment } = entriesSlice.actions