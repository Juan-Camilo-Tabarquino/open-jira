import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces';
import { FC } from 'react';

interface props {
    entry: Entry,
}

export const EntryCard:FC<props> = ({entry}) => {
  return (
    <Card
        sx={{
            marginBottom:1
        }}
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
