import { FC, useMemo } from 'react';
import { Paper, List } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { UseEntryStore } from '../../hooks';


interface props {
    status: EntryStatus,
}


export const EntryList:FC<props> = ({status}) => {

  const { entries } = UseEntryStore();
  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status) ,[entries]) 
  
  return (
    <div>
        <Paper sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'transparent', padding: 1}}>

            <List sx={{opacity: 1}}>
                {
                    entriesByStatus.map( entry => (
                            <EntryCard key={entry._id} entry={entry}/>
                    ))    
                }
            </List>

        </Paper>
    </div>
  )
}
