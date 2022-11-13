import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces';
import { FC, DragEvent } from 'react';
import { UseUiStore } from '../../hooks';

interface props {
    entry: Entry,
}

export const EntryCard:FC<props> = ({entry}) => {

    const { toogleIsDragging } = UseUiStore();

    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('Id', entry._id);
        toogleIsDragging(true);
    }

    const onDragEnd = ( event: DragEvent ) => {
        toogleIsDragging(false);
    }

  return (
    <Card
        sx={{
            marginBottom:1
        }}
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: 2}}>
                <Typography variant='body2'>Hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
