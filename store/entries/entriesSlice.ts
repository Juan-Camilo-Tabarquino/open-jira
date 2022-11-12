import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const entriesSlice = createSlice({
      name: 'entries',
      initialState:{
        entries: [
            {
                _id: 'uuidv4()',
                description: '',
                createdAt: Date.now()-10000,
                status:'pending',
            },
            {
                _id: 'uuidv4()',
                description: '',
                createdAt: Date.now()-100,
                status:'in-progress',
            },
            {
                _id: 'uuidv4()',
                description: '',
                createdAt: Date.now()-100000,
                status:'finished',
            },
        ],
      },
      reducers:{
           increment: (state) =>{
              state.entries = []
            },
       }
})

export const { increment } = entriesSlice.actions