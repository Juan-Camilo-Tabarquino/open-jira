import { FC, useMemo, DragEvent } from 'react';
import { Paper, List } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { UseEntryStore, UseUiStore } from '../../hooks';

import styles from './EntryList.module.css'

interface props {
    status: EntryStatus,
}


export const EntryList:FC<props> = ({status}) => {

  const { entries, onEntryUpdated } = UseEntryStore();
  const entriesByStatus = useMemo( () => entries.filter( entry => entry.status === status) ,[entries]) 
  const { toogleIsDragging } = UseUiStore();
  const { isDragging } = UseUiStore();

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id: string = event.dataTransfer.getData('Id');

    const entry = entries.find(e => e._id === id)!;

    const uEntry = {
      ...entry,
      status
    }
    onEntryUpdated(uEntry);
    toogleIsDragging(false);
  }

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  return (
    <div
        onDrop={ onDropEntry } 
        onDragOver= { allowDrop }
        className = { isDragging ? styles.dragging : '' }
    >
        <Paper sx={{ height: 'calc(100vh - 200px)', backgroundColor: 'transparent', padding: 1}}>

            <List sx={{opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}}>
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
